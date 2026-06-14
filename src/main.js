// Interactive before/after wipe in the hero viewer.
// Drag (or touch-drag) the handle to reveal more of the graded "after" frame.

const canvas = /** @type {HTMLElement | null} */ (
  document.getElementById("canvas")
);
const handle = /** @type {HTMLButtonElement | null} */ (
  document.getElementById("handle")
);
const afterClip = /** @type {HTMLElement | null} */ (
  document.getElementById("afterClip")
);

if (canvas && handle && afterClip) {
  let dragging = false;

  /** @param {number} pct */
  const setPosition = (pct) => {
    const clamped = Math.max(0, Math.min(100, pct));
    handle.style.left = `${clamped}%`;
    afterClip.style.clipPath = `polygon(${clamped}% 0, 100% 0, 100% 100%, ${clamped}% 100%)`;
  };

  /** @param {PointerEvent} e */
  const handleMove = (e) => {
    if (!dragging) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setPosition((x / rect.width) * 100);
  };

  /** @param {PointerEvent} e */
  const handleDown = (e) => {
    dragging = true;
    canvas.setPointerCapture(e.pointerId);
    handleMove(e);
  };

  /** @param {PointerEvent} e */
  const handleUp = (e) => {
    dragging = false;
    if (canvas.hasPointerCapture(e.pointerId)) {
      canvas.releasePointerCapture(e.pointerId);
    }
  };

  canvas.addEventListener("pointerdown", handleDown);
  canvas.addEventListener("pointermove", handleMove);
  canvas.addEventListener("pointerup", handleUp);
  canvas.addEventListener("pointercancel", handleUp);

  // Keyboard nudges for the handle (arrow keys when focused)
  handle.addEventListener("keydown", (e) => {
    const current = parseFloat(handle.style.left || "50");
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition(current - 4);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition(current + 4);
    }
  });

  // Subtle "demo" sweep on first paint so the wipe is obvious without input.
  // Skip for users who prefer reduced motion.
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced) {
    let start = 0;
    /** @type {number | null} */
    let raf = null;
    const sweep = (/** @type {number} */ ts) => {
      if (!start) start = ts;
      const t = (ts - start) / 1800;
      if (t >= 1) {
        setPosition(50);
        return;
      }
      // ease-in-out, sweep 50 → 18 → 82 → 50
      const eased = 0.5 - 0.5 * Math.cos(t * Math.PI * 2);
      const pos = 50 + (eased - 0.5) * 64;
      setPosition(pos);
      raf = requestAnimationFrame(sweep);
    };
    // Delay the sweep slightly so it follows the page paint
    setTimeout(() => {
      raf = requestAnimationFrame(sweep);
    }, 700);

    // Cancel the demo sweep on first user interaction
    const cancelDemo = () => {
      if (raf !== null) cancelAnimationFrame(raf);
    };
    canvas.addEventListener("pointerdown", cancelDemo, { once: true });
  }
}

// Smooth scroll for in-page anchors
for (const anchor of document.querySelectorAll('a[href^="#"]')) {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
