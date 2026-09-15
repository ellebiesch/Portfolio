<template>
  <div class="case-page case-page--truckpedia">
    <!-- HERO -->
    <section class="case-hero is-dark">
      <div class="hero-noise"></div>
      <div class="container">
        <router-link :to="{ path: '/home', hash: '#work' }" class="back-link"
          >← All case studies</router-link
        >
        <div class="case-eyebrow">Case Study · Logistics · TMS</div>
        <h1 class="case-h1">Truckpedia</h1>
        <p class="case-subhead">
          Turning dispatch from form entry into a live planning surface
        </p>
        <div class="case-lede">
          <p>
            Dispatchers were assigning loads through a text-heavy scheduling workflow, then
            piecing together driver availability, timing, location, and load status separately.
          </p>
          <p>
            I redesigned the experience as a drag-and-drop calendar where dispatchers could see
            the operating plan and adjust it in the same place.
          </p>
        </div>

        <div class="case-meta-strip">
          <div class="meta-item">
            <div class="meta-label">Role</div>
            <div class="meta-value">UX/UI Designer</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Timeline</div>
            <div class="meta-value">2022 — 2023</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Case-study platform</div>
            <div class="meta-value">Web</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Broader engagement</div>
            <div class="meta-value">Web · Mobile</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Industry</div>
            <div class="meta-value">Logistics · Transportation Management System</div>
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

    <!-- THE PROBLEM -->
    <section v-reveal class="section">
      <div class="prose-container prose">
        <div class="section-eyebrow">The Problem</div>
        <h2 class="section-h2">The schedule existed, but it was difficult to see</h2>
        <p>
          Dispatchers coordinate multiple loads, drivers, vehicles, stops, and delivery windows
          throughout the day. A single change can affect several assignments.
        </p>
        <p>
          The original scheduling experience relied heavily on manual entry. Dispatchers could
          record an assignment, but the interface did not make the wider plan easy to understand.
        </p>
        <p class="lead">This created three connected problems:</p>
      </div>
      <div class="container">
        <div class="findings-grid">
          <div class="finding">
            <div class="finding-num">01</div>
            <h3 class="finding-title">Assignments were handled individually</h3>
            <p class="finding-body">
              Dispatchers had to work load by load instead of seeing how assignments affected the
              full schedule.
            </p>
          </div>
          <div class="finding">
            <div class="finding-num">02</div>
            <h3 class="finding-title">Conflicts were difficult to anticipate</h3>
            <p class="finding-body">
              Overlapping schedules and unavailable drivers were easier to discover after an
              assignment than during the decision.
            </p>
          </div>
          <div class="finding">
            <div class="finding-num">03</div>
            <h3 class="finding-title">Operational context was scattered</h3>
            <p class="finding-body">
              Checking a load could mean opening another record to confirm its driver, vehicle,
              stops, timing, or current status.
            </p>
          </div>
        </div>
      </div>
      <div class="container challenge-block">
        <div class="two-col">
          <div class="col-label">The Design Challenge</div>
          <div class="prose">
            <p>
              How could dispatchers see the complete operating plan, change assignments directly,
              and catch problems before committing them?
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- THE SYSTEM -->
    <section v-reveal class="section">
      <div class="prose-container prose">
        <div class="section-eyebrow">The System</div>
        <h2 class="section-h2">Designing the schedule as the workspace</h2>
        <p>I reorganized dispatch around a weekly timeline:</p>
        <ul>
          <li>Each driver received a dedicated row.</li>
          <li>Time moved horizontally across the calendar.</li>
          <li>Assigned loads appeared in relation to their scheduled duration.</li>
          <li>Unassigned loads remained visible beside the schedule.</li>
          <li>Status, timing, and conflicts could be read from the grid.</li>
        </ul>
        <p class="lead">
          The calendar was no longer a summary produced after scheduling. It became the place
          where scheduling happened.
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
              <h3>Make unassigned work visible</h3>
              <p>
                Unassigned loads were placed in a dedicated queue beside the calendar and grouped
                by day.
              </p>
              <p>
                This allowed dispatchers to see what still required action without leaving the
                schedule or searching through another list.
              </p>
              <p>
                A load could be moved directly from the queue onto a driver's row, connecting the
                unassigned workload to the available capacity in one interaction.
              </p>

              <div class="image-block">
                <img
                  :src="calendarAssigned"
                  alt="Dispatch calendar with unassigned loads at left and assigned loads spanning days on driver rows, tagged Delivered and In Transit"
                />
              </div>

              <p style="margin-top: 32px">The queue and calendar answered two related questions together:</p>
              <ul>
                <li>What still needs to be assigned?</li>
                <li>Who has room to take it?</li>
              </ul>
            </div>
          </div>

          <!-- 02 -->
          <div class="process-step">
            <div class="process-step-num">02</div>
            <div class="process-step-content">
              <h3>Replace repeated form entry with direct manipulation</h3>
              <p>
                Instead of opening a form and manually selecting a driver and schedule,
                dispatchers could drag a load into the relevant position on the calendar.
              </p>
              <p>The interaction needed more than movement. It also needed rules.</p>
              <p>
                Potential destinations had to communicate whether a load could be assigned there.
                Invalid or conflicting placements needed immediate feedback before the dispatcher
                completed the action.
              </p>
              <p>This turned assignment and reassignment into a visible decision:</p>
              <ul>
                <li>Pick up the load</li>
                <li>Review available destinations</li>
                <li>Identify conflicts</li>
                <li>Place it on the schedule</li>
                <li>Confirm the resulting assignment</li>
              </ul>
              <p>
                Direct manipulation reduced the distance between seeing a scheduling problem and
                acting on it.
              </p>
            </div>
          </div>

          <!-- 03 -->
          <div class="process-step">
            <div class="process-step-num">03</div>
            <div class="process-step-content">
              <h3>Keep operational context inside the calendar</h3>
              <p>
                The timeline could not display every load detail without becoming unreadable. But
                hiding too much information would force dispatchers back into individual records.
              </p>
              <p>I used layered information instead.</p>
              <p>
                The load bar carried the details needed for scanning: scheduled position,
                duration, and current status.
              </p>
              <p>Hovering over the load revealed additional context, including:</p>
              <ul>
                <li>Assigned driver</li>
                <li>Vehicle information</li>
                <li>Pickup stop and time</li>
                <li>Delivery stop and time</li>
                <li>Current load status</li>
              </ul>

              <div class="image-block">
                <img
                  :src="loadPreview"
                  alt="Hovering a load opens a preview card with driver, vehicle, and pickup and drop stops with times"
                />
              </div>

              <p style="margin-top: 32px">
                Dispatchers could verify an assignment without losing their place in the wider
                schedule.
              </p>
            </div>
          </div>

          <!-- 04 -->
          <div class="process-step">
            <div class="process-step-num">04</div>
            <div class="process-step-content">
              <h3>Separate progress from scheduling risk</h3>
              <p>
                Status and conflict communicate different things and should not rely on the same
                visual treatment.
              </p>
              <p>Load status showed where the work was in its lifecycle, including states such as:</p>
              <ul>
                <li>Dispatched</li>
                <li>In Transit</li>
                <li>Delivered</li>
              </ul>
              <p>Conflict indicators communicated whether the assignment itself required attention.</p>
              <p>
                Keeping these signals distinct allowed dispatchers to tell the difference between a
                load progressing normally and a scheduling decision that might need correction.
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
        <h2 class="section-h2">Designing beyond the ideal assignment</h2>
        <p>
          The straightforward interaction was dragging one load onto one available driver. The
          real design work was accounting for everything around it.
        </p>
        <p>The scheduling model also needed to consider:</p>
        <ul>
          <li>Loads without an assigned driver</li>
          <li>Overlapping assignments</li>
          <li>Driver availability</li>
          <li>Multi-day loads</li>
          <li>Split loads</li>
          <li>Changes to an existing assignment</li>
          <li>Invalid drop destinations</li>
          <li>Loads already in progress</li>
          <li>Completed or locked work</li>
          <li>Missing vehicle or timing information</li>
        </ul>
        <p>
          These states determined whether drag and drop would remain useful in real dispatch
          operations or become another source of uncertainty.
        </p>
      </div>
    </section>

    <!-- PROCESS -->
    <section v-reveal class="section">
      <div class="container">
        <div class="section-eyebrow">Process</div>
        <h2 class="section-h2 process-heading">From wireframe to working interaction</h2>
        <div class="prose-container prose">
          <p>
            Because the dispatch module already existed, the work focused on improving the
            scheduling experience without rebuilding the entire transportation-management
            workflow.
          </p>
          <p>
            I reviewed the existing structure, mapped the assignment states and constraints, and
            explored the calendar interaction through low-fidelity wireframes.
          </p>
          <p>The interaction was then developed into a Figma prototype to evaluate:</p>
          <ul>
            <li>How dispatchers selected and moved loads</li>
            <li>How valid and invalid destinations appeared</li>
            <li>Which information remained visible on the calendar</li>
            <li>What belonged in the hover preview</li>
            <li>How assignment changes were confirmed</li>
          </ul>
          <p>The final interface translated that interaction model into the production visual language.</p>
        </div>

        <div class="prototype-cta">
          <div class="prototype-cta-text">
            <div class="prototype-cta-label">Figma prototype</div>
            <p class="prototype-note">
              The shared prototype demonstrates the core interaction. The complete production
              implementation cannot be shown due to confidentiality.
            </p>
          </div>
          <a
            href="https://www.figma.com/proto/0m8X6GixU2oSQtbqMtitMk/Dispatch-Calendar---Wireframe?page-id=401%3A140&node-id=401-141&scaling=scale-down-width&content-scaling=fixed&t=Yyp53dcfxeDLvihj-1"
            target="_blank"
            rel="noopener noreferrer"
            class="prototype-link"
          >
            See the concept <span class="arrow">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- WHAT SHIPPED -->
    <section v-reveal class="section">
      <div class="container">
        <div class="outcomes">
          <div class="container">
            <div class="section-eyebrow">What Shipped</div>
            <h2 class="section-h2">What shipped</h2>
            <div class="outcomes-grid">
              <div>
                <div class="outcome-stat">Weekly dispatch timeline</div>
                <div class="outcome-desc">
                  Drivers, assignments, and available capacity could be reviewed across the same
                  scheduling window.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Unassigned-load queue</div>
                <div class="outcome-desc">
                  Work still requiring assignment remained visible beside the calendar instead of
                  living in a separate workflow.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Drag-and-drop assignment</div>
                <div class="outcome-desc">
                  Loads could be assigned or moved directly within the schedule, with feedback for
                  valid and conflicting placements.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Scannable load status</div>
                <div class="outcome-desc">
                  Dispatchers could understand load progress from the calendar without opening
                  every record.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Contextual load preview</div>
                <div class="outcome-desc">
                  Driver, vehicle, stop, and timing information could be checked without leaving
                  the scheduling view.
                </div>
              </div>
              <div>
                <div class="outcome-stat">Support for operational exceptions</div>
                <div class="outcome-desc">
                  The interaction model accounted for overlaps, unavailable drivers, multi-day
                  work, split loads, and assignment changes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT CHANGED -->
    <section v-reveal class="section">
      <div class="prose-container prose">
        <div class="section-eyebrow">Impact</div>
        <h2 class="section-h2">What changed in the experience</h2>
        <p>
          The redesign moved dispatching from a record-entry workflow into a visual planning
          workflow.
        </p>
        <p>
          Dispatchers could see unassigned work, driver capacity, load timing, and current
          progress together. Assignment and reassignment happened inside that shared context
          instead of through a disconnected form.
        </p>
        <p class="lead">
          The interface did not remove the complexity of dispatch. It made that complexity visible
          at the moment decisions were made.
        </p>
      </div>
    </section>

    <!-- LEARNINGS -->
    <section v-reveal class="section">
      <div class="container">
        <div class="conclusion">
          <div class="container">
            <div class="section-eyebrow">What I Learned</div>
            <p class="conclusion-quote">Drag and drop is not automatically simpler.</p>
            <p class="conclusion-quote">
              In operational software, every movement carries rules: where an item can go, why a
              destination is unavailable, what changes after the move, and whether the action can
              still be corrected.
            </p>
            <p class="conclusion-quote">
              The calendar worked because the interaction was supported by visible status,
              contextual information, and clear constraints, not because the
              <em>cards could move</em>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CLIENT QUOTE -->
    <section v-reveal class="section">
      <div class="prose-container">
        <div class="testimonial-block">
          <p class="testimonial-text">
            "Elvina brought creativity, thoughtfulness, and a strong user-centric mindset to every
            project. Her contributions made a meaningful impact on our product experience and
            internal workflows."
          </p>
          <div class="testimonial-author">
            <div class="author-name">Justin Lu</div>
            <div class="author-role">CEO &amp; Co-founder, Truckpedia</div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEXT -->
    <section v-reveal class="next-case">
      <div class="container">
        <router-link to="/case-studies/cps" class="next-case-link">
          <div class="next-label">Next case study</div>
          <div class="next-title"><em>Cargoos CPS</em> <span class="next-arrow">→</span></div>
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
    };
  },
};
</script>

