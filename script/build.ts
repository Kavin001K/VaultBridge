import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { mkdir, rm, readFile, writeFile } from "fs/promises";
import path from "path";
import { createRequire } from "module";
import { publicRoutesForPreRender, resolveSEO, type SEOConfig } from "../shared/seo";

const require = createRequire(import.meta.url);
// These packages are CJS-only, so require keeps them compatible in ESM mode.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Prerenderer = require("@prerenderer/prerenderer");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PuppeteerRenderer = require("@prerenderer/renderer-puppeteer");

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const replaceTag = (html: string, pattern: RegExp, replacement: string) => {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html.replace("</head>", `${replacement}\n</head>`);
};

const applySEOToHtml = (
  html: string,
  seo: SEOConfig,
  canonicalUrl: string,
  imageUrl: string,
) => {
  const title = escapeHtml(seo.title);
  const description = escapeHtml(seo.description);
  const keywords = escapeHtml(seo.keywords || "");
  const siteName = escapeHtml(seo.siteName || "VaultBridge");

  let output = html;
  output = replaceTag(output, /<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  output = replaceTag(
    output,
    /<meta[^>]+name=["']description["'][^>]*>/i,
    `<meta name="description" content="${description}" />`,
  );
  if (keywords) {
    output = replaceTag(
      output,
      /<meta[^>]+name=["']keywords["'][^>]*>/i,
      `<meta name="keywords" content="${keywords}" />`,
    );
  }

  output = replaceTag(
    output,
    /<link[^>]+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  );

  output = replaceTag(
    output,
    /<meta[^>]+property=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${title}" />`,
  );
  output = replaceTag(
    output,
    /<meta[^>]+property=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${description}" />`,
  );
  output = replaceTag(
    output,
    /<meta[^>]+property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${canonicalUrl}" />`,
  );
  output = replaceTag(
    output,
    /<meta[^>]+property=["']og:image["'][^>]*>/i,
    `<meta property="og:image" content="${imageUrl}" />`,
  );
  output = replaceTag(
    output,
    /<meta[^>]+property=["']og:type["'][^>]*>/i,
    `<meta property="og:type" content="${seo.type || "website"}" />`,
  );
  output = replaceTag(
    output,
    /<meta[^>]+property=["']og:site_name["'][^>]*>/i,
    `<meta property="og:site_name" content="${siteName}" />`,
  );

  output = replaceTag(
    output,
    /<meta[^>]+name=["']twitter:title["'][^>]*>/i,
    `<meta name="twitter:title" content="${title}" />`,
  );
  output = replaceTag(
    output,
    /<meta[^>]+name=["']twitter:description["'][^>]*>/i,
    `<meta name="twitter:description" content="${description}" />`,
  );
  output = replaceTag(
    output,
    /<meta[^>]+name=["']twitter:image["'][^>]*>/i,
    `<meta name="twitter:image" content="${imageUrl}" />`,
  );
  output = replaceTag(
    output,
    /<meta[^>]+name=["']twitter:url["'][^>]*>/i,
    `<meta name="twitter:url" content="${canonicalUrl}" />`,
  );

  return output;
};

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  console.log("prerendering static marketing routes for SEO...");
  await prerenderStatic();

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

async function prerenderStatic() {
  const staticDir = path.resolve("dist/public");
  const routes = publicRoutesForPreRender;
  const origin = process.env.SITE_ORIGIN || "https://vaultbridge.org";

  const prerenderer = new Prerenderer({
    staticDir,
    routes,
    renderer: new PuppeteerRenderer({
      headless: true,
      renderAfterTime: 500, // wait a moment for app hydration/SEO hook to run
    }),
  });

  try {
    await prerenderer.initialize();
    const renderedRoutes = await prerenderer.renderRoutes(routes);

    await Promise.all(
      renderedRoutes.map(async (rendered: any) => {
        const normalizedRoute = rendered.route || "/";
        const routePath =
          normalizedRoute === "/"
            ? ""
            : normalizedRoute.startsWith("/")
              ? normalizedRoute.slice(1)
              : normalizedRoute;
        const outputPath =
          rendered.outputPath || path.join(staticDir, routePath, "index.html");

        const routePathWithSlash = routePath ? `/${routePath}` : "/";
        const seo = resolveSEO(routePathWithSlash);
        const canonicalUrl = new URL(routePathWithSlash || "/", origin).toString();
        const imageUrl = seo.image?.startsWith("http")
          ? seo.image
          : `${origin}${seo.image || "/og-image.png"}`;

        const htmlWithSeo = applySEOToHtml(rendered.html, seo, canonicalUrl, imageUrl);

        await mkdir(path.dirname(outputPath), { recursive: true });
        await writeFile(outputPath, htmlWithSeo.trim(), "utf-8");
      }),
    );

    console.log(`[prerender] wrote ${renderedRoutes.length} routes to ${staticDir}`);
  } catch (err) {
    console.error("[prerender] failed to prerender routes", err);
    throw err;
  } finally {
    try {
      await prerenderer.destroy();
    } catch {
      // ignore destroy errors
    }
  }
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
