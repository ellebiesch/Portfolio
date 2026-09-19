<template>
  <div class="case-page case-page--cps">
    <!-- HERO -->
    <section class="case-hero is-dark">
      <div class="hero-noise"></div>
      <div class="container">
        <router-link :to="{ path: '/home', hash: '#work' }" class="back-link"
          >← All case studies</router-link
        >
        <div class="case-eyebrow">Case Study · Logistics</div>
        <h1 class="case-h1">CPS</h1>
        <p class="case-subhead">
          Making driver performance understandable, traceable, and portable
        </p>
        <div class="case-lede">
          <p>
            CPS turns trip activity and operational signals into a driver performance score
            ranging from 300 to 850.
          </p>
          <p>
            I designed the connected experience across the driver mobile app, carrier web portal,
            and administrative tools. The central challenge was not displaying a score. It was
            giving drivers enough context to understand and improve it, while giving carriers and
            administrators enough evidence to trust how it was produced.
          </p>
        </div>

        <div class="case-meta-strip">
          <div class="meta-item">
            <div class="meta-label">Role</div>
            <div class="meta-value">Sole Product Designer & Strategist · Part-time</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Timeline</div>
            <div class="meta-value">July 2025 — July 2026</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Platform</div>
            <div class="meta-value">Mobile · Web</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Status</div>
            <div class="meta-value">Beta · Outcome measurement pending</div>
          </div>
        </div>

        <div class="case-cover">
          <img
            :src="coverCollage"
            alt="Four CPS driver mobile app screens side by side: home score, driver score breakdown, achievements, and how your score works"
            class="cover-shot"
          />
        </div>
      </div>
    </section>

    <!-- THE PROBLEM -->
    <section v-reveal class="section">
      <div class="prose-container prose">
        <div class="section-eyebrow">The Problem</div>
        <h2 class="section-h2">A score is easy to display. Trust is harder.</h2>
        <p>
          CPS was designed around a simple product premise: a driver's performance record should
          belong to the driver and remain useful as they move between carriers.
        </p>
        <p>
          But portability creates a harder design problem. Once a score can influence how someone
          is evaluated, the number cannot feel arbitrary.
        </p>
        <p>Drivers need to understand:</p>
        <ul>
          <li>What affected their score</li>
          <li>Why it changed</li>
          <li>Which trips or events contributed to it</li>
          <li>What they can do to improve it</li>
        </ul>
        <p>
          Carriers need to see the operational evidence behind the score, while administrators
          need ways to investigate anomalies and maintain the integrity of the scoring system.
        </p>
        <p class="lead">
          Without that transparency, CPS would only replace one opaque evaluation with another.
        </p>
      </div>
      <div class="container challenge-block">
        <div class="two-col">
          <div class="col-label">The Design Challenge</div>
          <div class="prose">
            <p>
              How could CPS turn complex operational data into a score that was simple enough to
              understand, detailed enough to verify, and fair enough to act on?
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- THE SYSTEM -->
    <section v-reveal class="section system-section">
      <div class="prose-container prose">
        <div class="section-eyebrow">The System</div>
        <h2 class="section-h2">Designing the complete trust loop</h2>
        <p>I approached CPS as one connected system rather than three separate applications.</p>
        <p>
          A trip moves through an operational lifecycle. Activity from that trip contributes to a
          trip score. Trip performance feeds the driver's overall CPS score. The driver needs an
          explanation, the carrier needs operational visibility, and administrators need a way to
          investigate exceptions.
        </p>
        <p>The experience therefore had to connect five things:</p>
      </div>
      <div class="container">
        <div class="flow-row">
          <template v-for="(step, i) in trustLoop" :key="step">
            <span class="flow-step">{{ step }}</span>
            <span v-if="i < trustLoop.length - 1" class="flow-arrow">→</span>
          </template>
        </div>
      </div>
      <div class="prose-container prose">
        <p style="margin-top: 32px">
          This loop became the foundation for decisions across mobile, carrier, and administrative
          surfaces.
        </p>
      </div>
    </section>

    <!-- THE APPROACH -->
    <section v-reveal class="section">
      <div class="container">
        <div class="section-eyebrow">The Approach</div>
        <div class="process-flow">
          <!-- 01 -->
          <div class="process-step">
            <div class="process-step-num">01</div>
            <div class="process-step-content">
              <h3>Make the score explain itself</h3>
              <p>
                The driver home experience centers on the overall CPS score, current tier, recent
                performance, and the factors affecting it.
              </p>

              <div class="image-block image-block--phone">
                <img :src="homeScreen" alt="CPS driver mobile app home screen showing the overall CPS score, tier progress, performance stats, and recent achievements" />
              </div>

              <p style="margin-top: 32px">
                Five status tiers make standing easier to recognize without requiring drivers to
                interpret the number in isolation: Rookie, Pro, Veteran, Elite, and Champion. But
                the tier is only a summary. Drivers can move from the overall score into its
                contributing categories and review how recent trips affected their standing.
              </p>
              <p>
                The information hierarchy was designed to answer three questions in order: where
                do I currently stand, why am I here, and what can I do next.
              </p>

              <div class="image-pair">
                <div class="image-block">
                  <img :src="driverScoreModal" alt="CPS driver score breakdown modal showing score range, current standing, and performance tiers from Rookie to Champion" />
                </div>
                <div class="image-block">
                  <img :src="howScoreWorks" alt="CPS score factors screen showing the four weighted categories behind the score: safety record, on-time delivery, delivery quality, and experience" />
                </div>
              </div>

              <p style="margin-top: 32px">
                Badges and streaks support motivation, but they remain secondary to the score
                itself. The product should still make sense without the reward layer.
              </p>

              <div class="image-block image-block--phone">
                <img :src="achievements" alt="CPS achievements screen showing badges earned toward performance milestones" />
              </div>
            </div>
          </div>

          <!-- 02 -->
          <div class="process-step">
            <div class="process-step-num">02</div>
            <div class="process-step-content">
              <h3>Connect the number to the trip that produced it</h3>
              <p>
                An aggregate score becomes difficult to trust when the events behind it are
                invisible. Each completed trip therefore produces its own summary. Drivers can
                review the trip score alongside the activity that contributed to it instead of
                waiting for an unexplained change to appear in their overall score.
              </p>
              <p>The trip experience follows a clear lifecycle:</p>

              <div class="flow-row flow-row--tight">
                <template v-for="(step, i) in tripLifecycle" :key="step">
                  <span class="flow-step">{{ step }}</span>
                  <span v-if="i < tripLifecycle.length - 1" class="flow-arrow">→</span>
                </template>
              </div>

              <div class="image-block image-block--phone" style="margin-top: 32px">
                <img :src="tripManager" alt="CPS driver mobile app Trips screen, showing assigned and completed trips with route, cargo, and timing details" />
              </div>

              <p style="margin-top: 32px">
                The timeline gives drivers and carriers a shared record of what happened and when.
                It also creates a traceable path from operational activity to the resulting score.
                This made the score less of a verdict and more of a record drivers could inspect.
              </p>
            </div>
          </div>

          <!-- 03 -->
          <div class="process-step">
            <div class="process-step-num">03</div>
            <div class="process-step-content">
              <h3>Design for the road, not ideal conditions</h3>
              <p>
                The driver experience had to work around real operating conditions: time pressure,
                location changes, interrupted connectivity, and tasks completed outside a desk
                environment.
              </p>
              <p>
                Geofenced actions such as <strong>Ready to Load</strong> and
                <strong>Ready to Unload</strong> connect important trip updates to the driver's
                location and current stage.
              </p>
              <p>
                Proof of Delivery required equally explicit feedback. I designed distinct states
                for:
              </p>

              <ul class="state-chips state-chips--spaced">
                <li>No proof captured</li>
                <li>Photo captured</li>
                <li>Upload in progress</li>
                <li>Queued while offline</li>
                <li>Successfully submitted</li>
                <li>Upload failed and requires action</li>
              </ul>

              <p style="margin-top: 40px">
                The important decision was making system status visible. A driver should never
                have to guess whether evidence was saved, still processing, or lost. Reliable
                evidence capture matters beyond the individual screen because that evidence
                supports the trip record and, ultimately, the credibility of the score.
              </p>
            </div>
          </div>

          <!-- 04 -->
          <div class="process-step">
            <div class="process-step-num">04</div>
            <div class="process-step-content">
              <h3>Give every surface the right level of detail</h3>
              <p>
                The driver, carrier, and administrator interact with the same performance system,
                but they do not need the same interface.
              </p>

              <div class="modules-grid surfaces-grid">
                <div class="module-card">
                  <div class="module-name">Driver mobile app</div>
                  <div class="module-desc">
                    Drivers see their overall score, tier, score breakdown, recent trips,
                    trip-level performance, badges, and active load status. The experience
                    prioritizes clarity and action: what is happening now, what affected
                    performance, and what comes next.
                  </div>
                </div>
                <div class="module-card">
                  <div class="module-name">Carrier web portal</div>
                  <div class="module-desc">
                    Carriers need visibility across multiple drivers and loads. The portal brings
                    together driver standing, load progress, completed trips, and performance
                    signals without forcing teams to inspect each driver individually. It's
                    organized for comparison and operational monitoring rather than personal
                    motivation.
                  </div>
                </div>
                <div class="module-card">
                  <div class="module-name">Administrative tools</div>
                  <div class="module-desc">
                    Administrators need to understand how the scoring system is behaving across
                    the platform. Scoring configuration, anomaly review, audit history, and
                    supporting operational controls establish a path for investigating
                    questionable results instead of treating every calculated score as
                    automatically correct.
                  </div>
                </div>
              </div>

              <div class="image-block image-block--wide">
                <img :src="carrierPortal" alt="Cargoos CPS carrier web portal: Load Manager list with driver scores, statuses, and filters" />
              </div>

              <p style="margin-top: 32px">
                The same score moves across all three surfaces, but its presentation changes
                according to the decision each user needs to make.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONSTRAINTS -->
    <section v-reveal class="section">
      <div class="prose-container prose">
        <div class="section-eyebrow">Constraints</div>
        <h2 class="section-h2">Designing while the evidence was still forming</h2>
        <p>
          CPS was an early-stage product, so behavioral outcome data was not yet available during
          most of the design process.
        </p>
        <p>
          That meant separating assumptions from confirmed requirements. Core workflows needed
          enough structure to reach beta, but speculative features could not be treated as
          validated solutions.
        </p>
        <p>I focused the initial experience on the smallest complete trust loop:</p>
        <ul>
          <li>Capture trip activity</li>
          <li>Show trip progress</li>
          <li>Calculate performance</li>
          <li>Explain the score</li>
          <li>Surface operational evidence</li>
          <li>Provide administrative oversight</li>
        </ul>
        <p>
          More advanced decisions should be informed by actual beta behavior rather than expanding
          the product purely from internal assumptions.
        </p>
      </div>
    </section>

    <!-- OUTCOMES -->
    <section v-reveal class="section">
      <div class="container">
        <div class="outcomes">
          <div class="container">
            <div class="section-eyebrow">Outcomes</div>
            <h2 class="section-h2">What the beta established</h2>
            <div class="prose" style="max-width: 720px">
              <p style="color: rgba(255, 255, 255, 0.8)">
                By July 2026, CPS had a connected product foundation across the driver, carrier,
                and administrative experiences.
              </p>
            </div>
            <div class="outcomes-grid">
              <div>
                <div class="outcome-stat">An understandable driver score</div>
                <div class="outcome-desc">
                  The score, tier, contributing factors, and trip history were organized into a
                  clear performance hierarchy.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Traceability from trips to performance</div>
                <div class="outcome-desc">
                  Drivers could connect their overall standing to individual trips and the
                  operational events behind them.
                </div>
              </div>
              <div>
                <div class="outcome-stat">A complete mobile trip lifecycle</div>
                <div class="outcome-desc">
                  The driver experience covered load progression from assignment through delivery
                  and completion, including geofenced actions and Proof of Delivery states.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Fleet-level visibility</div>
                <div class="outcome-desc">
                  Carrier tools brought driver performance and load activity into an operational
                  dashboard designed for monitoring across the fleet.
                </div>
              </div>
              <div>
                <div class="outcome-stat">A foundation for governance</div>
                <div class="outcome-desc">
                  Administrative scoring controls, anomaly handling, and audit history created a
                  path for reviewing the system rather than leaving the score unquestioned.
                </div>
              </div>
            </div>
            <div class="prose outcomes-caveat">
              <p style="color: rgba(255, 255, 255, 0.65)">
                These are shipped and designed capabilities, not claims of behavioral impact.
                Adoption, comprehension, and changes in driver behavior require sufficient beta
                usage before they can be stated as outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LEARNINGS -->
    <section v-reveal class="section">
      <div class="container">
        <div class="conclusion">
          <div class="container">
            <div class="section-eyebrow">What I Learned</div>
            <p class="conclusion-quote">A score does not become trustworthy because it looks precise.</p>
            <p class="conclusion-quote">
              It becomes trustworthy when people can understand what shaped it, trace it back to
              real events, and know that mistakes can be reviewed.
            </p>
            <p class="conclusion-quote">
              CPS reinforced that the interface around a scoring model is not decoration. It is
              part of the model's <em>accountability</em>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- NEXT CASE -->
    <section v-reveal class="next-case">
      <div class="container">
        <router-link to="/case-studies/navix" class="next-case-link">
          <div class="next-label">Next case study</div>
          <div class="next-title"><em>Navix Health</em> <span class="next-arrow">→</span></div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import carrierPortal from '@/assets/work/cargoos-trip-list.png';
