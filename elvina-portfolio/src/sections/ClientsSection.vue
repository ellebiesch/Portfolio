<template>
  <section class="clients">
    <div class="container">
      <div class="section-label">Trusted by teams building serious software</div>
      <div class="client-list">
        <router-link to="/case-studies/primoro" class="client">
          <div class="client-name">Primoro</div>
          <div class="client-domain">Dental practice OS</div>
        </router-link>
        <div class="client">
          <div class="client-name">Cargoos</div>
          <div class="client-domain">Driver performance</div>
        </div>
        <router-link to="/case-studies/navix" class="client">
          <div class="client-name">Navix Health</div>
          <div class="client-domain">Behavioral healthcare platform</div>
        </router-link>
        <router-link to="/case-studies/atlas" class="client">
          <div class="client-name">Atlas ATS</div>
          <div class="client-domain">Recruitment SaaS</div>
        </router-link>
        <div class="client">
          <div class="client-name">Truckpedia</div>
          <div class="client-domain">Logistics</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ClientsSection',
};
</script>

<style scoped>
.clients {
  padding: 80px 0;
  border-bottom: 1px solid var(--rule);
  background: var(--bg-soft);
}
.client-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px;
  background: var(--rule);
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.client {
  background: var(--bg-soft);
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
}
.client::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(216, 118, 87, 0.06) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.4s;
}
.client:hover {
  background: white;
}
.client:hover::before {
  opacity: 1;
}
.client-name {
  font-family: var(--display);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.015em;
  position: relative;
  line-height: 1.15;
}
.client-domain {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  position: relative;
}

@media (max-width: 900px) {
  .client-list {
    grid-template-columns: 1fr;
  }
}
</style>
