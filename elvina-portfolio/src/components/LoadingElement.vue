<template>
  <transition name="slide-up" @after-leave="onTransitioned">
    <div v-if="loading" class="loading-screen">
      <div class="h-full flex flex-col justify-center items-center">

        <div class="gear-section">
          <div class="drip-wrap">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <rect x="8" y="0" width="8" height="20" rx="4" fill="#E8623C"/>
            </svg>
            <div class="teardrop"></div>
          </div>

          <div class="gear-cont">
            <svg class="spinning-gear" width="72" height="72" viewBox="0 0 72 72">
              <g fill="none" stroke="#E8623C" stroke-width="3">
                <circle cx="36" cy="36" r="20"/><circle cx="36" cy="36" r="10"/>
                <rect x="33" y="4" width="6" height="12" rx="3" fill="#E8623C"/>
                <rect x="33" y="56" width="6" height="12" rx="3" fill="#E8623C"/>
                <rect x="4" y="33" width="12" height="6" rx="3" fill="#E8623C"/>
                <rect x="56" y="33" width="12" height="6" rx="3" fill="#E8623C"/>
                <rect x="14" y="11" width="6" height="12" rx="3" fill="#E8623C" transform="rotate(45 17 17)"/>
                <rect x="52" y="11" width="6" height="12" rx="3" fill="#E8623C" transform="rotate(-45 55 17)"/>
                <rect x="14" y="49" width="6" height="12" rx="3" fill="#E8623C" transform="rotate(-45 17 55)"/>
                <rect x="52" y="49" width="6" height="12" rx="3" fill="#E8623C" transform="rotate(45 55 55)"/>
              </g>
            </svg>
            <div class="small-gears">
              <svg class="spinning-gear-reverse" width="44" height="44" viewBox="0 0 44 44">
                <g fill="none" stroke="#1a1a1a" stroke-width="2.5">
                  <circle cx="22" cy="22" r="12"/><circle cx="22" cy="22" r="6"/>
                  <rect x="19.5" y="2" width="5" height="8" rx="2.5" fill="#1a1a1a"/>
                  <rect x="19.5" y="34" width="5" height="8" rx="2.5" fill="#1a1a1a"/>
                  <rect x="2" y="19.5" width="8" height="5" rx="2.5" fill="#1a1a1a"/>
                  <rect x="34" y="19.5" width="8" height="5" rx="2.5" fill="#1a1a1a"/>
                  <rect x="8" y="6" width="5" height="8" rx="2.5" fill="#1a1a1a" transform="rotate(45 10.5 10)"/>
                  <rect x="31" y="6" width="5" height="8" rx="2.5" fill="#1a1a1a" transform="rotate(-45 33.5 10)"/>
                  <rect x="8" y="30" width="5" height="8" rx="2.5" fill="#1a1a1a" transform="rotate(-45 10.5 34)"/>
                  <rect x="31" y="30" width="5" height="8" rx="2.5" fill="#1a1a1a" transform="rotate(45 33.5 34)"/>
                </g>
              </svg>
              <svg class="spinning-gear" width="32" height="32" viewBox="0 0 32 32">
                <g fill="none" stroke="#E8623C" stroke-width="2">
                  <circle cx="16" cy="16" r="8"/><circle cx="16" cy="16" r="4"/>
                  <rect x="13.5" y="1" width="5" height="6" rx="2" fill="#E8623C"/>
                  <rect x="13.5" y="25" width="5" height="6" rx="2" fill="#E8623C"/>
                  <rect x="1" y="13.5" width="6" height="5" rx="2" fill="#E8623C"/>
                  <rect x="25" y="13.5" width="6" height="5" rx="2" fill="#E8623C"/>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div class="loading-text">
          <p class="loading-title">
            Loading<span class="dot dot-1">.</span><span class="dot dot-2">.</span><span class="dot dot-3">.</span>
          </p>
          <p class="loading-sub">because good things take time</p>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  emits: ['loading-complete'],
  data() {
    return { loading: true }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1300)
  },
  methods: {
    onTransitioned() {
      this.$emit('loading-complete')
    }
  }
}
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: white;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gear-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}
.drip-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
}
.teardrop {
  width: 10px; height: 14px;
  background: #E8623C;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  animation: drop 1.2s ease-in infinite;
}
.gear-cont {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.small-gears {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.loading-text {
  margin-top: 2rem;
  text-align: center;
}
.loading-title {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: -0.3px;
}
.loading-sub {
  font-size: 14px;
  color: #888;
  margin: 6px 0 0;
}
.dot {
  display: inline-block;
  animation: dotFade 1.4s infinite;
  color: #E8623C;
}
.dot-1 { animation-delay: 0s; }
.dot-2 { animation-delay: 0.2s; }
.dot-3 { animation-delay: 0.4s; }
.spinning-gear { animation: spin 3s linear infinite; }
.spinning-gear-reverse { animation: spin-reverse 2s linear infinite; }
.slide-up-leave-active { transition: transform 0.3s ease-in-out; }
.slide-up-leave-to { transform: translateY(-100%); }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes spin-reverse { to { transform: rotate(-360deg); } }
@keyframes drop {
  0% { transform: translateY(-10px); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateY(30px); opacity: 0; }
}
@keyframes dotFade {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}
</style>