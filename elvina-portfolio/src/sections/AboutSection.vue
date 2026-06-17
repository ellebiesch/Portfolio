<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-grid">
        <div>
          <div class="about-eyebrow">About</div>
          <h2 class="about-title">Hey, I'm <em>Elvina</em>.</h2>
        </div>
        <div class="about-body">
          <p>
            I'm a Product Designer, and I've made it my mission to create digital experiences that
            are as seamless as they are delightful. Whether it's crafting B2B SaaS web and mobile
            apps or designing those oh-so-satisfying screens, I'm all about making things that just
            feel right for the user.
          </p>
          <p>
            I've worked across industries like Behavioral Healthcare, Recruitment, and Logistics,
            which means I'm no stranger to complex challenges. But that's where the fun begins! I
            dive into projects with a sprint-based approach — no dragging timelines here, just
            focused feature drops, productive sync-ups, and a little room for tweaks and revisions
            (because hey, perfection is a process). 🤸‍♂️
          </p>
          <p>
            🎨 Figma is my playground — think of me as a wizard with auto-layouts, components, and
            advanced prototyping. I'm all about making designs scalable and beautifully consistent,
            thanks to my passion for design systems and component libraries. Oh, and did I mention?
            I'm all in for leveraging AI-generated images to spice up the design process.
          </p>
          <p>
            Here's what really drives me though: I want to design products that don't feel like
            <em>new tools to learn</em>. The B2B work I care about most is the kind where the
            software becomes a co-pilot — something that engraves itself into the systems users
            already navigate, instead of asking them to open yet another tab. The best compliment I
            can get isn't "this is beautiful." It's "I forget I'm using it."
          </p>
          <p>
            Based in Davao, Philippines, I bring a little bit of that island spirit into my work —
            laid back but serious about delivering results. My goal? To create designs that look
            amazing and make users' lives easier, all while bringing your vision to life.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>

<style scoped>
.about {
  padding: 160px 0;
  border-bottom: 1px solid var(--rule);
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 96px;
  align-items: start;
}
.about-title {
  font-family: var(--display);
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 500;
  line-height: 0.98;
  letter-spacing: -0.025em;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
}
.about-title em {
  font-style: normal;
  font-weight: 500;
  color: var(--accent);
}
.about-body p {
  font-size: 19px;
  line-height: 1.65;
  margin-bottom: 24px;
  color: var(--ink-soft);
}
.about-body p:first-child {
  font-size: 24px;
  color: var(--ink);
  line-height: 1.45;
}
.about-body p:first-child::first-letter {
  font-family: var(--display);
  font-size: 1.5em;
  font-weight: 600;
  color: var(--accent);
  margin-right: 0.05em;
}
.about-body em {
  font-style: italic;
  color: var(--accent);
}

@media (max-width: 900px) {
  .about {
    padding: 80px 0;
  }
  .about-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
