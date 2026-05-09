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

const app = express();
const isProduction = process.env.NODE_ENV === "production";
if (isProduction) {
  app.set("trust proxy", 1); // Enable trusting proxy for rate limiting (Render/Cloudflare)
}
const httpServer = createServer(app);
log(`Server starting in ${process.env.NODE_ENV} mode (isProduction: ${isProduction})`);
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
// RATE LIMIT DIAGNOSTICS
// =============================================================================
app.use((req, res, next) => {
  const originalStatus = res.status;
  res.status = function(code) {
    if (code === 429) {
      console.trace(`[RATE LIMIT HIT] 429 on ${req.method} ${req.url} from ${req.ip}`);
    }
    return originalStatus.apply(res, [code]);
  };
  next();
});

// Drop known bot requests before handling CORS, Security Headers, or Rate Limits
if (isProduction) {
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
}

// =============================================================================
// SECURITY MIDDLEWARE (Phase 2.4)
// =============================================================================

// Security Headers (Helmet) - Only enabled in production
if (isProduction) {
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-hashes'", "https://plausible.io", "https://static.cloudflareinsights.com"], 
          scriptSrcAttr: ["'unsafe-hashes'"], 
          styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
          fontSrc: ["'self'", "https://fonts.gstatic.com"],
          imgSrc: ["'self'", "data:", "blob:"],
          connectSrc: cspConnectSrc,
          workerSrc: ["'self'", "blob:"],
          upgradeInsecureRequests: [],
        },
      },
      crossOriginEmbedderPolicy: false, // Required for some features
      hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
      },
    })
  );
}



// =============================================================================
// RATE LIMITERS (Phase 2.5 - Executive Hardening)
// =============================================================================

const limiterConfig = {
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 60, // Limit each IP to 60 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many requests. Please try again later." }
};

export const globalLimiter = rateLimit(limiterConfig);
export const codeLimiter = rateLimit({ ...limiterConfig, max: 15 }); // Tight for brute-force protection on access codes
export const uploadLimiter = rateLimit({ ...limiterConfig, max: 2000, windowMs: 1 * 60 * 1000 }); // Extremely high ceiling for chunked uploads (each chunk needs 2 API calls)

// =============================================================================
// BODY PARSING
// =============================================================================

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
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
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
    let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
    
    if (path.startsWith("/api") && capturedJsonResponse) {
      logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
    }

    log(logLine);
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

// Clear sensitive cached data on download routes without destroying IndexedDB
app.use("/api/vaults/:id/files", (_req, res, next) => {
  res.set({ "Clear-Site-Data": '"cache"' });
  next();
});

// =============================================================================
// MAIN APP INITIALIZATION
// =============================================================================

(async () => {
  await registerRoutes(httpServer, app);
  registerSeoRoutes(app);

  try {
    await storage.reconcileStorageUsage();
    logStorageStatus();
    await storage.recalculateStats();
    await storage.createLog("info", "SYSTEM_STARTUP", "VaultBridge initialized", {
        mode: process.env.NODE_ENV,
        version: "2.4.0"
    });
  } catch (err: any) {
    // Non-fatal — server works fine without DB reconciliation
    if (err?.code === "28P01" || err?.message?.includes("password")) {
      console.log("[startup] Database auth failed — running in memory mode (data will not persist)");
    } else {
      console.error("[startup] Non-fatal: storage reconciliation skipped:", err?.message || err);
    }
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

    console.error(`[Internal Error] Path: ${req.path} | Error:`, err.stack || err);

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
      console.error(
        `[startup] Port ${port} is already in use. Stop the existing server process before running npm run dev.`
      );
      process.exit(1);
    }
    console.error("[startup] HTTP server failed to start:", error);
    process.exit(1);
  });

  httpServer.listen(port, host, () => {
    log(`🔐 VaultBridge server running on http://${host}:${port}`);
    log(`📦 API body limit: ${apiBodyLimit}`);
    log(`🧹 Cleanup worker active (10 min interval)`);
  });

  // =============================================================================
  // GOOGLE CLOUD RUN OPTIMIZATIONS — GRACEFUL SHUTDOWN
  // =============================================================================
  const gracefulShutdown = (signal: string) => {
    log(`[Cloud Run] 🛑 Received ${signal}, initiating graceful shutdown for zero-downtime scaling...`);

    // Stop accepting new connections
    httpServer.close((err) => {
      if (err) {
        console.error("[Cloud Run] Error during HTTP server close:", err);
        process.exit(1);
      }
      log("[Cloud Run] ✅ HTTP Server closed cleanly.");
      process.exit(0);
    });

    // Force shutdown if connections are hanging for too long (Cloud Run usually gives 10s)
    setTimeout(() => {
      console.error("[Cloud Run] ⚠️ Forced shutdown due to hanging connections.");
      process.exit(1);
    }, 10000).unref();
  };

  process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
  process.on("SIGINT", () => gracefulShutdown("SIGINT"));
})();
