<template>
  <div class="case-page case-page--navix">
      <!-- PASSWORD GATE -->
    <div v-if="!unlocked" class="gate">
      <div class="gate-box">
        <p class="gate-label">This case study is password protected.</p>
        <input
          v-model="password"
          type="password"
          placeholder="Enter password"
          @keyup.enter="unlock"
        />
        <button @click="unlock">View case study</button>
        <p v-if="error" class="gate-error">Incorrect password. Try again.</p>
      </div>
    </div>
    <!-- HERO -->
    <section class="case-hero">
      <div class="container">
        <router-link :to="{ path: '/home', hash: '#work' }" class="back-link"
          >← All case studies</router-link
        >
        <div class="case-eyebrow">Case Study · Behavioral Health</div>
        <h1 class="case-h1">Navix Health</h1>
        <p class="case-tagline">
          A behavioral health operations platform — CRM, EHR, RCM, scheduling, documentation, and
          admin in one workspace. I led design across the system as it grew from a lightweight tool
          into a full operating platform for behavioral practices.
        </p>

        <div class="case-meta-strip">
          <div class="meta-item">
            <div class="meta-label">Role</div>
            <div class="meta-value">Lead Designer</div>
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
            <div class="meta-label">Industry</div>
            <div class="meta-value">Behavioral Health</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Team</div>
            <div class="meta-value">1 Junior Designer · 2 PMs · 17 Engineers</div>
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

    <!-- OVERVIEW -->
    <section class="section">
      <div class="prose-container prose">
        <div class="section-eyebrow">Overview</div>
        <p class="lead">
          Navix began as a lightweight system with a handful of basic modules — simple medication
          management, a client list, a hub, and document uploads. What it became is something much
          bigger: a behavioral health operations platform spanning CRM, EHR, revenue cycle
          management, scheduling, internal communications, and the admin surface that runs the
          business behind the clinic.
        </p>
        <p>
          As Lead Designer, my work covered the entire workspace — not a single product area. That
          meant defining how clinical workflows (notes, incident reports, group sessions, rounds)
          coexisted with operational ones (billing, scheduling, time reporting, document management)
          without forcing clinicians and admins to learn two different products.
        </p>
        <p>
          The EHR alone was a sub-platform of its own: 12+ top-level modules — Hub, Admissions,
          Clinical, Medical, Medications, Nursing, Labs, Documents, Outcomes, Attendance, Rounds —
          each containing nested workflows for notes, logs, assessments, and health metrics. The
          challenge wasn't just designing screens; it was designing <em>reusable patterns</em> that
          could behave consistently across dozens of different clinical contexts.
        </p>
      </div>
    </section>

    <!-- BEFORE: CHALLENGES -->
    <section class="section">
      <div class="container">
        <div class="two-col">
          <div class="col-label">The Problem</div>
          <div class="prose">
            <h2 class="section-h2">Where Navix was falling short</h2>
            <p>
              The early Navix worked, but it didn't <em>scale</em>. Each module was being built in
              isolation — clinical tools, billing tools, scheduling tools — and the experience
              reflected that. Staff were forced to navigate around the product instead of through it,
              and the gaps showed up in every workflow.
            </p>
            <div class="challenges">
              <div class="challenges-label"><span class="marker">✕</span> Before — Key challenges</div>
              <ul>
                <li>
                  <strong>Disconnected modules.</strong> CRM, clinical, and billing functions felt
                  like separate products bolted together.
                </li>
                <li>
                  <strong>Minimal clinical depth.</strong> Documentation and medication tools were
                  limited to add/edit/delete operations.
                </li>
                <li>
                  <strong>Generic documentation.</strong> Notes were static, without adaptation to
                  encounter type or role.
                </li>
                <li>
                  <strong>Weak brand identity.</strong> Inconsistent UI gave the platform a
                  "prototype" look across modules.
                </li>
                <li>
                  <strong>Workflow gaps.</strong> Clinicians lacked access to historical logs,
                  outcomes, and context across the platform.
                </li>
                <li>
                  <strong>Inefficient space use.</strong> Data-heavy workflows crammed into layouts
                  without hierarchy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MY ROLE -->
    <section class="section">
      <div class="container">
        <div class="two-col">
          <div class="col-label">My Role</div>
          <div class="prose">
            <h2 class="section-h2">Lead designer across the whole platform</h2>
            <p>
              I led the design on Navix end-to-end, partnered with one junior designer, and worked
              directly with PMs, engineers, clinical advisors, and stakeholders. My responsibility
              wasn't a single product — it was the entire workspace: web and mobile, clinical and
              operational, internal-facing and admin.
            </p>
            <ul>
              <li>
                <strong>Cross-module design</strong> — CRM, EHR (12+ clinical areas including
                Nursing, Clinical, Medications, Labs, Rounds, Group Notes, Incident Reports), RCM,
                Calendar, Time Reporting, Documents and Messaging
              </li>
              <li>
                <strong>Reusable system patterns</strong> — Notes, Logs, Assessments, HealthMetrics,
                and Documents designed once and applied across multiple clinical modules
              </li>
              <li>
                <strong>Admin surface</strong> — User Management, Form Templates, System Settings,
                Group Schedules, RCM Management, Reports, Integrations
              </li>
              <li>
                <strong>Design system & governance</strong> — the foundation every new module was
                built on
              </li>
              <li>
                <strong>Brand & UI refresh</strong> — refreshing visual identity for a more premium,
                enterprise-ready feel
              </li>
              <li>
                <strong>Mentoring</strong> — guiding the junior designer through critiques, handoffs,
                and component decisions
              </li>
              <li>
                <strong>Stakeholder collaboration</strong> — translating clinical and operational
                input into structured product decisions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- AFTER: ENHANCEMENTS -->
    <section class="section">
      <div class="container">
        <div class="section-eyebrow">The Approach</div>
        <h2 class="section-h2">From scattered tools to one operating platform</h2>
        <div class="prose-container prose">
          <p>
            The goal wasn't just to add features — it was to make Navix feel like
            <strong>one product</strong> instead of a collection of them. We expanded scope across
            CRM, EHR, RCM, scheduling, documentation, and admin tooling, while running a parallel
            branding and UI refresh to anchor the platform in a more premium identity. Each new
            module had to fit a shared design language and reinforce the system, not fragment it.
          </p>
        </div>

        <div class="modules-section">
          <div class="modules-category">
            <div class="category-label">CRM & Communication</div>
            <div class="modules-grid">
              <div class="module-card">
                <div class="module-name">CRM</div>
                <div class="module-desc">Client relationships, intake, and lifecycle tracking.</div>
              </div>
              <div class="module-card">
                <div class="module-name">Messaging</div>
                <div class="module-desc">Internal staff communication, contextual to care.</div>
              </div>
            </div>
          </div>

          <div class="modules-category">
            <div class="category-label">EHR · A clinical workspace within the platform</div>
            <div class="ehr-intro">
              <p>
                The EHR isn't a single module — it's a deeply nested clinical workspace with 12+
                top-level areas (Hub, Admissions, Clinical, Medical, Medications, Nursing, Labs,
                Documents, Outcomes, Attendance, Rounds), each containing its own sub-modules for
                Notes, Logs, Assessments, HealthMetrics, and more. Plus a persistent patient context
                strip — allergies, identifiers, risk flags, episode selector — that follows the user
                across every screen.
              </p>
            </div>
            <div class="modules-grid">
              <div class="module-card">
                <div class="module-name">Hub</div>
                <div class="module-desc">
                  Patient overview surfacing actions, recent activity, and key clinical context.
                </div>
              </div>
              <div class="module-card">
                <div class="module-name">Admissions</div>
                <div class="module-desc">Intake, episode setup, and admission documentation.</div>
              </div>
              <div class="module-card">
                <div class="module-name">Authorizations</div>
                <div class="module-desc">Insurance and treatment authorization tracking.</div>
              </div>
              <div class="module-card">
                <div class="module-name">Clinical</div>
                <div class="module-desc">
                  Treatment plans, diagnoses, and clinical decision-making.
                </div>
              </div>
              <div class="module-card">
                <div class="module-name">Medical</div>
                <div class="module-desc">
                  Medical history, conditions, and ongoing care management.
                </div>
              </div>
              <div class="module-card">
                <div class="module-name">Medications</div>
                <div class="module-desc">
                  Prescriptions, logs, dosage history, and compliance trails.
                </div>
              </div>
              <div class="module-card">
                <div class="module-name">Nursing</div>
                <div class="module-desc">
                  Notes, logs, assessments, health metrics, and nursing documents.
                </div>
              </div>
              <div class="module-card">
                <div class="module-name">Labs</div>
                <div class="module-desc">Ordering, tracking, and results management.</div>
              </div>
              <div class="module-card">
                <div class="module-name">Documents</div>
                <div class="module-desc">Chart-level document management and clinical records.</div>
              </div>
              <div class="module-card">
                <div class="module-name">Outcomes</div>
                <div class="module-desc">Structured progress tracking and team-based outcomes.</div>
              </div>
              <div class="module-card">
                <div class="module-name">Attendance</div>
                <div class="module-desc">Session attendance, participation, and group tracking.</div>
              </div>
              <div class="module-card">
                <div class="module-name">Rounds</div>
                <div class="module-desc">Clinical rounding workflows and multi-clinician handoffs.</div>
              </div>
              <div class="module-card">
                <div class="module-name">Incident Reports</div>
                <div class="module-desc">Compliance-grade reporting with audit trails.</div>
              </div>
              <div class="module-card">
                <div class="module-name">Group Notes</div>
                <div class="module-desc">
                  Multi-client session documentation with selection patterns.
                </div>
              </div>
              <div class="module-card">
                <div class="module-name">Patient Context Strip</div>
                <div class="module-desc">
                  Allergies, identifiers, risk flags, episode selector — persistent across every
                  screen.
                </div>
              </div>
            </div>
            <div class="pattern-note">
              <span class="pattern-icon">↻</span>
              <div>
                <strong>Reusable patterns</strong> — Notes, Logs, Assessments, HealthMetrics, and
                Documents repeat across multiple EHR modules. Designing them as system components
                meant Nursing's Logs and Medications' Logs behave the same way, even though they hold
                different data. One pattern, many surfaces.
              </div>
            </div>
          </div>

          <div class="modules-category">
            <div class="category-label">Operations</div>
            <div class="modules-grid">
              <div class="module-card">
                <div class="module-name">RCM</div>
                <div class="module-desc">Revenue cycle — billing, claims, and reimbursement.</div>
              </div>
              <div class="module-card">
                <div class="module-name">Calendar</div>
                <div class="module-desc">Appointments and care coordination at a glance.</div>
              </div>
              <div class="module-card">
                <div class="module-name">Group Schedules</div>
                <div class="module-desc">Multi-clinician, multi-client session planning.</div>
              </div>
              <div class="module-card">
                <div class="module-name">Time Reporting</div>
                <div class="module-desc">Staff hours, billable time, and payroll-ready exports.</div>
              </div>
              <div class="module-card">
                <div class="module-name">Company Documents</div>
                <div class="module-desc">Centralized document management across the business.</div>
              </div>
            </div>
          </div>

          <div class="modules-category">
            <div class="category-label">Admin Surface</div>
            <div class="modules-grid">
              <div class="module-card">
                <div class="module-name">User Management</div>
                <div class="module-desc">Roles, permissions, and RBAC across the platform.</div>
              </div>
              <div class="module-card">
                <div class="module-name">Form Templates</div>
                <div class="module-desc">Configurable forms, assessments, and intake builders.</div>
              </div>
              <div class="module-card">
                <div class="module-name">System Settings</div>
                <div class="module-desc">Org-wide configuration and policy controls.</div>
              </div>
              <div class="module-card">
                <div class="module-name">Reports</div>
                <div class="module-desc">Operational and clinical reporting in one place.</div>
              </div>
              <div class="module-card">
                <div class="module-name">Integrations</div>
                <div class="module-desc">Connecting Navix to the systems clinics already run.</div>
              </div>
            </div>
          </div>
        </div>

        <div class="prose-container prose pad-top">
          <p>
            Alongside these modules, we executed a <strong>branding and UI refresh</strong> for a
            cleaner, more consistent design language. Special focus was placed on
            <strong>screen real estate optimization</strong> — because in healthcare operations,
            every pixel carries weight. Clinicians and admins both work in data-dense environments,
            and the platform had to respect that without overwhelming either group.
          </p>
        </div>
      </div>
    </section>

    <!-- CASE STUDY VISUALS: BEFORE / AFTER -->
    <section class="section">
      <div class="container">
        <div class="section-eyebrow">Case study visuals</div>
        <h2 class="section-h2">Before, and after</h2>

        <div class="note-bar">
          <span class="icon">Note</span>
          <span
            >Due to sensitive healthcare information, only limited screenshots are provided. The
            visuals here focus on layout shifts, hierarchy, and how the redesign handles density —
            without showing real client data.</span
          >
        </div>

        <h3 class="section-h3 compare-heading">The Hub</h3>
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
              <div class="compare-title">Surfaces actions and recent activity without overwhelming</div>
            </div>
          </div>
        </div>
        <p class="image-caption">
          The redesigned Hub maximizes screen real estate by surfacing key actions and recent
          activity. In healthcare, every pixel counts — layouts must balance clarity with
          accessibility.
        </p>

        <h3 class="section-h3 compare-heading">Group Notes</h3>
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
          Group Notes were reimagined into structured, high-density documentation. Instead of
          cluttered free-text areas, the new design organizes participation logs, outcomes, and
          observations — keeping dense clinical data scannable and efficient.
        </p>
      </div>
    </section>

    <!-- OUTCOMES -->
    <section class="section">
      <div class="container">
        <div class="outcomes">
          <div class="container">
            <div class="section-eyebrow">Outcomes</div>
            <h2 class="section-h2">What shipped, and what it changed</h2>
            <div class="outcomes-grid">
              <div>
                <div class="outcome-stat">Clinical depth</div>
                <div class="outcome-label">Beyond basic CRUD</div>
                <div class="outcome-desc">
                  Submodules let clinicians manage care across Labs, Vitals, Outcomes, and
                  Assessments — not just add/edit/delete.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Efficiency gains</div>
                <div class="outcome-label">Faster documentation</div>
                <div class="outcome-desc">
                  Structured tools reduced documentation and review time, freeing clinicians from
                  repetitive context switching.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Premium perception</div>
                <div class="outcome-label">Enterprise-ready feel</div>
                <div class="outcome-desc">
                  Stakeholders described the enhanced platform as "more premium and enterprise-ready"
                  after the brand and UI refresh.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Density made usable</div>
                <div class="outcome-label">Screen real estate</div>
                <div class="outcome-desc">
                  Optimized layouts ensured rich, complex data could be navigated quickly without
                  overwhelming clinicians.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Scalable foundation</div>
                <div class="outcome-label">Modular system</div>
                <div class="outcome-desc">
                  The design system enabled new modules to be added without breaking patterns — a
                  foundation that compounds over time.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Trust through design</div>
                <div class="outcome-label">Adoption signal</div>
                <div class="outcome-desc">
                  A polished, consistent UI helped clinicians feel the product belonged in their
                  clinical environment — a quiet but real driver of adoption.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LEARNINGS -->
    <section class="section">
      <div class="container">
        <div class="section-eyebrow">Learnings</div>
        <h2 class="section-h2">What this work taught me</h2>
        <div class="findings-grid">
          <div class="finding">
            <div class="finding-num">01</div>
            <h3 class="finding-title">Brand is UX</h3>
            <p class="finding-body">
              The refreshed identity was as impactful as the new features in building trust. A
              clinical platform that looks unfinished feels unsafe — and clinicians notice.
            </p>
          </div>
          <div class="finding">
            <div class="finding-num">02</div>
            <h3 class="finding-title">One platform, not many products</h3>
            <p class="finding-body">
              Designing across CRM, EHR, RCM, scheduling, and admin in parallel taught me that
              <em>cohesion is the feature</em>. Behavioral health teams already juggle enough systems
              — Navix had to feel like one workspace, not 15 modules sharing a sidebar.
            </p>
          </div>
          <div class="finding">
            <div class="finding-num">03</div>
            <h3 class="finding-title">Clarity drives adoption</h3>
            <p class="finding-body">
              Structured notes and improved history views directly boosted clinician satisfaction.
              Adoption follows when the tool stops fighting the user.
            </p>
          </div>
          <div class="finding">
            <div class="finding-num">04</div>
            <h3 class="finding-title">Patterns over screens</h3>
            <p class="finding-body">
              In a platform this nested, designing individual screens doesn't scale. Logs,
              Assessments, and HealthMetrics had to behave the same way across Nursing, Medications,
              and Clinical — even though each held different data. The senior move was designing
              patterns, not pages.
            </p>
          </div>
          <div class="finding">
            <div class="finding-num">05</div>
            <h3 class="finding-title">Designing for density</h3>
            <p class="finding-body">
              In industries like healthcare, where information is vast and critical, smart use of
              space is as important as functionality. Every pixel pulls weight.
            </p>
          </div>
          <div class="finding">
            <div class="finding-num">06</div>
            <h3 class="finding-title">Cohesion is the feature</h3>
            <p class="finding-body">
              When users live inside a platform for hours a day, consistency stops being an aesthetic
              choice and becomes an operational one. A predictable system is a fast system.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- NEXT CASE -->
    <section class="next-case">
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
      unlocked: false,
      password: '',
      error: false,
    }
  },
  methods: {
    unlock() {
      if (this.password === 'elvinaworks2021') {
        this.unlocked = true
        this.error = false
      } else {
        this.error = true
      }
    },
  },
}
</script>

<style scoped>
.gate {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #faf9f7;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}
.gate-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}
.gate-label {
  font-size: 15px;
  color: #888;
}
input {
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  width: 280px;
  outline: none;
}
button {
  padding: 12px 24px;
  background: #E8623C;
  color: white;
  border: none;
  border-radius: 999px;
  font-size: 15px;
  cursor: pointer;
}
.gate-error {
  font-size: 13px;
  color: #E8623C;
}
/* Navix uses the default accent (#E8623C), so no override needed. */
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
.case-page--navix .section-h2 + .prose-container {
  max-width: 100%;
  margin-left: 0;
}
.case-page--navix .meta-value {
  font-size: 20px;
}
.case-page--navix .outcomes-grid {
  grid-template-columns: repeat(3, 1fr);
}
.case-page--navix .compare-heading {
  margin-top: 64px;
  margin-bottom: 24px;
}
.case-page--navix .pad-top {
  padding-top: 32px;
  max-width: 100%;
  margin-left: 0;
}
</style>
