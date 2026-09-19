<template>
  <div class="case-page case-page--atlas">
    <!-- HERO -->
    <section class="case-hero is-dark">
      <div class="hero-noise"></div>
      <div class="container">
        <router-link :to="{ path: '/home', hash: '#work' }" class="back-link"
          >← All case studies</router-link
        >
        <div class="case-eyebrow">Case Study · Recruitment</div>
        <h1 class="case-h1">Atlas ATS</h1>
        <p class="case-subhead">
          Turning a legacy ATS into a decision workspace for executive search
        </p>

        <template v-if="published">
          <div class="case-lede">
            <p>
              Executive search involves more than moving candidates through stages. Recruiters
              need to define nuanced requirements, assess evidence, coordinate internally, and
              present confident recommendations to clients.
            </p>
            <p>
              I redesigned Atlas around that work, from opening a role to building a shortlist,
              and later designed SIFT AI, its candidate querying and comparison feature.
            </p>
          </div>

          <div class="case-meta-strip">
            <div class="meta-item">
              <div class="meta-label">Role</div>
              <div class="meta-value">Sole Product Designer</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">Engagement</div>
              <div class="meta-value">Freelance · Retainer</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">Timeline</div>
              <div class="meta-value">2023 — 2024</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">Platform</div>
              <div class="meta-value">Web</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">Industry</div>
              <div class="meta-value">Recruitment SaaS</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">Team</div>
              <div class="meta-value">Product Managers · Engineers · Recruiter Advisors</div>
            </div>
            <div class="meta-item">
              <div class="meta-label">Recognition</div>
              <div class="meta-value">EY National Business Competition 2024 Winner</div>
            </div>
          </div>

          <div class="case-cover">
            <div class="placeholder-badge">Cover · Atlas ATS dashboard</div>
            <img
              :src="coverImage"
              alt="Atlas ATS dashboard: candidate pipeline funnel, status tiles, and a new-candidates table"
              class="cover-shot"
            />
          </div>
        </template>
      </div>
    </section>

    <!-- COMING SOON -->
    <section v-if="!published" class="coming-soon">
      <div class="container">
        <div class="coming-soon-inner">
          <div class="coming-soon-badge">
            <span class="status-dot"></span>
            Coming soon
          </div>
          <h2 class="coming-soon-title">This case study isn't published yet.</h2>
          <p class="coming-soon-body">
            I am still brewing this up accordingly. Or get in touch if you'd like a walkthrough
            sooner.
          </p>
          <div class="coming-soon-actions">
            <router-link :to="{ path: '/home', hash: '#work' }" class="coming-soon-secondary">
              ← Back to case studies
            </router-link>
            <router-link :to="{ path: '/home', hash: '#contact' }" class="coming-soon-primary">
              Get in touch <span class="arrow">→</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <template v-if="published">
    <!-- THE PROBLEM -->
    <section v-reveal class="section">
      <div class="prose-container prose">
        <div class="section-eyebrow">The Problem</div>
        <h2 class="section-h2">The work had outgrown the system</h2>
        <p>
          Atlas already stored jobs and candidate records, but much of the actual recruitment work
          happened around it.
        </p>
        <p>
          Recruiters used spreadsheets to organize candidates, email threads to exchange context,
          and separate tools to keep searches moving. The system held information, but it did not
          give teams a reliable picture of progress, ownership, or candidate fit.
        </p>
        <p class="lead">That created four connected problems:</p>
      </div>
      <div class="container">
        <div class="findings-grid">
          <div class="finding">
            <div class="finding-num">01</div>
            <h3 class="finding-title">The pipeline was difficult to read</h3>
            <p class="finding-body">
              Recruiters could not quickly understand where candidates stood, what had changed, or
              where attention was needed.
            </p>
          </div>
          <div class="finding">
            <div class="finding-num">02</div>
            <h3 class="finding-title">Role requirements lacked structure</h3>
            <p class="finding-body">
              Important distinctions between required and preferred qualifications were difficult
              to carry consistently from role creation into candidate evaluation.
            </p>
          </div>
          <div class="finding">
            <div class="finding-num">03</div>
            <h3 class="finding-title">Candidate evidence was fragmented</h3>
            <p class="finding-body">
              Profiles, résumés, requirement responses, notes, and team context were not brought
              together around the hiring decision.
            </p>
          </div>
          <div class="finding">
            <div class="finding-num">04</div>
            <h3 class="finding-title">Collaboration happened outside the product</h3>
            <p class="finding-body">
              Status updates and candidate context lived across inboxes, spreadsheets, and
              individual team members rather than inside the shared workflow.
            </p>
          </div>
        </div>
      </div>
      <div class="container challenge-block">
        <div class="two-col">
          <div class="col-label">The Design Challenge</div>
          <div class="prose">
            <p>
              How could Atlas support the full executive-search process without making recruiters
              manage another layer of administration?
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
              As the sole product designer, I worked with product managers, engineers, and
              recruiter advisors to redesign the experience from initial workflow definition
              through high-fidelity design and implementation handoff.
            </p>
            <p><strong>My work covered:</strong></p>
            <ul>
              <li>Workflow mapping and information architecture</li>
              <li>Job creation and management</li>
              <li>Candidate sourcing and evaluation</li>
              <li>Pipeline and stage management</li>
              <li>Bulk actions and workflow automation</li>
              <li>Client and team collaboration</li>
              <li>SIFT AI candidate querying and comparison</li>
              <li>Responsive patterns and reusable components</li>
              <li>Prototypes, specifications, and developer handoff</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- THE SYSTEM -->
    <section v-reveal class="section">
      <div class="prose-container prose">
        <div class="section-eyebrow">The System</div>
        <h2 class="section-h2">Designing around the decisions recruiters make</h2>
        <p>I did not approach Atlas as a collection of screens that needed a visual refresh.</p>
        <p>I mapped the core recruitment journey and the decisions required at each stage:</p>
      </div>
      <div class="container">
        <div class="flow-row">
          <template v-for="(step, i) in recruitmentJourney" :key="step">
            <span class="flow-step">{{ step }}</span>
            <span v-if="i < recruitmentJourney.length - 1" class="flow-arrow">→</span>
          </template>
        </div>
      </div>
      <div class="prose-container prose">
        <p style="margin-top: 32px">
          This exposed where information was being repeated, where ownership became unclear, and
          where recruiters were leaving the system to complete the work.
        </p>
        <p>The redesign focused on four product decisions.</p>
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
              <h3>Make the pipeline readable at a glance</h3>
              <p>
                Recruiters often manage several roles and large candidate pools simultaneously.
                They need to scan, compare, and act without opening every record individually.
              </p>
              <p>
                I moved Atlas toward a list-first experience that made active jobs, candidate
                counts, pipeline status, ownership, and exceptions easier to review together.
              </p>

              <div class="image-block">
                <img
                  :src="hifiJobsList"
                  alt="High-fidelity Atlas jobs list with candidate avatars, rejected/failed/declined counts, and job status"
                />
              </div>

              <p style="margin-top: 32px">
                Filters, search, status indicators, and bulk actions supported the way recruiters
                actually worked through a queue. Detailed candidate cards remained useful in
                focused contexts, but the main pipeline prioritized visibility and control.
              </p>
              <p>
                The goal was not to place more information on the screen. It was to make the next
                point of attention obvious.
              </p>
            </div>
          </div>

          <!-- 02 -->
          <div class="process-step">
            <div class="process-step-num">02</div>
            <div class="process-step-content">
              <h3>Make role setup shorter without making it shallower</h3>
              <p>
                The original Add Job workflow spread information across five steps. It asked
                recruiters to commit to too much detail before the search could begin.
              </p>
              <p>
                I reorganized the flow into three focused stages, grouping related information and
                moving secondary configuration out of the critical path.
              </p>
              <div class="pattern-note">
                <span class="pattern-icon">↻</span>
                <div>
                  <strong>Required vs. preferred</strong>
                  Separating these explicitly mattered beyond the form itself. It created a clearer
                  evaluation framework that could follow the role into candidate review.
                </div>
              </div>
              <p style="margin-top: 20px">
                The improvement was not simply fewer steps. It was a stronger connection between
                how the role was defined and how candidates would later be assessed.
              </p>
            </div>
          </div>

          <!-- 03 -->
          <div class="process-step">
            <div class="process-step-num">03</div>
            <div class="process-step-content">
              <h3>Keep the evidence beside the decision</h3>
              <p>
                Candidate evaluation becomes slower when recruiters have to reconstruct the
                complete picture from separate tabs, files, and conversations.
              </p>
              <p>
                I designed the candidate workspace to bring requirement responses, profile
                information, application details, and résumé content into one review experience.
              </p>

              <div class="image-block">
                <img
                  :src="hifiCandidate"
                  alt="High-fidelity Atlas candidate view with requirement answers alongside a résumé portal"
                />
              </div>

              <p style="margin-top: 32px">
                Recruiters could evaluate the candidate against the role while keeping the original
                evidence visible. Status and progression controls stayed within the same context,
                reducing the need to move between the candidate record and the pipeline.
              </p>
              <p>
                This made Atlas more useful at the point where judgment was actually happening, not
                only as a place to store the result afterward.
              </p>
            </div>
          </div>

          <!-- 04 -->
          <div class="process-step">
            <div class="process-step-num">04</div>
            <div class="process-step-content">
              <h3>Use AI to support comparison, not replace judgment</h3>
              <p>
                As Atlas evolved, I designed SIFT AI to help recruiters query and compare candidate
                information across a search.
              </p>
              <p>
                The feature addressed a specific problem: once a search contains many qualified
                candidates, finding meaningful differences manually becomes slow and inconsistent.
              </p>
              <p>
                SIFT allowed recruiters to interrogate the candidate pool and compare relevant
                information without giving the system final authority over the hiring decision.
              </p>
              <p>
                The recruiter remained responsible for defining what mattered and interpreting the
                result. AI reduced the effort required to retrieve and organize evidence; it did
                not decide who should be hired.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DESIGN SYSTEM -->
    <section v-reveal class="section">
      <div class="prose-container prose">
        <div class="section-eyebrow">Design System</div>
        <h2 class="section-h2">Building one product language</h2>
        <p>
          The redesign also needed a reusable interface foundation. Atlas contained repeated
          structures across jobs, candidates, pipelines, filters, status controls, tables, and
          forms.
        </p>
        <p>
          I created reusable components and responsive patterns so that new workflows could build
          from established behavior instead of introducing another one-off solution.
        </p>
        <p>
          The system supported both dense operational views and more focused candidate-review
          experiences while keeping navigation, actions, and status treatment consistent.
        </p>
      </div>
    </section>

    <!-- OUTCOMES -->
    <section v-reveal class="section">
      <div class="container">
        <div class="outcomes">
          <div class="container">
            <div class="section-eyebrow">Outcomes</div>
            <h2 class="section-h2">What changed</h2>
            <div class="prose" style="max-width: 720px">
              <p style="color: rgba(255, 255, 255, 0.8)">
                The redesign moved Atlas beyond basic applicant tracking and gave executive-search
                teams a more connected working environment.
              </p>
            </div>
            <div class="outcomes-grid">
              <div>
                <div class="outcome-stat">A visible search pipeline</div>
                <div class="outcome-desc">
                  Jobs, candidate stages, ownership, and areas requiring attention could be
                  reviewed from a clearer operational view.
                </div>
              </div>
              <div>
                <div class="outcome-stat">A more focused Add Job flow</div>
                <div class="outcome-desc">
                  Role creation was reduced from five stages to three, with required and preferred
                  qualifications carried into the evaluation structure.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Candidate evidence in one workspace</div>
                <div class="outcome-desc">
                  Candidate details, requirement responses, résumé content, and progression
                  controls were brought closer to the hiring decision.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Less dependence on disconnected tools</div>
                <div class="outcome-desc">
                  The product created shared places for candidate status, ownership, and search
                  context that previously lived across separate working documents and
                  conversations.
                </div>
              </div>
              <div>
                <div class="outcome-stat">AI-assisted querying and comparison</div>
                <div class="outcome-desc">
                  SIFT introduced a faster way to examine and compare candidate information while
                  keeping recruiters responsible for the decision.
                </div>
              </div>
              <div>
                <div class="outcome-stat">A reusable foundation</div>
                <div class="outcome-desc">
                  Shared components and interaction patterns gave the platform a more consistent
                  base for future workflows and product growth.
                </div>
              </div>
            </div>
            <div class="prose outcomes-caveat">
              <p style="color: rgba(255, 255, 255, 0.65)">
                Atlas was later recognized through the EY National Business Competition 2024.
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
            <p class="conclusion-quote">
              Recruitment software should not make every decision for the recruiter. It should
              make the evidence easier to find, the process easier to follow, and ownership harder
              to lose.
            </p>
            <p class="conclusion-quote">
              The strongest part of the redesign was not adding more functionality. It was bringing
              the information and actions surrounding a hiring decision into the same
              <em>working context</em>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT CAME NEXT -->
    <section v-reveal class="section">
      <div class="container">
        <div class="prose-container">
          <div class="next-phase">
            <div class="next-phase-label">What Came Next</div>
            <h3>More was already scoped</h3>
            <p>
              Before the engagement concluded, additional work was explored around faster role
              creation, stage automation, candidate suggestions, and AI-assisted screening prompts.
            </p>
            <div class="nda-note">
              <span class="lock">🔒</span>
              <span
                >Due to NDA restrictions, the newest version of Atlas and portions of SIFT AI
                cannot be shown publicly. I can walk through my decisions and contribution during
                an interview.</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEXT CASE -->
    <section v-reveal class="next-case">
      <div class="container">
        <router-link to="/case-studies/truckpedia" class="next-case-link">
          <div class="next-label">Next case study</div>
          <div class="next-title"><em>Truckpedia</em> <span class="next-arrow">→</span></div>
        </router-link>
      </div>
    </section>
    </template>
  </div>
