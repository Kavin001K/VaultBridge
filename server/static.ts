import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { resolveSEO } from "../shared/seo";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const indexPath = path.join(distPath, "index.html");
  if (!fs.existsSync(indexPath)) {
    throw new Error(
      `Could not find index.html at ${indexPath}. Run the client build first.`,
    );
  }

  // Cache the base index.html contents in memory
  const baseIndexHtml = fs.readFileSync(indexPath, "utf-8");

  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const replaceTag = (html: string, pattern: RegExp, replacement: string) => {
    if (pattern.test(html)) return html.replace(pattern, replacement);
    // If tag is missing, append inside <head>
    return html.replace("</head>", `${replacement}\n</head>`);
  };

  const buildHtmlWithSEO = (reqPath: string, reqHost: string, protocol: string) => {
    const seo = resolveSEO(reqPath);
    const origin = `${protocol}://${reqHost}`;
    const canonicalUrl = new URL(reqPath || "/", origin).toString();
    const imageUrl = seo.image?.startsWith("http")
      ? seo.image
      : `${origin}${seo.image || "/og-image.png"}`;

    let html = baseIndexHtml;

    const title = escapeHtml(seo.title);
    const description = escapeHtml(seo.description);
    const keywords = escapeHtml(seo.keywords || "");
    const siteName = escapeHtml(seo.siteName || "VaultBridge");

    html = replaceTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
    html = replaceTag(
      html,
      /<meta[^>]+name=["']description["'][^>]*>/i,
      `<meta name="description" content="${description}" />`
    );
    if (keywords) {
      html = replaceTag(
        html,
        /<meta[^>]+name=["']keywords["'][^>]*>/i,
        `<meta name="keywords" content="${keywords}" />`
      );
    }

    // Canonical
    html = replaceTag(
      html,
      /<link[^>]+rel=["']canonical["'][^>]*>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Open Graph
    html = replaceTag(
      html,
      /<meta[^>]+property=["']og:title["'][^>]*>/i,
      `<meta property="og:title" content="${title}" />`
    );
    html = replaceTag(
      html,
      /<meta[^>]+property=["']og:description["'][^>]*>/i,
      `<meta property="og:description" content="${description}" />`
    );
    html = replaceTag(
      html,
      /<meta[^>]+property=["']og:url["'][^>]*>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );
    html = replaceTag(
      html,
      /<meta[^>]+property=["']og:image["'][^>]*>/i,
      `<meta property="og:image" content="${imageUrl}" />`
    );
    html = replaceTag(
      html,
      /<meta[^>]+property=["']og:type["'][^>]*>/i,
      `<meta property="og:type" content="${seo.type || "website"}" />`
    );
    html = replaceTag(
      html,
      /<meta[^>]+property=["']og:site_name["'][^>]*>/i,
      `<meta property="og:site_name" content="${siteName}" />`
    );

    // Twitter
    html = replaceTag(
      html,
      /<meta[^>]+name=["']twitter:title["'][^>]*>/i,
      `<meta name="twitter:title" content="${title}" />`
    );
    html = replaceTag(
      html,
      /<meta[^>]+name=["']twitter:description["'][^>]*>/i,
      `<meta name="twitter:description" content="${description}" />`
    );
    html = replaceTag(
      html,
      /<meta[^>]+name=["']twitter:image["'][^>]*>/i,
      `<meta name="twitter:image" content="${imageUrl}" />`
    );
    html = replaceTag(
      html,
      /<meta[^>]+name=["']twitter:url["'][^>]*>/i,
      `<meta name="twitter:url" content="${canonicalUrl}" />`
    );

    return html;
  };

  // Serve .well-known files for PWA URL handlers and Android asset links
  // Express static blocks dotfiles by default, so this explicit mount is required
  app.use("/.well-known", express.static(path.join(distPath, ".well-known"), {
    dotfiles: "allow",
    maxAge: "1d",
    setHeaders: (res, filePath) => {
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
    }
  }));

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

  // SEO-aware SPA fallback - only for non-asset routes
  app.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();

    // Skip asset-like requests and .well-known paths
    if (req.path.startsWith("/assets/") ||
      req.path.startsWith("/.well-known/") ||
      req.path.endsWith(".js") ||
      req.path.endsWith(".css") ||
      req.path.endsWith(".wasm") ||
      req.path.endsWith(".map") ||
      req.path.endsWith(".json") ||
      req.path.endsWith(".txt") ||
      req.path.endsWith(".png") ||
      req.path.endsWith(".jpg") ||
      req.path.endsWith(".jpeg") ||
      req.path.endsWith(".gif") ||
      req.path.endsWith(".svg")) {
      return next();
    }

    const host = req.get("x-forwarded-host") || req.get("host") || "localhost";
    const forwardedProto = req.get("x-forwarded-proto");
    const protocol = forwardedProto || req.protocol || "https";
    const html = buildHtmlWithSEO(req.path, host, protocol);
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
    return res.status(200).send(html);
  });
}
