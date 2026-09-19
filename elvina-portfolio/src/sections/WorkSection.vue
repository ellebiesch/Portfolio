<template>
  <section id="work" class="work">
    <div class="container">
      <div v-reveal class="work-header">
        <div class="work-head-main">
          <div class="section-label work-eyebrow">Selected work</div>
          <h2 class="work-title">
            A few complicated products I've helped make easier to <em>work with</em>.
          </h2>
          <p class="work-sub">
            Clinical documentation, dispatch operations, recruitment pipelines, driver performance,
            and the systems sitting behind them.
          </p>
        </div>
        <div class="section-label work-range">2021 — 2026</div>
      </div>
      <div class="work-grid">
        <!-- Navix -->
        <case-card
          v-reveal
          to="/case-studies/navix"
          preview-class="preview-navix"
          product="Navix Health"
          domain="Behavioral healthcare · Web, mobile & AI"
          year="2021 — 2025"
          headline="I designed the clinical documentation, CRM, and AI tools across a behavioral healthcare platform — and the <em>design system</em> that kept them consistent."
          :meta="[
            'Lead Product Designer',
            'Clinical documentation',
            'Form Builder',
            'CRM',
            'AI tools',
            'Design System V2',
          ]"
          :chips="['Systems UX', 'Design System', 'Clinical UX', 'AI Features', 'Mobile']"
          :screenshot="navixShot"
        />

        <!-- CPS / Cargoos (no page) -->
        <case-card
          v-reveal
          to="/case-studies/cps"
          preview-class="preview-cargoos"
          product="Cargoos CPS"
          domain="Logistics · Driver performance"
          year="July 2025 — July 2026"
          headline="I turned raw trip data, driver behavior, and safety events into a <em>performance score</em> carriers and drivers can both act on."
          :meta="[
            'Product Designer and Strategist',
            'Part-time',
            'Driver mobile app',
            'Trip intelligence',
            'Scoring system',
            'Carrier dashboard',
          ]"
          :chips="['Product Strategy', 'Mobile App', 'Scoring Logic', 'Dashboards', 'Field Ops']"
          :screenshot="cpsShot"
        />

        <!-- Atlas -->
        <case-card
          v-reveal
          to="/case-studies/atlas"
          preview-class="preview-atlas"
          status="Coming soon"
          product="Atlas ATS"
          domain="Recruitment · Executive search"
          year="2023 — 2024"
          headline="I rebuilt a legacy applicant tracking system around the way executive recruiters <em>actually work</em>."
          :meta="[
            'Sole Product Designer',
            'Legacy redesign',
            'Candidate pipeline',
            'AI-assisted search',
            'EY National Business Competition 2024',
          ]"
          :chips="['Legacy Redesign', 'Workflow Design', 'AI Search', 'Web App', 'Recruitment']"
          :screenshot="atlasShot"
        />

        <!-- Truckpedia (no page) -->
        <case-card
          v-reveal
          to="/case-studies/truckpedia"
          preview-class="preview-truckpedia"
          product="Truckpedia"
          domain="Logistics · Transportation management"
          year="2022 — 2023"
          headline="I designed the dispatch, scheduling, and settlement workflows a transportation team <em>runs its day on</em>."
          :meta="[
            'UX/UI Designer',
            'Dispatch planning',
            'Driver scheduling',
            'CRM and accounting',
            'Web and mobile',
          ]"
          :chips="['Dispatch UX', 'Field Mobile', 'Back Office', 'Web + Mobile', 'Logistics']"
          :screenshot="truckpediaShot"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CaseCard from '@/components/CaseCard.vue';
import navixShot from '@/assets/work/navix-cc-view.png';
import cpsShot from '@/assets/work/cargoos-cps-score-mobile.png';
import truckpediaShot from '@/assets/work/truckpedia-dispatch-calendar.png';
import atlasShot from '@/assets/work/atlas-dashboard.png';

export default {
  name: 'WorkSection',
  components: { CaseCard },
  data() {
    return { navixShot, cpsShot, truckpediaShot, atlasShot };
  },
};
</script>

<style scoped>
.work {
  padding: 160px 0;
  border-bottom: 1px solid var(--rule);
}
.work-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 80px;
  gap: 32px;
}
.work-eyebrow {
  margin-bottom: 24px;
}
.work-range {
  margin-bottom: 8px;
}
/* Sized down from the old two-word title — this one is a full sentence and
   needs to stay a headline, not a wall. */
.work-head-main {
  max-width: 820px;
}
.work-title {
  font-family: var(--display);
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
}
.work-title em {
  font-style: normal;
  font-family: var(--display);
  font-weight: 700;
  letter-spacing: -0.04em;
  color: var(--fire-5);
  background: var(--fire-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.work-sub {
  margin-top: 24px;
  font-size: 19px;
  line-height: 1.6;
  color: var(--ink-soft);
  max-width: 640px;
}
/* One case per row — each is a full-bleed preview with the outcome stated
   underneath, rather than two cards side by side. */
.work-grid {
  display: flex;
  flex-direction: column;
  gap: 120px;
}

@media (max-width: 900px) {
  .work-grid {
    gap: 72px;
  }
  .work {
    padding: 80px 0;
  }
  .work-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
}
</style>