<style scoped>
.case-page--truckpedia .case-hero {
  --hero-gradient: linear-gradient(150deg, #161a22 0%, #2d3748 45%, #4a5568 78%, #718096 100%);
}
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
.case-page--truckpedia .case-meta-strip {
  grid-template-columns: repeat(3, 1fr);
}
.case-page--truckpedia .outcomes-grid {
  grid-template-columns: repeat(3, 1fr);
}
.case-page--truckpedia .image-block {
  height: 480px;
  min-height: 0;
  background: var(--bg-soft);
}
.case-page--truckpedia .image-block img {
  max-width: 92%;
  max-height: 88%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 44px -16px rgba(0, 0, 0, 0.25);
}

/* Process steps mix several stacked <p> and <ul> per step. The shared
   .process-step-content p rule zeroes margin-bottom, and Tailwind preflight
   strips list markers/spacing from bare <ul>s — left alone that reads as an
   undifferentiated wall of text, so both get their own rhythm here. */
.case-page--truckpedia .process-step-content p + p,
.case-page--truckpedia .process-step-content p + ul {
  margin-top: 18px;
}
.case-page--truckpedia .process-step-content ul + p {
  margin-top: 24px;
}
.case-page--truckpedia .process-step-content ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.case-page--truckpedia .process-step-content li {
  font-size: 17px;
  line-height: 1.6;
  color: var(--ink-soft);
  margin-bottom: 10px;
  padding-left: 22px;
  position: relative;
}
.case-page--truckpedia .process-step-content li:last-child {
  margin-bottom: 0;
}
.case-page--truckpedia .process-step-content li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12px;
  width: 10px;
  height: 1px;
  background: var(--accent);
}

