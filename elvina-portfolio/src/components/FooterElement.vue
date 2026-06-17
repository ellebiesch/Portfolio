<template>
  <footer id="contact">
    <div class="container">
      <div class="footer-eyebrow">Get in touch</div>
      <h2 class="footer-cta">Let's talk <em>UX</em>.</h2>
      <p class="footer-sub">
        Building B2B software where users truly depend on what you ship? Whether it's a fresh idea,
        an ongoing project, or just a question — I'd love to hear about it.
      </p>
      <a href="mailto:elvinagarcia.design@gmail.com" class="footer-email">
        📩 elvinagarcia.design@gmail.com <span class="arrow">→</span>
      </a>
      <div class="footer-bottom">
        <div>© 2026 Elvina Garcia · Davao, Philippines · Crafted with care</div>
        <div>
          <a href="#">LinkedIn</a><a href="#">Read.cv</a><a href="#">Dribbble</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterElement',
};
</script>

<style scoped>
footer {
  padding: 160px 0 50px;
  background: var(--ink);
  color: white;
  position: relative;
  overflow: hidden;
}
footer::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background: radial-gradient(circle at 70% 40%, rgba(216, 118, 87, 0.18) 0%, transparent 50%);
  pointer-events: none;
}
footer .container {
  position: relative;
  z-index: 1;
}
.footer-eyebrow {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent-soft);
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.footer-cta {
  font-family: var(--display);
  font-size: clamp(56px, 9vw, 144px);
  font-weight: 500;
  line-height: 0.94;
  letter-spacing: -0.035em;
  margin-bottom: 48px;
  max-width: 1200px;
  font-variation-settings: 'opsz' 96, 'wdth' 95;
}
.footer-cta em {
  font-style: normal;
  font-weight: 500;
  color: var(--accent-soft);
}
.footer-sub {
  font-size: 19px;
  color: rgba(255, 255, 255, 0.7);
  max-width: 680px;
  margin-bottom: 56px;
  line-height: 1.6;
}
.footer-email {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: var(--display);
  font-size: clamp(28px, 4vw, 48px);
  color: white;
  text-decoration: none;
  padding: 16px 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  transition: all 0.3s ease;
  font-weight: 500;
}
.footer-email:hover {
  background: var(--accent);
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 20px 48px -12px rgba(139, 58, 47, 0.6);
}
.footer-email .arrow {
  transition: transform 0.3s;
}
.footer-email:hover .arrow {
  transform: translate(4px, -2px);
}
.footer-bottom {
  margin-top: 120px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--mono);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.05em;
  flex-wrap: wrap;
  gap: 16px;
}
.footer-bottom a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  margin-left: 24px;
  transition: color 0.2s;
}
.footer-bottom a:hover {
  color: var(--accent-soft);
}

@media (max-width: 900px) {
  footer {
    padding: 80px 0 40px;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-bottom > div:last-child a:first-child {
    margin-left: 0;
  }
}
</style>
