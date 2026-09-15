<template>
  <component :is="to ? 'router-link' : 'div'" :to="to || undefined" class="case-anchor">
    <article class="case">
      <div class="case-preview" :class="previewClass">
        <div class="preview-decor">
          <img
            v-if="screenshot"
            :src="screenshot"
            :alt="`${product} product screenshot`"
            class="preview-shot"
          />
          <slot v-else name="preview" />
        </div>
        <!-- Decorative: the same ground is covered by .case-meta in text. -->
        <ul v-if="chips.length" class="preview-chips" aria-hidden="true">
          <li v-for="chip in chips.slice(0, 5)" :key="chip" class="preview-chip">{{ chip }}</li>
        </ul>
        <div v-if="status" class="status-badge">
          <span class="status-dot"></span>
          {{ status }}
        </div>
        <div class="preview-glass">
          <span class="glass-product">{{ product }}</span>
          <span class="glass-cta">Read case study <span class="arrow">→</span></span>
        </div>
      </div>
      <div class="case-body">
        <div class="case-eyebrow">
          <span class="case-product">{{ product }}</span>
          <span v-if="domain">{{ domain }}</span>
          <span v-if="year">{{ year }}</span>
        </div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <h3 class="case-headline" v-html="headline"></h3>
        <div v-if="meta.length" class="case-meta">
          <span v-for="item in meta" :key="item">{{ item }}</span>
        </div>
      </div>
    </article>
  </component>
</template>

<script>
export default {
  name: 'CaseCard',
  props: {
    product: { type: String, default: '' },
    domain: { type: String, default: '' },
    year: { type: String, default: '' },
    // Outcome sentence — allows <em> for the accent phrase.
    headline: { type: String, required: true },
    meta: { type: Array, default: () => [] },
    // Discipline tags that fan out over the preview on hover — max 5 are placed.
    chips: { type: Array, default: () => [] },
    // A real product screenshot. Takes over the preview from the <template
    // #preview> SVG slot when set.
    screenshot: { type: String, default: '' },
    previewClass: { type: String, default: '' },
    to: { type: String, default: '' },
    // When set, a "coming soon"-style badge fades in over the preview on
    // hover — for a case study that's still being polished before it's
    // linked up as a full page.
    status: { type: String, default: '' },
  },
};
</script>