/* Section heading for the Process block — long enough at the shared
   .section-h2 size/max-width to wrap onto two lines, so it gets its own
   smaller scale that stays on one row at normal viewport widths. */
.case-page--truckpedia .process-heading {
  font-size: clamp(28px, 3.4vw, 44px);
  max-width: none;
  white-space: nowrap;
}
@media (max-width: 700px) {
  .case-page--truckpedia .process-heading {
    white-space: normal;
    font-size: clamp(26px, 6vw, 36px);
  }
}

/* Hero dek + lede — same pattern as the other case studies. */
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
.case-page--truckpedia .challenge-block {
  margin-top: 96px;
  padding-top: 56px;
  border-top: 1px solid var(--rule);
}

/* Closing statement — smaller than the shared hero-scale pull-quote, with
   spacing between the stacked paragraphs. */
.case-page--truckpedia .conclusion-quote {
  font-size: clamp(22px, 2.3vw, 27px);
  font-weight: 400;
  line-height: 1.55;
  max-width: none;
}
.case-page--truckpedia .conclusion-quote + .conclusion-quote {
  margin-top: 28px;
}
.case-page--truckpedia .conclusion {
  padding: 64px 0;
}

.prototype-cta {
  margin: 56px 0 24px;
  padding: 32px 40px;
  border: 1px solid var(--rule);
  border-radius: 20px;
  background: var(--bg-soft);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}
