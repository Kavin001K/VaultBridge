import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import { startCleanupWorker } from "./cron/cleanup";
import { storage } from "./storage";
import { logStorageStatus } from "./services/storage_router";
import { registerSeoRoutes } from "./seo-routes";
import { logger, httpLogger } from "./logger";
import { initializeTracing, shutdownTracing } from "./tracing";

const app = express();
const httpServer = createServer(app);
const isProduction = process.env.NODE_ENV === "production";
const apiBodyLimit = process.env.API_BODY_LIMIT || "100mb";
const cspConnectSrc = [
  "'self'",
  "ws:",
  "wss:",
  "https://api.github.com",
  "https://plausible.io",
  "https://cloudflareinsights.com",
  process.env.SUPABASE_URL || "https://kigljmhbgzbbhrtgtxmk.supabase.co",
  "https://*.r2.cloudflarestorage.com",
  "https://*.cloudflarestorage.com",
  process.env.R2_ACCOUNT_ID ? `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com` : "",
  // Dev-only tooling and local services (Vite fallback ping, localhost APIs)
  ...(isProduction ? [] : [
    "http://127.0.0.1:*",
    "http://localhost:*",
    "ws://127.0.0.1:*",
    "ws://localhost:*",
  ]),
].filter(Boolean) as string[];

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

// =============================================================================
// IMMEDIATE BOT REJECTION (HIGHEST PRIORITY)
// =============================================================================
// Drop known bot requests before handling CORS, Security Headers, or Rate Limits
app.use((req, res, next) => {
  const botPaths = [
    '.php',
    '/wp-',
    'wp-cron.php',
    '/ads.txt',
    '/.well-known/sg-hosted',
    '/xmlrpc.php'
  ];

  if (botPaths.some(path => req.path.includes(path) || req.url.includes(path))) {
    // 444 is a non-standard code used to tell the server to drop the connection
    return res.status(444).end();
  }
  next();
});

// =============================================================================
// SECURITY MIDDLEWARE (Phase 2.4)
// =============================================================================

// Helmet for security headers
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://plausible.io",
          "https://static.cloudflareinsights.com",
        ],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "blob:"],
        connectSrc: cspConnectSrc, // API + storage + local dev tooling
      },
    },
    crossOriginEmbedderPolicy: false, // Required for some features
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
    },
  })
);



// Vault creation rate limiter: 10 per minute
export const vaultCreateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // 10 vault creations per minute
  message: { message: "Too many vault creations. Please wait before creating another vault." },
  standardHeaders: true,
  legacyHeaders: false,
});

export const codeLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20, // 20 code resolution requests per minute
  message: { message: "Too many code lookups. Please wait and try again." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Relaxed rate limit for chunk uploads (to support large files)
export const chunkUploadLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 1200, // 1200 chunk upload requests per minute
  message: { message: "Chunk upload rate limit exceeded." },
  standardHeaders: true,
  legacyHeaders: false,
});

// General API rate limiter (for other routes)
export const generalLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // 100 requests per minute for general API calls
  message: { message: "Too many requests. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
    const isChunkUploadUrl = req.method === "POST" && req.path.endsWith("/upload-url");
    const isChunkUploadStatus = req.method === "PUT" && req.path.endsWith("/status");
    return isChunkUploadUrl || isChunkUploadStatus;
  },
});

app.use(vaultCreateLimiter);  // Applied globally instead of just /api

// Stricter rate limit for code resolution (anti-brute-force)
export const codeLimiterStrict = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // Only 5 attempts per minute
  message: { message: "Too many code attempts. Please wait before trying again." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Upload rate limiter
export const uploadLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20, // 20 uploads per minute
  message: { message: "Upload rate limit exceeded." },
  standardHeaders: true,
  legacyHeaders: false,
});

// =============================================================================
// BODY PARSING
// =============================================================================

app.use(httpLogger);

app.use(
  express.json({
    limit: apiBodyLimit,
  })
);

