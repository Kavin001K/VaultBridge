import type { Express } from "express";
import { publicRoutesForPreRender } from "@shared/seo";

export function registerSeoRoutes(app: Express) {
    const origin = process.env.SITE_ORIGIN || "https://vaultbridge.org";

    // Generate sitemap.xml dynamically based on publicRoutesForPreRender
    app.get("/sitemap.xml", (_req, res) => {
        const now = new Date().toISOString();

        const urls = publicRoutesForPreRender
            .map((route) => {
                const cleanRoute = route === "/" ? "" : route;
                const url = `${origin}${cleanRoute}`;

                // Assign priority based on route category
                let priority = "0.8";
                let changefreq = "weekly";

                if (route === "/") {
                    priority = "1.0";
                    changefreq = "daily";
                } else if (["/upload", "/access", "/get-it-mailed", "/clipboard"].includes(route)) {
                    priority = "0.9";
                } else if (["/how-it-works", "/security", "/privacy-manifesto", "/roadmap"].includes(route)) {
                    priority = "0.7";
                } else if (["/privacy", "/terms"].includes(route)) {
                    priority = "0.6";
                    changefreq = "monthly";
                } else if (route === "/blog") {
                    priority = "0.8";
                } else if (route.startsWith("/blog/")) {
                    priority = "0.8";
                    changefreq = "monthly";
                }

                return `  <url>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
            })
            .join("\n");

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

        res.setHeader("Content-Type", "application/xml; charset=utf-8");
        res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
        res.status(200).send(sitemap);
    });

    // Generate sitemap-index.xml
    app.get("/sitemap-index.xml", (_req, res) => {
        const now = new Date().toISOString();

        const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${origin}/sitemap.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
</sitemapindex>
`;

        res.setHeader("Content-Type", "application/xml; charset=utf-8");
        res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
        res.status(200).send(sitemapIndex);
    });

    // Generate robots.txt
    app.get("/robots.txt", (_req, res) => {
        const robotsText = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /download/
Disallow: /access
Disallow: /success/

Sitemap: ${origin}/sitemap.xml
`;

        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
        res.status(200).send(robotsText);
    });
}
