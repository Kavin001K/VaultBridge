import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { publicRoutesForPreRender } from "../shared/seo";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_PATH = path.join(__dirname, "../client/public/sitemap.xml");
const DOMAIN = "https://vaultbridge.org";

function generateSitemap() {
    const date = new Date().toISOString().split("T")[0]; // format: YYYY-MM-DD

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

    for (const route of publicRoutesForPreRender) {
        let priority = "0.7";
        let changefreq = "weekly";

        if (route === "/") {
            priority = "1.0";
            changefreq = "daily";
        } else if (route === "/upload" || route === "/access") {
            priority = "0.9";
        } else if (route.startsWith("/blog/")) {
            priority = "0.8";
            changefreq = "monthly";
        } else if (route === "/blog") {
            priority = "0.8";
        }

        const loc = `${DOMAIN}${route}`;

        xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
    }

    xml += `</urlset>\n`;

    fs.writeFileSync(SITEMAP_PATH, xml, "utf-8");
    console.log(`[SEO] Sitemap successfully generated with ${publicRoutesForPreRender.length} URLs at ${SITEMAP_PATH}`);
}

generateSitemap();
