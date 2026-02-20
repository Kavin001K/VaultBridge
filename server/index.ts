// IMPORTANT: Force IPv4 first to avoid EHOSTUNREACH on some networks
// This MUST be at the very top, before any imports that might create connections
import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first');

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

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

// =============================================================================
// SECURITY MIDDLEWARE (Phase 2.4)
// =============================================================================

// Helmet for security headers
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://plausible.io"], // For Vite HMR in dev
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "blob:"],
        connectSrc: [
          "'self'",
          "ws:",
          "wss:",
          "https://plausible.io",
          process.env.SUPABASE_URL || "https://kigljmhbgzbbhrtgtxmk.supabase.co",
          "https://*.r2.cloudflarestorage.com",
          "https://*.cloudflarestorage.com",
          process.env.R2_ACCOUNT_ID ? `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com` : ""
        ].filter(Boolean) as string[], // WebSocket for HMR + Supabase + R2
      },
    },
    crossOriginEmbedderPolicy: false, // Required for some features
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
    },
  })
);

// Global rate limiter: 100 requests per minute
const globalLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100,
  message: { message: "Too many requests. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api", globalLimiter);

// Stricter rate limit for code resolution (anti-brute-force)
export const codeLimiter = rateLimit({
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

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use(express.urlencoded({ extended: false }));

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
  await registerRoutes(httpServer, app);

  // Reconcile storage usage from DB (count existing bytes per provider)
  try {
    await storage.reconcileStorageUsage();
    logStorageStatus();
  } catch (err) {
    console.error("[Storage] Non-fatal: Failed to reconcile storage usage:", err);
  }

  // Start cleanup worker (Phase 1.2)
  startCleanupWorker();

  // Error handling middleware
  app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error("Internal Server Error:", err);

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

  const port = parseInt(process.env.PORT || "5000", 10);
  const host = process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1";

  httpServer.listen(port, host, () => {
    log(`🔐 VaultBridge server running on http://${host}:${port}`);
    log(`🧹 Cleanup worker active (10 min interval)`);
  });
})();
