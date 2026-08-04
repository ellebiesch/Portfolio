<template>
  <nav>
    <div class="container">
      <router-link to="/home" class="brand" aria-label="Elvina Garcia — home">
        <brand-mark />
      </router-link>
      <ul class="nav-links">
        <li><router-link :to="{ path: '/home', hash: '#work' }">Work</router-link></li>
        <li><router-link :to="{ path: '/home', hash: '#about' }">About</router-link></li>
        <li><router-link :to="{ path: '/home', hash: '#services' }">Services</router-link></li>
        <li>
          <router-link :to="{ path: '/home', hash: '#contact' }" class="nav-cta">
            Get in touch <span class="arrow">→</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import BrandMark from './BrandMark.vue';

export default {
  name: 'NavigationElement',
  components: { BrandMark },
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border-bottom: 1px solid rgba(232, 228, 220, 0.6);
  z-index: 100;
}
nav .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
}
.brand {
  font-size: 30px; /* drives the mark's height via its 1em sizing */
  color: var(--ink);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: opacity 0.25s;
}
.brand:hover {
  opacity: 0.7;
}
@media (max-width: 900px) {
  .brand {
    font-size: 26px;
  }
}
.nav-links {
  display: flex;
  gap: 36px;
  list-style: none;
  align-items: center;
}
.nav-links a {
  color: var(--ink);
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  transition: color 0.2s;
  position: relative;
}
.nav-links a:not(.nav-cta)::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 1px;
  background: var(--accent);
  transition: width 0.3s ease;
}
.nav-links a:not(.nav-cta):hover::after {
  width: 100%;
}
.nav-cta {
  font-size: 13px;
  font-weight: 500;
  padding: 10px 18px;
  border-radius: 999px;
  background: var(--accent);
  color: white !important;
  transition: all 0.25s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 12px -4px rgba(139, 58, 47, 0.4);
}
.nav-cta:hover {
  background: var(--ink) !important;
  transform: translateY(-1px);
  box-shadow: 0 10px 24px -8px rgba(11, 11, 10, 0.4);
}
.nav-cta .arrow {
  transition: transform 0.25s;
}
.nav-cta:hover .arrow {
  transform: translateX(4px);
}

@media (max-width: 900px) {
  .nav-links li:not(:last-child) {
    display: none;
  }
}
</style>
