---
name: Open Raw Edit
description: A photographer's console in your browser, marketing site visual system.
colors:
  bg-deep: "#10141f"
  bg: "#141927"
  panel: "#1b2133"
  panel-edge: "#262e47"
  text: "#d7dce8"
  text-2: "#b9c0d1"
  muted: "#7e879e"
  text-mute: "#5a6378"
  accent-blue: "#5fb2ff"
  accent-blue-warm: "#8ec5ff"
  accent-yellow: "#e8c750"
  accent-green: "#9ef36b"
  accent-red: "#ff7575"
typography:
  display:
    fontFamily: "Instrument Serif, Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(50px, 7.6vw, 116px)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Instrument Serif, Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(36px, 4.6vw, 68px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.022em"
  title:
    fontFamily: "Instrument Serif, Cormorant Garamond, Georgia, serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "DM Sans, Helvetica Neue, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  lede:
    fontFamily: "DM Sans, Helvetica Neue, system-ui, sans-serif"
    fontSize: "clamp(16px, 1.3vw, 19px)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, SF Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.14em"
  mono:
    fontFamily: "JetBrains Mono, SF Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"
rounded:
  pill: "999px"
  card: "14px"
  chip: "6px"
  hair: "3px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "56px"
  xxl: "clamp(80px, 10vw, 140px)"
  gutter: "clamp(20px, 5vw, 88px)"
components:
  button-primary:
    backgroundColor: "{colors.accent-blue}"
    textColor: "{colors.bg-deep}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.accent-blue-warm}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  button-launch:
    backgroundColor: "{colors.accent-blue}"
    textColor: "{colors.bg-deep}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "22px 40px"
  nav-cta:
    backgroundColor: "transparent"
    textColor: "{colors.accent-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  panel-row:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text-2}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "8px 12px"
  card-feature:
    backgroundColor: "{colors.bg-deep}"
    textColor: "{colors.text-2}"
    typography: "{typography.body}"
    padding: "36px 30px 40px"
---

# Design System: Open Raw Edit

## 1. Overview

**Creative North Star: "The Blue Hour"**

The site borrows its palette from the editor itself: a cool deep navy
canvas, panels stepped one tone above, cream-cool text, and a single
photographic blue (`#5fb2ff`) carrying every action. "Blue hour" is the
photographer's term for the twilight window between sunset and dark when
everything turns deeply cool and quietly luminous. The site lives in that
window. Quiet. Considered. Faintly lit from within.

The visual system pairs italic Instrument Serif for the moments that
deserve voice with a precise DM Sans for prose and JetBrains Mono for the
technical chassis (paths, EXIF, slider readouts, section indices).
Numbers and units are treated as first-class typographic citizens
(`01 / what it does`, `+0.35`, `1/640s · ISO 200`), not as afterthoughts.
The page reads like a long-read in a photography quarterly that happens
to contain working software.

It explicitly rejects: the Vercel-clone landing (Inter or Geist, soft
purple-to-pink mesh, glass screenshot cards), Adobe Creative Cloud
product pages (slick stock, "Discover" CTAs), and any aesthetic that
suggests "Built different. AI-native. Ship in seconds." The reader is a
photographer who has rejected those things on purpose. The site has to
clear that bar in five seconds.

**Key Characteristics:**

- Cool navy canvas with cool-cream type; never `#000`, never `#fff`.
- A single photographic blue (`#5fb2ff`) carries every accent and CTA,
  borrowed exactly from the editor app.
- Italic Instrument Serif for editorial moments; DM Sans body; JetBrains
  Mono for technical chassis. No system font, ever.
- Flat surfaces with tonal layering (`bg-deep` → `bg` → `panel` →
  `panel-edge`), elevated only on the editor card and the launch CTA glow.
- The hero IS the product: the editor's chrome, histogram, sliders, and
  before/after wipe recreated in HTML/CSS as marketing.
