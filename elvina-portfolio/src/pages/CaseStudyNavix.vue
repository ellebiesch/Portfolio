<template>
  <div class="case-page case-page--navix">
    <!-- HERO -->
    <section class="case-hero is-dark">
      <div class="hero-noise"></div>
      <div class="container">
        <router-link :to="{ path: '/home', hash: '#work' }" class="back-link"
          >← All case studies</router-link
        >
        <div class="case-eyebrow">Case Study · Behavioral Health</div>
        <h1 class="case-h1">Navix Health</h1>
        <p class="case-subhead">
          Scaling a growing healthcare platform without letting the product fracture
        </p>
        <div class="case-lede">
          <p>
            Navix grew from a lightweight clinical tool into an operating platform spanning CRM,
            EHR, revenue cycle management, scheduling, documentation, and administration.
          </p>
          <p>
            I led product design across that expansion, creating the shared workflows and system
            patterns that allowed new modules to feel like parts of the same product — not
            separate tools added over time.
          </p>
        </div>

        <div class="case-meta-strip">
          <div class="meta-item">
            <div class="meta-label">Role</div>
            <div class="meta-value">Lead Product Designer</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Timeline</div>
            <div class="meta-value">2021 — 2025</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Platform</div>
            <div class="meta-value">Web · Mobile</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Team</div>
            <div class="meta-value">1 Junior Designer · 2 Product Managers · 17 Engineers</div>
          </div>
        </div>

        <div class="case-cover">
          <div class="placeholder-badge">Cover · Group Notes — Navix Health platform</div>
          <img
            :src="coverImage"
            alt="Navix Health Group Notes list, grouped by Not Started, In Progress, and Completed"
            class="cover-shot"
          />
        </div>
      </div>
    </section>

    <!-- THE PROBLEM -->
    <section v-reveal class="section">
      <div class="prose-container prose">
        <div class="section-eyebrow">The Problem</div>
        <h2 class="section-h2">The product was growing faster than its foundation</h2>
        <p>
          The early version of Navix worked when its scope was small. But as new clinical and
          operational areas were added, familiar tasks began behaving differently depending on
          where users encountered them.
        </p>
        <p>
          Adding a note, reviewing patient history, completing an assessment, or moving between
          records could require a different interaction in every module. Important patient context
          was spread across the system, and each new feature introduced another opportunity for
          inconsistency.
        </p>
        <p class="lead">Navix was gaining capability, but losing coherence.</p>
      </div>
      <div class="container challenge-block">
        <div class="two-col">
          <div class="col-label">The Design Challenge</div>
          <div class="prose">
            <p>
              How could we support deeper clinical and operational workflows without turning every
              new module into a separate product?
            </p>
          </div>
        </div>
        <div class="findings-grid">
          <div class="finding">
            <div class="finding-num">01</div>
            <h3 class="finding-title">Similar work behaved differently</h3>
            <p class="finding-body">
              Notes, logs, assessments, metrics, and documents appeared throughout the EHR, but
              followed different structures and interactions.
            </p>
          </div>
          <div class="finding">
            <div class="finding-num">02</div>
            <h3 class="finding-title">Clinical context broke between screens</h3>
            <p class="finding-body">
              Patient identity, episode information, risks, and recent activity were not always
              available where decisions were being made.
            </p>
          </div>
          <div class="finding">
            <div class="finding-num">03</div>
            <h3 class="finding-title">Product growth increased design debt</h3>
            <p class="finding-body">
              Without shared patterns, expanding the platform meant repeatedly solving the same
              interaction problems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- MY ROLE -->
    <section v-reveal class="section">
      <div class="container">
        <div class="two-col">
          <div class="col-label">My Role</div>
          <div class="prose">
            <p>
              I was the primary designer across Navix, working with one junior designer, two
              product managers, engineers, clinical advisors, and company stakeholders.
            </p>
            <p>
              My responsibility extended beyond individual features. I helped define how
              information was structured, how workflows connected across modules, and which
              interactions needed to become reusable parts of the product.
            </p>
            <p><strong>I led:</strong></p>
            <ul>
              <li>Cross-module information architecture and workflows</li>
              <li>Clinical documentation patterns</li>
              <li>Web and mobile interface design</li>
              <li>Prototyping and interaction specifications</li>
              <li>Design System v2.2 and accessibility guidance</li>
              <li>Developer handoff and implementation review</li>
              <li>Design direction and junior-designer mentorship</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- THE PLATFORM -->
    <section v-reveal class="section">
      <div class="container">
        <div class="section-eyebrow">The Platform</div>
        <h2 class="section-h2">The platform I was designing across</h2>
        <div class="prose">
          <p>
            Navix brought the clinical and operational sides of a behavioral health organization
            into one workspace.
          </p>
          <p>
            The platform included CRM and communications, a deeply nested EHR, revenue cycle
            management, scheduling, time reporting, documents, reporting, integrations, and
            administrative controls.
          </p>
          <p>
            The challenge was not simply fitting more features into the interface. It was
            establishing a product structure that could support different roles and workflows
            without asking users to relearn the system in every module.
          </p>
        </div>
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
              <h3>Keep patient context within reach</h3>
              <p>
                Clinical work rarely happens in one straight line. A clinician may move between
                medical history, medications, notes, assessments, labs, and outcomes while working
                with the same patient. Previously, important context was distributed across
                separate areas of the record — users had to navigate away or reconstruct that
                information as they moved through the workflow.
              </p>
              <p>
                I helped reorganize the patient workspace around persistent context: identity,
                episode information, allergies, risk indicators, and relevant clinical history
                remained accessible across the EHR. This turned the patient record from a
                collection of destinations into a connected working environment.
              </p>
            </div>
          </div>

          <!-- 02 -->
          <div class="process-step">
            <div class="process-step-num">02</div>
            <div class="process-step-content">
              <h3>Design the pattern before the module</h3>
              <p>
                Navix needed the same types of clinical records in several parts of the EHR:
                Notes, Logs, Assessments, Health Metrics, and Documents.
              </p>
              <p>
                Designing each one as a standalone feature would have created multiple ways to
                complete essentially the same task. It would also have made every new module more
                expensive to design, build, and maintain.
              </p>
              <p>
                I defined shared structures and interaction rules that could be reused across
                clinical areas while still accommodating different data and permissions.
              </p>
              <div class="pattern-note">
                <span class="pattern-icon">↻</span>
                <div>
                  <strong>One pattern, many surfaces</strong>
                  A Nursing Log and a Medication Log could hold different information without
                  behaving like two unrelated products.
                </div>
              </div>
              <p style="margin-top: 20px">
                The result was not one rigid template. It was a common product grammar that could
                flex around the clinical context.
              </p>
            </div>
          </div>

          <!-- 03 -->
          <div class="process-step">
            <div class="process-step-num">03</div>
            <div class="process-step-content">
              <h3>Structure documentation around the work being done</h3>
              <p>
                Group Notes exposed the limitations of the original documentation model. The
                earlier experience relied heavily on shared free-text entries — session
                information, participant activity, and individual observations competed for space
                inside the same record, making documentation difficult to complete and harder to
                review.
              </p>
              <p>I restructured the workflow into two levels:</p>
              <div class="two-level-list">
                <ul>
                  <li>
                    <strong>Shared session context.</strong> Facilitators, schedule, location,
                    service details, and group-level information were recorded once.
                  </li>
                  <li>
                    <strong>Participant-level documentation.</strong> Attendance, participation,
                    observations, outcomes, and individual notes could be documented separately for
                    each client.
                  </li>
                </ul>
              </div>
              <p>
                This preserved the relationship between the group session and each patient's
                clinical record without forcing clinicians to repeat the same information.
              </p>

              <div class="note-bar">
                <span class="icon">Note</span>
                <span
                  >Due to sensitive healthcare information, only limited screenshots are provided.
                  The visuals here focus on layout shifts, hierarchy, and how the redesign handles
                  density — without showing real client data.</span
                >
              </div>

              <div class="compare-grid">
                <div class="compare-card">
                  <div class="compare-visual before">
                    <span class="compare-tag before-tag">Before</span>
                    <img
                      :src="groupNoteBefore"
                      alt="Legacy group note: free-text boxes stacked per client with no structure"
                      class="compare-shot"
                    />
                  </div>
                  <div class="compare-body">
                    <div class="compare-label">Before</div>
                    <div class="compare-title">Cluttered free-text fields with no structure</div>
                  </div>
                </div>
                <div class="compare-card">
                  <div class="compare-visual after">
                    <span class="compare-tag">After</span>
                    <img
                      :src="groupNoteAfter"
                      alt="Redesigned Navix group note: structured fields, per-client participation ratings, and treatment plan references"
                      class="compare-shot"
                    />
                  </div>
                  <div class="compare-body">
                    <div class="compare-label">After</div>
                    <div class="compare-title">Structured, high-density documentation</div>
                  </div>
                </div>
              </div>
              <p class="image-caption">
                Shared session context recorded once; participant-level documentation kept
                separate for each client.
              </p>
            </div>
          </div>

          <!-- 04 -->
          <div class="process-step">
            <div class="process-step-num">04</div>
            <div class="process-step-content">
              <h3>Make dense records easier to scan</h3>
              <p>
                The patient Hub needed to support two jobs at once: provide enough information for
                clinical work and help users quickly understand what required attention. The
                earlier experience gave most information similar visual weight — important actions
                and clinical context were present, but difficult to distinguish from lower-priority
                details.
              </p>
              <p>
                I reorganized the Hub around a clearer information hierarchy, separating patient
                context, clinical areas, record details, and available actions. The goal was not to
                reduce the amount of information — in healthcare software, density is often
                unavoidable. The goal was to make that density navigable.
              </p>

              <div class="compare-grid">
                <div class="compare-card">
                  <div class="compare-visual before">
                    <span class="compare-tag before-tag">Before</span>
                    <img
                      :src="hubBefore"
                      alt="Legacy medical records screen: a long single-column list of demographic fields"
                      class="compare-shot"
                    />
                  </div>
                  <div class="compare-body">
                    <div class="compare-label">Before</div>
                    <div class="compare-title">Generic layout with weak hierarchy</div>
                  </div>
                </div>
                <div class="compare-card">
                  <div class="compare-visual after">
                    <span class="compare-tag">After</span>
                    <img
                      :src="hubAfter"
                      alt="Redesigned Navix Hub: a client header with tabbed sections and grouped information cards"
                      class="compare-shot"
                    />
                  </div>
                  <div class="compare-body">
                    <div class="compare-label">After</div>
                    <div class="compare-title">
                      Surfaces actions and recent activity without overwhelming
                    </div>
                  </div>
                </div>
              </div>
              <p class="image-caption">
                Patient context, clinical areas, record details, and available actions — separated
                so the density stays navigable.
              </p>
            </div>
          </div>

          <!-- 05 -->
          <div class="process-step">
            <div class="process-step-num">05</div>
            <div class="process-step-content">
              <h3>Make consistency part of how Navix shipped</h3>
              <p>
                A connected experience could not depend on every designer or engineer remembering
                how a previous screen had been handled.
              </p>
              <p>
                I built Design System v2.2 to establish reusable components, states, interaction
                patterns, and accessibility guidance aligned with WCAG 2.1.
              </p>
              <p>
                The system gave product and engineering teams a shared foundation for introducing
                new workflows without recreating basic interface decisions each time.
              </p>
              <p>
                It also gave the junior designer clearer constraints to work within and made
                design reviews less subjective.
              </p>
              <span class="artifact-pill">Design System v2.2 · WCAG 2.1</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OUTCOMES -->
    <section v-reveal class="section">
      <div class="container">
        <div class="outcomes">
          <div class="container">
            <div class="section-eyebrow">Outcomes</div>
            <h2 class="section-h2">What shipped, and what it changed</h2>
            <div class="prose" style="max-width: 720px">
              <p style="color: rgba(255, 255, 255, 0.8)">
                The most important result was not a cleaner interface. Navix gained a more
                reliable way to expand.
              </p>
            </div>
            <div class="outcomes-grid">
              <div>
                <div class="outcome-stat">A connected clinical workspace</div>
                <div class="outcome-desc">
                  Patient context and clinical navigation were brought into a more cohesive
                  experience across the EHR.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Reusable clinical patterns</div>
                <div class="outcome-desc">
                  Notes, logs, assessments, health metrics, and documents could be applied across
                  different clinical areas without introducing a new interaction model each time.
                </div>
              </div>
              <div>
                <div class="outcome-stat">More structured documentation</div>
                <div class="outcome-desc">
                  Group Notes separated shared session details from participant-level clinical
                  information, making complex records easier to complete and review.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Greater clinical depth</div>
                <div class="outcome-desc">
                  The product expanded across 12+ clinical and operational areas, including
                  admissions, medical records, medications, nursing, labs, outcomes, attendance,
                  rounds, and incident reporting.
                </div>
              </div>
              <div>
                <div class="outcome-stat">A foundation for continued growth</div>
                <div class="outcome-desc">
                  Design System v2.2 gave future modules an established set of components,
                  behaviors, and accessibility rules to build from.
                </div>
              </div>
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
            <p class="conclusion-quote">
              Consistency in complex software does not mean making every screen look or behave
              exactly the same.
            </p>
            <p class="conclusion-quote">
              It means users should not have to relearn how the product thinks every time they
              move into another part of it.
            </p>
            <p class="conclusion-quote">
              The strongest system was not the one with the most components. It was the one that
              made repeated decisions predictable while leaving enough room for the clinical work
              to remain <em>specific</em>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- NEXT CASE -->
    <section v-reveal class="next-case">
      <div class="container">
        <router-link to="/case-studies/atlas" class="next-case-link">
          <div class="next-label">Next case study</div>
          <div class="next-title"><em> Atlas ATS</em> <span class="next-arrow">→</span></div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import coverImage from '@/assets/navix-group-notes-list.png';
