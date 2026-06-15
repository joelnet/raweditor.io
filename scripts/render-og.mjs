// Renders scripts/og-card.html to public/og.jpg (the og:image / twitter:image).
// One-off asset generator — Playwright is not a project dependency. To run:
//   npm i -D playwright && npx playwright install chromium && node scripts/render-og.mjs
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = resolve(__dirname, "og-card.html");
const outPath = resolve(__dirname, "..", "public", "og.jpg");

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});

await page.goto("file://" + htmlPath, { waitUntil: "networkidle" });
// Make sure web fonts are fully loaded before we shoot.
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);

await page.screenshot({
  path: outPath,
  type: "jpeg",
  quality: 92,
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});

await browser.close();
console.log("wrote", outPath);
