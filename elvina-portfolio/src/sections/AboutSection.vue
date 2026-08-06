<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-grid">
        <div>
          <div class="about-eyebrow">About</div>
          <h2 class="about-title">Hey, I'm <em>Elvina</em>.</h2>
        </div>
        <div class="about-body">
          <p>
            I design software because I believe too many enterprise products ask people to work
            around the software instead of with it.
          </p>
          <p>
            The people I design for aren't casually browsing. They're clinicians documenting patient
            care, operations teams coordinating hundreds of moving parts, recruiters making hiring
            decisions, and dispatchers keeping businesses running. Their software shouldn't add
            cognitive load, it should remove it. That's where I do my best work: translating messy
            operational problems into products people can trust under pressure.
          </p>
          <p>
            Over the past six years I've worked across healthcare, logistics, recruitment, and
            operational SaaS, partnering closely with founders, product managers, and engineers to
            design products from early concepts through implementation.
          </p>
          <p>
            I ask a lot of <em>why</em>. I challenge requirements when they don't solve the user's
            problem. I push back on complexity when simpler solutions exist. I'd rather spend two
            extra hours questioning an idea than spend two years supporting the wrong one.
          </p>
          <p>
            The best software isn't the software people admire. It's the software they stop noticing
            because it fits naturally into how they already think and work. That's what I'm building
            toward with every product.
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