import driverScoreModal from '@/assets/work/cargoos-driver-score-modal.png';
import achievements from '@/assets/work/cargoos-achievements.png';
import tripManager from '@/assets/work/cargoos-trip-manager.png';
import homeScreen from '@/assets/work/cargoos-cps-score-mobile.png';
import howScoreWorks from '@/assets/work/cargoos-how-score-works.png';
import coverCollage from '@/assets/work/cargoos-cps-cover-collage.png';

export default {
  name: 'CaseStudyCPS',
  data() {
    return {
      carrierPortal,
      driverScoreModal,
      achievements,
      tripManager,
      homeScreen,
      howScoreWorks,
      coverCollage,
      trustLoop: [
        'Trip activity',
        'Performance evidence',
        'Trip score',
        'Overall driver score',
        'Review and correction',
      ],
      tripLifecycle: ['New', 'Loaded', 'In Transit', 'Delivered', 'Completed'],
    };
  },
};
</script>

<style scoped>
.case-page--cps .case-hero {
  --hero-gradient: linear-gradient(150deg, #0b0b0a 0%, #241f1a 45%, #4a3226 78%, #6b3d26 100%);
  --hero-eyebrow: #f0a888;
}
/* No fill of its own — this used to carry the same dark gradient as the
   hero behind it, which just doubled up as a visible boxed card floating
   on top of the section's own background. Stripped so the phone mockup
   sits directly on the hero gradient with nothing behind it. */
.case-page--cps .case-cover {
  background: transparent;
  box-shadow: none;
}
/* The cover is a wide four-phone collage — contain, sized off height, keeps
   the whole graphic visible and centered in the gradient rather than
   cropping into any one screen. */
.case-page--cps .cover-shot {
  width: auto;
  height: 94%;
  max-width: 90%;
  object-fit: contain;
  border-radius: 24px;
  box-shadow: 0 24px 60px -16px rgba(0, 0, 0, 0.45);
}
/* The gap between this section's closing line and "The Approach" below it
   stacked two full section paddings (80px + 80px) with nothing but empty
   space in between — reads as a dead zone rather than a paragraph break. */
.case-page--cps .system-section {
  padding-bottom: 24px;
}
.case-page--cps .meta-value {
  font-size: 18px;
}
.case-page--cps .case-meta-strip {
  grid-template-columns: repeat(4, 1fr);
}
.case-page--cps .outcomes-grid {
  grid-template-columns: repeat(3, 1fr);
}
/* Closing statement — same treatment as CaseStudyNavix.vue: the shared
   .conclusion-quote size (clamp 32–56px) is built for a single hero-scale
   pull-quote, not three stacked reflective paragraphs, and has no spacing
   rule for consecutive instances of itself. */
.case-page--cps .conclusion-quote {
  font-size: clamp(22px, 2.3vw, 27px);
  font-weight: 300;
  line-height: 1.55;
  max-width: none;
}
.case-page--cps .conclusion-quote + .conclusion-quote {
  margin-top: 28px;
}
.case-page--cps .conclusion {
  padding: 64px 0;
}
.case-page--cps .outcomes-caveat {
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

/* Hero dek + lede — see the identical pattern in CaseStudyNavix.vue. */
.case-subhead {
  font-family: var(--display);
  font-size: clamp(22px, 2.6vw, 30px);
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: white;
  max-width: 760px;
  margin-bottom: 24px;
  font-variation-settings: 'opsz' 48, 'wdth' 95;
  animation: fadeUp 0.8s ease-out 0.2s both;
}
.case-lede {
  max-width: 720px;
  margin-bottom: 64px;
  animation: fadeUp 0.8s ease-out 0.26s both;
}
.case-lede p {
  font-size: 19px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
}
.case-lede p:last-child {
  margin-bottom: 0;
}
@media (prefers-reduced-motion: reduce) {
  .case-subhead,
  .case-lede {
    animation: none;
  }
}

/* Design-challenge divider, same treatment as Navix. */
.case-page--cps .challenge-block {
  margin-top: 96px;
  padding-top: 56px;
  border-top: 1px solid var(--rule);
}

/* ---- Flow row — renders "A → B → C" sequences as pills instead of plain
   arrow-joined text, used for the trust loop and the trip lifecycle. ---- */
.flow-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 28px 0;
}
.flow-row--tight {
  margin: 20px 0;
}
.flow-step {
  padding: 10px 18px;
  background: var(--bg-soft);
  border: 1px solid var(--rule);
  border-radius: 999px;
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0.02em;
  color: var(--ink);
  white-space: nowrap;
}
.flow-arrow {
  color: var(--accent);
  font-family: var(--mono);
  flex-shrink: 0;
}

/* ---- Proof-of-Delivery state chips — status labels read better as
   distinct tags than as a plain bulleted list. ---- */
.state-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  margin: 20px 0 !important;
  padding: 0;
}
.state-chips li {
  padding: 8px 16px;
  background: var(--bg-soft);
  border: 1px solid var(--rule);
  border-radius: 10px;
  font-size: 14px;
  color: var(--ink-soft);
  margin-bottom: 0 !important;
}
.state-chips li::before {
  content: none !important;
}
/* The chips sat flush against the paragraph above and below with only the
   default 20px list margin — too tight given each chip is its own bordered
   pill, not plain text. */
