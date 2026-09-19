<template>
  <section class="engagement">
    <div class="container">
      <div class="engagement-grid">
        <div v-reveal class="engagement-head">
          <div class="engagement-eyebrow">Current engagement · November 2025—present</div>
          <h2 class="engagement-title">Primoro</h2>
        </div>
        <div v-reveal="120" class="engagement-body">
          <h3 class="engagement-lead">
            Designing across a growing dental practice operating system.
          </h3>
          <p>
            Primoro is a UK dental practice operating system connecting clinical, operational,
            financial, and administrative work across multiple dental organizations.
          </p>
          <p>
            I work with the core product team as a Product Designer on a consulting basis. My scope
            spans multi-tenant administration, onboarding, finance, telephony, platform
            configuration, internal operations, and AI-assisted workflows across web, tablet, and
            mobile.
          </p>
          <p>
            Much of the work is understanding how separate parts of the platform affect one another,
            before they turn into separate design problems. A decision made during onboarding can
            change what appears later in configuration, billing, support, or practice-level
            operations.
          </p>
          <div class="engagement-attrs">
            <div class="engagement-attr">
              <div class="attr-label">Role</div>
              <div class="attr-value">Product Designer (Consultant)</div>
            </div>
            <div class="engagement-attr">
              <div class="attr-label">Scope</div>
              <div class="attr-value">Systems UX · Multi-tenant operations · Healthcare SaaS</div>
            </div>
            <div class="engagement-attr">
              <div class="attr-label">Status</div>
              <div class="attr-value">Ongoing engagement</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EngagementSection',
};
</script>

<style scoped>
.engagement {
  padding: 160px 0;
  border-bottom: 1px solid var(--rule);
}
.engagement-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 96px;
  align-items: start;
}
.engagement-eyebrow {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 1.5;
}
/* Live dot — this is the one engagement that is still running. */
.engagement-eyebrow::before {
  content: '';
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 0 4px rgba(74, 222, 128, 0.2);
}
.engagement-title {
  font-family: var(--display);
  font-size: clamp(48px, 6vw, 80px);
  font-weight: 500;
  line-height: 0.98;
  letter-spacing: -0.03em;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
}
.engagement-lead {
  font-family: var(--display);
  font-size: clamp(26px, 2.6vw, 34px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 28px;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
}
.engagement-body p {
  font-size: 18px;
  line-height: 1.65;
  margin-bottom: 20px;
  color: var(--ink-soft);
}
.engagement-attrs {
  display: flex;
  gap: 48px;
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid var(--rule);
  flex-wrap: wrap;
}
.engagement-attr {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.attr-label {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ink-muted);
}
.attr-value {
  font-size: 15px;
  color: var(--ink);
  font-weight: 500;
}

@media (max-width: 900px) {
  .engagement {
    padding: 80px 0;
  }
  .engagement-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .engagement-attrs {
    gap: 24px 32px;
  }
}
</style>