- The site's colors are the app's colors, exactly. Visiting the site
  feels like opening the app with the photo off-screen.

## 2. Colors: The Blue Hour Palette

A palette pulled directly from the editor's CSS custom properties
(`raw-editor/src/styles.css`). Cool, navy-toned, with a single
photographic blue carrying every action and three histogram-channel
accents (red, green, yellow) reserved for the chart strip.

### Primary

- **Signal Blue** (`#5fb2ff`): The single accent that carries the entire
  identity. Used for CTAs, italic-serif emphasis ("in your browser.",
  "shouldn't outlive the photo."), section eyebrows (`01 / what it
  does`), the comparison table's `yes` cells, the wordmark's "Raw Edit"
  italic, and the pulsing eyebrow dot. Identical to the editor's
  `--accent-blue`. Never used for body text; never used for full-bleed
  surface fills. Its rarity is the point.
- **Signal Blue Warm** (`#8ec5ff`): The hover-state shift on Signal Blue.
  Slightly lifted lightness, same hue.

### Tertiary (histogram channels only)

- **Channel Red** (`#ff7575`), **Channel Green** (`#9ef36b`), **Channel
  Yellow** (`#e8c750`): The editor's `--accent-red` / `--accent-green` /
  `--accent-yellow`. Reserved exclusively for the histogram strip in the
  editor recreation and the three viewer "traffic light" dots in the
  chrome bar. Banned everywhere else.

### Neutral

- **Deep Navy** (`#10141f`): The page canvas, the editor's `--bg-deep`.
  Background of the page, the nav, and the final CTA section.
- **Navy** (`#141927`): One tonal step up, used for the viewer body and
  the hero's underglow gradient. The editor's `--bg`.
- **Panel** (`#1b2133`): The slider panel and feature card hover state.
  The editor's `--panel`. Two tonal steps up from canvas.
- **Panel Edge** (`#262e47`): Hairline border alternative, used by the
  editor for divider strokes; available here for the same.
- **Cool Cream** (`#d7dce8`): Primary text, the editor's `--text`. Used
  for headlines, body, brand wordmark, slider knobs and rails.
- **Cool Cream 2** (`#b9c0d1`): Secondary text, leading paragraphs, and
  slider readouts. Slightly recessed from Cool Cream.
- **Muted Steel** (`#7e879e`): Tertiary text, the editor's `--muted`.
  Slider labels, mono captions, nav links at rest.
- **Muted Steel Deep** (`#5a6378`): Quaternary text. Fine-print, EXIF
  micro-readouts. Approaching the floor.
- **Rule** (`rgba(215, 220, 232, 0.08)`) and **Rule Strong** (`rgba(215,
  220, 232, 0.18)`): Hairline dividers between sections, table rows, and
  panel sections. Tinted from Cool Cream so they belong to the cool
  system.

### Named Rules

**The Signal Scarcity Rule.** Signal Blue must occupy ≤8% of any
viewport at rest. If a layout starts to feel "blue", the accent is
working too hard, recede it to a 1px border or a single italic word and
let the surrounding navy do the work.

**The No True Black, No True White Rule.** `#000` and `#fff` are
prohibited. Every neutral is tinted toward the cool navy hue. The
warmest text sits at Cool Cream lightness, the deepest surface sits at
Deep Navy. The palette never crosses into pure values.

**The Channel Containment Rule.** Channel Red, Channel Green, and
Channel Yellow live inside the histogram strip and the viewer chrome
dots and nowhere else. They are visual quotes from a photographer's
tool, not a tertiary brand palette.

**The Editor Mirror Rule.** Every neutral and accent value on this site
maps 1:1 to a custom property in `raw-editor/src/styles.css`. If the
editor's palette ever shifts, the site shifts with it. Never let them
drift.

## 3. Typography