import hubBefore from '@/assets/navix-hub-before.png';
import hubAfter from '@/assets/navix-hub-after.png';
import groupNoteBefore from '@/assets/navix-group-note-before.png';
import groupNoteAfter from '@/assets/navix-group-note-after.png';

export default {
  name: 'CaseStudyNavix',
  data() {
    return {
      coverImage,
      hubBefore,
      hubAfter,
      groupNoteBefore,
      groupNoteAfter,
    }
  },
}
</script>

<style scoped>
.case-page--navix .case-hero {
  --hero-gradient: linear-gradient(150deg, #0f2323 0%, #1a3a3a 45%, #2a5454 78%, #3d7373 100%);
  --hero-eyebrow: #8fd4c4;
}
.case-page--navix .case-cover {
  background: linear-gradient(135deg, #1a3a3a 0%, #2a5454 50%, #3d7373 100%);
  box-shadow: 0 32px 80px -24px rgba(26, 58, 58, 0.4);
}
/* Real product screenshots — anchored top so the header/nav stays visible
   while the tall page body crops away. */
.case-page--navix .cover-shot {
  width: 92%;
  height: 88%;
  object-fit: cover;
  object-position: top center;
  border-radius: 12px;
  box-shadow: 0 24px 60px -16px rgba(0, 0, 0, 0.45);
}
.case-page--navix .compare-shot {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  object-fit: cover;
  object-position: top center;
}
.case-page--navix .compare-visual {
  min-height: 340px;
  overflow: hidden;
}
@media (max-width: 900px) {
  .case-page--navix .compare-visual {
    min-height: 240px;
  }
}
.case-page--navix .meta-value {
  font-size: 20px;
}
/* Four fields now that Industry has been folded into the eyebrow — five
   would leave an awkward half-empty column. */
.case-page--navix .case-meta-strip {
  grid-template-columns: repeat(4, 1fr);
}
.case-page--navix .outcomes-grid {
  grid-template-columns: repeat(3, 1fr);
}
/* The "lead" line above and the design-challenge label below both sit flush
   against their containers with no shared margin between them — without
   this the two blocks visually run together. */
/* The two-level breakdown inside step 03 sat directly between two paragraphs
   with only the default list margin — boxing it and adding real padding
   gives it room to breathe instead of reading as a cramped extension of the
   paragraph above it. */
.case-page--navix .two-level-list {
  background: var(--bg-soft);
  border-radius: 16px;
  padding: 32px 36px;
  margin: 24px 0;
}
.case-page--navix .two-level-list ul {
  margin: 0;
}
.case-page--navix .two-level-list li:last-child {
  margin-bottom: 0;
}
.case-page--navix .challenge-block {
  margin-top: 96px;
  padding-top: 56px;
  border-top: 1px solid var(--rule);
}

/* Hero dek + lede — sits between the h1 and the meta strip, replacing the
   single-paragraph .case-tagline with a short headline plus two supporting
   paragraphs. Animation mirrors the fadeUp chain in case-study.css.
   Hardcoded to light text, not var(--ink)/var(--ink-soft) — the hero is
   permanently on the dark gradient now, not the white background these
   tokens assume. */
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

/* Closing statement — three short paragraphs sharing .conclusion-quote need
   spacing between them; the shared class has none since it was designed for
   a single quote. */
.case-page--navix .conclusion-quote + .conclusion-quote {
  margin-top: 28px;
}
/* This closing note reads as a reflection, not a hero pull-quote — the
   shared .conclusion-quote size (clamp 32–56px) was built for the latter. */
.case-page--navix .conclusion-quote {
  font-size: clamp(22px, 2.3vw, 27px);
  font-weight: 300;
  line-height: 1.55;
  max-width: none;
}
/* The shared .conclusion padding (120px) was sized for a hero-scale pull
   quote; this box now holds smaller reflective text, so the top/bottom
   whitespace read as excessive at that size. */
.case-page--navix .conclusion {
  padding: 64px 0;
}

@media (max-width: 900px) {
  .case-page--navix .case-meta-strip {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
</style>