.prototype-cta-text {
  flex: 1;
  min-width: 0;
}
.prototype-cta-label {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}
.prototype-link {
  flex-shrink: 0;
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
  white-space: nowrap;
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
  margin: 0;
}
@media (max-width: 700px) {
  .prototype-cta {
    flex-direction: column;
    align-items: flex-start;
  }
  .prototype-link {
    align-self: stretch;
    justify-content: center;
  }
}

/* Client testimonial — deliberately not boxed like .conclusion above it, so
   the two don't read as the same component repeated twice in a row. */
.testimonial-block {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 0;
  border-left: 3px solid var(--accent);
  padding-left: 40px;
}
.testimonial-text {
  font-family: var(--display);
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 500;
  line-height: 1.35;
  letter-spacing: -0.015em;
  color: var(--ink);
  margin-bottom: 24px;
  font-variation-settings: 'opsz' 72, 'wdth' 95;
}
.testimonial-author .author-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--ink);
}
.testimonial-author .author-role {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--ink-muted);
  margin-top: 4px;
}

@media (max-width: 900px) {
  .case-page--truckpedia .case-meta-strip {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .case-page--truckpedia .outcomes-grid {
    grid-template-columns: 1fr;
  }
  .case-page--truckpedia .image-block {
    height: 340px;
  }
  .testimonial-block {
    padding-left: 20px;
  }
}
</style>