**Display Font:** Instrument Serif (with Cormorant Garamond, Georgia,
serif fallbacks)
**Body Font:** DM Sans (with Helvetica Neue, system-ui, sans-serif
fallbacks)
**Label / Mono Font:** JetBrains Mono (with SF Mono, ui-monospace,
monospace fallbacks)

**Character:** An editorial serif with confident italics, paired with a
precise but humane grotesque and a technical monospace. The Instrument
Serif italic is the system's voice, it carries the line that earns
emphasis. DM Sans is the body, neutral enough to disappear and warm
enough to belong against the cool navy. JetBrains Mono is the chassis,
the editor app itself is set in JetBrains Mono / Cascadia Mono, so its
appearance here is a literal handshake.

### Hierarchy

- **Display** (Instrument Serif, 400, `clamp(50px, 7.6vw, 116px)`,
  line-height 0.92, letter-spacing -0.025em): Hero headline. Mixes
  upright + italic in a single phrase ("Develop a RAW, *in the
  browser.*"). Used once per page; the second display moment is the
  final CTA.
- **Headline** (Instrument Serif, 400, `clamp(36px, 4.6vw, 68px)`,
  line-height 1.02, letter-spacing -0.022em): Section titles. Italic
  emphasis on the operative clause ("*shouldn't outlive the photo.*").
  Max-width 18ch.
- **Title** (Instrument Serif, 400, 28px, line-height 1.15): Feature
  card titles, panel-row section names. Upright.
- **Body** (DM Sans, 400, 16px, line-height 1.55): Default prose. Cap
  line length at 56-65ch.
- **Lede** (DM Sans, 400, `clamp(16px, 1.3vw, 19px)`, line-height 1.55):
  The single paragraph that follows a Display or Headline. Sits above
  body in scale and authority, max-width 38ch in the hero, 56ch
  elsewhere.
- **Label** (JetBrains Mono, 500, 11px, letter-spacing 0.14em,
  UPPERCASE): Section eyebrows, nav links, panel section headers, table
  column heads, footer links. The system's micro-typography lives here.
- **Mono** (JetBrains Mono, 400, 13px, letter-spacing 0.02em): Inline
  technical content: paths, EXIF, file extensions, slider values,
  format lists.

### Named Rules

**The No Em Dash Rule.** Em dashes (`—`) are forbidden across every
surface of this site: customer-facing copy, mono labels, headlines,
footers, and quoted strings inside the design docs. The hyphen-pair
`--` is forbidden for the same reason. Replace with commas, colons,
semicolons, periods, or parentheses depending on the clause. This rule
is permanent and has no exceptions.

**The Italic Carries the Voice Rule.** Emphasis is conveyed by
italicizing Instrument Serif and coloring it Signal Blue. Never bold
body text. Never underline. Never `text-decoration` of any kind for
emphasis.

**The Mono Reserves the Technical Rule.** JetBrains Mono is exclusively
for technical content: paths, EXIF, version numbers, slider readouts,
format lists, section indices (`01 /`), and micro-labels. Prose never
appears in mono; mono never appears in prose.

**The Numbers Are Typography Rule.** Numerals (`+0.35`, `−42`, `+22`,
`1/640s`, `ISO 200`, `35mm`) are first-class typographic citizens. They
get their own column in panel rows, get aligned right, and are always
set in JetBrains Mono with a leading `+` or `−` glyph for signed
values.

## 4. Elevation

The system is **flat by tonal layering**. Depth is conveyed by stepping
the surface four times (`bg-deep` → `bg` → `panel` → `panel-edge`) and
by hairline borders tinted from text, not by drop shadows. Shadows
appear in only two places, both load-bearing, never decorative.

### Shadow Vocabulary

- **Viewer Card Shadow** (`box-shadow: 0 1px 0 rgba(255,255,255,0.04)
  inset, 0 40px 120px -30px rgba(0,0,0,0.8), 0 0 0 1px
  rgba(95,178,255,0.04)`): Used once on the hero's viewer recreation.
  The inset highlight gives it a faint upper-edge gleam, the long-throw
  ambient shadow lifts it from the page, and the Signal Blue ring binds
  it to the palette.
- **Signal Glow** (`box-shadow: 0 1px 0 rgba(255,255,255,0.22) inset,
  0 20px 60px -20px rgba(95,178,255,0.55), 0 0 0 10px
  rgba(95,178,255,0.08)`): Used on the final-CTA launch button. The
  10px feathered ring around the pill is the signature: the button
  reads like it is lit by the same monitor glow you would feel sitting
  with the editor in a dim room.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. The only two
surfaces that lift are the hero viewer and the primary launch CTA.
Feature cards, comparison tables, specs rows, panel rows, and footer
rails sit flush.

**The Glow Belongs to the CTA Rule.** Any element that emits a colored
glow is an action surface the user is meant to click. Decorative glow
is prohibited. If a card glows but does nothing, the system is lying.

## 5. Components

### Buttons

- **Shape:** Pill (border-radius `999px`). Every marketing-site button
  is a pill; no rectangles, no rounded squares. (Note: the editor app
  itself uses 4px-radius rectangles. The marketing surface is allowed a
  softer touch because its purpose is invitation, not utility.)
- **Primary** (`btn--primary`): Signal Blue background, Deep Navy text,
  `14px 22px` padding, body weight 500. Carries a faint inset highlight
  and a short throw Signal Blue shadow. Hover shifts to Signal Blue
  Warm and lifts -1px. The right-pointing arrow nudges +3px on hover.
- **Ghost** (`btn--ghost`): Transparent background, Cool Cream text,
  `14px 22px` padding, `1px solid rgba(215,220,232,0.18)` border. Hover
  deepens the border to Muted Steel and tints the surface with
  `rgba(215,220,232,0.04)`.
- **Launch** (`open__cta`): A larger, taller pill (`22px 40px` padding,
  18px label) reserved for the single bottom-of-page CTA. Carries the
  Signal Glow shadow. Hover lifts -2px and intensifies the glow.
- **Nav CTA** (`nav__cta`): A pill outlined in Signal Blue with no fill
  at rest, `8px 14px` padding, mono uppercase 12px label. Hover fills
  with Signal Blue and inverts to Deep Navy text. The only button in
  the nav.

### Slider Panel Row (signature)

- **Style:** Three-column grid (`60px 1fr 44px`), mono label, track +
  knob, right-aligned mono signed value.
- **Track:** 2px height, `rgba(215,220,232,0.18)` background, filled
  left with a soft-blue-to-Signal-Blue linear gradient
  (`linear-gradient(90deg, rgba(95,178,255,0.45), #5fb2ff)`) for the
  value range.
- **Knob:** 10px Cool Cream circle with a 3px translucent dark halo and
  a 6px Signal Blue bloom. Sits perfectly centered on the track.
- **Eye toggle:** A small `◉` in Signal Blue at the row header
  indicating the section is active.

### Feature Card (the six-panel grid)

- **Shape:** Hairline-divided grid cells, not detached cards (`gap:
  1px` on a Rule background creates the divider effect with a
  single-color outline around the grid).
- **Background:** Deep Navy at rest, Navy on hover.
- **Padding:** `36px 30px 40px`.
- **Content order:** mono number (`·01`) at top, serif title (28px),
  body paragraph with optional warm-italic emphasis on a single word
  (Channel Yellow is the only warmth allowed inside body copy, and only
  for serif italic emphasis).

### Comparison Table

- **Style:** Borderless cells with hairline row dividers, mono 12px
  values, mono uppercase 10px row labels.
- **Highlight column:** The "Open Raw Edit" column carries a faint
  `rgba(95,178,255,0.05)` tint and column-header text in Signal Blue.
  The `yes` and brand `none` cells are themselves Signal Blue.
- **Header:** `nowrap` so the brand name never wraps across three
  lines.

### Editor Viewer (signature, the hero visual)

- **Composition:** A full editor card with chrome bar (three colored
  channel dots in Channel Red / Yellow / Green, centered file path,
  right-aligned EXIF line), a histogram strip with an R/G/B gradient
  fill under the curve, a 3:2 canvas with a draggable before/after
  handle, and a right-side panel of slider rows. On wide viewports the
  card has a faint -1.5deg Y-axis perspective rotation that resets to 0
  on hover.
- **Before/After Handle:** A 2px Cool Cream vertical rail with a 38px
  Cool Cream circle knob bearing a chevron icon. Drag-to-wipe,
  pointer-capture, keyboard arrow nudges, and a one-time auto-sweep on
  first paint so the interaction is visible without input. Respects
  `prefers-reduced-motion`.

### Navigation

- **Style:** Sticky top, `rgba(16,20,31,0.72)` background with a 14px
  blur, hairline bottom border. Brand wordmark on the left (mono "Open"
  + italic-serif "Raw Edit" in Signal Blue), four mono uppercase links
  on the right with the Nav CTA at the end.
- **Mobile:** Inline links collapse below 720px, leaving only the brand
  and the Nav CTA.

## 6. Do's and Don'ts

### Do:

- **Do** use Signal Blue (`#5fb2ff`) for every CTA, italic emphasis,
  section eyebrow, and accent, and nothing else.
- **Do** keep Signal Blue under ≈8% of any viewport at rest (the Signal
  Scarcity Rule).
- **Do** italicize Instrument Serif and color it Signal Blue for
  emphasis; never bold body text.
- **Do** treat numerals as typography, right-align, set in JetBrains
  Mono, leading `+` / `−` for signed values.
- **Do** lift only two surfaces (hero viewer, launch CTA). Everything
  else is flat with tonal layering.
- **Do** keep mono micro-labels at 0.12-0.18em letter-spacing in
  UPPERCASE, that's the system's micro-typographic signature.
- **Do** mirror the editor app's palette exactly. The colors here are
  the colors there, by design.
- **Do** respect `prefers-reduced-motion` on every animation,
  especially the hero's auto-sweep.

### Don't:

- **Don't** use `#000` or `#fff`. Ever. Both are forbidden.
- **Don't** use a gradient on text (`background-clip: text`). Solid
  color + italic carries every emphatic moment.
- **Don't** use border-left greater than 1px as a colored accent
  stripe. Use full hairline borders or background tints.
- **Don't** add glassmorphism beyond the single nav backdrop-filter. No
  glass cards, no frosted panels, no decorative blur.
- **Don't** add another accent color. The three channel hues
  (red/green/yellow) are confined to the histogram and the viewer
  chrome dots. There is no fourth accent.
- **Don't** mimic the Vercel / Linear clone aesthetic (Inter or Geist
  body, soft purple-to-pink mesh, glass screenshot card). PRODUCT.md
  names these as anti-references; the visual system enforces it.
- **Don't** mimic Adobe Creative Cloud's slick stock-photo product
  pages, the "Tell your story" tonality, or the "Discover" / "Explore"
  CTA voice.
- **Don't** ship hero-metric templates (big number + small label +
  supporting stats + gradient accent). The hero is the editor; the only
  metrics are the slider readouts inside it.
- **Don't** wrap the page in a single max-width container. Use `--max:
  1400px` per section. Some sections want to breathe full-bleed (creed
  dividers, CTA glow).
- **Don't** use modals, popups, newsletter prompts, cookie banners
  (unless legally mandatory), or any interstitial. The site mirrors the
  product's no-friction promise.
- **Don't** drift the palette away from the editor app's. The site is
  a marketing surface for the app and reads as a continuation of it.
- **Don't** use em dashes (`—`) or hyphen-pairs (`--`). Ever. This is
  the No Em Dash Rule and it is permanent. Replace with commas, colons,
  semicolons, periods, or parentheses depending on the clause.
