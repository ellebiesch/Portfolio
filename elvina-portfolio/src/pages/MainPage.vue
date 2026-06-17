<template>
  <div class="main-page">
    <hero-section />
    <clients-section />
    <about-section />
    <process-section />
    <tools-section />
    <work-section />
    <services-section />
    <testimonials-section />
    <currently-section />
  </div>
</template>

<script>
import HeroSection from '@/sections/HeroSection.vue';
import ClientsSection from '@/sections/ClientsSection.vue';
import AboutSection from '@/sections/AboutSection.vue';
import ProcessSection from '@/sections/ProcessSection.vue';
import ToolsSection from '@/sections/ToolsSection.vue';
import WorkSection from '@/sections/WorkSection.vue';
import ServicesSection from '@/sections/ServicesSection.vue';
import TestimonialsSection from '@/sections/TestimonialsSection.vue';
import CurrentlySection from '@/sections/CurrentlySection.vue';

export default {
  name: 'MainPage',
  components: {
    HeroSection,
    ClientsSection,
    AboutSection,
    ProcessSection,
    ToolsSection,
    WorkSection,
    ServicesSection,
    TestimonialsSection,
    CurrentlySection,
  },
};
</script>

<style scoped></style>
