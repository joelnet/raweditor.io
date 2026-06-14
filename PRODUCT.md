# Product

## Register

brand

## Users

**Primary: the photographer on the couch.** Shoots RAW on a mirrorless
body, a drone, or a flagship phone, and wants to triage and finish single
frames *in the moment*: at the café after a walk, on the train home, on
the couch later that night. Owns a phone, sometimes a tablet, and a
laptop somewhere. Doesn't want to install anything to make one photo
look right. Tech-literate enough to evaluate "client-side" and "no
upload" as credible promises in seconds.

**Secondary:** the Linux photographer (whose paid options don't run for
them); the privacy-conscious creator (journalists, NDA'd product
photographers); the Chromebook / iPad / borrowed-machine user who can't
install anything; the curious developer who found it on HN and may
evangelize.

All four secondary personas share the primary's posture: "show me it's
real, don't pitch me." They will close the tab the instant the page
reads like a marketing site.

## Product Purpose

A zero-install, in-browser raw photo editor that runs on phones,
tablets, and desktops alike. Drop a raw file, push the edits, export
a full-resolution PNG / JPG / 16-bit TIFF. Files never leave the device.
Free, open source, no ads, no account, no subscription. (Specific camera
formats supported under the hood: ARW, RAF, DNG, CR2, NEF, ORF, RW2,
PEF, SRW. Customer-facing copy says "raw files", not vendor names.)

The product is mobile-first: it has to feel right on a phone in
landscape held in two hands. Desktop usage is supported and welcome but
secondary in priority.

This site is a single landing page whose job is to get the right people
straight into the editor. Success looks like a reader scrolling once,
tapping *Launch*, and never returning to the homepage again because the
app itself becomes their bookmark.

## Brand Personality

**Three words:** craftsman, technical, plainspoken.

**Voice:** confident, slightly dry, peer-to-peer. The reader is treated as
someone who already knows what a histogram is and why 16-bit linear matters.
Short sentences. Concrete nouns. No exclamation marks. No "unleash your
creativity." No "AI-powered." Editorial cadence, not promotional.

**Punctuation:** **Never use em dashes.** No `—`, no `--`. Em dashes
on this site are forbidden, in customer-facing copy, in the editor, in
docs that quote from either. Replace with commas, colons, semicolons,
periods, or parentheses depending on the clause. This rule applies
permanently and without exception.

**Emotion to evoke:** the quiet relief of finding a tool that respects you.
A small dose of "finally" without ever using the word.

## Anti-references

**Tonal anti-references** (what NOT to sound like):

- The big-suite photo-editor marketing register: "Tell your story. Edit
  like a pro." Vague, aspirational, identity-flattering. Names of
  specific competing products do not appear in customer-facing copy;
  this is a positive product on its own terms, not a comparison.
- Any SaaS landing page with "Trusted by" logo strips, fake testimonials, a
  newsletter wall, or a "Book a Demo" button.
- The crypto / AI-tool register: neon gradients on black, "Built different.",
  rocket emojis, "the future of X".

**Visual anti-references:**

- The generic Vercel / Linear-clone landing page: Inter or Geist, soft
  purple-to-pink gradient mesh, screenshot-on-glass card, glassmorphism
  navbar, "AI-native" eyebrow. The site has rejected this aesthetic
  deliberately.
- Adobe Creative Cloud's product pages: slick stock photography, big bold
  sans, "Discover" / "Explore" CTAs. Salesy and joyless.
- Generic photo-app landing pages with a cliché before/after slider on a
  pre-graded stock landscape and not much else.

**Structural anti-references:**

- No newsletter signup. No cookie banner that isn't legally mandatory.
- No carousel of "happy customers." No social-proof bar.
- No popup. No modal-on-load. No interstitial of any kind.
- No "Get started for free" that leads to a sign-up form. The CTA opens
  the editor. The editor needs no account.
- No side-by-side comparison tables versus other editors. The product
  stands on its own promises (local, real, free, mobile-ready, ad-free),
  not on a sneer at someone else's.
- No advertisements, ever. Not on this site, not in the editor.

## Design Principles

1. **Peer, not pitch.** The reader is a peer who knows the domain. Every
   line of copy assumes shared vocabulary (RAW, EXIF, sRGB, 16-bit linear).
   Don't define terms the reader already owns; don't dilute them either.

2. **Show the tool, don't sell it.** The hero visual is the editor itself,
   recreated in HTML/CSS: histogram, sliders, EXIF strip, before/after
   wipe. A live recreation beats a static screenshot beats stock imagery
   with a fake edit overlay. The page's most persuasive surface is the
   product looking like itself.

3. **Honesty is the moat.** Most software hides its limits; we publish
   ours. The "What it isn't" section is load-bearing, not a footnote.
   What the tool refuses to do is part of what makes it lovable.

4. **No friction at any layer.** No gates, no modals, no newsletter
   prompts, no "Sign up to continue." The website's behavior mirrors the
   product's promise: you can use it, right now, without giving anything
   up. If a UI pattern would require an apology in the copy, it doesn't
   ship.

5. **Editorial cadence over SaaS cadence.** Treat the page like a long-read
   about a thoughtful piece of software, not a feature list. Section
   numbering (`01 / what it does`), serif italics for emphasis, mono for
   the technical, real prose between the slabs. Density when it earns its
   keep, generous negative space when it doesn't.

## Accessibility & Inclusion

- **Target:** WCAG 2.2 AA across the marketing page.
- **Motion:** every animation respects `prefers-reduced-motion`. The hero's
  auto-sweep is the most visible motion and must be the first to disable.
- **Keyboard:** every interactive element (CTAs, the before/after handle,
  in-page anchors) is reachable and operable from keyboard alone, with a
  visible focus ring.
- **Color:** all text meets ≥4.5:1 contrast on its background. Signal Blue
  (`#5fb2ff`) is reserved for accent and emphasis, never carries
  information alone (always paired with a label, weight, or shape change).
- **Screen readers:** the editor recreation is decorative, it is
  `aria-label`ed as a preview and its sliders are presentational; the
  before/after handle exposes its purpose via `aria-label`.
- **Language:** plain, jargon-only-when-earned English. Acronyms (RAW,
  EXIF, TIFF) are used without expansion because the target audience knows
  them; that is a deliberate inclusion choice for the intended reader, not
  an accessibility lapse.