</template>

<script>
import coverImage from '@/assets/atlas-cover-dashboard.png';
import hifiJobsList from '@/assets/atlas-hifi-jobs-list.png';
import hifiCandidate from '@/assets/atlas-hifi-candidate.png';

export default {
  name: 'CaseStudyAtlas',
  data() {
    return {
      // Flip to true once the refreshed Atlas write-up is ready to publish —
      // the full case study markup below stays intact, just gated behind
      // this while the "coming soon" state is shown instead.
      published: false,
      coverImage,
      hifiJobsList,
      hifiCandidate,
      recruitmentJourney: [
        'Define the role',
        'Source candidates',
        'Evaluate fit',
        'Progress the search',
        'Compare the shortlist',
        'Present candidates',
      ],
    };
  },
};
</script>

<style scoped>
.case-page--atlas .case-hero {
  --hero-gradient: linear-gradient(150deg, #14161f 0%, #2d3142 45%, #4f5b7c 78%, #8093b0 100%);
}
.case-page--atlas .case-meta-strip {
  grid-template-columns: repeat(4, 1fr);
}
.case-page--atlas .meta-value {
  font-size: 17px;
}
.case-page--atlas .findings-grid {
  grid-template-columns: repeat(2, 1fr);
}
.case-page--atlas .outcomes-grid {
  grid-template-columns: repeat(3, 1fr);
}
.case-page--atlas .outcomes-caveat {
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}
/* Real screenshots — contained rather than cropped, so the dense table and
   candidate-detail layouts stay readable end to end. */
.case-page--atlas .cover-shot {
  max-width: 92%;
  max-height: 84%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 24px 60px -16px rgba(0, 0, 0, 0.45);
}
.case-page--atlas .case-cover {
  background: linear-gradient(135deg, #2d3142 0%, #4f5b7c 50%, #8093b0 100%);
  box-shadow: 0 32px 80px -24px rgba(45, 49, 66, 0.4);
}
.case-page--atlas .image-block {
  height: 480px;
  min-height: 0;
  background: var(--bg-soft);
}
.case-page--atlas .image-block img {
  max-width: 92%;
  max-height: 88%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 44px -16px rgba(0, 0, 0, 0.25);
}

/* COMING SOON — replaces the full write-up while `published` is false. */
.coming-soon {
  padding: 160px 0 200px;
}
.coming-soon-inner {
  max-width: 620px;
  margin: 0 auto;
  text-align: center;
}
.coming-soon-badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 9px 18px;
  margin-bottom: 32px;
  border-radius: 999px;
  background: var(--bg-soft);
  border: 1px solid var(--rule);
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
}
.coming-soon-badge .status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
  animation: statusPulse 1.8s ease-in-out infinite;
}
@keyframes statusPulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}
.coming-soon-title {
  font-family: var(--display);
  font-size: clamp(30px, 4vw, 44px);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 20px;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
}
.coming-soon-body {
  font-size: 17px;
  line-height: 1.65;
  color: var(--ink-soft);
  margin-bottom: 40px;
}
.coming-soon-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}
.coming-soon-secondary {
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0.04em;
  color: var(--ink-soft);
  text-decoration: none;
  transition: color 0.25s;
}
.coming-soon-secondary:hover {
  color: var(--accent);
}
.coming-soon-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 26px;
  background: var(--ink);
  color: white;
  text-decoration: none;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px -4px rgba(11, 11, 10, 0.2);
}
.coming-soon-primary:hover {
  background: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 12px 28px -8px rgba(139, 58, 47, 0.4);
}
.coming-soon-primary .arrow {
  transition: transform 0.25s;
}
.coming-soon-primary:hover .arrow {
  transform: translateX(4px);
}
@media (prefers-reduced-motion: reduce) {
  .coming-soon-badge .status-dot {
    animation: none;
  }
}
@media (max-width: 900px) {
  .coming-soon {
    padding: 100px 0 120px;
  }
}

/* Hero dek + lede — same pattern as CaseStudyNavix.vue / CaseStudyCPS.vue. */
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

/* Design-challenge divider, same treatment as the other case studies. */
.case-page--atlas .challenge-block {
  margin-top: 96px;
  padding-top: 56px;
  border-top: 1px solid var(--rule);
}

/* Flow row — "A → B → C" sequences as pills, same component as CPS's trust
   loop / trip lifecycle. */
.flow-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin: 28px 0;
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

/* Closing statement — smaller than the shared hero-scale pull-quote, with
   spacing between the two stacked paragraphs. */
.case-page--atlas .conclusion-quote {
  font-size: clamp(22px, 2.3vw, 27px);
  font-weight: 300;
  line-height: 1.55;
  max-width: none;
}
.case-page--atlas .conclusion-quote + .conclusion-quote {
  margin-top: 28px;
}
.case-page--atlas .conclusion {
  padding: 64px 0;
}

@media (max-width: 900px) {
  .case-page--atlas .case-meta-strip {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .case-page--atlas .findings-grid {
    grid-template-columns: 1fr;
  }
  .case-page--atlas .image-block {
    height: 340px;
  }
}
</style>
