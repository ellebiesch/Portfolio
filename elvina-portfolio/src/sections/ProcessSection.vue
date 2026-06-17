<template>
  <section class="process">
    <div class="container">
      <div class="process-header">
        <div>
          <div class="about-eyebrow">Process</div>
          <h2 class="process-title">Design <em>process</em></h2>
        </div>
        <p class="process-sub">
          A repeatable, sprint-based flow that takes a fuzzy idea and turns it into a shipped,
          documented, handed-off product.
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
          title: 'Discovery & <em>Research</em>',
          body: 'I dive deep into your business and user needs through research and analysis to identify key pain points.',
        },
        {
          num: '02',
          title: 'Ideation & <em>Concept</em>',
          body: 'I brainstorm and outline innovative solutions, focusing on user journeys and core features.',
        },
        {
          num: '03',
          title: 'Wireframing & <em>Structure</em>',
          body: 'I create detailed, responsive wireframes to map out the structure and flow of your product.',
        },
        {
          num: '04',
          title: '<em>Prototyping</em>',
          body: 'I bring designs to life with interactive prototypes that simulate real interactions and reveal usability issues early.',
        },
        {
          num: '05',
          title: 'Testing & <em>Iteration</em>',
          body: 'I test designs with real users, gather insights, and refine the product through continuous iterations.',
        },
        {
          num: '06',
          title: 'Handoff & <em>Docs</em>',
          body: 'I provide detailed design systems and documentation for a smooth handoff to developers.',
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
