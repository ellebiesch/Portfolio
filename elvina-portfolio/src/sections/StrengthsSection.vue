<template>
  <section class="strengths">
    <div class="container">
      <div v-reveal class="section-label strengths-label">Working strengths</div>
      <ul class="strengths-list">
        <li
          v-for="(item, i) in strengths"
          :key="item"
          v-reveal="60 + i * 45"
          class="strength"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StrengthsSection',
  data() {
    return {
      strengths: [
        'Systems UX',
        'Information architecture',
        'Complex workflow design',
        'Data-dense interfaces',
        'Design systems',
        'High-fidelity prototyping',
        'Accessibility-aware design',
        'Developer handoff',
        'Implementation QA',
        'AI-assisted product experiences',
        'Working knowledge of HTML and CSS',
      ],
    };
  },
};
</script>

<style scoped>
.strengths {
  padding: 100px 0;
  border-bottom: 1px solid var(--rule);
}
.strengths-label {
  margin-bottom: 32px;
}
/* Free-flowing chips rather than a grid — eleven items of very uneven length
   would leave orphan cells in any fixed column count. */
.strengths-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
}
.strength {
  font-size: 15px;
  line-height: 1;
  color: var(--ink);
  background: var(--bg-soft);
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 13px 20px;
  /* Named properties, not `all` — `all` would also capture the opacity and
     translate the v-reveal directive animates, overriding its timing. */
  transition: border-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}
.strength:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .strengths {
    padding: 64px 0;
  }
  .strength {
    font-size: 14px;
    padding: 11px 16px;
  }
}
</style>
