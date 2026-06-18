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
            I design because I believe most software treats its users as an afterthought. 
            And in the industries I worked in, that's not a minor inconvenience, it's a real cost that shows up in people's bodies, their time, and their livelihoods. 
            The people using these products aren't browsing. They're working. They're stressed. They're accountable for outcomes that matter. 
            They deserve software that was designed with that in mind. That's the problem I show up to solve.
          </p>
          <p>
           I'm not interested in design that wins awards for how it looks. 
           I'm interested in design that earns trust — from the person using it at 11pm on a double shift, 
           from the founder who bet their company on it, from the engineer who has to build it without a thousand revision cycles. 
           Design that holds up when the stakes are real.
          </p>
          <p>
            I ask a lot of whys. I challenge requirements when they don't serve the user. 
            I push back on scope when it creates complexity that nobody asked for. 
            I'd rather slow down a conversation by two hours than ship something that creates confusion for two years.
          </p>
          <p>
            Six years of this work has taught me one thing above everything else: the best software is the kind people stop noticing. 
            Not because it's forgettable but because it fits so well into how they already think and work that it stops feeling like a tool and starts feeling like an extension of themselves.
            That's what I'm building toward. Every project. Every screen. Every decision.
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
