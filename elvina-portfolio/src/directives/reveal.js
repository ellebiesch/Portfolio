/**
 * v-reveal — fade + rise an element into view the first time it is scrolled to.
 *
 * The motion itself lives in CSS ([data-reveal] in style.css); this only
 * decides when to flip the class. One IntersectionObserver is shared by every
 * element on the page rather than one per directive.
 *
 *   <div v-reveal>                     rise up (default)
 *   <div v-reveal="120">               ...after 120ms
 *   <div v-reveal="{ from: 'scale' }"> scale in
 *   <div v-reveal="{ from: 'left', delay: i * 70 }">
 *
 * The reveal animates the standalone `translate`/`scale` properties, not
 * `transform`, so it composes with hover transforms instead of fighting them.
 */

const REVEALED = 'is-revealed';

let observer = null;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add(REVEALED);
        // Reveal once — no re-hiding on the way back up.
        observer.unobserve(entry.target);
      });
    },
    {
      // Fire a little before the element reaches the bottom edge, so the
      // motion is finishing as it arrives rather than starting.
      rootMargin: '0px 0px -10% 0px',
      // Deliberately 0, not a fraction: intersectionRatio is measured against
      // the element's own height, so a section taller than the viewport can
      // never reach even a small ratio and would stay invisible forever.
      threshold: 0,
    }
  );
  return observer;
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function parse(value) {
  if (typeof value === 'number') return { from: 'up', delay: value };
  return { from: 'up', delay: 0, ...(value || {}) };
}

export default {
  // created(), not mounted() — the hidden state has to be on the element
  // before it is inserted, or it paints once at full opacity first.
  created(el, binding) {
    if (prefersReducedMotion()) return;
    const { from, delay } = parse(binding.value);
    el.dataset.reveal = from;
    if (delay) el.style.transitionDelay = `${delay}ms`;
  },
  mounted(el) {
    if (prefersReducedMotion()) return;
    getObserver().observe(el);
  },
  unmounted(el) {
    if (observer) observer.unobserve(el);
  },
};
