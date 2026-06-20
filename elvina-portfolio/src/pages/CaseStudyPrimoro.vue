<template>
  <div class="case-page case-page--primoro">
    <!-- HERO -->
    <section class="case-hero">
      <div class="container">
        <router-link :to="{ path: '/home', hash: '#work' }" class="back-link"
          >← All case studies</router-link
        >
        <div class="case-eyebrow">Case Study · Dental SaaS · In Progress</div>
        <h1 class="case-h1"><em>Primoro</em></h1>
        <p class="case-tagline">A modern dental practice operating system</p>

        <div class="case-meta-strip">
          <div class="meta-item">
            <div class="meta-label">Role</div>
            <div class="meta-value">Lead Product Designer </div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Engagement</div>
            <div class="meta-value">Freelance · Retainer</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Timeline</div>
            <div class="meta-value">2025 — Present</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Platform</div>
            <div class="meta-value">Web · Tablet · Mobile </div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Industry</div>
            <div class="meta-value">Dental Practice</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Team</div>
            <div class="meta-value">PMs · Engineers · Stakeholders</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTEXT -->
    <section class="section">
      <div class="prose-container prose">
        <div class="section-eyebrow">A bit of context</div>
        <p class="lead">
          Primoro is a multi-product operating system for modern dental practices — designed to
          replace the patchwork of legacy tools clinical and admin teams stitch together. 
        </p>
        <p>
          I'm leading design across the system on a freelance retainer, partnering closely
          with the founder team to ship modules end-to-end — from research through high-fidelity
          prototypes and engineering handoff. The work spans multiple user roles with RBAC and operational
          workflows baked into nearly every screen.
        </p>
      </div>
    </section>

    <!-- COMING SOON -->
    <section class="section">
      <div class="container">
        <div class="coming-soon">
          <div class="coming-soon-inner">
            <div class="status-tag"><span class="dot"></span>Status · Active Project</div>
            <h2 class="coming-soon-title">
              Case study is coming<br />soon<span class="ish">...ish</span>.
            </h2>
            <p class="coming-soon-subcopy">
              Still in the <strong>organizing phase</strong>. The project is active, the work is
              plentiful, and I'm in the middle of figuring out what's actually worth showing publicly
              — and what stays under wraps.
            </p>
            <a
              href="mailto:elvinagarcia.design@gmail.com?subject=Primoro%20case%20study"
              class="coming-soon-cta"
              >Ask me about it directly <span class="arrow">→</span></a
            >
          </div>
        </div>
      </div>
    </section>
 </div>
</template>
<script>
export default {
  name: 'CaseStudyPrimoro',
};
</script>

<style scoped>
.case-page--primoro {
  --accent: #000000;

}
.case-page--atlas .prose p.lead::first-letter {
  color: #E8623C !important;
}
.case-page--primoro .case-meta-strip {
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 0;
}

.coming-soon {
  margin: 60px 0;
  padding: 120px 56px;
  text-align: center;
  background: linear-gradient(135deg, var(--bg-soft) 0%, #f4ecde 100%);
  border-radius: 32px;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--rule);
}
.coming-soon::before {
  content: '';
  position: absolute;
  top: -20%;
  right: -10%;
  width: 60%;
  height: 80%;
  background: radial-gradient(circle, rgba(216, 118, 87, 0.15) 0%, transparent 60%);
  pointer-events: none;
}
.coming-soon::after {
  content: '';
  position: absolute;
  bottom: -10%;
  left: -10%;
  width: 50%;
  height: 60%;
  background: radial-gradient(circle, rgba(200, 165, 114, 0.12) 0%, transparent 60%);
  pointer-events: none;
}
.coming-soon-inner {
  position: relative;
  z-index: 1;
  max-width: 880px;
  margin: 0 auto;
}
.status-tag {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid var(--rule);
  border-radius: 999px;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 40px;
}
.status-tag .dot {
  width: 8px;
  height: 8px;
  background: #E8623C;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(232, 98, 60, 0.2);
  animation: primoro-pulse 2s infinite;
}
@keyframes primoro-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 4px rgba(139, 58, 47, 0.2);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(139, 58, 47, 0);
  }
}
.coming-soon-title {
  font-family: var(--display);
  font-size: clamp(48px, 8vw, 112px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.04em;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
  margin-bottom: 24px;
  color: var(--ink);
}
.coming-soon-title .ish {
  font-style: italic;
  color: var(--accent);
  font-weight: 400;
}
.coming-soon-subcopy {
  font-size: 22px;
  line-height: 1.5;
  color: var(--ink-soft);
  max-width: 640px;
  margin: 0 auto 48px;
}
.coming-soon-subcopy strong {
  color: var(--ink);
  font-weight: 600;
}
.coming-soon-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 28px;
  background: var(--ink);
  color: white;
  text-decoration: none;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px -4px rgba(11, 11, 10, 0.2);
}
.coming-soon-cta:hover {
  background: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 12px 28px -8px rgba(139, 58, 47, 0.5);
}
.coming-soon-cta .arrow {
  transition: transform 0.25s;
}
.coming-soon-cta:hover .arrow {
  transform: translateX(4px);
}

.expect-section {
  padding: 100px 0;
  border-top: 1px solid var(--rule);
}
.expect-eyebrow {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 24px;
  text-align: center;
}
.expect-heading {
  font-family: var(--display);
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.03em;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
  text-align: center;
  margin-bottom: 64px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.expect-heading em {
  font-style: normal;
  font-weight: 600;
  color: var(--accent);
}
.expect-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
}
.expect-card {
  background: var(--bg-soft);
  border: 1px solid var(--rule);
  border-radius: 20px;
  padding: 32px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}
.expect-card::before {
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
.expect-card:hover {
  transform: translateY(-4px);
  background: white;
  box-shadow: 0 16px 32px -10px rgba(11, 11, 10, 0.1);
}
.expect-card:hover::before {
  transform: scaleX(1);
}
.expect-tag {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
}
.expect-title {
  font-family: var(--display);
  font-size: 22px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.015em;
  margin-bottom: 10px;
  font-variation-settings: 'opsz' 72, 'wdth' 95;
}
.expect-desc {
  font-size: 15px;
  line-height: 1.6;
  color: var(--ink-soft);
}

@media (max-width: 900px) {
  .coming-soon {
    padding: 80px 24px;
    border-radius: 20px;
  }
  .expect-section {
    padding: 80px 0;
  }
  .expect-grid {
    grid-template-columns: 1fr;
  }
}
</style>
