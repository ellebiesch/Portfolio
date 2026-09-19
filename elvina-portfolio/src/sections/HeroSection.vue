<template>
  <section class="hero">
    <div class="container">
      <div class="status-pill">Senior Product Designer · Davao, Philippines · UTC+8</div>
      <h1>
        Designing the
        <mark class="hl">unglamorous, mission-critical</mark>
        parts of SaaS.
      </h1>
      <p class="hero-sub">
        Most products look convincing in a demo. The real test starts when different roles need
        different things from the same workflow, the data does not arrive neatly, and the edge case
        becomes the everyday case.
      </p>
      <p class="hero-note">
        That is the reality I design for, from product logic through implementation until the
        product holds up without someone explaining how it was supposed to work.
      </p>
      <div class="hero-cta">
        <router-link :to="{ path: '/home', hash: '#work' }" class="btn btn-primary">
          View selected work <span class="arrow">→</span>
        </router-link>
        <router-link :to="{ path: '/home', hash: '#contact' }" class="btn btn-secondary">
          Get in touch <span class="arrow">→</span>
        </router-link>
      </div>
      <div class="hero-stats">
        <div v-for="(stat, i) in stats" :key="stat.label" class="stat">
          <div class="stat-num">{{ padded(counts[i]) }}</div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="stat-label" v-html="stat.label"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const COUNT_MS = 1100;
// Held back until the stats row's own fadeUp (0.4s delay) has started.
const COUNT_START_MS = 600;

export default {
  name: 'HeroSection',
  data() {
    return {
      stats: [
        { value: 6, label: 'Years in product<br />and UX design' },
        { value: 15, label: 'Products designed<br />and shipped' },
        { value: 5, label: 'Industries across<br />B2B SaaS' },
        { value: 3, label: 'Core product surfaces<br />Web · Mobile · AI' },
      ],
      counts: [0, 0, 0, 0],
      startTimer: null,
      frame: null,
    };
  },
  mounted() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.counts = this.stats.map((s) => s.value);
      return;
    }
    this.startTimer = setTimeout(this.runCount, COUNT_START_MS);
  },
  beforeUnmount() {
    clearTimeout(this.startTimer);
    cancelAnimationFrame(this.frame);
  },
  methods: {
    // Two digits, so 6 reads as 06 and lines up with 15 in the same row.
    padded(n) {
      return String(n).padStart(2, '0');
    },
    runCount() {
      const started = performance.now();
      const step = (now) => {
        const t = Math.min((now - started) / COUNT_MS, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        this.counts = this.stats.map((s) => Math.round(s.value * eased));
        if (t < 1) this.frame = requestAnimationFrame(step);
      };
      this.frame = requestAnimationFrame(step);
    },
  },
};
</script>

<style scoped>
.hero {
  padding-top: 140px;
  padding-bottom: 120px;
  border-bottom: 1px solid var(--rule);
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  right: -10%;
  width: 70%;
  height: 100%;
  background: radial-gradient(
    circle at 70% 30%,
    rgba(216, 118, 87, 0.15) 0%,
    rgba(244, 212, 197, 0.08) 30%,
    transparent 60%
  );
  pointer-events: none;
  z-index: 0;
}
.hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -5%;
  width: 50%;
  height: 60%;
  background: radial-gradient(circle at 30% 70%, rgba(200, 165, 114, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}
.hero .container {
  position: relative;
  z-index: 1;
}
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  background: var(--bg);
  border: 1px solid var(--rule);
  border-radius: 999px;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--ink-soft);
  margin-bottom: 48px;
  animation: fadeUp 0.8s ease-out;
  box-shadow: 0 1px 2px rgba(11, 11, 10, 0.03);
}
.status-pill::before {
  content: '';
  display: inline-block;
  width: 7px;
  height: 7px;
  background: #4ade80;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(74, 222, 128, 0.2);
  animation: pulse 2s infinite;
}
.hero h1 {
  font-family: var(--display);
  font-size: clamp(54px, 9vw, 144px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.04em;
  max-width: 1200px;
  margin-bottom: 48px;
  font-variation-settings: 'opsz' 96, 'wdth' 90;
  animation: fadeUp 0.9s ease-out 0.1s both;
}
/* Accent rule under the phrase instead of a filled highlight —
   scales with the type and skips descenders. */
.hero h1 .hl {
  padding: 0;
  font-family: var(--display);
  font-weight: 700;
  letter-spacing: -0.04em;
  color: var(--fire-5);
  background: var(--fire-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
/* Both hero paragraphs run the full container row, matching the headline block. */
.hero-sub {
  font-size: 21px;
  line-height: 1.5;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 20px;
  animation: fadeUp 1s ease-out 0.2s both;
}
/* Supporting paragraph — steps down from the lead so the two read as a pair. */
.hero-note {
  font-size: 17px;
  line-height: 1.65;
  color: var(--ink-soft);
  margin-bottom: 56px;
  animation: fadeUp 1.05s ease-out 0.25s both;
}
.hero-cta {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 96px;
  animation: fadeUp 1.1s ease-out 0.3s both;
}
.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 1px solid var(--rule);
  padding-top: 40px;
  animation: fadeUp 1.2s ease-out 0.4s both;
}
.stat {
  padding-right: 32px;
  padding-left: 32px;
  border-right: 1px solid var(--rule);
}
.stat:last-child {
  border-right: none;
}
.stat-num {
  font-family: var(--display);
  font-size: 64px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--ink);
  margin-bottom: 8px;
  display: flex;
  align-items: baseline;
  gap: 4px;
  font-variation-settings: 'opsz' 72, 'wdth' 90, 'wght' 500;
}
.stat-num .plus {
  font-family: var(--mono);
  font-size: 20px;
  color: var(--accent);
  margin-left: 4px;
}
.stat-label {
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink-muted);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .hero {
    padding-top: 110px;
    padding-bottom: 80px;
  }
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 0;
  }
  .stat:nth-child(2) {
    border-right: none;
  }
  .stat {
    padding-bottom: 16px;
  }
}
</style>
