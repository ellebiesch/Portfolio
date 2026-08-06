<template>
  <section id="work" class="work">
    <div class="container">
      <div class="work-header">
        <div>
          <div class="section-label work-eyebrow">Selected work</div>
          <h2 class="work-title">Recent <em>case studies</em></h2>
        </div>
        <div class="section-label work-range">2020 — 2026</div>
      </div>
      <div class="work-grid">
        <!-- Primoro (featured) -->
        <case-card
          to="/case-studies/primoro"
          featured
          preview-class="preview-foxbury"
          number="01 / Healthcare · Featured"
          year="2025 — Present"
          title="<em>Primoro</em>"
          summary="Founding Product Designer for a multi-product dental practice operating system designed to streamline clinical workflows, and day-to-day practice operations."
          :tags="['Dental SaaS', 'Multi-product', 'RBAC', 'Web + Tablet + Mobile']"
          :attrs="[
            { label: 'Role', value: 'Founding Product Designer · Freelance Retainer' },
            { label: 'Surface', value: 'Web, Tablet and Mobile App' },
            { label: 'Scope', value: 'End-to-end · Multi-product' },
          ]"
        >
          <template #preview>
            <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
              <rect x="40" y="40" width="520" height="240" rx="14" fill="white" opacity="0.95" />
              <rect x="60" y="60" width="130" height="220" rx="6" fill="#c8a572" opacity="0.2" />
              <circle cx="92" cy="90" r="10" fill="#8b6f3f" />
              <rect x="72" y="124" width="100" height="6" rx="2" fill="#8b6f3f" opacity="0.5" />
              <rect x="72" y="138" width="80" height="6" rx="2" fill="#8b6f3f" opacity="0.3" />
              <rect x="72" y="164" width="100" height="6" rx="2" fill="#8b6f3f" opacity="0.5" />
              <rect x="72" y="178" width="70" height="6" rx="2" fill="#8b6f3f" opacity="0.3" />
              <rect x="72" y="204" width="100" height="6" rx="2" fill="#8b6f3f" opacity="0.5" />
              <rect x="72" y="218" width="60" height="6" rx="2" fill="#8b6f3f" opacity="0.3" />
              <rect x="72" y="244" width="100" height="6" rx="2" fill="#8b6f3f" opacity="0.5" />
              <rect x="210" y="60" width="350" height="64" rx="6" fill="#8b6f3f" opacity="0.15" />
              <rect x="228" y="80" width="140" height="10" rx="2" fill="#8b6f3f" />
              <rect x="228" y="100" width="90" height="6" rx="2" fill="#8b6f3f" opacity="0.5" />
              <rect x="500" y="80" width="44" height="22" rx="11" fill="#8b6f3f" />
              <rect x="210" y="140" width="167" height="140" rx="6" fill="#8b6f3f" opacity="0.1" />
              <rect x="222" y="156" width="80" height="8" rx="2" fill="#8b6f3f" opacity="0.7" />
              <rect x="222" y="174" width="140" height="6" rx="2" fill="#8b6f3f" opacity="0.4" />
              <rect x="222" y="188" width="120" height="6" rx="2" fill="#8b6f3f" opacity="0.4" />
              <rect x="222" y="220" width="110" height="36" rx="6" fill="#8b6f3f" opacity="0.25" />
              <rect x="393" y="140" width="167" height="140" rx="6" fill="#8b6f3f" opacity="0.1" />
              <rect x="405" y="156" width="80" height="8" rx="2" fill="#8b6f3f" opacity="0.7" />
              <rect x="405" y="174" width="140" height="6" rx="2" fill="#8b6f3f" opacity="0.4" />
              <rect x="405" y="188" width="120" height="6" rx="2" fill="#8b6f3f" opacity="0.4" />
              <rect x="405" y="220" width="110" height="36" rx="6" fill="#8b6f3f" opacity="0.25" />
            </svg>
          </template>
        </case-card>

        <!-- Navix -->
        <case-card
          to="/case-studies/navix"
          preview-class="preview-navix"
          number="Behavioral Healthcare · Platform"
          year="2021 — 2025"
          title="Navix <em>Health</em>"
          summary="Designed core experiences across a behavioral healthcare platform from EMR documentation and CRM workflows to AI-assisted tools and a scalable design system used across web and mobile."
          :tags="['Behavioral Healthcare', 'Cross-Platform', 'Design system', 'AI Integrated Tools']"
          :attrs="[
            { label: 'Role', value: 'Foundation product designer' },
            { label: 'Surface', value: 'Web · Mobile · AI' },
          ]"
        >
          <template #preview>
            <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
              <rect x="40" y="40" width="520" height="210" rx="14" fill="white" opacity="0.95" />
              <rect x="60" y="60" width="160" height="10" rx="2" fill="#1a3a3a" />
              <rect x="60" y="80" width="100" height="6" rx="2" fill="#1a3a3a" opacity="0.4" />
              <rect x="60" y="110" width="220" height="44" rx="6" fill="#1a3a3a" opacity="0.08" />
              <rect x="60" y="164" width="220" height="44" rx="6" fill="#3d7373" opacity="0.4" />
              <rect x="300" y="110" width="240" height="120" rx="6" fill="#1a3a3a" opacity="0.06" />
              <circle cx="340" cy="140" r="12" fill="#3d7373" />
              <rect x="360" y="134" width="100" height="6" rx="2" fill="#1a3a3a" opacity="0.5" />
              <rect x="360" y="146" width="70" height="5" rx="2" fill="#1a3a3a" opacity="0.3" />
              <rect x="320" y="180" width="200" height="6" rx="2" fill="#1a3a3a" opacity="0.3" />
              <rect x="320" y="194" width="160" height="6" rx="2" fill="#1a3a3a" opacity="0.3" />
              <rect x="320" y="208" width="180" height="6" rx="2" fill="#1a3a3a" opacity="0.3" />
            </svg>
          </template>
        </case-card>

        <!-- CPS / Cargoos (no page) -->
        <case-card
          to="/case-studies/cps"
          preview-class="preview-cargoos"
          number="03 / Operations"
          year="2025 — 2026"
          title="<em>CPS</em>"
          summary="Designed a driver performance platform that helps carriers improve safety, credibility, and operational visibility through trip intelligence and scoring."
          :tags="['Logistics', 'Scoring system']"
          :attrs="[
            { label: 'Role', value: ' Product Designer + Strategist · Part-time' },
            { label: 'Surface', value: 'Web + Mobile' },
          ]"
        >
          <template #preview>
            <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="40" width="500" height="210" rx="14" fill="white" opacity="0.95" />
              <rect x="70" y="60" width="460" height="32" rx="6" fill="#0b0b0a" opacity="0.08" />
              <circle cx="92" cy="76" r="8" fill="#8B3A2F" />
              <rect x="110" y="72" width="80" height="8" rx="2" fill="#0b0b0a" opacity="0.7" />
              <rect x="450" y="70" width="60" height="12" rx="6" fill="#8B3A2F" opacity="0.3" />
              <rect x="70" y="105" width="460" height="28" rx="4" fill="#0b0b0a" opacity="0.04" />
              <rect x="80" y="113" width="80" height="6" rx="2" fill="#0b0b0a" opacity="0.6" />
              <rect x="200" y="113" width="60" height="6" rx="2" fill="#0b0b0a" opacity="0.4" />
              <rect x="300" y="113" width="100" height="6" rx="2" fill="#0b0b0a" opacity="0.4" />
              <rect x="430" y="111" width="40" height="10" rx="3" fill="#8B3A2F" />
              <rect x="70" y="140" width="460" height="28" rx="4" fill="#0b0b0a" opacity="0.04" />
              <rect x="80" y="148" width="80" height="6" rx="2" fill="#0b0b0a" opacity="0.6" />
              <rect x="200" y="148" width="60" height="6" rx="2" fill="#0b0b0a" opacity="0.4" />
              <rect x="300" y="148" width="100" height="6" rx="2" fill="#0b0b0a" opacity="0.4" />
              <rect x="430" y="146" width="40" height="10" rx="3" fill="#c8a572" />
              <rect x="70" y="175" width="460" height="28" rx="4" fill="#0b0b0a" opacity="0.04" />
              <rect x="80" y="183" width="80" height="6" rx="2" fill="#0b0b0a" opacity="0.6" />
              <rect x="200" y="183" width="60" height="6" rx="2" fill="#0b0b0a" opacity="0.4" />
              <rect x="300" y="183" width="100" height="6" rx="2" fill="#0b0b0a" opacity="0.4" />
              <rect x="430" y="181" width="40" height="10" rx="3" fill="#4a453e" />
              <rect x="70" y="210" width="460" height="32" rx="4" fill="#0b0b0a" opacity="0.06" />
            </svg>
          </template>
        </case-card>

        <!-- Atlas -->
        <case-card
          to="/case-studies/atlas"
          preview-class="preview-atlas"
          number="Recruitment · Executive Search"
          year="2023 — 2024"
          title="Atlas <em>ATS</em>"
          summary="Redesigned a legacy applicant tracking system into a modern hiring platform for executive search firms, including AI-assisted candidate search and comparison. Winner of the EY National Business Competition 2024."
          :tags="['Recruitment', 'Pipeline', 'Collaboration']"
          :attrs="[
            { label: 'Role', value: 'Sole Product designer · Award-winning'},
            { label: 'Surface', value: 'Web' },
          ]"
        >
          <template #preview>
            <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="40" width="500" height="210" rx="14" fill="white" opacity="0.95" />
              <rect x="70" y="60" width="105" height="180" rx="8" fill="#8B3A2F" opacity="0.12" />
              <rect x="80" y="72" width="60" height="8" rx="2" fill="#8B3A2F" opacity="0.8" />
              <rect x="80" y="90" width="40" height="6" rx="2" fill="#8B3A2F" opacity="0.5" />
              <rect x="80" y="110" width="85" height="40" rx="4" fill="white" />
              <rect x="80" y="156" width="85" height="40" rx="4" fill="white" />
              <rect x="185" y="60" width="105" height="180" rx="8" fill="#8B3A2F" opacity="0.12" />
              <rect x="195" y="72" width="60" height="8" rx="2" fill="#8B3A2F" opacity="0.8" />
              <rect x="195" y="110" width="85" height="40" rx="4" fill="white" />
              <rect x="300" y="60" width="105" height="180" rx="8" fill="#8B3A2F" opacity="0.12" />
              <rect x="310" y="72" width="60" height="8" rx="2" fill="#8B3A2F" opacity="0.8" />
              <rect x="310" y="110" width="85" height="40" rx="4" fill="white" />
              <rect x="310" y="156" width="85" height="40" rx="4" fill="white" />
              <rect x="310" y="202" width="85" height="30" rx="4" fill="white" />
              <rect x="415" y="60" width="105" height="180" rx="8" fill="#8B3A2F" opacity="0.12" />
              <rect x="425" y="72" width="60" height="8" rx="2" fill="#8B3A2F" opacity="0.8" />
              <rect x="425" y="110" width="85" height="40" rx="4" fill="white" />
            </svg>
          </template>
        </case-card>

        <!-- Truckpedia (no page) -->
        <case-card
          to="/case-studies/truckpedia"
          preview-class="preview-truckpedia"
          number="05 / Logistics"
          year="2022 — 2023"
          title="<em>Truckpedia</em>"
          summary="Improved a transportation management platform used by carriers to manage dispatch, accounting, settlements, maintenance, and driver operations across web and mobile."
          :tags="['Logistics · TMS · Web + Mobile', 'Field ops']"
          :attrs="[
            { label: 'Role', value: 'UX and UI designer' },
            { label: 'Surface', value: 'Web + Mobile' },
          ]"
        >
          <template #preview>
            <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
              <rect x="180" y="20" width="240" height="240" rx="32" fill="white" opacity="0.95" />
              <rect x="200" y="50" width="200" height="14" rx="3" fill="#2d3748" />
              <rect x="200" y="72" width="120" height="8" rx="2" fill="#2d3748" opacity="0.5" />
              <rect x="200" y="95" width="200" height="60" rx="8" fill="#2d3748" opacity="0.1" />
              <circle cx="220" cy="125" r="12" fill="#4a5568" />
              <rect x="240" y="118" width="100" height="6" rx="2" fill="#2d3748" opacity="0.6" />
              <rect x="240" y="130" width="60" height="5" rx="2" fill="#2d3748" opacity="0.4" />
              <rect x="200" y="165" width="95" height="50" rx="8" fill="#2d3748" opacity="0.08" />
              <rect x="305" y="165" width="95" height="50" rx="8" fill="#2d3748" opacity="0.08" />
              <rect x="200" y="225" width="200" height="20" rx="10" fill="#2d3748" />
            </svg>
          </template>
        </case-card>
      </div>
    </div>
  </section>
</template>

<script>
import CaseCard from '@/components/CaseCard.vue';

export default {
  name: 'WorkSection',
  components: { CaseCard },
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
.work-title {
  font-family: var(--display);
  font-size: clamp(56px, 8vw, 96px);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 0.92;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
}
.work-title em {
  font-style: normal;
  font-weight: 500;
  color: var(--accent);
}
.work-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .work-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 900px) {
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
