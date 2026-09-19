<template>
  <section class="process">
    <div class="container">
      <div v-reveal class="process-header">
        <div>
          <div class="about-eyebrow">Process</div>
          <h2 class="process-title">How I approach the <em>work</em>.</h2>
        </div>
        <p class="process-sub">
          Some problems need research. Some need a workflow mapped on a whiteboard. Others need a
          realistic prototype before anyone can see what's wrong. I use enough process to make a
          sound decision, then keep moving.
        </p>
      </div>
      <!-- Whole grid, not per step — same 1px-gap-as-rule constraint as the
           client list: fading cells individually shows the rule through. -->
      <div v-reveal="90" class="process-grid">
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
          title: '<em>Get the real context</em>',
          body: 'I speak with product, engineering, and the people who understand the day-to-day work. I clarify who does what, where the current process breaks, and what the business actually needs to change.',
        },
        {
          num: '02',
          title: '<em>Work out how the product behaves</em>',
          body: 'For complex products, the screen is the final layer. I map the structure, roles, permissions, states, and dependencies first, along with what should happen when something fails or falls outside the expected flow.',
        },
        {
          num: '03',
          title: '<em>Design something the team can challenge</em>',
          body: 'Once the logic is stable enough, I move into realistic interfaces and prototype the interactions carrying the most risk. This is usually where vague requirements become visible and disagreements become much easier to resolve.',
        },
        {
          num: '04',
          title: '<em>Stay through implementation</em>',
          body: "I document the details engineers shouldn't have to guess, review the built experience, and work with engineering and QA to close the remaining gaps. A good Figma file isn't the result. The working product is.",
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
/* Four steps in a 2×2 — the gap-as-rule trick leaves a solid orphan cell if the
   column count doesn't divide the step count. */
.process-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  color: var(--fire-3);
}
.step-body {
  font-size: 15px;
  line-height: 1.6;
  color: var(--ink-soft);
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
