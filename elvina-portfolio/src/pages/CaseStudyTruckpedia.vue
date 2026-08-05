<template>
  <div class="case-page case-page--truckpedia">
    <!-- HERO -->
    <section class="case-hero">
      <div class="container">
        <router-link :to="{ path: '/home', hash: '#work' }" class="back-link"
          >← All case studies</router-link
        >
        <div class="case-eyebrow">Case Study · Logistics · TMS</div>
        <h1 class="case-h1">Truckpedia</h1>
        <p class="case-tagline">
          Turning a text-heavy manual scheduler into a drag-and-drop dispatch calendar — so
          dispatchers could see their whole day and fix it in place.
        </p>

        <div class="case-meta-strip">
          <div class="meta-item">
            <div class="meta-label">Role</div>
            <div class="meta-value">UX and UI Designer</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Timeline</div>
            <div class="meta-value">2022 — 2023</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Platform</div>
            <div class="meta-value">Web · Mobile</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Industry</div>
            <div class="meta-value">Logistics · TMS</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Focus</div>
            <div class="meta-value">Dispatch scheduling</div>
          </div>
        </div>

        <div class="case-cover">
          <div class="placeholder-badge">Cover · Dispatch calendar — weekly timeline view</div>
          <img
            :src="weeklyView"
            alt="Truckpedia dispatch calendar in weekly timeline view, with unassigned loads at left and load bars across a multi-week grid"
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
          Truckpedia is a logistics SaaS platform designed to streamline operations for trucking
          companies. One of the key pain points identified by dispatch teams was the complexity and
          inefficiency of the manual scheduling system.
        </p>
        <p>
          The goal was to make dispatching faster, more intuitive, and less error-prone — without
          overwhelming the people already running their day inside it.
        </p>
      </div>
    </section>

    <!-- CHALLENGE -->
    <section class="section">
      <div class="container">
        <div class="two-col">
          <div class="col-label">Challenge</div>
          <div class="prose">
            <h2 class="section-h2">Scheduling by typing, not by seeing</h2>
            <p>
              Truck dispatchers were juggling multiple loads, drivers, and schedules using a
              text-heavy, manual input system. Everything had to be held in their head or on paper
              beside them.
            </p>
            <div class="challenges">
              <div class="challenges-label">
                <span class="marker">✕</span> Before — Key challenges
              </div>
              <ul>
                <li><strong>Slow planning times</strong>, especially during peak hours.</li>
                <li><strong>Frequent scheduling conflicts</strong> that surfaced only after the fact.</li>
                <li>
                  <strong>Low visibility</strong>, making it hard to spot conflicts or idle capacity.
                </li>
              </ul>
            </div>
            <p>
              Dispatchers needed a clearer way to visualize assignments and make adjustments in real
              time.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SOLUTION -->
    <section class="section">
      <div class="container">
        <div class="two-col">
          <div class="col-label">Solution</div>
          <div class="prose">
            <h2 class="section-h2">A drag-and-drop scheduling system</h2>
            <p>
              We redesigned the dispatch interface around direct manipulation — loads became objects
              you move, not fields you fill. The system lets dispatchers:
            </p>
            <div class="challenges positive">
              <div class="challenges-label positive">
                <span class="marker">✓</span> What the redesign enables
              </div>
              <ul>
                <li>
                  Quickly <strong>assign or reassign loads</strong> by dragging jobs into driver
                  calendars.
                </li>
                <li>Work with <strong>draggable load cards</strong> that validate the drop in real time.</li>
                <li>
                  Instantly see <strong>schedule conflicts</strong> through smart visual indicators.
                </li>
                <li>
                  Access <strong>contextual info</strong> — location, load status, driver
                  availability — on one screen.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="image-block bg-truck-mid">
          <span class="placeholder-badge">Image · Loads assigned across the week</span>
          <img
            :src="calendarAssigned"
            alt="Dispatch calendar with unassigned loads at left and assigned loads spanning days on driver rows, tagged Delivered and In Transit"
            class="screen-shot"
          />
        </div>
        <p class="image-caption">
          Unassigned loads sit to the left, grouped by day. Dispatchers drag them straight onto a
          driver's row — the schedule is the interface, not a form behind it. Status reads from the
          bar itself: <strong>Delivered</strong>, <strong>In Transit</strong>, <strong>Dispatched</strong>.
        </p>

        <div class="image-block bg-truck-dark">
          <span class="placeholder-badge">Image · Load preview on hover</span>
          <img
            :src="loadPreview"
            alt="Hovering a load opens a preview card with driver, vehicle, and pickup and drop stops with times"
            class="screen-shot"
          />
        </div>
        <p class="image-caption">
          Hovering a load surfaces driver, vehicle, and both stops with times — the checks a
          dispatcher would otherwise open a record to make, answered in place.
        </p>

        <div class="prototype-cta">
          <a
            href="https://www.figma.com/proto/0m8X6GixU2oSQtbqMtitMk/Dispatch-Calendar---Wireframe?page-id=401%3A140&node-id=401-141&scaling=scale-down-width&content-scaling=fixed&t=Yyp53dcfxeDLvihj-1"
            target="_blank"
            rel="noopener noreferrer"
            class="prototype-link"
          >
            See prototype <span class="arrow">→</span>
          </a>
          <p class="prototype-note">
            Note: This is a basic prototype. The full production version cannot be shared due to
            confidentiality.
          </p>
        </div>
      </div>
    </section>

    <!-- KEY FEATURES -->
    <section class="section">
      <div class="container">
        <div class="section-eyebrow">Key features introduced</div>
        <h2 class="section-h2">What shipped</h2>
        <div class="modules-grid">
          <div v-for="item in features" :key="item.name" class="module-card">
            <div class="module-name">{{ item.name }}</div>
            <div class="module-desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="section">
      <div class="container">
        <div class="section-eyebrow">Design Process</div>
        <h2 class="section-h2">A lean UX approach</h2>
        <div class="prose-container prose">
          <p>
            The dispatch module was already live, so we couldn't stop the world to redesign it. We
            worked in fast, feedback-driven iterations against a product people were using that same
            day.
          </p>
        </div>

        <div class="process-flow">
          <div v-for="(step, i) in process" :key="step.title" class="process-step">
            <div class="process-step-num">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="process-step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OUTCOMES -->
    <section class="section">
      <div class="container">
        <div class="outcomes">
          <div class="container">
            <div class="section-eyebrow">Outcomes</div>
            <h2 class="section-h2">What changed</h2>
            <div class="outcomes-grid">
              <div>
                <div class="outcome-stat">Faster planning</div>
                <div class="outcome-label">Especially at peak</div>
                <div class="outcome-desc">
                  Assigning a load went from typing entries into a manual system to dragging a card
                  onto a driver's row. The slowest part of the dispatcher's day — rush-hour
                  reshuffling — became the part the interface handles best.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Fewer conflicts</div>
                <div class="outcome-label">Caught before booking</div>
                <div class="outcome-desc">
                  Real-time drop validation rejects an invalid assignment as it happens, and
                  conflict indicators mark overlaps on the grid. Double-bookings surface at the
                  moment of the decision instead of after the truck is already committed.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Visible capacity</div>
                <div class="outcome-label">The whole week, at a glance</div>
                <div class="outcome-desc">
                  Empty rows read as available drivers and gaps read as idle time. The visibility
                  dispatchers were missing came from the layout itself, not from another report.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="prose-container prose">
          <h3 class="section-h3">Beyond the dispatch floor</h3>
          <p>
            The dispatch calendar didn't stay an internal workflow improvement. It became one of the
            modules Truckpedia leads with on its marketing site — the feature used to show
            prospective carriers what the platform actually feels like to run a day inside of, and
            one of the most efficient and user-friendly areas of the product.
          </p>
          <div class="note-bar">
            <span class="icon">Note</span>
            <span>
              Conversion impact is reported by the Truckpedia team rather than measured by me —
              I designed the module, not the marketing funnel.
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- CLIENT QUOTE -->
    <section class="section">
      <div class="container">
        <div class="conclusion">
          <div class="container">
            <div class="section-eyebrow">Conclusion</div>
            <p class="conclusion-quote">
              “Elvina brought creativity, thoughtfulness, and a strong user-centric mindset to every
              project. Her contributions made a meaningful impact on our product experience and
              internal workflows.”
            </p>
            <div class="quote-attribution">Justin Lu · CEO &amp; Co-founder, Truckpedia</div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEXT -->
    <section class="next-case">
      <div class="container">
        <router-link to="/case-studies/atlas" class="next-case-link">
          <div class="next-label">Next case study</div>
          <div class="next-title"><em>Atlas ATS</em> <span class="next-arrow">→</span></div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import weeklyView from '@/assets/truckpedia-weekly-view.png';
