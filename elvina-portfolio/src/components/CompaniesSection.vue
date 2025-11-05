<template>
  <section v-motion-slide-visible-once-bottom class="font-gellix w-full xs:py-12 md:py-16 lg:py-20 bg-[#fafafa] overflow-hidden">
    <!-- Section Title -->
    <h1 class="title font-semibold xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[36px] text-center xs:mb-8 md:mb-12 text-black/70">
      Organizations I have worked & collaborate with
    </h1>

    <!-- Row 1: Scrolling LEFT -->
    <div class="w-full xs:mb-4 md:mb-6 overflow-hidden">
      <div class="marquee-wrapper">
        <div class="marquee-content marquee-left">
          <!-- Duplicate logos 4 times for seamless infinite scroll -->
          <div v-for="(logo, index) in row1LogosRepeated" :key="`row1-${index}`" class="marquee-item">
            <div class="company-logo-pill">
              <img :src="logo.src" :alt="logo.alt" class="xs:h-5 sm:h-6 md:h-7 lg:h-10 w-auto">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Row 2: Scrolling RIGHT -->
    <div class="w-full overflow-hidden">
      <div class="marquee-wrapper">
        <div class="marquee-content marquee-right">
          <!-- Duplicate logos 4 times for seamless infinite scroll -->
          <div v-for="(logo, index) in row2LogosRepeated" :key="`row2-${index}`" class="marquee-item">
            <div class="company-logo-pill">
              <img :src="logo.src" :alt="logo.alt" class="xs:h-5 sm:h-6 md:h-7 lg:h-10 w-auto">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CompaniesSection',

  data() {
    return {
      // Company logo assets loaded with Vite's URL constructor pattern
      atlasLogo: new URL('../assets/atlas-logo.svg', import.meta.url).href,
      atticLogo: new URL('../assets/attic-logo.svg', import.meta.url).href,
      emiraProLogo: new URL('../assets/EmiraPro-logo.svg', import.meta.url).href,
      fishbaseLogo: new URL('../assets/fishbase-logo.svg', import.meta.url).href,
      foxburyLogo: new URL('../assets/foxbury-logo.svg', import.meta.url).href,
      g360Logo: new URL('../assets/g360-logo.svg', import.meta.url).href,
      harmoniqLogo: new URL('../assets/harmoniq-logo.svg', import.meta.url).href,
      navixHealthLogo: new URL('../assets/navix-health-logo.svg', import.meta.url).href,
      rlcResidenceLogo: new URL('../assets/rlc-residence-logo.svg', import.meta.url).href,
      roameoLogo: new URL('../assets/roameo-logo.svg', import.meta.url).href,
      rogomiLogo: new URL('../assets/rogomi-logo.svg', import.meta.url).href,
      sargoosLogo: new URL('../assets/sargoos-logo.svg', import.meta.url).href,
      spectacleLogo: new URL('../assets/spectacle-logo.svg', import.meta.url).href,
      truckpediaLogo: new URL('../assets/truckpedia-logo.svg', import.meta.url).href,
      whitewoodLogo: new URL('../assets/whitewood-logo.svg', import.meta.url).href
    }
  },

  computed: {
    // Row 1 logos (scrolling LEFT)
    row1Logos() {
      return [
        { src: this.navixHealthLogo, alt: 'NAVIX Health' },
        { src: this.roameoLogo, alt: 'roameo' },
        { src: this.atlasLogo, alt: 'ATLAS' },
        { src: this.truckpediaLogo, alt: 'truckpedia' },
        { src: this.g360Logo, alt: 'G360' },
        { src: this.rogomiLogo, alt: 'rogomi' },
        { src: this.fishbaseLogo, alt: 'FishH' }
      ];
    },

    // Row 2 logos (scrolling RIGHT)
    row2Logos() {
      return [
        { src: this.spectacleLogo, alt: 'Spectacle' },
        { src: this.atticLogo, alt: 'ATIC' },
        { src: this.sargoosLogo, alt: 'Sargoos' },
        { src: this.emiraProLogo, alt: 'EmiraPro' },
        { src: this.foxburyLogo, alt: 'FOXBURY' },
        { src: this.harmoniqLogo, alt: 'Harmoniq' },
        { src: this.whitewoodLogo, alt: 'Whitewood' }
      ];
    },

    // Repeat Row 1 logos 4 times for seamless infinite scroll
    row1LogosRepeated() {
      return [...this.row1Logos, ...this.row1Logos, ...this.row1Logos, ...this.row1Logos];
    },

    // Repeat Row 2 logos 4 times for seamless infinite scroll
    row2LogosRepeated() {
      return [...this.row2Logos, ...this.row2Logos, ...this.row2Logos, ...this.row2Logos];
    }
  }
}
</script>

<style scoped>
/* Pill-shaped logo containers with subtle border */
.company-logo-pill {
  @apply flex items-center justify-center;
  @apply bg-white border border-gray-200/60;
  @apply rounded-full;
  @apply xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3.5;
  @apply transition-all duration-300 ease-in-out;
  @apply cursor-default;
}

/* Logo opacity */
.company-logo-pill img {
  @apply opacity-70 transition-opacity duration-300;
}

/* Marquee wrapper */
.marquee-wrapper {
  @apply w-full overflow-hidden;
}

/* Marquee content container */
.marquee-content {
  @apply flex items-center;
  @apply w-fit;
  gap: 20px;
}

/* Marquee item */
.marquee-item {
  @apply flex-shrink-0;
}

/* Scrolling LEFT animation */
.marquee-left {
  animation: scroll-left 40s linear infinite;
}

/* Scrolling RIGHT animation */
.marquee-right {
  animation: scroll-right 40s linear infinite;
}

/* Keyframes for scrolling LEFT (right to left) */
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-25%);
  }
}

/* Keyframes for scrolling RIGHT (left to right) */
@keyframes scroll-right {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(0);
  }
}

/* Pause animation on hover */
.marquee-content:hover {
  animation-play-state: paused;
}
</style>
