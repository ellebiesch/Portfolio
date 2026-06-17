<template>
  <section class="tools">
    <div class="container">
      <div class="tools-header">
        <div>
          <div class="about-eyebrow">Tools</div>
          <h2 class="about-title">My <em>digital</em> sidekicks.</h2>
        </div>
        <p class="tools-sub">The toolkit that makes me look like a genius — most of the time.</p>
      </div>
      <div class="tools-grid">
        <div v-for="tool in tools" :key="tool.name" class="tool">
          <div class="tool-name">{{ tool.name }}</div>
          <div class="tool-cat">{{ tool.cat }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ToolsSection',
  data() {
    return {
      tools: [
        { name: 'Figma', cat: 'Design · Prototyping' },
        { name: 'FigJam', cat: 'Whiteboard · Flows' },
        { name: 'Notion', cat: 'Docs · Specs' },
        { name: 'Claude', cat: 'AI · Research' },
        { name: 'Loom', cat: 'Walkthroughs' },
        { name: 'Slack', cat: 'Async sync' },
        { name: 'Jira', cat: 'Sprint tracking' },
        { name: 'Confluence', cat: 'Project tracking' },
      ],
    };
  },
};
</script>

<style scoped>
.tools {
  padding: 160px 0;
  border-bottom: 1px solid var(--rule);
}
.tools-header {
  margin-bottom: 72px;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 96px;
  align-items: end;
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
.tools-sub {
  font-size: 19px;
  line-height: 1.6;
  color: var(--ink-soft);
}
.tools-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--rule);
  border: 1px solid var(--rule);
  border-radius: 20px;
  overflow: hidden;
}
.tool {
  background: var(--bg);
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.tool::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(216, 118, 87, 0.06) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.4s;
}
.tool:hover {
  background: var(--bg-soft);
}
.tool:hover::before {
  opacity: 1;
}
.tool-name {
  font-family: var(--display);
  font-size: 30px;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.1;
  position: relative;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
}
.tool-cat {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  position: relative;
}

@media (max-width: 1024px) {
  .tools-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 900px) {
  .tools {
    padding: 80px 0;
  }
  .tools-header {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
