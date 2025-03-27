<template>
  <transition name="slide-up" @after-leave="onTransitioned">
    <div v-if="loading" class="loading-screen" >
      <div class="h-full flex flex-col justify-center items-center">
        <!-- <div class="m-auto flex flex-col gap-y-5 justify-center items-center">
          <img loading="lazy" src="@/assets/loading-hero-image.svg" class="lg:w-[390px] h-auto xs:w-[330px]" alt="elvina" />
          <div class="text-black font-extrabold text-[30px] mx-auto font-gellix xl:text-[62px]">
            Loading<span class="dot dot-1">.</span><span class="dot dot-2">.</span><span class="dot dot-3">.</span>
          </div>
        </div> -->
        <div class="m-auto flex flex-col flex-nowrap">
          <div class="dripping flex flex-col justify-center items-center">
            <div class="loading-dripper"></div>
            <div class="loading-teardrop"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
emits: ['loading-complete'],
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
</style>