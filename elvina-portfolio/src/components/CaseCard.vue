<template>
  <component
    :is="to ? 'router-link' : 'div'"
    :to="to || undefined"
    class="case-anchor"
  >
    <article class="case" :class="[{ featured }]">
      <div class="case-preview" :class="previewClass">
        <span class="case-link">Read case study →</span>
        <div class="preview-decor">
          <slot name="preview" />
        </div>
      </div>
      <div class="case-body">
        <div class="case-top">
          <span class="case-number">{{ number }}</span>
          <span class="case-year">{{ year }}</span>
        </div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <h3 class="case-title" v-html="title"></h3>
        <p class="case-summary">{{ summary }}</p>
        <div v-if="tags.length" class="case-tags">
          <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <div v-if="attrs.length" class="case-attrs">
          <div v-for="attr in attrs" :key="attr.label" class="case-attr">
            <div class="attr-label">{{ attr.label }}</div>
            <div class="attr-value">{{ attr.value }}</div>
          </div>
        </div>
      </div>
    </article>
  </component>
</template>

<script>
export default {
  name: 'CaseCard',
  props: {
    number: { type: String, default: '' },
    year: { type: String, default: '' },
    title: { type: String, required: true },
    summary: { type: String, default: '' },
    tags: { type: Array, default: () => [] },
    attrs: { type: Array, default: () => [] },
    previewClass: { type: String, default: '' },
    featured: { type: Boolean, default: false },
    to: { type: String, default: '' },
  },
};
</script>

<style scoped>
.case-anchor {
  text-decoration: none;
  color: inherit;
  display: contents;
}
.case {
  background: var(--bg-soft);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  border: 1px solid var(--rule);
  display: flex;
  flex-direction: column;
}
.case:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px -16px rgba(11, 11, 10, 0.15);
  border-color: var(--ink);
}
.case.featured {
  grid-column: span 2;
}
.case-preview {
  height: 280px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--rule);
}
.case.featured .case-preview {
  height: 360px;
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
.preview-decor :deep(svg) {
  width: 60%;
  height: auto;
  opacity: 0.95;
  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.2));
  transition: transform 0.5s ease;
}
.case:hover .preview-decor :deep(svg) {
  transform: scale(1.04) translateY(-4px);
}
.case-body {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}
.case-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
}
.case-number {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--accent);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.case-year {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-muted);
  letter-spacing: 0.04em;
}
.case-title {
  font-family: var(--display);
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.05;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
}
.case-title :deep(em) {
  font-style: normal;
  font-weight: 500;
  color: var(--accent);
}
.case-summary {
  font-size: 16px;
  line-height: 1.55;
  color: var(--ink-soft);
}
.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}
.case-attrs {
  display: flex;
  gap: 32px;
  padding-top: 20px;
  border-top: 1px solid var(--rule);
  margin-top: auto;
}
.case-attr {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.attr-label {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ink-muted);
}
.attr-value {
  font-size: 14px;
  color: var(--ink);
  font-weight: 500;
}
.case-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0.04em;
  color: var(--ink);
  text-decoration: none;
  position: absolute;
  top: 24px;
  right: 24px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 8px 14px;
  border-radius: 999px;
  transition: all 0.3s;
  z-index: 2;
  opacity: 0;
  transform: translateX(8px);
}
.case:hover .case-link {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 1024px) {
  .case.featured {
    grid-column: span 1;
  }
  .case.featured .case-preview {
    height: 280px;
  }
}
@media (max-width: 900px) {
  .case-attrs {
    flex-wrap: wrap;
    gap: 16px 24px;
  }
}
</style>
