# Open Raw Editor

Website for **Open Raw Editor**, a zero-install, in-browser RAW photo
editor. Drop a RAW file, push the edits, export a full-resolution PNG, JPG, or
16-bit TIFF. Files never leave the device. Free, open source, no account, no ads.

- **Site:** https://raweditor.io
- **Launch the editor:** https://open.raweditor.io

## Stack

- [Vite](https://vite.dev/) for dev server and build
- Vanilla HTML, CSS, and a small amount of JS (no framework)
- ESLint + Prettier, with `tsc` type-checking over JSDoc via `jsconfig.json`
- Deployed to Cloudflare static assets via [Wrangler](https://developers.cloudflare.com/workers/wrangler/)

The hero is a recreation of the editor itself in HTML/CSS (histogram, sliders,
EXIF strip). The before/after wipe in the hero is the only scripted piece;
everything else is static markup and styles.

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL (default http://localhost:5173).

## Scripts

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start the Vite dev server                     |
| `npm run build`     | Build the production site into `dist/`        |
| `npm run preview`   | Serve the built `dist/` locally               |
| `npm run typecheck` | Type-check with `tsc -p jsconfig.json`        |
| `npm run lint`      | Type-check, then run ESLint with `--fix`      |

## Deploy

The site is static. Build, then publish `dist/` with Wrangler (config in
`wrangler.jsonc`):

```bash
npm run build
npx wrangler deploy
```

## Project structure

```
index.html        Landing page markup
src/style.css     All styles
src/main.js       Before/after wipe interaction
assets/           Editor preview imagery (before/after, sample RAW)
dist/             Build output (generated)
DESIGN.md         Visual system and design tokens
PRODUCT.md        Product positioning, voice, and design principles
```

## License

MIT.
