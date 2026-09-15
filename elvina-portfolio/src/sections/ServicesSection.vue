<template>
  <section id="expertise" class="services">
    <div class="container">
      <div v-reveal class="services-header">
        <div class="section-label services-eyebrow">Expertise</div>
        <h2 class="services-title">Where I'm most <em>useful</em>.</h2>
      </div>
      <div class="service-grid">
        <div v-reveal class="service">
          <div class="service-num">01</div>
          <div class="service-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M3 9h18M9 3v18" />
            </svg>
          </div>
          <h3 class="service-title">New product areas with <em>too many open questions</em></h3>
          <p class="service-body">
            Give me a dense specification, scattered requirements, or an early product idea, and
            I'll work out the actors, workflow, states, dependencies, and decisions the interface
            needs to support.
          </p>
        </div>
        <div v-reveal="90" class="service">
          <div class="service-num">02</div>
          <div class="service-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <h3 class="service-title">
            Existing products that have <em>outgrown their structure</em>
          </h3>
          <p class="service-body">
            As SaaS products expand, navigation gets crowded, patterns drift, and features stop
            behaving like parts of the same product. I help teams find the underlying structure
            again.
          </p>
        </div>
        <div v-reveal="180" class="service">
          <div class="service-num">03</div>
          <div class="service-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2v20M2 12h20" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </div>
          <h3 class="service-title">Teams that need design to <em>stay close to the build</em></h3>
          <p class="service-body">
            I prepare detailed interactions, component behavior, responsive requirements, and edge
            cases, then review the implementation with engineering and QA. The work isn't finished
            because the Figma file is tidy.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
};
</script>

<style scoped>
.services {
  padding: 160px 0;
  border-bottom: 1px solid var(--rule);
  background: var(--bg-soft);
  position: relative;
  overflow: hidden;
}
.services::before {
  content: '';
  position: absolute;
  top: -10%;
  right: -10%;
  width: 60%;
  height: 80%;
  background: radial-gradient(circle, rgba(216, 118, 87, 0.06) 0%, transparent 60%);
  pointer-events: none;
}
.services .container {
  position: relative;
  z-index: 1;
}
/* Single column now — the section leads with the title alone, no standfirst. */
.services-header {
  margin-bottom: 72px;
  max-width: 900px;
}
.services-eyebrow {
  margin-bottom: 24px;
}
.services-title {
  font-family: var(--display);
  font-size: clamp(48px, 7vw, 80px);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 0.92;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
}
.services-title em {
  font-style: normal;
  font-weight: 500;
  color: var(--accent);
}
.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.service {
  background: var(--bg);
  padding: 40px 32px 36px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;
  border: 1px solid var(--rule);
  /* Named properties, not `all` — see the note in StrengthsSection. */
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  overflow: hidden;
}
.service::before {
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
.service:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -12px rgba(11, 11, 10, 0.1);
}
.service:hover::before {
  transform: scaleX(1);
}
.service-num {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.06em;
  color: var(--accent);
  font-weight: 500;
}
.service-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--bg-card);
  border: 1px solid var(--rule);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
}
.service-title {
  font-family: var(--display);
  font-size: 26px;
  font-weight: 400;
  letter-spacing: -0.015em;
  line-height: 1.15;
}
.service-title em {
  font-style: italic;
  color: var(--accent);
}
.service-body {
  font-size: 15px;
  line-height: 1.6;
  color: var(--ink-soft);
}

@media (max-width: 1024px) {
  .service-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 900px) {
  .services {
    padding: 80px 0;
  }
}
</style>
