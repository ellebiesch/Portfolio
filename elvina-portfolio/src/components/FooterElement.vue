<template>
  <footer id="contact">
    <div class="container">
      <div v-reveal class="footer-eyebrow">Contact</div>
      <h2 v-reveal="80" class="footer-cta">Bring me the <em>complicated part</em>.</h2>
      <p v-reveal="160" class="footer-sub">
        If you're building complex operational software and need a designer who can get as deep into
        the product logic as the interface, let's talk.
      </p>
      <a v-reveal="240" href="mailto:elvinagarcia.design@gmail.com" class="footer-email">
        <span class="email-text">elvinagarcia.design@gmail.com</span>
      </a>
      <!-- Secondary CTAs from the copy revision — needs a LinkedIn URL and a
           résumé PDF dropped into /public before these go live.
      <div class="footer-links">
        <a href="LINKEDIN_URL" target="_blank" rel="noopener">View LinkedIn <span class="arrow">→</span></a>
        <a href="/elvina-garcia-resume.pdf" download>Download résumé <span class="arrow">→</span></a>
      </div>
      -->
      <div class="footer-bottom">
        <div>© 2026 Elvina Garcia · Senior Product Designer · Davao, Philippines</div>
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
  justify-content: center;
  gap: 24px;
  font-family: var(--display);
  font-size: clamp(18px, 2.2vw, 24px);
  color: white;
  text-decoration: none;
  padding: 16px 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  /* Named properties, not `all` — see the note in StrengthsSection. */
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
  font-weight: 500;
  /* Never exceed the viewport — the address has no natural break points. */
  max-width: 100%;
}
.email-text {
  min-width: 0;
  overflow-wrap: anywhere;
  text-align: center;
}
.footer-email:hover {
  background: var(--accent);
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 20px 48px -12px rgba(139, 58, 47, 0.6);
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
  .footer-email {
    font-size: clamp(20px, 4.4vw, 32px);
    padding: 14px 24px;
    gap: 16px;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 72px;
  }
  .footer-bottom > div:last-child a:first-child {
    margin-left: 0;
  }
}
@media (max-width: 600px) {
  /* Full-width block instead of a pill — the address needs the whole row. */
  .footer-email {
    display: flex;
    width: 100%;
    font-size: 17px;
    padding: 16px 20px;
    border-radius: 20px;
    gap: 14px;
  }
  .footer-sub {
    font-size: 17px;
    margin-bottom: 40px;
  }
}
</style>
