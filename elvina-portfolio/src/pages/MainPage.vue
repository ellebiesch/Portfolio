<template>
  <div class="main-page">
    <hero-section />
    <clients-section />
    <engagement-section />
    <work-section />
    <about-section />
    <services-section />
    <process-section />
    <strengths-section />
    <testimonials-section />
    <currently-section />
  </div>
</template>

<script>
import HeroSection from '@/sections/HeroSection.vue';
import ClientsSection from '@/sections/ClientsSection.vue';
import EngagementSection from '@/sections/EngagementSection.vue';
import AboutSection from '@/sections/AboutSection.vue';
import ProcessSection from '@/sections/ProcessSection.vue';
import StrengthsSection from '@/sections/StrengthsSection.vue';
import WorkSection from '@/sections/WorkSection.vue';
import ServicesSection from '@/sections/ServicesSection.vue';
import TestimonialsSection from '@/sections/TestimonialsSection.vue';
import CurrentlySection from '@/sections/CurrentlySection.vue';

export default {
  name: 'MainPage',
  components: {
    HeroSection,
    ClientsSection,
    EngagementSection,
    AboutSection,
    ProcessSection,
    StrengthsSection,
    WorkSection,
    ServicesSection,
    TestimonialsSection,
    CurrentlySection,
  },
};
</script>

<style scoped></style>
