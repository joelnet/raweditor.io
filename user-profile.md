# Target User Profile, Open Raw Editor

## The project, in one line

A zero-install, browser-based RAW photo editor (Sony ARW, Fujifilm RAF, DNG) with
Lightroom-style sliders, a live WebGL preview, and full-resolution PNG/JPG/16-bit
TIFF export, **everything runs locally, files never leave the device.**

---

## Primary persona, "The frustrated enthusiast"

**Who they are**

- Hobbyist or semi-serious photographer. Owns a mirrorless body (Sony α, Fuji
  X-series, a DJI drone shooting DNG) and shoots RAW because they care about
  the result.
- Edits a handful of photos at a time, a weekend trip, a portrait session, a
  drone flight, not 5,000-image weddings.
- Tech-literate. Comfortable with the idea of running software in a browser,
  understands what "client-side" means and why it matters.

**What they actively dislike**

- Adobe's subscription model. They resent paying $10–20/month forever for
  software they use occasionally.
- Bloated installs. Lightroom Classic is ~3 GB; Capture One asks for a license
  server check; DxO PhotoLab is Windows/macOS only.
- Cloud-first workflows. They don't want their RAW files synced to someone
  else's S3 bucket before they can touch a slider.
- The "catalog" mental model. They have folders. They know where their photos
  are. They don't want to "import" anything.

**What they want**

- Open a RAW file, push some sliders, export a finished JPEG. That's it.
- Sane defaults and *useful* auto buttons (auto WB, auto tone) so the first
  five seconds feel productive.
- A real histogram, a real before/after, real 16-bit TIFF export, not a toy.
- To not think about where the software is "installed."

---

## Secondary personas

### "The Linux photographer"
Lightroom and Capture One don't run natively on Linux. Their current options are
darktable and RawTherapee (powerful but steep learning curves and dated UIs).
A browser app is, by definition, cross-platform, and the sliders feel familiar
to anyone who's used Lightroom. This is the user most likely to evangelize the
tool.

### "The privacy-conscious creator"
Journalists, activists, NDA'd product photographers, parents posting kid photos.
"Files never leave your machine" isn't a feature for them, it's a requirement.
The fact that they can verify this (open-source, no network calls in DevTools)
is what makes them trust it.

### "The Chromebook / iPad / borrowed-machine user"
Can't install desktop software at all, locked-down work laptop, school
Chromebook, a friend's computer, an iPad. A URL is the only delivery mechanism
that works for them. The fact that the app loads in seconds and works without
an account is the whole pitch.

### "The curious developer"
Found it on Hacker News or GitHub. Came for "WebGL2 + LibRaw compiled to WASM
in a worker," stayed because it's actually useful. Might file an issue, might
send a PR, will definitely tell other developers about it. This persona drives
early word-of-mouth even though they aren't the largest segment.

---

## What the website needs to communicate, in priority order

1. **It runs in your browser. Right now. No install, no account, no upload.**
   This is the single most surprising thing about the product and the entire
   reason someone would choose it over Lightroom or darktable. Lead with it.

2. **It's not a toy.** Real RAW decoding (LibRaw), real 16-bit linear pipeline,
   real TIFF export, real histogram. Show the actual UI with actual sliders on
   an actual RAW file, not a stock photo with a fake "edit" overlay.

3. **Your files stay on your device.** State it plainly. The technical reader
   will verify; the non-technical reader will appreciate the promise.

4. **It's free and open source.** Link to the repo prominently. Make it obvious
   there's no upsell, no "pro tier," no email-gated download.

5. **Supported formats and browsers.** Sony ARW, Fujifilm RAF, DNG. Recent
   Chrome / Firefox / Edge / Safari 16.4+. Be specific so people don't have to
   guess whether their camera works.

---

## What the website should NOT do

- **Don't pretend to be Adobe.** Don't mimic Lightroom's marketing voice
  ("Unleash your creativity…"). This audience has actively rejected that
  voice. Be plainspoken and technical.
- **Don't oversell the feature set.** It's a focused editor, global tone,
  color, crop, export. No masking, no presets library, no AI sky replacement,
  no catalog. Pitching it as a full Lightroom replacement will disappoint;
  pitching it as "the fastest way to develop a RAW file" will delight.
- **Don't gate anything.** No newsletter wall, no "sign up for early access,"
  no cookie banner that isn't legally required. The whole appeal is that it
  Just Works in a tab.
- **Don't hide the limitations.** Browser memory limits cap how large a file
  can be; no batch processing; no library management. Honesty here builds
  trust with exactly the audience that would otherwise notice and bounce.

---

## Tone for the marketing copy

Confident, technical, slightly dry. The reader is a peer who knows what a
histogram is and what "16-bit linear" means, write for them, not for someone
who needs "RAW" explained. Short sentences. Concrete nouns. No exclamation
marks.
