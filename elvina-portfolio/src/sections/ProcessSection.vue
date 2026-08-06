<template>
  <section class="process">
    <div class="container">
      <div class="process-header">
        <div>
          <div class="about-eyebrow">Process</div>
          <h2 class="process-title">Design <em>process</em></h2>
        </div>
        <p class="process-sub">
          Not a waterfall. Not a vague "design thinking" loop. A sprint-based flow built for B2B
          teams that need to ship without burning cycles on process theater.
        </p>
      </div>
      <div class="process-grid">
        <div v-for="step in steps" :key="step.num" class="process-step">
          <div class="step-num">{{ step.num }}</div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <h3 class="step-title" v-html="step.title"></h3>
          <p class="step-body">{{ step.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProcessSection',
  data() {
    return {
      steps: [
        {
          num: '01',
          title: '<em>Understand the problem</em>',
          body: "I don't open Figma until I understand the business goal, user workflow, technical constraints, and what's already been tried. Most design problems start long before the first screen.",
        },
        {
          num: '02',
          title: '<em>Design the system first</em>',
          body: 'Information architecture, workflows, permissions, and content hierarchy come before UI. Strong visuals can’t compensate for weak product logic.',
        },
        {
          num: '03',
          title: '<em>Validate with realistic interfaces</em>',
          body: 'I move into high fidelity earlier than most designers because stakeholders respond more accurately to products that feel real. It leads to faster decisions and fewer revisions.',
        },
        {
          num: '04',
          title: '<em>Prototype high risk interactions</em>',
          body: 'Not everything needs a prototype. Complex workflows, permissions, edge cases, and multi-step tasks do. Those interactions get tested before engineering begins implementation.',
        },
        {
          num: '05',
          title: '<em>Prepare for implementation</em>',
          body: "Every handoff includes specifications, component guidance, interaction notes, and edge cases. Engineers shouldn't have to interpret design decisions, they should be able to build them confidently.",
        },
        {
          num: '06',
          title: '<em>Learn after launch</em>',
          body: "Shipping isn't the finish line. I look at feedback, recurring friction, and adoption patterns to improve the next iteration.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.process {
  padding: 160px 0;
  border-bottom: 1px solid var(--rule);
  background: var(--bg-soft);
  position: relative;
  overflow: hidden;
}
.process::before {
  content: '';
  position: absolute;
  top: -10%;
  left: -10%;
  width: 50%;
  height: 70%;
  background: radial-gradient(circle, rgba(216, 118, 87, 0.06) 0%, transparent 60%);
  pointer-events: none;
}
.process .container {
  position: relative;
  z-index: 1;
}
.process-header {
  margin-bottom: 72px;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 96px;
  align-items: end;
}
.process-title {
  font-family: var(--display);
  font-size: clamp(56px, 8vw, 96px);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 0.92;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
}
.process-title em {
  font-style: normal;
  font-weight: 500;
  color: var(--accent);
}
.process-sub {
  font-size: 19px;
  line-height: 1.6;
  color: var(--ink-soft);
}
.process-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--rule);
  border: 1px solid var(--rule);
  border-radius: 20px;
  overflow: hidden;
}

.process-step {
  background: var(--bg);
  padding: 40px 32px 36px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.3s ease;
  position: relative;
  min-height: 220px;
}
.process-step::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}
.process-step:hover {
  background: var(--bg-soft);
}
.process-step:hover::before {
  transform: scaleX(1);
}
.step-num {
  font-family: var(--display);
  font-size: 56px;
  font-weight: 500;
  line-height: 1;
  color: var(--ink);
  letter-spacing: -0.04em;
  margin-bottom: 4px;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
}
.step-title {
  font-family: var(--display);
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.1;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
}
.step-title :deep(em) {
  font-style: normal;
  font-weight: 500;
  color: var(--accent);
}
.step-body {
  font-size: 15px;
  line-height: 1.6;
  color: var(--ink-soft);
}

@media (max-width: 1024px) {
  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 900px) {
  .process {
    padding: 80px 0;
  }
  .process-header {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .process-grid {
    grid-template-columns: 1fr;
  }
}
</style>
