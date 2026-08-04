<template>
  <div class="case-page case-page--atlas">
    <!-- HERO -->
    <section class="case-hero">
      <div class="container">
        <router-link :to="{ path: '/home', hash: '#work' }" class="back-link"
          >← All case studies</router-link
        >
        <div class="case-eyebrow">Case Study · Recruitment · EY National Business Competition 2024 Winner</div>
        <h1 class="case-h1">Atlas ATS</h1>
        <p class="case-tagline">
         Redesigned a legacy ATS into a modern collaborative hiring engine including SIFT AI, the platform's candidate querying and comparison feature. 
         Built for the pace and stakes of executive search.
        </p>

        <div class="case-meta-strip">
          <div class="meta-item">
            <div class="meta-label">Role</div>
            <div class="meta-value">Lead UX/UI Designer</div>
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
            <div class="meta-value">PMs · Engineers · Recruiter advisors</div>
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
      </div>
    </section>

    <!-- OVERVIEW -->
    <section class="section">
      <div class="prose-container prose">
        <div class="section-eyebrow">Overview</div>
        <p class="lead">
          Atlas is an executive search and recruitment platform built for the firms that place C-suite talent under pressure and on deadline. 
          Internally, they were running on a custom ATS that had outgrown itself.
        </p>
        <p>
          The workflows were manual, the UI was cluttered, and collaboration between recruiters and clients happened mostly outside the system. 
          I came in as a freelance designer on retainer to redesign it from the ground up and 
          eventually designed SIFT AI, the platform's core candidate querying and comparison feature.
        </p>
      </div>
    </section>

    <!-- CHALLENGE -->
    <section class="section">
      <div class="container">
        <div class="two-col">
          <div class="col-label">Challenge</div>
          <div class="prose">
            <h2 class="section-h2">A legacy system holding the team back</h2>
            <p>
              The legacy ATS wasn't broken, it just couldn't keep up. 
              Recruiters were managing executive searches across spreadsheets, email threads, 
              and disconnected tools because the system couldn't hold the complexity of what they actually did.
              <em>with</em> it.
            </p>
            <div class="challenges">
              <div class="challenges-label"><span class="marker">✕</span> Before — Key challenges</div>
              <ul>
                <li>
                  Recruiters relied on
                  <strong>spreadsheets, email threads, and disconnected tools</strong> to fill in
                  what the ATS couldn't do.
                </li>
                <li>
                  <strong>Candidate pipelines</strong> were hard to track or manage, with no clear
                  sense of stage or ownership.
                </li>
                <li>
                  <strong>Collaboration</strong> between recruiters and account managers was
                  inefficient. Context lived in heads and inboxes, not the system.
                </li>
                <li>
                  <strong>No intelligence layer</strong> to help surface, compare, or prioritize candidates at scale.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- GOAL -->
    <section class="section">
      <div class="container">
        <div class="two-col">
          <div class="col-label">Goal</div>
          <div class="prose">
            <h2 class="section-h2">A hiring engine, not just a tracker</h2>
            <p>The redesign had to do four things — together, not in isolation:</p>
            <div class="challenges positive">
              <div class="challenges-label positive">
                <span class="marker">✓</span> Goals for the redesign
              </div>
              <ul>
                <li><strong>Centralize</strong> the end-to-end hiring workflow in one place.</li>
                <li>
                  <strong>Improve collaboration</strong> across recruiting teams and with clients.
                </li>
                <li><strong>Streamline</strong> sourcing, candidate tracking, and client handoff.</li>
                <li><strong>Increase recruiter speed</strong> and overall system usability.</li>
                 <li><strong>Build an AI layer</strong> that actually reduces recruiter workload.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DESIGN PROCESS -->
    <section class="section">
      <div class="container">
        <div class="section-eyebrow">Design Process</div>
        <h2 class="section-h2">A lean, sprint-based approach</h2>
        <div class="prose-container prose">
          <p>
            We followed a lean, sprint-based approach to deliver fast iterations while staying
            closely aligned with client feedback. Each phase fed directly into the next, with early
            artifacts surfacing decisions before pixels were ever pushed.
          </p>
        </div>

        <div class="process-flow">
          <div class="process-step">
            <div class="process-step-num">01</div>
            <div class="process-step-content">
              <h3>Kickoff & Alignment</h3>
              <p>
                Gathered goals, challenges, and must-haves directly with the client. This was where
                we surfaced the gap between what the legacy system did and what recruiters actually
                needed day-to-day.
              </p>
              <span class="artifact-pill">Artifact · Client Empathy Map</span>
            </div>
          </div>

          <div class="image-pair">
           <div class="image-block bg-atlas-light" >
           <span class="placeholder-badge">Image · Client Empathy Map</span>
             <img
               :src="empathyMap"
               alt="Client empathy map with Says, Thinks, Does, and Feels quadrants of sticky notes"
               class="artifact-shot"
             />
           </div>

              <div class="image-block" style="background: #f4ebd9;">
               <span class="placeholder-badge">Image · Competitor Analysis</span>
               <img
                 :src="competitorAnalysis"
                 alt="Competitor comparison board for JazzHR, Workable, and Freshworks with similarities, differences, and opportunities"
                 class="artifact-shot"
               />
            </div>
             </div>
          <div class="process-step">
            <div class="process-step-num">02</div>
            <div class="process-step-content">
              <h3>Competitive Benchmarking</h3>
              <p>
                Studied existing ATS platforms to map what users already expected and where there
                was room to do something smarter. Used these patterns as both reference and contrast.
              </p>
            </div>
          </div>

          <div class="process-step">
            <div class="process-step-num">03</div>
            <div class="process-step-content">
              <h3>Low-Fidelity Wireframes</h3>
              <p>
                Sketched core screens: Add Job, List View, Candidate Cards to establish structure
                and test flows before committing to visual decisions. Wireframes were also the
                fastest way to collect early client feedback and adjust direction.
              </p>
              <span class="artifact-pill">Artifact · Core flow wireframes</span>
            </div>
          </div>

          <div class="image-block bg-atlas-mid">
            <span class="placeholder-badge">Image · Low-fidelity wireframes</span>
            <div class="placeholder-decor">
              <div class="image-pair">
                <div class="image-block" style="background: #f5f5f5;">
                  <span class="placeholder-badge">Image · Jobs list view</span>
                  <img
                    :src="wireframeJobsList"
                    alt="Low-fidelity wireframe of the jobs list view with search, filters, and status column"
                    class="artifact-shot"
                  />
                </div>
                <div class="image-block" style="background: #f5f5f5;">
                  <span class="placeholder-badge">Image · Edit job form</span>
                  <img
                    :src="wireframeEditJob"
                    alt="Low-fidelity wireframe of the edit job form with job info, work setup, and requirements"
                    class="artifact-shot"
                  />
                </div>
              </div>
            </div>
          </div>
          <p class="image-caption">
            Low-fidelity wireframes — Add Job flow, list view, and candidate cards
          </p>

          <div class="process-step">
            <div class="process-step-num">04</div>
            <div class="process-step-content">
              <h3>High-Fidelity Design in Figma</h3>
              <p>
                Built out detailed UI mockups focused on clarity, hierarchy, and ease of use. Every
                screen was designed against recruiter task flows, not just visual polish so the
                high-fi work directly answered the goals we'd set at kickoff.
              </p>
            </div>
          </div>
          <div class="image-pair">
            <div class="image-block bg-atlas-dark">
              <span class="placeholder-badge">Image · Jobs list</span>
              <img
                :src="hifiJobsList"
                alt="High-fidelity Atlas jobs list with candidate avatars, rejected/failed/declined counts, and job status"
                class="artifact-shot"
              />
            </div>
            <div class="image-block bg-atlas-dark">
              <span class="placeholder-badge">Image · Candidate view</span>
              <img
                :src="hifiCandidate"
                alt="High-fidelity Atlas candidate view with requirements answers alongside a resume portal"
                class="artifact-shot"
              />
            </div>
          </div>
          <p class="image-caption">
            High-fidelity UI — focused on clarity, hierarchy, and ease of use
          </p>
        </div>
        <div class="process-step">
            <div class="process-step-num">05</div>
            <div class="process-step-content">
              <h3>SIFT AI</h3>
              <p>
                Designed the AI-powered candidate querying and comparison feature. 
                SIFT lets recruiters query, compare, and manage candidates automatically, 
                reducing the manual screening load that was previously handled outside the system entirely.
              </p>
            </div>
          </div>
      </div>
    </section>

    <!-- RESULTS -->
    <section class="section">
      <div class="container">
        <div class="outcomes">
          <div class="container">
            <div class="section-eyebrow">Results</div>
            <h2 class="section-h2">What the redesign actually changed</h2>
            <div class="outcomes-grid">
              <div>
                <div class="outcome-stat">Less task-switching</div>
                <div class="outcome-label">Visibility</div>
                <div class="outcome-desc">
                  Improved visibility across the hiring workflow meant recruiters spent less time
                  hunting for information across tools.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Better collaboration</div>
                <div class="outcome-label">Cross-functional</div>
                <div class="outcome-desc">
                  Increased cross-functional team collaboration — especially with clients — as
                  context lived in the system, not in inboxes.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Clearer ownership</div>
                <div class="outcome-label">Early tester feedback</div>
                <div class="outcome-desc">
                  Testers reported clearer ownership, faster updates, and less manual tracking across
                  the candidate pipeline.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Ready to scale</div>
                <div class="outcome-label">Growth-ready platform</div>
                <div class="outcome-desc">
                  Positioned Atlas to scale alongside the business — the system can hold more
                  recruiters, clients, and complexity without breaking.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONCLUSION -->
    <section class="section">
      <div class="container">
        <div class="conclusion">
          <div class="container">
            <div class="section-eyebrow">Conclusion</div>
            <p class="conclusion-quote">
              The redesign transformed Atlas from a legacy tool into a
              <em>collaborative hiring engine</em>. By focusing on clarity, task efficiency, and
              recruiter collaboration, the system now supports the fast pace and high stakes of
              executive search — instead of slowing it down.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- NEXT PHASE -->
    <section class="section">
      <div class="container">
        <div class="prose-container">
          <div class="next-phase">
            <div class="next-phase-label">Conclusion</div>
            <h3>A visual and functional upgrade — without losing the recruiter-first feel</h3>
            <p>
              Atlas went from a legacy tool to a collaborative hiring engine with an AI layer that actually ships. 
              By focusing on clarity, recruiter workflows, and building SIFT AI as a first-class feature. 
              The system now supports the pace and stakes of executive search instead of slowing it down.
            </p>
            <p>
              Before the engagement wrapped, the next wave of work was already scoped. 
              A faster Add Job flow, streamlined automation setup, and early exploration of AI-powered candidate suggestions and screening prompts.
            </p>
            <div class="nda-note">
              <span class="lock">🔒</span>
              <span
                >Due to NDA restrictions, designs for the newest version cannot be publicly shared at
                this time. Happy to walk through them in conversation.</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEXT CASE -->
    <section class="next-case">
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
import coverImage from '@/assets/atlas-cover-dashboard.png';
import empathyMap from '@/assets/atlas-empathy-map.png';
import competitorAnalysis from '@/assets/atlas-competitor-analysis.png';
import wireframeJobsList from '@/assets/atlas-wireframe-jobs-list.png';
import wireframeEditJob from '@/assets/atlas-wireframe-edit-job.png';
import hifiJobsList from '@/assets/atlas-hifi-jobs-list.png';
import hifiCandidate from '@/assets/atlas-hifi-candidate.png';