import calendarAssigned from '@/assets/truckpedia-calendar-assigned.png';
import loadPreview from '@/assets/truckpedia-load-preview.png';

export default {
  name: 'CaseStudyTruckpedia',
  data() {
    return {
      weeklyView,
      calendarAssigned,
      loadPreview,
      features: [
        {
          name: 'Calendar-style grid view',
          desc: 'One row per driver, so the whole week reads at a glance instead of load by load.',
        },
        {
          name: 'Drag-and-drop job cards',
          desc: 'Loads move by direct manipulation, with real-time feedback on whether the drop is valid.',
        },
        {
          name: 'Color-coded status tags',
          desc: 'Load progress is legible from across the grid without opening anything.',
        },
        {
          name: 'Hover previews and tooltips',
          desc: 'Location, load status, and driver availability surface in context — no extra screen.',
        },
      ],
      process: [
        {
          title: 'Stakeholder syncs',
          body: 'Aligned with logistics and product leads to define the friction points in the current workflow.',
        },
        {
          title: 'Rapid audit',
          body: 'Ran a UI/UX audit and shadowed dispatchers to spot usability gaps as they happened, in real dispatch hours.',
        },
        {
          title: 'UI enhancements',
          body: 'Sketched low-fidelity wireframes to reimagine layout structure and interaction patterns without disrupting the back-end flow.',
        },
        {
          title: 'Prototype testing',
          body: 'Built an interactive Figma prototype of the drag-and-drop feature and tested it internally with dispatchers to validate gestures and information placement.',
        },
        {
          title: 'Live feedback loop',
          body: 'Deployed the update in phases, gathering feedback during actual dispatch operations and refining from there.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.case-page--truckpedia .case-cover {
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 50%, #718096 100%);
  box-shadow: 0 32px 80px -24px rgba(45, 55, 72, 0.4);
}
.case-page--truckpedia .cover-shot {
  max-width: 92%;
  max-height: 84%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 24px 60px -16px rgba(0, 0, 0, 0.45);
}
.case-page--truckpedia .screen-shot {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 32px;
}
.case-page--truckpedia .outcomes-grid {
  grid-template-columns: repeat(3, 1fr);
}
.bg-truck-mid {
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 60%, #6b7a8f 100%);
}
.bg-truck-dark {
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 60%, #4a5568 100%);
}
.prototype-cta {
  margin: 56px 0 24px;
  padding: 32px;
  border: 1px solid var(--rule);
  border-radius: 20px;
  background: var(--bg-soft);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
.prototype-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
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
.prototype-link:hover {
  background: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 12px 28px -8px rgba(139, 58, 47, 0.4);
}
.prototype-link .arrow {
  transition: transform 0.25s;
}
.prototype-link:hover .arrow {
  transform: translateX(4px);
}
.prototype-note {
  font-family: var(--mono);
  font-size: 12px;
  line-height: 1.6;
  letter-spacing: 0.02em;
  color: var(--ink-muted);
  max-width: 60ch;
  margin: 0;
}
.quote-attribution {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-muted);
  margin-top: 24px;
}
@media (max-width: 900px) {
  .case-page--truckpedia .outcomes-grid {
    grid-template-columns: 1fr;
  }
  .case-page--truckpedia .screen-shot {
    padding: 16px;
  }
}
</style>
