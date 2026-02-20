import type { Express } from "express";
import { publicRoutesForPreRender } from "@shared/seo";

export function registerSeoRoutes(app: Express) {
    // Generate sitemap.xml dynamically based on publicRoutesForPreRender
    app.get("/sitemap.xml", (_req, res) => {
        const origin = process.env.SITE_ORIGIN || "https://vaultbridge.org";
        const now = new Date().toISOString();

        const urls = publicRoutesForPreRender
            .map((route) => {
                // Strip trailing slashes (except for root) and construct full URL
                const cleanRoute = route === "/" ? "" : route;
                const url = `${origin}${cleanRoute}`;

                // Define priority based on route type
                let priority = "0.8"; // Default priority for generated SEO pages
                if (route === "/") priority = "1.0";
                else if (["/upload", "/get-it-mailed", "/clipboard"].includes(route)) priority = "0.9";
                else if (["/how-it-works", "/privacy", "/terms"].includes(route)) priority = "0.6";

                return `
  <url>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
            })
            .join("");

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        res.header("Content-Type", "application/xml");
        res.send(sitemap.trim());
    });

    // Generate robots.txt
    app.get("/robots.txt", (_req, res) => {
        const origin = process.env.SITE_ORIGIN || "https://vaultbridge.org";

        const robotsText = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /download/
Disallow: /access
Disallow: /success/

Sitemap: ${origin}/sitemap.xml
`;

        res.header("Content-Type", "text/plain");
        res.send(robotsText.trim());
    });
}
