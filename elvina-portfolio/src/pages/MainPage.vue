<template>
  <div class="h-auto 2xl:pt-[140px] 3xl:pt-[80px]" >
    <section class="hero-section">
    <div id="main" class=" xl:px-[125px] 2xl:h-auto xs:px-3 sm:px-3 px-5">
      <div class="flex flex-col min-h-screen items-center justify-center lg:mb-[100px]">
        <div class="col-md-8 w-full flex flex-col justify-center items-center font-gellix">
          <h1 class="container lg:text-7xl xl:font-extrabold lg:font-bold text-2xl xs:mt-8 md:text-3xl font-semibold text-center ">Simplify the interface, amplify the experience</h1>
          <p class="text-black lg:text-2xl flex justify-center items-center py-8 sm:text-base sm:flex-row sm:gap-2 xs:text-base font-bold">Hi, 
            <span class="flex items-center justify-center"> <img src="../assets/wave.png" alt="hand-wave" class="h-full w-[40px]"></span> I am Elvina. I create clear and effective design for seamless user experiences</p>
        
            <div class="hero-button flex flex-row flex-wrap justify-center gap-x-5">
              <a
                href="#_"
                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
              >
                Get Started
              </a>
              <a
                href="#_"
                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 border-black/20 border-2 rounded-lg hover:bg-gray-200 focus:shadow-outline focus:outline-none"
              >
                Hire Me!
              </a>
            </div>

            <div class="hero-image max-w-full pt-[110px] flex flex-col justify-center items-center ">
              <img src="../assets/thinking-hero-img.svg" class="md:h-full md:w-[512px] 2xl:w-[612px] 2xl:h-auto mx-auto" alt="">
            </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container font-gellix max-w-full py-10 bg-[#fafafa]">
    <h1 class="title font-extrabold text-2xl text-center xl:py-4 uppercase text-black/40">companies I have worked with</h1>
    <div class="company-icon flex flex-row items-center justify-center gap-12 my-10 opacity-60">
      <img src="../assets/atlas-icon.png" class="h-auto w-[108px]" alt="atlas logo">
      <img src="../assets/rogomi-icon.png" class="h-auto w-[84px]" alt="rogomo logo">
      <img src="../assets/fishbase-icon.png" class="h-auto w-[113px]" alt="fishbase logo">
      <img src="../assets/rlc-icon.png" class="h-auto w-[40px]" alt="rlc logo">
      <img src="../assets/g36o-logo.png" class="h-auto w-[70px]" alt="g36o logo">
    </div>
  </section>

  <experience-section></experience-section>
  <discover-section></discover-section>
  
  <section class="services-section container font-gellix max-w-full py-10">
    <div class="container">
      <h1 class="label title font-extrabold text-[40px] text-center xl:py-4">Services</h1>
      <p class="sub-title text-center font-medium text-[18px] md:w-[800px] md:mx-auto">From creating wireframes and prototypes to developing high-fidelity mockups and animations, able to utilize a range of design tools to bring my designs to life.</p>
      <div class="service-wrapper flex flex-row flex-wrap items-stretch items-center justify-center gap-10 py-10">
        <div class="item text-center flex flex-col justify-center items-center rounded-md border-[1.5px] border-black/30 gap-4 md:w-[370px] min-h-[370px] p-[50px]">
          <img :src="uxDesignServiceIcon" class="icon" alt="pencil edit">
          <p class="sub text-[22px] text-black font-semibold">UX and UI Design</p>
          <p class="description text-base font-normal text-black opacity-70">User research methodologies, user interface for both Mobile App and B2B and B2C SaaS Products</p>
        </div>
        <div class="item text-center flex flex-col justify-center items-center rounded-md border-[1.5px] border-black/30 gap-4 md:w-[370px] min-h-[370px] p-[50px]">
          <img :src="interactionDesignServiceIcon" class="icon" alt="pencil edit">
          <p class="sub text-[22px] text-black font-semibold">Interaction Design</p>
          <p class="description text-base font-normal text-black opacity-70">Low and High fidelity mockups for user stimulation, animations and micro-interactions and transitions</p>
        </div>
        <div class="item text-center flex flex-col justify-center items-center rounded-md border-[1.5px] border-black/30 gap-4 md:w-[370px] min-h-[370px] p-[50px]">
          <img :src="uxAuditServiceIcon" class="icon" alt="pencil edit">
          <p class="sub text-[22px] text-black font-semibold">UX Audits</p>
          <p class="description text-base font-normal text-black opacity-70">Product recommendations on UX improvements</p>
        </div>
      </div>
    </div>
  </section>
  <testimonials-section></testimonials-section>
  <contact-form></contact-form>

</div>
</template> 

<script>
import ExperienceSection from '@/sections/ExperienceSection.vue';
import TestimonialsSection from '@/sections/TestimonialsSection.vue';
import ContactForm from '@/sections/ContactForm.vue';
import DiscoverSection from '@/sections/DiscoverSection.vue';

export default {
  components: {
    TestimonialsSection,
    ContactForm,
    ExperienceSection,
    DiscoverSection
  },
  data() {
    return {
      uxDesignServiceIcon: new URL('@/assets/service-ux-and-design-icon.svg', import.meta.url).href,
      interactionDesignServiceIcon: new URL('@/assets/service-interaction-design-icon.svg', import.meta.url).href,
      uxAuditServiceIcon: new URL('@/assets/service-ux-audits-icon.svg', import.meta.url).href
    }
}
};
</script>

<style scoped></style>
