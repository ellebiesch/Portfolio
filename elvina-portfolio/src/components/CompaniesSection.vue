<template>
  <section v-motion-slide-visible-once-bottom class="container font-gellix max-w-full xs:py-12 md:py-16 lg:py-20 bg-[#fafafa]">
    <!-- Section Title -->
    <h1 class="title font-semibold xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[36px] text-center xs:mb-8 md:mb-12 text-black/70">
      Organizations I have worked & collaborate with
    </h1>

    <!-- Company Logos Container -->
    <div class="company-logos-wrapper xs:px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div class="flex flex-wrap items-center justify-center xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6">

        <!-- Row 1: NAVIX, roameo, ATLAS, truckpedia, G360, rogomi, FishH -->
        <div class="company-logo-pill">
          <img v-lazy="navixHealthLogo" alt="NAVIX Health" class="xs:h-5 sm:h-6 md:h-7 lg:h-8 w-auto">
        </div>

        <div class="company-logo-pill">
          <img v-lazy="roameoLogo" alt="roameo" class="xs:h-5 sm:h-6 md:h-7 lg:h-8 w-auto">
        </div>

        <div class="company-logo-pill">
          <img v-lazy="atlasLogo" alt="ATLAS" class="xs:h-5 sm:h-6 md:h-7 lg:h-8 w-auto">
        </div>

        <div class="company-logo-pill">
          <img v-lazy="truckpediaLogo" alt="truckpedia" class="xs:h-5 sm:h-6 md:h-7 lg:h-8 w-auto">
        </div>

        <div class="company-logo-pill">
          <img v-lazy="g360Logo" alt="G360" class="xs:h-5 sm:h-6 md:h-7 lg:h-8 w-auto">
        </div>

        <div class="company-logo-pill">
          <img v-lazy="rogomiLogo" alt="rogomi" class="xs:h-5 sm:h-6 md:h-7 lg:h-8 w-auto">
        </div>

        <div class="company-logo-pill">
          <img v-lazy="fishbaseLogo" alt="FishH" class="xs:h-5 sm:h-6 md:h-7 lg:h-8 w-auto">
        </div>

        <!-- Row 2: Spectacle, ATIC, Sargoos, EmiraPro, FOXBURY, Harmoniq, Whitewood -->
        <div class="company-logo-pill">
          <img v-lazy="spectacleLogo" alt="Spectacle" class="xs:h-4 sm:h-5 md:h-6 lg:h-7 w-auto">
        </div>

        <div class="company-logo-pill">
          <img v-lazy="atticLogo" alt="ATIC" class="xs:h-5 sm:h-6 md:h-7 lg:h-8 w-auto">
        </div>

        <div class="company-logo-pill">
          <img v-lazy="sargoosLogo" alt="Sargoos" class="xs:h-5 sm:h-6 md:h-7 lg:h-8 w-auto">
        </div>

        <div class="company-logo-pill">
          <img v-lazy="emiraProLogo" alt="EmiraPro" class="xs:h-5 sm:h-6 md:h-7 lg:h-8 w-auto">
        </div>

        <div class="company-logo-pill">
          <img v-lazy="foxburyLogo" alt="FOXBURY" class="xs:h-5 sm:h-6 md:h-7 lg:h-8 w-auto">
        </div>

        <div class="company-logo-pill">
          <img v-lazy="harmoniqLogo" alt="Harmoniq" class="xs:h-5 sm:h-6 md:h-7 lg:h-8 w-auto">
        </div>

        <div class="company-logo-pill">
          <img v-lazy="whitewoodLogo" alt="Whitewood" class="xs:h-5 sm:h-6 md:h-7 lg:h-8 w-auto">
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
  @apply hover:shadow-md hover:border-gray-300/80;
  @apply cursor-default;
}

/* Optional: Add subtle opacity to logos */
.company-logo-pill img {
  @apply opacity-70 hover:opacity-100 transition-opacity duration-300;
}
</style>
