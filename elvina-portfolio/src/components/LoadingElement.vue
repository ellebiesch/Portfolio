<template>
  <transition name="slide-up" @after-leave="onTransitioned">
    <div v-if="loading" class="loading-screen" >
      <div class="h-full flex flex-col justify-center items-center">
      
        <div class="mx-auto flex flex-col flex-nowrap pr-5">
          <div class="dripping flex flex-col justify-center items-center ml-[110px]">
            <div class="loading-dripper">
              <img :src="loadingDripperImg" alt="">
            </div>
            <div class="loading-teardrop">
              <img class="teardrop-object w-[10px] h-auto bg-[#fff]" :src="loadingTeardrop" alt="">
            </div>
          </div>
          <div class="gear-cont flex flex-row justify-center items-center">
            <div class="gear-large">
              <img class="h-auto spinning-gear" :src="loadingLarge" alt="">
            </div>
            <div class="gears flex flex-col gap-y-2">
              <img class="h-auto spinning-gear" :src="loadingMed" alt="">
              <img class="h-auto w-[80px] spinning-gear" :src="loadingSmall" alt="">
            </div>
          </div>
        </div>
        <div class="px-5 mx-auto flex flex-col flex-wrap justify-center items-center mt-10">
          <div class="text-black font-extrabold text-[24px] mx-auto font-sans xl:text-[32px] text-center">
            Loading<span class="dot dot-1">.</span><span class="dot dot-2">.</span><span class="dot dot-3">.</span><span>because good things takes time</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
emits: ['loading-complete'],
setup(){
      
      const loadingDripperImg = new URL('@/assets/loading-dripper.svg', import.meta.url).href
      const loadingTeardrop = new URL('@/assets/loading-teardrop.svg', import.meta.url).href
      const loadingLarge = new URL('@/assets/loading-gear-large.svg', import.meta.url).href
      const loadingMed = new URL('@/assets/loading-gear-med.svg', import.meta.url).href
      const loadingSmall = new URL('@/assets/loading-gear-small.svg', import.meta.url).href

      return {loadingDripperImg, loadingTeardrop, loadingLarge, loadingMed, loadingSmall};
      
    },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
      console.log('Loading Completed: ', this.loading)
    }, 1300)
  },
  methods: {
    onTransitioned() {
      console.log('Transition completed, component removed')
      this.$emit('loading-complete')
    }
  }
}
</script>

<style scoped>

.loading-dripper{
  background: url('@/assets/loading-dripper.svg');
}
.loading-teardrop{
  background: url('@/assets/loading-teardrop.svg');
}

.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white; /* Or your hero-bg color */
  z-index: 9999;
}

/* Vue transition classes */
.slide-up-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-up-leave-to {
  transform: translateY(-100%);
}

.dot {
  display: inline-block;
  animation: dotFade 1.4s infinite;
}

.dot-1 {
  animation-delay: 0s;
}

.dot-2 {
  animation-delay: 0.2s;
}

.dot-3 {
  animation-delay: 0.4s;
}


@keyframes dotFade {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
.dripping {
  position: relative;
  height: 160px;
}
.loading-teardrop {
  margin-top: 120px;
  position: absolute;
  left: 10px;
  top: 0px;
  animation: drop 0.5s infinite ease-in;
  opacity: 1;
}

.spinning-gear {
  animation: spin 2s linear infinite;
  transform-origin: center center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes drop {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(70px);
    opacity: 0;
  }
}
</style>