.state-chips--spaced {
  margin: 32px 0 8px !important;
  gap: 12px;
}
.state-chips--spaced li {
  padding: 10px 18px;
}

/* Real screenshots inside .image-block / .image-pair — sized to fit the
   block without cropping (portrait phone shots and landscape desktop
   shots share this file, so contain, not cover). A percentage max-height
   on the <img> only resolves against a parent with a DEFINITE height —
   .image-block's shared rule only sets min-height, so height:auto here is
   required for the percentage below to mean anything, instead of the
   block growing to whatever height the untamed image wants.

   No background fill — the shared .image-block rule doesn't set one
   either, so this sits directly on the section's own white page
   background, which is also what the phone mockups are exported on. Same
   effect as matching it explicitly, without carrying a color that would
   need to change if the section behind it ever isn't plain white. */
.case-page--cps .image-block,
.case-page--cps .image-pair .image-block {
  background: transparent;
  height: 640px;
  min-height: 0;
}
.image-block img {
  max-width: 92%;
  max-height: 92%;
  width: auto;
  height: auto;
  border-radius: 14px;
  box-shadow: 0 20px 44px -16px rgba(0, 0, 0, 0.35);
}
/* The Load Manager shot is landscape, not a phone portrait — the 92% cap
   above still leaves it looking small next to the phone screens' full
   height, so it gets more room to fill the block's width. */
.case-page--cps .image-block--wide img {
  max-width: 96%;
}
/* A single portrait phone stretched across the full ~1000px content
   column left it looking small and adrift in a mostly-empty box — the
   paired blocks look right because two phones share that width. Capping
   a solo phone block's own width, not just the image inside it, is what
   actually fixes that: centered and sized like a device mockup, not like
   a wide photo with a phone floating in it. */
.case-page--cps .image-block--phone {
  max-width: 460px;
  margin-left: auto;
  margin-right: auto;
}

/* The 3-surface grid reuses .modules-grid/.module-card but only needs 3
   columns here, not the auto-fill default meant for longer module lists. */
/* The shared .modules-grid carries no margin of its own, so it sat flush
   against the paragraph above and the screenshot below. */
.surfaces-grid {
  grid-template-columns: repeat(3, 1fr);
  margin-top: 32px;
  margin-bottom: 40px;
  gap: 20px;
}
.surfaces-grid .module-card {
  padding: 28px 24px;
}

@media (max-width: 900px) {
  .case-page--cps .case-meta-strip {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .surfaces-grid {
    grid-template-columns: 1fr;
  }
  .case-page--cps .image-block {
    height: 340px;
  }
}
</style>
