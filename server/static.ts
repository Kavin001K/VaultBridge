import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Serve static assets with proper cache headers
  // Assets have hashed filenames so can be cached long-term
  app.use("/assets", express.static(path.join(distPath, "assets"), {
    maxAge: "1y",
    immutable: true,
    setHeaders: (res, filePath) => {
      // Set correct MIME types explicitly
      if (filePath.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript; charset=utf-8");
      } else if (filePath.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css; charset=utf-8");
      } else if (filePath.endsWith(".wasm")) {
        res.setHeader("Content-Type", "application/wasm");
      }
    }
  }));

  // Serve other static files (index.html, sw.js, etc.)
  app.use(express.static(distPath, {
    maxAge: 0, // Don't cache HTML
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
      }
    }
  }));

  // SPA fallback - only for non-asset routes
  app.use((req, res, next) => {
    // Don't serve index.html for asset requests (prevents MIME type errors)
    if (req.path.startsWith("/assets/") ||
      req.path.endsWith(".js") ||
      req.path.endsWith(".css") ||
      req.path.endsWith(".wasm") ||
      req.path.endsWith(".map")) {
      return res.status(404).send("Not found");
    }

    // For all other routes, serve index.html (SPA routing)
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