export default {
  name: 'CaseStudyAtlas',
  data() {
    return {
      coverImage,
      empathyMap,
      competitorAnalysis,
      wireframeJobsList,
      wireframeEditJob,
      hifiJobsList,
      hifiCandidate,
    };
  },
};
</script>

<style scoped>
.case-page--atlas {
  --accent: #E8623C;
}
.case-page--atlas .case-meta-strip {
  grid-template-columns: repeat(6, 1fr);
}
.case-page--atlas .process-flow {
  overflow: visible;
}

.case-page--atlas .process-step {
  overflow: visible;
}
.case-page--atlas .prose p.lead::first-letter {
  color: #E8623C !important;
}
/* Real screenshots — contained rather than cropped, so artifact boards
   (empathy map, competitor grid, wireframes) stay readable end to end. */
.case-page--atlas .cover-shot {
  max-width: 92%;
  max-height: 84%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 24px 60px -16px rgba(0, 0, 0, 0.45);
}
.case-page--atlas .artifact-shot {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 28px;
}
.case-page--atlas .image-pair .artifact-shot {
  padding: 20px;
}
.case-page--atlas .image-pair {
  align-items: stretch;
}

.case-page--atlas .image-pair .image-block {
  min-height: 360px;
}
.case-page--atlas .case-cover {
  background: linear-gradient(135deg, #2d3142 0%, #4f5b7c 50%, #8093b0 100%);
  box-shadow: 0 32px 80px -24px rgba(45, 49, 66, 0.4);
}
.bg-atlas-light {
  background: linear-gradient(135deg, #4f5b7c 0%, #8093b0 60%, #a8b5cc 100%);
}
.bg-atlas-mid {
  background: linear-gradient(135deg, #2d3142 0%, #4f5b7c 60%, #6a7693 100%);
}
.bg-atlas-dark {
  background: linear-gradient(135deg, #1c1f2c 0%, #2d3142 60%, #4f5b7c 100%);
}
.bg-warm {
  background: linear-gradient(135deg, #f4ebe0 0%, #e8d4b8 50%, #c8a572 100%);
}
</style>