<style scoped>
.case-anchor {
  text-decoration: none;
  color: inherit;
  display: block;
}
.case {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.case-preview {
  position: relative;
  height: clamp(320px, 38vw, 560px);
  border-radius: 28px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.case:hover .case-preview {
  transform: translateY(-6px);
}
.preview-navix {
  background: linear-gradient(135deg, #1a3a3a 0%, #2a5454 50%, #3d7373 100%);
}
.preview-cargoos {
  background: linear-gradient(135deg, #0b0b0a 0%, #2a2624 60%, #4a453e 100%);
}
.preview-atlas {
  background: linear-gradient(135deg, #8b3a2f 0%, #bc5a4b 60%, #d87657 100%);
}
.preview-truckpedia {
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 50%, #718096 100%);
}
.preview-decor {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* Capped in px as well as % — at full row width a percentage alone scales the
   mockup past the resolution its strokes were drawn for. */
.preview-decor :deep(svg) {
  width: 55%;
  max-width: 720px;
  height: auto;
  opacity: 0.95;
  /* Soft focus at rest, sharp on hover. Kept to 2px deliberately: enough to
     make the reveal read, not enough to look like a failed image load to
     someone who never hovers. */
  filter: blur(2px) drop-shadow(0 12px 32px rgba(0, 0, 0, 0.22));
  transform: scale(0.96);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
}
.case:hover .preview-decor :deep(svg),
.case-anchor:focus-visible .preview-decor :deep(svg) {
  filter: blur(0) drop-shadow(0 18px 40px rgba(0, 0, 0, 0.26));
  transform: scale(1) translateY(-4px);
}
/* Real product screenshot — floats as a card inside the gradient, same as
   the vector mockups it replaces, just sized for actual UI density instead
   of an illustrative sketch. Bounded by max-height as well as max-width
   since screenshots arrive at whatever aspect ratio the app was captured
   at, not a ratio chosen to fit this box. */
.preview-shot {
  max-width: 86%;
  max-height: 88%;
  width: auto;
  height: auto;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  opacity: 0.97;
  filter: blur(2px) drop-shadow(0 16px 36px rgba(0, 0, 0, 0.32));
  transform: scale(0.95);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
}
.case:hover .preview-shot,
.case-anchor:focus-visible .preview-shot {
  filter: blur(0) drop-shadow(0 22px 46px rgba(0, 0, 0, 0.36));
  transform: scale(1) translateY(-4px);
}

/* ---- Discipline chips ------------------------------------------------
   At rest they sit tucked behind the mockup, scaled down and invisible; on
   hover each one travels out to its own resting angle with a stagger. */
.preview-chips {
  position: absolute;
  inset: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  pointer-events: none;
  z-index: 2;
}
.preview-chip {
  position: absolute;
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 600;
  line-height: 1;
  color: white;
  white-space: nowrap;
  padding: 9px 14px;
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.34);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.35);
  opacity: 0;
  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
}
.preview-chip:nth-child(1) {
  top: 17%;
  left: 15%;
  transform: translate(90px, 46px) scale(0.75);
}
.preview-chip:nth-child(2) {
  top: 35%;
  left: 6%;
  transform: translate(124px, 12px) scale(0.75);
}
.preview-chip:nth-child(3) {
  top: 57%;
  left: 12%;
  transform: translate(104px, -34px) scale(0.75);
}
.preview-chip:nth-child(4) {
  top: 22%;
  right: 9%;
  transform: translate(-94px, 34px) scale(0.75);
}
.preview-chip:nth-child(5) {
  top: 45%;
  right: 5%;
  transform: translate(-112px, -12px) scale(0.75);
}
.case:hover .preview-chip,
.case-anchor:focus-visible .preview-chip {
  opacity: 1;
}
.case:hover .preview-chip:nth-child(1),
.case-anchor:focus-visible .preview-chip:nth-child(1) {
  transform: rotate(-9deg);
  transition-delay: 0.02s;
}
.case:hover .preview-chip:nth-child(2),
.case-anchor:focus-visible .preview-chip:nth-child(2) {
  transform: rotate(6deg);
  transition-delay: 0.07s;
}
.case:hover .preview-chip:nth-child(3),
.case-anchor:focus-visible .preview-chip:nth-child(3) {
  transform: rotate(-5deg);
  transition-delay: 0.12s;
}
.case:hover .preview-chip:nth-child(4),
.case-anchor:focus-visible .preview-chip:nth-child(4) {
  transform: rotate(8deg);
  transition-delay: 0.05s;
}
.case:hover .preview-chip:nth-child(5),
.case-anchor:focus-visible .preview-chip:nth-child(5) {
  transform: rotate(-6deg);
  transition-delay: 0.1s;
}

/* ---- Status badge ------------------------------------------------------
   Fades in with the rest of the hover reveal, same timing family as the
   chips/glass bar. Always-on at rest on touch devices (see the 900px
   breakpoint below) since there's no hover to reveal it there. */
.status-badge {
  position: absolute;
  z-index: 4;
  top: 20px;
  right: 20px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: white;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 0.35s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
}
.case:hover .status-badge,
.case-anchor:focus-visible .status-badge {
  opacity: 1;
  transform: translateY(0);
}

/* ---- Glass bar ------------------------------------------------------- */
.preview-glass {
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 50%;
  width: min(78%, 620px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 28px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(14px) saturate(170%);
  -webkit-backdrop-filter: blur(14px) saturate(170%);
  box-shadow: 0 24px 48px -20px rgba(0, 0, 0, 0.45);
  opacity: 0;
  transform: translate(-50%, calc(-50% + 10px)) scale(0.97);
  transition: opacity 0.4s ease, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.06s;
}
.case:hover .preview-glass,
.case-anchor:focus-visible .preview-glass {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
.glass-product {
  font-family: var(--display);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--ink);
  font-variation-settings: 'opsz' 48, 'wdth' 95;
}
.glass-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0.04em;
  color: var(--ink-soft);
}
.case:hover .glass-cta .arrow {
  transform: translateX(3px);
}
.glass-cta .arrow {
  transition: transform 0.3s ease;
}
.case-body {
  max-width: 1000px;
}
.case-eyebrow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  font-family: var(--mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ink-muted);
  margin-bottom: 20px;
}
.case-eyebrow > span + span::before {
  content: '·';
  margin-right: 10px;
  color: var(--rule);
}
.case-product {
  color: var(--accent);
}
.case-headline {
  font-family: var(--display);
  font-size: clamp(28px, 3.4vw, 46px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.025em;
  color: var(--ink);
  font-variation-settings: 'opsz' 96, 'wdth' 95;
  transition: color 0.3s ease;
}
.case-headline :deep(em) {
  font-style: italic;
  font-weight: 500;
  color: var(--accent);
}
.case:hover .case-headline {
  color: var(--accent);
}
.case-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 0;
  margin-top: 24px;
  font-size: 16px;
  color: var(--ink-soft);
}
.case-meta > span + span::before {
  content: '·';
  margin: 0 10px;
  color: var(--ink-muted);
}
/* Respect reduced-motion: keep the reveal, drop the travel. */
@media (prefers-reduced-motion: reduce) {
  .preview-chip,
  .preview-glass,
  .preview-decor :deep(svg),
  .preview-shot {
    transition-duration: 0.01ms;
  }
  .preview-chip {
    transform: none;
  }
}

@media (max-width: 900px) {
  .case {
    gap: 28px;
  }
  .case-preview {
    border-radius: 20px;
  }
  .case-meta {
    font-size: 15px;
  }
  /* There is no hover on touch, so the resting state has to be the good one:
     mockup sharp, glass bar and its CTA always visible. The chips need room
     the narrow viewport doesn't have — .case-meta already lists that ground
     in text, so they're dropped rather than crammed. */
  .preview-chips {
    display: none;
  }
  .preview-decor :deep(svg),
  .preview-shot {
    filter: blur(0) drop-shadow(0 12px 32px rgba(0, 0, 0, 0.22));
    transform: scale(1);
  }
  .preview-glass {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    width: min(88%, 460px);
    padding: 16px 20px;
    gap: 14px;
  }
  .status-badge {
    opacity: 1;
    transform: none;
    top: 14px;
    right: 14px;
  }
  .glass-product {
    font-size: 18px;
  }
  .glass-cta {
    font-size: 12px;
  }
}
/* Below the phone breakpoint the bar can't hold two items on one line. */
@media (max-width: 560px) {
  .preview-glass {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
}
</style>
