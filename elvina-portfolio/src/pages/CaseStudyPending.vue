<template>
  <div class="case-page case-page--pending">
    <!-- HERO -->
    <section class="case-hero">
      <div class="container">
        <router-link :to="{ path: '/home', hash: '#work' }" class="back-link"
          >← All case studies</router-link
        >
        <div class="case-eyebrow">{{ meta.eyebrow }}</div>
        <h1 class="case-h1"><em>{{ meta.title }}</em></h1>
        <p class="case-tagline">{{ meta.tagline }}</p>

        <div class="case-meta-strip">
          <div v-for="item in meta.facts" :key="item.label" class="meta-item">
            <div class="meta-label">{{ item.label }}</div>
            <div class="meta-value">{{ item.value }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTEXT -->
    <section class="section">
      <div class="prose-container prose">
        <div class="section-eyebrow">A bit of context</div>
        <p class="lead">{{ meta.context }}</p>
      </div>
    </section>

    <!-- COMING SOON -->
    <section class="section">
      <div class="container">
        <div class="coming-soon">
          <div class="coming-soon-inner">
            <div class="status-tag"><span class="dot"></span>Status · {{ meta.status }}</div>
            <h2 class="coming-soon-title">
              Case study is coming<br />soon<span class="ish">...ish</span>.
            </h2>
            <p class="coming-soon-subcopy">
              The work is done — the story isn't written yet. I'd rather publish a case study that
              actually explains the thinking than a gallery of screens. In the meantime, go read one
              of the finished ones instead.
            </p>
            <router-link :to="{ path: '/home', hash: '#work' }" class="coming-soon-cta">
              Read a finished case study <span class="arrow">→</span>
            </router-link>

            <div class="finished-links">
              <router-link
                v-for="item in others"
                :key="item.to"
                :to="item.to"
                class="finished-link"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const CASE_STUDIES = [
  { to: '/case-studies/navix', name: 'Navix Health' },
  { to: '/case-studies/atlas', name: 'Atlas ATS' },
];

const FALLBACK = {
  title: 'This case study',
  eyebrow: 'Case Study · In Progress',
  tagline: '',
  status: 'In organization',
  context: '',
  facts: [],
};

export default {
  name: 'CaseStudyPending',
  computed: {
    meta() {
      return { ...FALLBACK, ...(this.$route.meta.caseInfo || {}) };
    },
    others() {
      return CASE_STUDIES.filter((item) => item.to !== this.$route.path);
    },
  },
};
</script>

<style scoped>
.case-page--pending {
  --accent: #000000;
}
.case-page--pending .case-meta-strip {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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
  background: #e8623c;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(232, 98, 60, 0.2);
  animation: pending-pulse 2s infinite;
}
@keyframes pending-pulse {
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
.finished-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 28px;
}
.finished-link {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--ink-soft);
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid var(--rule);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.6);
  transition: all 0.25s ease;
}
.finished-link:hover {
  color: var(--ink);
  border-color: var(--ink);
  background: rgba(255, 255, 255, 0.95);
}

@media (max-width: 900px) {
  .coming-soon {
    padding: 72px 24px;
    border-radius: 24px;
  }
  .coming-soon-subcopy {
    font-size: 18px;
  }
}
</style>
