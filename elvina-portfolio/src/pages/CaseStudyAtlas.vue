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
          <div class="placeholder-badge">Cover · Hero shot of the redesigned Atlas ATS</div>
          <div class="cover-decor">
              <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg">
  <!-- Window chrome -->
  <rect x="40" y="40" width="720" height="340" rx="18" fill="white" opacity="0.97" />
  <rect x="40" y="40" width="720" height="48" rx="18" fill="#2d3142" opacity="0.1" />
  <rect x="60" y="60" width="120" height="10" rx="2" fill="#2d3142" opacity="0.6" />
  <rect x="660" y="56" width="80" height="18" rx="9" fill="#4f5b7c" />

  <!-- Table header -->
  <rect x="60" y="108" width="680" height="32" rx="4" fill="#2d3142" opacity="0.06" />
  <rect x="80" y="118" width="80" height="6" rx="2" fill="#2d3142" opacity="0.5" />
  <rect x="220" y="118" width="60" height="6" rx="2" fill="#2d3142" opacity="0.5" />
  <rect x="340" y="118" width="80" height="6" rx="2" fill="#2d3142" opacity="0.5" />
  <rect x="480" y="118" width="60" height="6" rx="2" fill="#2d3142" opacity="0.5" />
  <rect x="600" y="118" width="80" height="6" rx="2" fill="#2d3142" opacity="0.5" />

  <!-- Row 1 -->
  <rect x="60" y="148" width="680" height="40" rx="4" fill="white" />
  <circle cx="80" cy="168" r="10" fill="#4f5b7c" opacity="0.6" />
  <rect x="100" y="162" width="80" height="6" rx="2" fill="#2d3142" opacity="0.7" />
  <rect x="100" y="174" width="50" height="5" rx="2" fill="#2d3142" opacity="0.3" />
  <rect x="220" y="164" width="60" height="8" rx="4" fill="#4f5b7c" opacity="0.2" />
  <rect x="340" y="164" width="80" height="6" rx="2" fill="#2d3142" opacity="0.4" />
  <rect x="480" y="164" width="50" height="8" rx="4" fill="#2a6f4a" opacity="0.2" />
  <rect x="600" y="164" width="60" height="6" rx="2" fill="#2d3142" opacity="0.3" />

  <!-- Row 2 -->
  <rect x="60" y="196" width="680" height="40" rx="4" fill="#2d3142" opacity="0.02" />
  <circle cx="80" cy="216" r="10" fill="#8093b0" opacity="0.6" />
  <rect x="100" y="210" width="90" height="6" rx="2" fill="#2d3142" opacity="0.7" />
  <rect x="100" y="222" width="60" height="5" rx="2" fill="#2d3142" opacity="0.3" />
  <rect x="220" y="212" width="60" height="8" rx="4" fill="#c8a572" opacity="0.3" />
  <rect x="340" y="212" width="70" height="6" rx="2" fill="#2d3142" opacity="0.4" />
  <rect x="480" y="212" width="50" height="8" rx="4" fill="#4f5b7c" opacity="0.2" />
  <rect x="600" y="212" width="70" height="6" rx="2" fill="#2d3142" opacity="0.3" />

  <!-- Row 3 -->
  <rect x="60" y="244" width="680" height="40" rx="4" fill="white" />
  <circle cx="80" cy="264" r="10" fill="#8B3A2F" opacity="0.6" />
  <rect x="100" y="258" width="70" height="6" rx="2" fill="#2d3142" opacity="0.7" />
  <rect x="100" y="270" width="80" height="5" rx="2" fill="#2d3142" opacity="0.3" />
  <rect x="220" y="260" width="60" height="8" rx="4" fill="#4f5b7c" opacity="0.2" />
  <rect x="340" y="260" width="90" height="6" rx="2" fill="#2d3142" opacity="0.4" />
  <rect x="480" y="260" width="50" height="8" rx="4" fill="#2a6f4a" opacity="0.2" />
  <rect x="600" y="260" width="50" height="6" rx="2" fill="#2d3142" opacity="0.3" />

  <!-- Row 4 -->
  <rect x="60" y="292" width="680" height="40" rx="4" fill="#2d3142" opacity="0.02" />
  <circle cx="80" cy="312" r="10" fill="#c8a572" opacity="0.6" />
  <rect x="100" y="306" width="85" height="6" rx="2" fill="#2d3142" opacity="0.7" />
  <rect x="100" y="318" width="55" height="5" rx="2" fill="#2d3142" opacity="0.3" />
  <rect x="220" y="308" width="60" height="8" rx="4" fill="#8B3A2F" opacity="0.2" />
  <rect x="340" y="308" width="75" height="6" rx="2" fill="#2d3142" opacity="0.4" />
  <rect x="480" y="308" width="50" height="8" rx="4" fill="#c8a572" opacity="0.3" />
  <rect x="600" y="308" width="65" height="6" rx="2" fill="#2d3142" opacity="0.3" />

  <!-- Row 5 -->
  <rect x="60" y="340" width="680" height="24" rx="4" fill="white" opacity="0.5" />
  <rect x="80" y="349" width="60" height="5" rx="2" fill="#2d3142" opacity="0.3" />
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
             <svg width="100%" viewBox="0 0 680 480" role="img" style="margin: 24px auto; display: block;">
               <title>Client empathy map</title>
              <rect x="40" y="40" width="600" height="400" rx="8" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="0.5"/>
              <line x1="340" y1="40" x2="340" y2="440" stroke="rgba(255,255,255,0.3)" stroke-width="0.5"/>
              <line x1="40" y1="240" x2="640" y2="240" stroke="rgba(255,255,255,0.3)" stroke-width="0.5"/>
              <text x="110" y="72" fill="white" font-size="13" font-weight="500" text-anchor="middle" font-family="sans-serif">Says</text>
              <text x="570" y="72" fill="white" font-size="13" font-weight="500" text-anchor="middle" font-family="sans-serif">Thinks</text>
              <text x="110" y="420" fill="white" font-size="13" font-weight="500" text-anchor="middle" font-family="sans-serif">Does</text>
              <text x="570" y="420" fill="white" font-size="13" font-weight="500" text-anchor="middle" font-family="sans-serif">Feels</text>
              <rect x="58" y="85" width="120" height="36" rx="4" fill="rgba(255,255,255,0.15)"/>
              <text x="118" y="107" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">Too old to use</text>
              <rect x="58" y="130" width="140" height="48" rx="4" fill="rgba(255,255,255,0.15)"/>
              <text x="128" y="150" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">Wants clarity</text>
              <text x="128" y="166" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">and simplicity</text>
              <rect x="58" y="188" width="130" height="36" rx="4" fill="rgba(255,255,255,0.15)"/>
              <text x="123" y="210" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">Used for a long time</text>
              <rect x="370" y="85" width="150" height="36" rx="4" fill="rgba(255,255,255,0.1)"/>
              <text x="445" y="107" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">Should make things easier</text>
              <rect x="370" y="130" width="140" height="48" rx="4" fill="rgba(255,255,255,0.1)"/>
              <text x="440" y="150" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">Certain requirements</text>
              <text x="440" y="166" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">already in place</text>
              <rect x="530" y="130" width="90" height="36" rx="4" fill="rgba(255,255,255,0.1)"/>
              <text x="575" y="152" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">High stakes</text>
              <rect x="58" y="260" width="120" height="36" rx="4" fill="rgba(255,255,255,0.08)"/>
              <text x="118" y="282" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">Adding candidates</text>
              <rect x="58" y="305" width="130" height="36" rx="4" fill="rgba(255,255,255,0.08)"/>
              <text x="123" y="327" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">Follow-up on documents</text>
              <rect x="58" y="350" width="140" height="36" rx="4" fill="rgba(255,255,255,0.08)"/>
              <text x="128" y="372" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">Reaching out to candidates</text>
              <rect x="200" y="350" width="110" height="36" rx="4" fill="rgba(255,255,255,0.08)"/>
              <text x="255" y="372" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">Updating status</text>
              <rect x="370" y="260" width="120" height="48" rx="4" fill="rgba(232,98,60,0.3)"/>
              <text x="430" y="280" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">Can't track</text>
              <text x="430" y="296" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">candidate info</text>
              <rect x="500" y="260" width="120" height="36" rx="4" fill="rgba(232,98,60,0.3)"/>
              <text x="560" y="282" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">Annoyed by stages</text>
              <rect x="370" y="318" width="130" height="48" rx="4" fill="rgba(232,98,60,0.3)"/>
              <text x="435" y="338" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">Pressured to track</text>
              <text x="435" y="354" fill="white" font-size="11" text-anchor="middle" font-family="sans-serif">candidate status</text>
              <circle cx="340" cy="240" r="32" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" stroke-width="0.5"/>
              <circle cx="340" cy="228" r="12" fill="rgba(255,255,255,0.4)"/>
              <ellipse cx="340" cy="258" rx="18" ry="10" fill="rgba(255,255,255,0.3)"/>
             </svg>
           </div>
       
              <div class="image-block" style="background: #f4ebd9;">
               <span class="placeholder-badge">Image · Competitor Analysis</span>
               <svg width="90%" viewBox="0 0 680 420" role="img" style="margin: 24px auto; display: block;">
                <rect x="40" y="40" width="600" height="360" rx="8" fill="none" stroke="#ccc" stroke-width="0.5"/>
                <rect x="40" y="40" width="600" height="40" rx="4" fill="#f0f0f0"/>
                <text x="190" y="65" font-family="sans-serif" font-size="11" fill="#666" text-anchor="middle">Value Proposition</text>
                <text x="360" y="65" font-family="sans-serif" font-size="11" fill="#666" text-anchor="middle">Advantages</text>
                <text x="530" y="65" font-family="sans-serif" font-size="11" fill="#666" text-anchor="middle">Disadvantages</text>
                <line x1="130" y1="40" x2="130" y2="400" stroke="#ccc" stroke-width="0.5"/>
                <line x1="280" y1="40" x2="280" y2="400" stroke="#ccc" stroke-width="0.5"/>
                <line x1="440" y1="40" x2="440" y2="400" stroke="#ccc" stroke-width="0.5"/>
                <line x1="40" y1="160" x2="640" y2="160" stroke="#ccc" stroke-width="0.5"/>
                <line x1="40" y1="280" x2="640" y2="280" stroke="#ccc" stroke-width="0.5"/>
                <rect x="50" y="88" width="70" height="28" rx="4" fill="#6c5ce7"/>
                <text x="85" y="106" font-family="sans-serif" font-size="11" fill="white" font-weight="600" text-anchor="middle">JazzHR</text>
                <rect x="148" y="88" width="80" height="20" rx="3" fill="#81ecec" opacity="0.7"/>
                <rect x="236" y="88" width="70" height="20" rx="3" fill="#81ecec" opacity="0.7"/>
                <rect x="148" y="116" width="110" height="20" rx="3" fill="#81ecec" opacity="0.7"/>
                <rect x="298" y="88" width="70" height="20" rx="3" fill="#55efc4" opacity="0.7"/>
                <rect x="376" y="88" width="55" height="20" rx="3" fill="#55efc4" opacity="0.7"/>
                <rect x="298" y="116" width="80" height="20" rx="3" fill="#55efc4" opacity="0.7"/>
                <rect x="458" y="88" width="80" height="20" rx="3" fill="#fd79a8" opacity="0.6"/>
                <rect x="546" y="88" width="70" height="20" rx="3" fill="#fd79a8" opacity="0.6"/>
                <rect x="50" y="200" width="70" height="28" rx="4" fill="#00b894"/>
                <text x="85" y="218" font-family="sans-serif" font-size="11" fill="white" font-weight="600" text-anchor="middle">Workable</text>
                <rect x="148" y="200" width="75" height="20" rx="3" fill="#fd79a8" opacity="0.7"/>
                <rect x="231" y="200" width="90" height="20" rx="3" fill="#fd79a8" opacity="0.7"/>
                <rect x="298" y="200" width="70" height="20" rx="3" fill="#55efc4" opacity="0.7"/>
                <rect x="376" y="200" width="85" height="20" rx="3" fill="#55efc4" opacity="0.7"/>
                <rect x="458" y="200" width="70" height="20" rx="3" fill="#fd79a8" opacity="0.6"/>
                <rect x="536" y="200" width="80" height="20" rx="3" fill="#fd79a8" opacity="0.6"/>
                <rect x="50" y="310" width="70" height="28" rx="4" fill="#e17055"/>
                <text x="85" y="328" font-family="sans-serif" font-size="11" fill="white" font-weight="600" text-anchor="middle">Freshworks</text>
                <rect x="148" y="310" width="65" height="20" rx="3" fill="#74b9ff" opacity="0.7"/>
                <rect x="221" y="310" width="90" height="20" rx="3" fill="#74b9ff" opacity="0.7"/>
                <rect x="298" y="310" width="85" height="20" rx="3" fill="#55efc4" opacity="0.7"/>
                <rect x="391" y="310" width="70" height="20" rx="3" fill="#55efc4" opacity="0.7"/>
                <rect x="458" y="310" width="75" height="20" rx="3" fill="#fd79a8" opacity="0.6"/>
                <rect x="541" y="310" width="80" height="20" rx="3" fill="#fd79a8" opacity="0.6"/>
              </svg>
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
                  <svg width="95%" viewBox="0 0 340 390" role="img" style="margin: 16px auto; display: block;">
                    <rect x="0" y="0" width="340" height="380" rx="8" fill="white" stroke="#e0e0e0" stroke-width="0.5"/>
                    <rect x="0" y="0" width="340" height="36" rx="8" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="0.5"/>
                    <rect x="8" y="13" width="20" height="3" rx="1" fill="#bbb"/>
                    <rect x="8" y="20" width="14" height="3" rx="1" fill="#bbb"/>
                    <circle cx="320" cy="18" r="8" fill="#ddd"/>
                    <circle cx="302" cy="18" r="6" fill="#ddd"/>
                    <rect x="0" y="36" width="60" height="344" fill="#fafafa" stroke="#e0e0e0" stroke-width="0.5"/>
                    <rect x="8" y="52" width="44" height="6" rx="2" fill="#ddd"/>
                    <rect x="8" y="66" width="38" height="6" rx="2" fill="#ddd"/>
                    <rect x="8" y="80" width="40" height="6" rx="2" fill="#ddd"/>
                    <rect x="8" y="94" width="32" height="6" rx="2" fill="#2d3142" opacity="0.7"/>
                    <rect x="8" y="108" width="36" height="6" rx="2" fill="#ddd"/>
                    <rect x="68" y="44" width="60" height="10" rx="2" fill="#1a1a1a" opacity="0.7"/>
                    <rect x="68" y="60" width="80" height="6" rx="2" fill="#bbb"/>
                    <rect x="68" y="76" width="100" height="22" rx="4" fill="white" stroke="#ddd" stroke-width="0.5"/>
                    <rect x="76" y="84" width="55" height="5" rx="2" fill="#ccc"/>
                    <rect x="178" y="76" width="70" height="22" rx="4" fill="white" stroke="#ddd" stroke-width="0.5"/>
                    <rect x="186" y="84" width="40" height="5" rx="2" fill="#ccc"/>
                    <rect x="258" y="76" width="74" height="22" rx="4" fill="#2d3142"/>
                    <rect x="268" y="84" width="44" height="5" rx="2" fill="white" opacity="0.8"/>
                    <rect x="68" y="108" width="264" height="22" rx="2" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="0.5"/>
                    <rect x="76" y="116" width="60" height="5" rx="2" fill="#888"/>
                    <rect x="168" y="116" width="36" height="5" rx="2" fill="#888"/>
                    <rect x="224" y="116" width="40" height="5" rx="2" fill="#888"/>
                    <rect x="290" y="116" width="30" height="5" rx="2" fill="#888"/>
                    <rect x="68" y="130" width="264" height="28" rx="2" fill="white" stroke="#eee" stroke-width="0.5"/>
                    <rect x="76" y="141" width="80" height="5" rx="2" fill="#333" opacity="0.7"/>
                    <rect x="168" y="141" width="50" height="5" rx="2" fill="#bbb"/>
                    <circle cx="234" cy="144" r="6" fill="#ddd"/>
                    <circle cx="244" cy="144" r="6" fill="#ddd"/>
                    <rect x="292" y="137" width="36" height="12" rx="6" fill="#e8f5e9"/>
                    <rect x="298" y="141" width="22" height="5" rx="2" fill="#4caf50" opacity="0.7"/>
                    <rect x="68" y="158" width="264" height="28" rx="2" fill="#fafafa" stroke="#eee" stroke-width="0.5"/>
                    <rect x="76" y="169" width="70" height="5" rx="2" fill="#333" opacity="0.7"/>
                    <rect x="168" y="169" width="50" height="5" rx="2" fill="#bbb"/>
                    <circle cx="234" cy="172" r="6" fill="#ddd"/>
                    <rect x="292" y="165" width="36" height="12" rx="6" fill="#fff3e0"/>
                    <rect x="298" y="169" width="22" height="5" rx="2" fill="#ff9800" opacity="0.7"/>
                    <rect x="68" y="186" width="264" height="28" rx="2" fill="white" stroke="#eee" stroke-width="0.5"/>
                    <rect x="76" y="197" width="75" height="5" rx="2" fill="#333" opacity="0.7"/>
                    <rect x="168" y="197" width="50" height="5" rx="2" fill="#bbb"/>
                    <circle cx="234" cy="200" r="6" fill="#ddd"/>
                    <circle cx="244" cy="200" r="6" fill="#ddd"/>
                    <rect x="292" y="193" width="36" height="12" rx="6" fill="#fce4ec"/>
                    <rect x="298" y="197" width="22" height="5" rx="2" fill="#e91e63" opacity="0.7"/>
                    <rect x="68" y="214" width="264" height="28" rx="2" fill="#fafafa" stroke="#eee" stroke-width="0.5"/>
                    <rect x="76" y="225" width="65" height="5" rx="2" fill="#333" opacity="0.7"/>
                    <rect x="168" y="225" width="50" height="5" rx="2" fill="#bbb"/>
                    <circle cx="234" cy="228" r="6" fill="#ddd"/>
                    <rect x="292" y="221" width="36" height="12" rx="6" fill="#e8f5e9"/>
                    <rect x="298" y="225" width="22" height="5" rx="2" fill="#4caf50" opacity="0.7"/>
                    <text x="170" y="370" font-family="sans-serif" font-size="10" fill="#999" text-anchor="middle">Jobs list view</text>
                  </svg>
                </div>
                <div class="image-block" style="background: #f5f5f5;">
                  <span class="placeholder-badge">Image · Edit job form</span>
                  <svg width="95%" viewBox="0 0 340 390" role="img" style="margin: 16px auto; display: block;">
                    <rect x="0" y="0" width="340" height="380" rx="8" fill="white" stroke="#e0e0e0" stroke-width="0.5"/>
                    <rect x="0" y="0" width="340" height="36" rx="8" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="0.5"/>
                    <rect x="8" y="13" width="20" height="3" rx="1" fill="#bbb"/>
                    <rect x="8" y="20" width="14" height="3" rx="1" fill="#bbb"/>
                    <circle cx="320" cy="18" r="8" fill="#ddd"/>
                    <circle cx="302" cy="18" r="6" fill="#ddd"/>
                    <rect x="0" y="36" width="60" height="344" fill="#fafafa" stroke="#e0e0e0" stroke-width="0.5"/>
                    <rect x="8" y="52" width="44" height="6" rx="2" fill="#ddd"/>
                    <rect x="8" y="66" width="38" height="6" rx="2" fill="#ddd"/>
                    <rect x="8" y="80" width="40" height="6" rx="2" fill="#ddd"/>
                    <rect x="8" y="94" width="32" height="6" rx="2" fill="#2d3142" opacity="0.7"/>
                    <rect x="8" y="108" width="36" height="6" rx="2" fill="#ddd"/>
                    <rect x="68" y="44" width="50" height="9" rx="2" fill="#1a1a1a" opacity="0.7"/>
                    <rect x="68" y="58" width="40" height="6" rx="2" fill="#888"/>
                    <rect x="68" y="72" width="40" height="5" rx="2" fill="#aaa"/>
                    <rect x="68" y="82" width="130" height="22" rx="4" fill="white" stroke="#ddd" stroke-width="0.5"/>
                    <rect x="76" y="90" width="90" height="5" rx="2" fill="#bbb"/>
                    <rect x="206" y="82" width="110" height="22" rx="4" fill="white" stroke="#ddd" stroke-width="0.5"/>
                    <rect x="214" y="90" width="60" height="5" rx="2" fill="#bbb"/>
                    <rect x="68" y="110" width="130" height="22" rx="4" fill="white" stroke="#ddd" stroke-width="0.5"/>
                    <rect x="76" y="118" width="40" height="5" rx="2" fill="#bbb"/>
                    <rect x="68" y="138" width="60" height="7" rx="2" fill="#333" opacity="0.6"/>
                    <rect x="68" y="150" width="248" height="20" rx="2" fill="#f5f5f5" stroke="#eee" stroke-width="0.5"/>
                    <rect x="76" y="157" width="120" height="4" rx="2" fill="#888"/>
                    <rect x="234" y="157" width="30" height="4" rx="2" fill="#888"/>
                    <rect x="280" y="157" width="30" height="4" rx="2" fill="#888"/>
                    <rect x="68" y="170" width="248" height="20" rx="2" fill="white" stroke="#eee" stroke-width="0.5"/>
                    <rect x="76" y="177" width="110" height="4" rx="2" fill="#bbb"/>
                    <rect x="234" y="173" width="30" height="12" rx="2" fill="#f0f0f0" stroke="#eee" stroke-width="0.5"/>
                    <rect x="280" y="173" width="30" height="12" rx="2" fill="#f0f0f0" stroke="#eee" stroke-width="0.5"/>
                    <rect x="68" y="190" width="248" height="20" rx="2" fill="#fafafa" stroke="#eee" stroke-width="0.5"/>
                    <rect x="76" y="197" width="95" height="4" rx="2" fill="#bbb"/>
                    <rect x="234" y="193" width="30" height="12" rx="2" fill="#f0f0f0" stroke="#eee" stroke-width="0.5"/>
                    <rect x="280" y="193" width="30" height="12" rx="2" fill="#f0f0f0" stroke="#eee" stroke-width="0.5"/>
                    <rect x="68" y="210" width="248" height="20" rx="2" fill="white" stroke="#eee" stroke-width="0.5"/>
                    <rect x="76" y="217" width="130" height="4" rx="2" fill="#bbb"/>
                    <rect x="234" y="213" width="30" height="12" rx="2" fill="#f0f0f0" stroke="#eee" stroke-width="0.5"/>
                    <rect x="280" y="213" width="30" height="12" rx="2" fill="#f0f0f0" stroke="#eee" stroke-width="0.5"/>
                    <rect x="68" y="230" width="248" height="20" rx="2" fill="#fafafa" stroke="#eee" stroke-width="0.5"/>
                    <rect x="76" y="237" width="105" height="4" rx="2" fill="#bbb"/>
                    <rect x="234" y="233" width="30" height="12" rx="2" fill="#f0f0f0" stroke="#eee" stroke-width="0.5"/>
                    <rect x="280" y="233" width="30" height="12" rx="2" fill="#f0f0f0" stroke="#eee" stroke-width="0.5"/>
                    <rect x="68" y="250" width="248" height="20" rx="2" fill="white" stroke="#eee" stroke-width="0.5"/>
                    <rect x="76" y="257" width="80" height="4" rx="2" fill="#bbb"/>
                    <rect x="234" y="253" width="30" height="12" rx="2" fill="#f0f0f0" stroke="#eee" stroke-width="0.5"/>
                    <rect x="280" y="253" width="30" height="12" rx="2" fill="#f0f0f0" stroke="#eee" stroke-width="0.5"/>
                    <rect x="232" y="350" width="50" height="20" rx="4" fill="white" stroke="#ddd" stroke-width="0.5"/>
                    <rect x="240" y="357" width="28" height="5" rx="2" fill="#bbb"/>
                    <rect x="290" y="350" width="50" height="20" rx="4" fill="#2d3142"/>
                    <rect x="300" y="357" width="30" height="5" rx="2" fill="white" opacity="0.8"/>
                    <text x="170" y="370" font-family="sans-serif" font-size="10" fill="#999" text-anchor="middle">Edit job form</text>
                  </svg>
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
          <div class="image-block bg-atlas-dark" style="position: relative; min-height: 400px; overflow: hidden;">
              <span class="placeholder-badge">Image · High-fidelity Figma designs</span>
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;">

                <!-- Full white card edge to edge -->
                <rect x="0" y="40" width="800" height="360" fill="white" opacity="0.97" />

                <!-- Tab bar -->
                <rect x="0" y="40" width="800" height="32" fill="#2d3142" opacity="0.04" />
                <rect x="20" y="52" width="70" height="8" rx="2" fill="#4f5b7c" opacity="0.7" />
                <rect x="20" y="59" width="70" height="2" rx="1" fill="#4f5b7c" opacity="0.8" />
                <rect x="108" y="52" width="80" height="8" rx="2" fill="#2d3142" opacity="0.2" />
                <rect x="204" y="52" width="90" height="8" rx="2" fill="#2d3142" opacity="0.2" />
                <rect x="310" y="52" width="78" height="8" rx="2" fill="#2d3142" opacity="0.2" />
                <rect x="404" y="52" width="82" height="8" rx="2" fill="#2d3142" opacity="0.2" />
                <rect x="502" y="52" width="70" height="8" rx="2" fill="#2d3142" opacity="0.2" />

                <!-- Warning banner -->
                <rect x="20" y="84" width="760" height="36" rx="5" fill="#D85A30" opacity="0.1" />
                <circle cx="38" cy="102" r="8" fill="#D85A30" opacity="0.7" />
                <rect x="54" y="96" width="110" height="7" rx="2" fill="#D85A30" opacity="0.8" />
                <rect x="54" y="108" width="260" height="5" rx="2" fill="#D85A30" opacity="0.4" />

                <!-- Upload dropzone -->
                <rect x="20" y="130" width="760" height="56" rx="5" fill="#2d3142" opacity="0.03" stroke="#2d3142" stroke-width="0.8" stroke-dasharray="5,4" stroke-opacity="0.15" />
                <circle cx="360" cy="158" r="11" fill="#4f5b7c" opacity="0.25" />
                <rect x="378" y="153" width="120" height="8" rx="2" fill="#2d3142" opacity="0.25" />

                <!-- Section label -->
                <rect x="20" y="202" width="100" height="9" rx="2" fill="#2d3142" opacity="0.45" />

                <!-- Form row 1 — 4 fields -->
                <rect x="20" y="220" width="170" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />
                <rect x="204" y="220" width="170" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />
                <rect x="388" y="220" width="190" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />
                <rect x="592" y="220" width="188" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />

                <!-- Form row 2 — 5 fields -->
                <rect x="20" y="258" width="120" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />
                <rect x="154" y="258" width="120" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />
                <rect x="288" y="258" width="100" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />
                <rect x="402" y="258" width="160" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />
                <rect x="576" y="258" width="204" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />

                <!-- Form row 3 — salary pairs -->
                <rect x="20" y="296" width="80" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />
                <rect x="110" y="296" width="80" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />
                <rect x="204" y="296" width="80" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />
                <rect x="294" y="296" width="80" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />
                <rect x="388" y="296" width="110" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />
                <rect x="512" y="296" width="130" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />
                <rect x="656" y="296" width="124" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />

                <!-- Form row 4 -->
                <rect x="20" y="334" width="170" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />
                <rect x="204" y="334" width="170" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />
                <rect x="388" y="334" width="190" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />
                <rect x="592" y="334" width="188" height="24" rx="3" fill="#2d3142" opacity="0.05" stroke="#2d3142" stroke-width="0.5" stroke-opacity="0.15" />

                <!-- Back + Next buttons -->
                <rect x="658" y="372" width="56" height="24" rx="4" fill="#2d3142" opacity="0.12" />
                <rect x="724" y="372" width="56" height="24" rx="4" fill="#8B3A2F" opacity="0.85" />

              </svg>
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
export default {
  name: 'CaseStudyAtlas',
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
.case-page--atlas .cover-decor :deep(svg) {
  width: 400%;
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
