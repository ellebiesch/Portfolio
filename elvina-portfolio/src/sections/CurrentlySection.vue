<template>
  <section class="currently">
    <div class="container">
      <div class="currently-grid">
        <div v-reveal>
          <div class="about-eyebrow">Currently</div>
          <h2 class="currently-title">Away from the <em>screens</em>.</h2>
        </div>
        <div class="currently-list">
          <div
            v-for="(item, i) in items"
            :key="item.label"
            v-reveal="100 + i * 90"
            class="now-item"
          >
            <div class="now-label">{{ item.label }}</div>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="now-content" v-html="item.content"></div>
            <div class="now-time">{{ item.time }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CurrentlySection',
  data() {
    return {
      items: [
        {
          label: 'Reading',
          content:
            '<em>The Decision Book</em> by Mikael Krogerus and Roman Tschäppeler, alongside <em>Essentialism</em> by Greg McKeown.',
          time: 'Ongoing',
        },
        {
          label: 'Building',
          content:
            'A set of reusable UX review, critique, and QA workflows for AI-assisted product design. Mainly because I like finding repeatable ways to catch problems before they get expensive.',
          time: '2026',
        },
        {
          label: 'Off-hours',
          content:
            'Learning drums, playing badminton, long walks, coffee hopping, and slowly building a proper <em>Zildjian</em> setup while eight cats monitor the budget.',
          time: 'Weekends',
        },
      ],
    };
  },
};
</script>

<style scoped>
.currently {
  padding: 140px 0;
  border-bottom: 1px solid var(--rule);
}
.currently-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 96px;
  align-items: start;
}
.currently-title {
  font-family: var(--display);
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 500;
  line-height: 0.98;
  letter-spacing: -0.025em;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
}
.currently-title em {
  font-style: normal;
  font-weight: 500;
  color: var(--accent);
}
.currently-list {
  display: flex;
  flex-direction: column;
}
.now-item {
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: 24px;
  padding: 24px 0;
  border-top: 1px solid var(--rule);
  align-items: baseline;
  transition: padding 0.3s ease;
}
.now-item:hover {
  padding-left: 8px;
}
.now-item:last-child {
  border-bottom: 1px solid var(--rule);
}
.now-label {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-muted);
}
.now-content {
  font-size: 17px;
  line-height: 1.55;
  color: var(--ink);
}
.now-content :deep(em) {
  font-family: var(--display);
  font-style: italic;
  color: var(--accent);
}
.now-time {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-muted);
  letter-spacing: 0.04em;
}

@media (max-width: 900px) {
  .currently {
    padding: 80px 0;
  }
  .currently-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .now-item {
    grid-template-columns: 1fr;
    gap: 6px;
  }
  .now-time {
    display: none;
  }
}
</style>
