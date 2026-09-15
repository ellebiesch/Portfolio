<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-grid">
        <div v-reveal>
          <div class="about-eyebrow">About</div>
          <h2 class="about-title">Hey, I'm <em>Elvina</em>.</h2>
        </div>
        <div v-reveal="120" class="about-body">
          <p>
            I'm usually the designer asked to look at the part of the product everyone has quietly
            agreed is “a bit complicated.” Sometimes that means rebuilding a legacy workflow.
            Sometimes it means working out an entirely new module from a long specification, several
            conversations, and a suspicious number of open questions. Either way, I want to
            understand how the work is actually done before deciding what belongs on the screen.
          </p>
          <p>
            Over the past six years I've worked across healthcare, logistics, recruitment, finance,
            conversational AI, and operational SaaS. I move between the larger product structure and
            the details that quietly break a workflow: unclear ownership, missing states,
            conflicting permissions, information arriving too late to be useful.
          </p>
          <p>
            I ask <em>why</em> a lot. Not to make the process heavier, but because the first request
            is rarely the real problem. My background in information technology also means I'm
            comfortable discussing system behavior, implementation constraints, and what engineering
            needs beyond a polished handoff. I care about visual craft. I just don't separate it
            from whether the product makes sense.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>

<style scoped>
.about {
  padding: 160px 0;
  border-bottom: 1px solid var(--rule);
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 96px;
  align-items: start;
}
.about-title {
  font-family: var(--display);
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 500;
  line-height: 0.98;
  letter-spacing: -0.025em;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
}
.about-title em {
  font-style: normal;
  font-weight: 500;
  color: var(--accent);
}
.about-body p {
  font-size: 19px;
  line-height: 1.65;
  margin-bottom: 24px;
  color: var(--ink-soft);
}
.about-body p:first-child {
  font-size: 24px;
  color: var(--ink);
  line-height: 1.45;
}
.about-body p:first-child::first-letter {
  font-family: var(--display);
  font-size: 1.5em;
  font-weight: 600;
  color: var(--accent);
  margin-right: 0.05em;
}
.about-body em {
  font-style: italic;
  color: var(--accent);
}

@media (max-width: 900px) {
  .about {
    padding: 80px 0;
  }
  .about-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