app.use(express.urlencoded({ extended: false, limit: apiBodyLimit }));

// =============================================================================
// REQUEST LOGGING
// =============================================================================

export function log(message: string, source = "express") {
  logger.info({ source }, message);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

// =============================================================================
// PRIVACY HEADERS MIDDLEWARE
// =============================================================================

// Force no-cache on all API responses
app.use("/api", (_req, res, next) => {
  res.set({
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    "Pragma": "no-cache",
    "Expires": "0",
    "Surrogate-Control": "no-store",
  });
  next();
});

// Clear site data on download routes (extra paranoid)
app.use("/api/v1/vault/:id/file", (_req, res, next) => {
  res.set({
    "Clear-Site-Data": '"cache", "storage"',
  });
  next();
});

// =============================================================================
// MAIN APP INITIALIZATION
// =============================================================================

(async () => {
  await initializeTracing();
  await registerRoutes(httpServer, app);
  registerSeoRoutes(app);

  // Reconcile storage usage from DB (count existing bytes per provider)
  try {
    await storage.reconcileStorageUsage();
    logStorageStatus();
  } catch (err) {
    logger.error({ err }, "[Storage] Non-fatal: Failed to reconcile storage usage");
  }

  // Start cleanup worker (Phase 1.2)
  startCleanupWorker();

  // Error handling middleware
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err?.type === "entity.too.large") {
      return res.status(413).json({
        message: "Payload too large. Reduce clipboard attachments and try again.",
      });
    }

    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    logger.error({ path: req.path, err }, `[Internal Error] Path: ${req.path}`);

    if (res.headersSent) {
      return next(err);
    }

    return res.status(status).json({ message });
  });

  // Setup Vite in development, static serving in production
  // IMPORTANT: Vite MUST be set up BEFORE any other WebSocket servers
  // to prevent HMR WebSocket upgrade conflicts
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // Initialize WebRTC Signaling AFTER Vite to avoid WebSocket conflicts
  // The ws library's WebSocketServer will still work because it only handles /ws-signal path
  const { setupWebsocketSignaling } = await import("./websocket");
  setupWebsocketSignaling(httpServer);

  const port = parseInt(process.env.PORT || "8080", 10);
  const host = process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1";

  httpServer.on("error", (error: NodeJS.ErrnoException) => {
    if (error.code === "EADDRINUSE") {
      logger.error({ port }, `[startup] Port ${port} is already in use. Stop the existing server process before running npm run dev.`);
      process.exit(1);
    }
    logger.error({ err: error }, "[startup] HTTP server failed to start");
    process.exit(1);
  });

  httpServer.listen(port, host, () => {
    logger.info(`🔐 VaultBridge server running on http://${host}:${port}`);
    logger.info(`📦 API body limit: ${apiBodyLimit}`);
    logger.info(`🧹 Cleanup worker active (10 min interval)`);
  });

  // =============================================================================
  // GOOGLE CLOUD RUN OPTIMIZATIONS — GRACEFUL SHUTDOWN
  // =============================================================================
  const gracefulShutdown = (signal: string) => {
    logger.info(`[Cloud Run] 🛑 Received ${signal}, initiating graceful shutdown for zero-downtime scaling...`);
    void shutdownTracing();

    // Stop accepting new connections
    httpServer.close((err) => {
      if (err) {
        logger.error({ err }, "[Cloud Run] Error during HTTP server close");
        process.exit(1);
      }
      logger.info("[Cloud Run] ✅ HTTP Server closed cleanly.");
      process.exit(0);
    });

    // Force shutdown if connections are hanging for too long (Cloud Run usually gives 10s)
    setTimeout(() => {
      logger.error("[Cloud Run] ⚠️ Forced shutdown due to hanging connections.");
      process.exit(1);
    }, 10000).unref();
  };

  process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
  process.on("SIGINT", () => gracefulShutdown("SIGINT"));
})();
