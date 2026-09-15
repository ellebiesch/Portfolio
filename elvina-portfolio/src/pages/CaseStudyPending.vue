<template>
  <div class="case-page case-page--pending">
    <!-- HERO -->
    <section class="cps-hero">
      <div class="cps-hero-glow"></div>
      <div class="hero-noise"></div>
      <div class="container cps-hero-inner">
        <div class="cps-hero-top">
          <router-link :to="{ path: '/home', hash: '#work' }" class="back-link back-link--light"
            >← All case studies</router-link
          >
          <span class="cps-badge">CPS</span>
        </div>

        <div class="cps-hero-copy">
          <div class="cps-eyebrow">{{ meta.eyebrow }}</div>
          <h1 class="cps-h1"><em>{{ meta.title }}</em></h1>
          <p class="cps-hero-meta-line">
            <template v-for="(item, i) in meta.facts" :key="item.label">
              <span>{{ item.value }}</span
              ><span v-if="i < meta.facts.length - 1" class="sep">·</span>
            </template>
          </p>
        </div>

        <div class="cps-hero-phone">
          <img :src="heroShot" alt="Driver CPS score screen on the Cargoos mobile app" class="cps-phone-img" />
          <div class="cps-glass-bar">
            <span class="spark">✦</span>
            <span>660 CPS Score · Good — 70 points to Elite</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTEXT -->
    <section v-reveal class="section">
      <div class="prose-container prose">
        <div class="section-eyebrow">A bit of context</div>
        <p class="lead">{{ meta.context }}</p>
      </div>
    </section>

    <!-- COMING SOON -->
    <section v-reveal class="section">
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
import heroShot from '@/assets/work/cargoos-cps-score-mobile.png';

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
  data() {
    return { heroShot };
  },
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

/* ============================================================
   CPS HERO — full-bleed, using the same dark/orange gradient as
   the Cargoos card preview (preview-cargoos in CaseCard.vue), with
   the real mobile screenshot floating over it instead of a mockup.
============================================================ */
.cps-hero {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding: 140px 0 0;
  background: linear-gradient(150deg, #0b0b0a 0%, #241f1a 45%, #4a3226 78%, #6b3d26 100%);
  color: white;
}
.cps-hero-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 15%, rgba(232, 98, 60, 0.28) 0%, transparent 55%),
    radial-gradient(circle at 85% 70%, rgba(200, 165, 114, 0.16) 0%, transparent 50%);
  pointer-events: none;
}
.cps-hero-inner {
  position: relative;
  z-index: 1;
}
.cps-hero-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;
  animation: fadeUp 0.7s ease-out both;
}
.back-link--light {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0;
}
.back-link--light:hover {
  color: var(--accent-soft, #d87657);
}
.cps-badge {
  display: inline-flex;
  align-items: center;
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  border-radius: 999px;
  font-family: var(--display);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.cps-hero-copy {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 72px;
  animation: fadeUp 0.85s ease-out 0.1s both;
}
.cps-eyebrow {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f0a888;
  margin-bottom: 24px;
}
.cps-h1 {
  font-family: var(--display);
  font-size: clamp(44px, 7vw, 96px);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.03em;
  font-variation-settings: 'opsz' 96, 'wdth' 90;
  margin-bottom: 24px;
}
.cps-h1 em {
  font-style: italic;
  font-weight: 400;
}
.cps-hero-meta-line {
  font-family: var(--mono);
  font-size: 14px;
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.65);
}
.cps-hero-meta-line .sep {
  margin: 0 10px;
  color: rgba(255, 255, 255, 0.35);
}

/* Floating phone + glass callout.
   The callout used to float as an absolutely-positioned overlay near the
   bottom of the screenshot, which put it on top of the phone's own tab bar —
   half on light content, half on dark, unreadable either way. It now sits
   below the phone entirely, so it never competes with real app content and
   always reads against the plain gradient. */
.cps-hero-phone {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding-bottom: 90px;
  animation: fadeUp 0.9s ease-out 0.2s both;
}
.cps-phone-img {
  width: min(78vw, 340px);
  border-radius: 44px;
  box-shadow: 0 40px 90px -24px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.08);
  animation: cps-float 6s ease-in-out infinite;
}
@keyframes cps-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-14px);
  }
}
.cps-glass-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: min(84vw, 380px);
  padding: 14px 22px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(14px) saturate(160%);
  border-radius: 999px;
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 500;
  color: white;
  text-align: center;
  box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.5);
}
.cps-glass-bar .spark {
  color: #f0a888;
  flex-shrink: 0;
}
@media (prefers-reduced-motion: reduce) {
  .cps-phone-img,
  .cps-hero-top,
  .cps-hero-copy,
  .cps-hero-phone {
    animation: none;
  }
}

@media (max-width: 900px) {
  .cps-hero {
    padding-top: 110px;
  }
  .cps-hero-top {
    margin-bottom: 48px;
  }
  .cps-hero-copy {
    margin-bottom: 56px;
  }
  .cps-glass-bar {
    font-size: 12px;
    padding: 12px 18px;
  }
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
