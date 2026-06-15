// Renders scripts/og-card.html to public/og.jpg (the og:image / twitter:image).
// Outputs exactly 1200x630 (the size every platform expects), supersampled
// from a 2x render for crisp text. One-off asset generator — Playwright is not
// a project dependency. To run:
//   npm i -D playwright && npx playwright install chromium && node scripts/render-og.mjs
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { writeFileSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = resolve(__dirname, "og-card.html");
const outPath = resolve(__dirname, "..", "public", "og.jpg");

const W = 1200;
const H = 630;

const browser = await chromium.launch();

// 1. Render the card at 2x for supersampling.
const page = await browser.newPage({
  viewport: { width: W, height: H },
  deviceScaleFactor: 2,
});
await page.goto("file://" + htmlPath, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);
const big = await page.screenshot({
  type: "png",
  clip: { x: 0, y: 0, width: W, height: H },
}); // 2400x1260 PNG buffer

// 2. Downscale to exactly 1200x630 with high-quality smoothing via a canvas.
const shot = await browser.newPage({
  viewport: { width: W, height: H },
  deviceScaleFactor: 1,
});
await shot.setContent(
  `<!doctype html><body style="margin:0"><canvas id="c" width="${W}" height="${H}"></canvas>`,
);
const dataUrl = await shot.evaluate(
  async ({ b64, w, h }) => {
    const img = new Image();
    img.src = "data:image/png;base64," + b64;
    await img.decode();
    const ctx = document.getElementById("c").getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, w, h);
    return document.getElementById("c").toDataURL("image/jpeg", 0.92);
  },
  { b64: big.toString("base64"), w: W, h: H },
);

writeFileSync(outPath, Buffer.from(dataUrl.split(",")[1], "base64"));
await browser.close();
console.log("wrote", outPath, `(${W}x${H})`);
