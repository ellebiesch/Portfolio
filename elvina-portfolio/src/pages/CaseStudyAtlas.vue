<template>
  <div class="case-page case-page--atlas">
    <!-- HERO -->
    <section class="case-hero">
      <div class="container">
        <router-link :to="{ path: '/home', hash: '#work' }" class="back-link"
          >← All case studies</router-link
        >
        <div class="case-eyebrow">Case Study · Recruitment</div>
        <h1 class="case-h1">Atlas ATS</h1>
        <p class="case-tagline">
          Transforming a legacy applicant tracking system into a modern, collaborative hiring engine
          — built for the pace and stakes of executive search.
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
          <div class="placeholder-badge">Cover · Hero shot of the redesigned Atlas ATS</div>
          <div class="cover-decor">
            <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
              <rect x="40" y="40" width="720" height="340" rx="18" fill="white" opacity="0.97" />
              <rect x="40" y="40" width="720" height="48" rx="18" fill="#2d3142" opacity="0.1" />
              <rect x="60" y="60" width="80" height="10" rx="2" fill="#2d3142" opacity="0.6" />
              <rect x="660" y="56" width="80" height="18" rx="9" fill="#2d3142" />
              <rect x="60" y="118" width="170" height="262" rx="10" fill="#2d3142" opacity="0.05" />
              <rect x="80" y="138" width="80" height="10" rx="2" fill="#2d3142" opacity="0.7" />
              <rect x="80" y="155" width="30" height="6" rx="2" fill="#2d3142" opacity="0.4" />
              <rect x="80" y="176" width="130" height="56" rx="6" fill="white" />
              <circle cx="98" cy="194" r="10" fill="#4f5b7c" />
              <rect x="116" y="188" width="70" height="6" rx="2" fill="#2d3142" opacity="0.7" />
              <rect x="116" y="200" width="50" height="5" rx="2" fill="#2d3142" opacity="0.4" />
              <rect x="80" y="216" width="30" height="10" rx="5" fill="#4f5b7c" opacity="0.3" />
              <rect x="80" y="240" width="130" height="56" rx="6" fill="white" />
              <circle cx="98" cy="258" r="10" fill="#8093b0" />
              <rect x="116" y="252" width="70" height="6" rx="2" fill="#2d3142" opacity="0.7" />
              <rect x="116" y="264" width="50" height="5" rx="2" fill="#2d3142" opacity="0.4" />
              <rect x="80" y="304" width="130" height="56" rx="6" fill="white" />
              <rect x="245" y="118" width="170" height="262" rx="10" fill="#2d3142" opacity="0.05" />
              <rect x="265" y="138" width="80" height="10" rx="2" fill="#2d3142" opacity="0.7" />
              <rect x="265" y="155" width="30" height="6" rx="2" fill="#2d3142" opacity="0.4" />
              <rect x="265" y="176" width="130" height="56" rx="6" fill="white" />
              <circle cx="283" cy="194" r="10" fill="#4f5b7c" />
              <rect x="301" y="188" width="70" height="6" rx="2" fill="#2d3142" opacity="0.7" />
              <rect x="301" y="200" width="50" height="5" rx="2" fill="#2d3142" opacity="0.4" />
              <rect x="265" y="240" width="130" height="56" rx="6" fill="white" />
              <circle cx="283" cy="258" r="10" fill="#c8a572" />
              <rect x="301" y="252" width="70" height="6" rx="2" fill="#2d3142" opacity="0.7" />
              <rect x="301" y="264" width="50" height="5" rx="2" fill="#2d3142" opacity="0.4" />
              <rect x="430" y="118" width="170" height="262" rx="10" fill="#2d3142" opacity="0.05" />
              <rect x="450" y="138" width="80" height="10" rx="2" fill="#2d3142" opacity="0.7" />
              <rect x="450" y="155" width="30" height="6" rx="2" fill="#2d3142" opacity="0.4" />
              <rect x="450" y="176" width="130" height="56" rx="6" fill="white" />
              <circle cx="468" cy="194" r="10" fill="#8B3A2F" />
              <rect x="486" y="188" width="70" height="6" rx="2" fill="#2d3142" opacity="0.7" />
              <rect x="486" y="200" width="50" height="5" rx="2" fill="#2d3142" opacity="0.4" />
              <rect x="615" y="118" width="125" height="262" rx="10" fill="#2d3142" opacity="0.05" />
              <rect x="635" y="138" width="80" height="10" rx="2" fill="#2d3142" opacity="0.7" />
              <rect x="635" y="155" width="30" height="6" rx="2" fill="#2d3142" opacity="0.4" />
              <rect x="635" y="176" width="85" height="56" rx="6" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- OVERVIEW -->
    <section class="section">
      <div class="prose-container prose">
        <div class="section-eyebrow">Overview</div>
        <p class="lead">
          Atlas is a recruitment platform that connects fast-growing companies with top executive
          talent. Internally, they relied on a custom-built Applicant Tracking System — but it was
          holding them back.
        </p>
        <p>
          The system had outdated, manual workflows, a cluttered and unintuitive UI, and weak
          collaboration tools. Engaged as a <strong>freelance designer on retainer</strong>, I led
          the UX/UI redesign of the Atlas ATS — transforming it into a modern, intuitive platform
          focused on clarity, collaboration, and recruiter productivity.
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
              The legacy ATS was reactive and inconsistent. Recruiters were doing their actual job —
              finding and placing executive talent — <em>around</em> the tool rather than
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
                  inefficient — context lived in heads and inboxes, not the system.
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
            <div class="image-block bg-atlas-light">
              <span class="placeholder-badge">Image · Client Empathy Map</span>
              <div class="placeholder-decor">
                <svg viewBox="0 0 500 360" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40" y="40" width="420" height="280" rx="14" fill="white" opacity="0.97" />
                  <circle cx="250" cy="180" r="40" fill="#4f5b7c" opacity="0.3" />
                  <rect x="230" y="172" width="40" height="6" rx="2" fill="#2d3142" />
                  <rect x="220" y="184" width="60" height="5" rx="2" fill="#2d3142" opacity="0.6" />
                  <line x1="250" y1="80" x2="250" y2="140" stroke="#2d3142" stroke-opacity="0.2" stroke-width="1" />
                  <line x1="250" y1="220" x2="250" y2="280" stroke="#2d3142" stroke-opacity="0.2" stroke-width="1" />
                  <line x1="190" y1="180" x2="100" y2="180" stroke="#2d3142" stroke-opacity="0.2" stroke-width="1" />
                  <line x1="310" y1="180" x2="400" y2="180" stroke="#2d3142" stroke-opacity="0.2" stroke-width="1" />
                  <rect x="60" y="60" width="120" height="64" rx="8" fill="#2d3142" opacity="0.06" />
                  <rect x="70" y="72" width="50" height="8" rx="2" fill="#2d3142" opacity="0.7" />
                  <rect x="70" y="88" width="100" height="4" rx="2" fill="#2d3142" opacity="0.4" />
                  <rect x="70" y="98" width="80" height="4" rx="2" fill="#2d3142" opacity="0.4" />
                  <rect x="70" y="108" width="90" height="4" rx="2" fill="#2d3142" opacity="0.4" />
                  <rect x="320" y="60" width="120" height="64" rx="8" fill="#2d3142" opacity="0.06" />
                  <rect x="330" y="72" width="60" height="8" rx="2" fill="#2d3142" opacity="0.7" />
                  <rect x="330" y="88" width="100" height="4" rx="2" fill="#2d3142" opacity="0.4" />
                  <rect x="330" y="98" width="90" height="4" rx="2" fill="#2d3142" opacity="0.4" />
                  <rect x="60" y="236" width="120" height="64" rx="8" fill="#2d3142" opacity="0.06" />
                  <rect x="70" y="248" width="50" height="8" rx="2" fill="#2d3142" opacity="0.7" />
                  <rect x="70" y="264" width="100" height="4" rx="2" fill="#2d3142" opacity="0.4" />
                  <rect x="320" y="236" width="120" height="64" rx="8" fill="#2d3142" opacity="0.06" />
                  <rect x="330" y="248" width="40" height="8" rx="2" fill="#2d3142" opacity="0.7" />
                  <rect x="330" y="264" width="100" height="4" rx="2" fill="#2d3142" opacity="0.4" />
                  <rect x="330" y="274" width="80" height="4" rx="2" fill="#2d3142" opacity="0.4" />
                </svg>
              </div>
            </div>
            <div class="image-block bg-warm">
              <span class="placeholder-badge">Image · Competitor Analysis</span>
              <div class="placeholder-decor">
                <svg viewBox="0 0 500 360" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40" y="40" width="420" height="280" rx="14" fill="white" opacity="0.97" />
                  <rect x="60" y="60" width="100" height="10" rx="2" fill="#8b6f3f" />
                  <rect x="60" y="76" width="60" height="6" rx="2" fill="#8b6f3f" opacity="0.5" />
                  <rect x="60" y="106" width="380" height="36" rx="6" fill="#8b6f3f" opacity="0.08" />
                  <rect x="80" y="118" width="80" height="6" rx="2" fill="#8b6f3f" opacity="0.7" />
                  <rect x="200" y="118" width="60" height="6" rx="2" fill="#8b6f3f" opacity="0.5" />
                  <rect x="290" y="118" width="100" height="6" rx="2" fill="#8b6f3f" opacity="0.5" />
                  <rect x="60" y="150" width="380" height="36" rx="6" fill="white" stroke="#8b6f3f" stroke-opacity="0.15" />
                  <rect x="80" y="162" width="80" height="6" rx="2" fill="#8b6f3f" opacity="0.7" />
                  <rect x="200" y="162" width="60" height="6" rx="2" fill="#8b6f3f" opacity="0.5" />
                  <rect x="290" y="162" width="60" height="6" rx="2" fill="#8b6f3f" opacity="0.5" />
                  <circle cx="420" cy="168" r="8" fill="#c8a572" />
                  <rect x="60" y="194" width="380" height="36" rx="6" fill="white" stroke="#8b6f3f" stroke-opacity="0.15" />
                  <rect x="80" y="206" width="80" height="6" rx="2" fill="#8b6f3f" opacity="0.7" />
                  <rect x="200" y="206" width="60" height="6" rx="2" fill="#8b6f3f" opacity="0.5" />
                  <rect x="290" y="206" width="90" height="6" rx="2" fill="#8b6f3f" opacity="0.5" />
                  <circle cx="420" cy="212" r="8" fill="#8b6f3f" opacity="0.4" />
                  <rect x="60" y="238" width="380" height="36" rx="6" fill="white" stroke="#8b6f3f" stroke-opacity="0.15" />
                  <rect x="80" y="250" width="80" height="6" rx="2" fill="#8b6f3f" opacity="0.7" />
                  <rect x="200" y="250" width="60" height="6" rx="2" fill="#8b6f3f" opacity="0.5" />
                  <rect x="290" y="250" width="70" height="6" rx="2" fill="#8b6f3f" opacity="0.5" />
                  <circle cx="420" cy="256" r="8" fill="#c8a572" />
                  <rect x="60" y="282" width="380" height="20" rx="6" fill="#8b6f3f" opacity="0.04" />
                </svg>
              </div>
            </div>
          </div>

          <div class="process-step">
            <div class="process-step-num">02</div>
            <div class="process-step-content">
              <h3>Competitive Benchmarking</h3>
              <p>
                Studied existing ATS platforms to map what users already expected — and where there
                was room to do something smarter. Used these patterns as both reference and contrast.
              </p>
            </div>
          </div>

          <div class="process-step">
            <div class="process-step-num">03</div>
            <div class="process-step-content">
              <h3>Low-Fidelity Wireframes</h3>
              <p>
                Sketched core screens — Add Job, List View, Candidate Cards — to establish structure
                and test flows before committing to visual decisions. Wireframes were also the
                fastest way to collect early client feedback and adjust direction.
              </p>
              <span class="artifact-pill">Artifact · Core flow wireframes</span>
            </div>
          </div>

          <div class="image-block bg-atlas-mid">
            <span class="placeholder-badge">Image · Low-fidelity wireframes</span>
            <div class="placeholder-decor">
              <svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" y="40" width="200" height="320" rx="10" fill="white" opacity="0.95" />
                <rect x="60" y="60" width="80" height="8" rx="2" fill="#2d3142" opacity="0.7" />
                <rect x="60" y="76" width="50" height="5" rx="2" fill="#2d3142" opacity="0.4" />
                <rect x="60" y="96" width="160" height="32" rx="4" fill="#2d3142" opacity="0.08" />
                <rect x="60" y="136" width="160" height="32" rx="4" fill="#2d3142" opacity="0.08" />
                <rect x="60" y="176" width="160" height="32" rx="4" fill="#2d3142" opacity="0.08" />
                <rect x="60" y="216" width="160" height="32" rx="4" fill="#2d3142" opacity="0.08" />
                <rect x="60" y="320" width="160" height="20" rx="10" fill="#2d3142" opacity="0.4" />
                <rect x="260" y="40" width="200" height="320" rx="10" fill="white" opacity="0.95" />
                <rect x="280" y="60" width="80" height="8" rx="2" fill="#2d3142" opacity="0.7" />
                <rect x="280" y="76" width="50" height="5" rx="2" fill="#2d3142" opacity="0.4" />
                <rect x="280" y="96" width="160" height="50" rx="4" fill="#2d3142" opacity="0.08" />
                <rect x="290" y="108" width="80" height="6" rx="2" fill="#2d3142" opacity="0.6" />
                <rect x="290" y="120" width="100" height="5" rx="2" fill="#2d3142" opacity="0.4" />
                <rect x="280" y="154" width="160" height="50" rx="4" fill="#2d3142" opacity="0.08" />
                <rect x="280" y="212" width="160" height="50" rx="4" fill="#2d3142" opacity="0.08" />
                <rect x="280" y="270" width="160" height="50" rx="4" fill="#2d3142" opacity="0.08" />
                <rect x="480" y="40" width="200" height="320" rx="10" fill="white" opacity="0.95" />
                <rect x="500" y="60" width="80" height="8" rx="2" fill="#2d3142" opacity="0.7" />
                <rect x="500" y="76" width="50" height="5" rx="2" fill="#2d3142" opacity="0.4" />
                <rect x="500" y="106" width="160" height="220" rx="4" fill="#2d3142" opacity="0.06" />
                <circle cx="520" cy="130" r="10" fill="#2d3142" opacity="0.3" />
                <rect x="540" y="124" width="80" height="6" rx="2" fill="#2d3142" opacity="0.6" />
                <rect x="540" y="136" width="60" height="5" rx="2" fill="#2d3142" opacity="0.4" />
                <rect x="510" y="160" width="140" height="40" rx="4" fill="white" />
                <rect x="510" y="210" width="140" height="40" rx="4" fill="white" />
                <rect x="510" y="260" width="140" height="40" rx="4" fill="white" />
              </svg>
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
                screen was designed against recruiter task flows — not just visual polish — so the
                high-fi work directly answered the goals we'd set at kickoff.
              </p>
            </div>
          </div>

          <div class="image-block bg-atlas-dark">
            <span class="placeholder-badge">Image · High-fidelity Figma designs</span>
            <div class="placeholder-decor">
              <svg viewBox="0 0 800 460" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" y="40" width="720" height="380" rx="14" fill="white" opacity="0.97" />
                <rect x="40" y="40" width="720" height="48" rx="14" fill="#2d3142" opacity="0.1" />
                <rect x="60" y="60" width="120" height="10" rx="2" fill="#2d3142" opacity="0.7" />
                <rect x="660" y="56" width="80" height="18" rx="9" fill="#4f5b7c" />
                <rect x="60" y="108" width="180" height="294" rx="10" fill="#2d3142" opacity="0.04" />
                <rect x="80" y="124" width="100" height="8" rx="2" fill="#2d3142" opacity="0.7" />
                <rect x="80" y="148" width="140" height="28" rx="4" fill="white" />
                <rect x="80" y="184" width="140" height="28" rx="4" fill="#4f5b7c" opacity="0.3" />
                <rect x="80" y="220" width="140" height="28" rx="4" fill="white" />
                <rect x="80" y="256" width="140" height="28" rx="4" fill="white" />
                <rect x="80" y="292" width="140" height="28" rx="4" fill="white" />
                <rect x="260" y="108" width="240" height="294" rx="10" fill="#2d3142" opacity="0.04" />
                <rect x="280" y="124" width="120" height="10" rx="2" fill="#2d3142" opacity="0.7" />
                <rect x="280" y="142" width="80" height="6" rx="2" fill="#2d3142" opacity="0.4" />
                <rect x="280" y="166" width="200" height="60" rx="6" fill="white" />
                <circle cx="304" cy="186" r="14" fill="#4f5b7c" opacity="0.5" />
                <rect x="326" y="178" width="80" height="6" rx="2" fill="#2d3142" opacity="0.7" />
                <rect x="326" y="190" width="60" height="5" rx="2" fill="#2d3142" opacity="0.4" />
                <rect x="280" y="234" width="200" height="60" rx="6" fill="white" />
                <rect x="280" y="302" width="200" height="60" rx="6" fill="white" />
                <rect x="520" y="108" width="220" height="294" rx="10" fill="#2d3142" opacity="0.04" />
                <rect x="540" y="124" width="120" height="10" rx="2" fill="#2d3142" opacity="0.7" />
                <rect x="540" y="148" width="180" height="80" rx="6" fill="white" />
                <rect x="540" y="240" width="180" height="40" rx="6" fill="white" />
                <rect x="540" y="292" width="180" height="40" rx="6" fill="white" />
                <rect x="540" y="350" width="80" height="32" rx="16" fill="#8B3A2F" />
              </svg>
            </div>
          </div>
          <p class="image-caption">
            High-fidelity UI — focused on clarity, hierarchy, and ease of use
          </p>
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
            <div class="next-phase-label">Next Phase · In progress</div>
            <h3>A visual and functional upgrade — without losing the recruiter-first feel</h3>
            <p>
              We're now working on a major visual and functional upgrade to elevate the platform's UI
              and brand identity, while keeping accessibility and clarity at the core for recruiters.
            </p>
            <p>
              The goal is to scale the platform without sacrificing speed or usability — so Atlas
              remains a high-performing, recruiter-first system as the business grows.
            </p>
            <div class="next-phase-focus">
              <div class="next-phase-focus-label">Key areas of focus</div>
              <ul>
                <li>
                  A <strong>redesigned "Add Job" flow</strong> for faster, more flexible job setup
                </li>
                <li>
                  <strong>Streamlined automation setup</strong> to reduce friction in task
                  configuration
                </li>
                <li>
                  Exploration of <strong>AI-powered enhancements</strong> — smart candidate
                  suggestions, automated screening prompts, and next-step nudges
                </li>
              </ul>
            </div>
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
export default {
  name: 'CaseStudyAtlas',
};
</script>

<style scoped>
.case-page--atlas {
  --accent: #8b3a2f;
}
.case-page--atlas .case-meta-strip {
  grid-template-columns: repeat(6, 1fr);
}
.case-page--atlass .cover-decor :deep(svg) {
  width: 400%;
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
