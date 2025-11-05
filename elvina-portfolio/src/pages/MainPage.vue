<template>
  <div class="h-auto 2xl:pt-[50px] lg:pt-[120px] 3xl:pt-[80px] xs:pt-[80px] sm:pt-[120px] overflow-hidden">
    <section class="hero-section">
    <div id="main" class=" xl:px-[125px] 2xl:h-auto xs:px-3 sm:px-3 px-5">
      <div class="flex flex-col min-h-screen items-center justify-center lg:mb-[100px]">
        <div class="col-md-8 w-full flex flex-col justify-center items-center font-gellix">
          <h1 v-motion-slide-visible-once-bottom class="container xs:mt-[20px] 2xl:mt-[100px] text-2xl font-semibold text-center xs:text-[46px] xl:text-[60px] xs:font-extrabold leading-none">Simplify the interface, amplify the experience</h1>
          <p v-motion-slide-visible-once-bottom class="text-black lg:text-2xl text-center py-8 sm:text-base sm:flex-row sm:gap-2 xs:text-[20px] font-extrabold">Hi,👋 I am Elvina. I create clear and effective design for seamless user experiences
          </p>
        
            <div class="hero-button flex flex-row flex-wrap justify-center gap-x-5 text-white">
              <a
              href="#contact"
              class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide border transition duration-200 bg-gray-900 rounded-lg hover:bg-white hover:text-black focus:shadow-outline focus:outline-none"
            >
              Contact
            </a>
              <div class="text-black">
                <router-link
                  to="/case-studies/under-construction"
                  class="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide transition duration-200 border-black/20 border rounded-lg hover:bg-black hover:text-white focus:shadow-outline focus:outline-none"
                  @click="mobileMenuOpen = false"
                >
                  View Work
              </router-link>
                <!-- <router-link
                  to="/case-studies"
                  class="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide transition duration-200 border-black/20 border rounded-lg hover:bg-black hover:text-white focus:shadow-outline focus:outline-none"
                  @click="mobileMenuOpen = false"
                >
                  View Work
              </router-link> -->
              </div>
            </div>

            <div class="hero-image max-w-full pt-[110px] xs:pt-[40px] xs:mb-[80px] md:pt-[60px] flex flex-col justify-center items-center ">
              <img src="../assets/thinking-hero-img.svg" class="md:h-full md:w-[512px] 2xl:w-[612px] 2xl:h-auto mx-auto" alt="">
            </div>
        </div>
      </div>
    </div>
  </section>

  <!-- <section v-motion-slide-visible-once-bottom class="container font-gellix max-w-full py-10 xs:py-5 bg-[#fafafa]">
    <h1 class="title font-extrabold md:text-2xl xs:text-[20px] text-center xl:py-4 uppercase text-black/40">organizations I have worked with</h1>
    <div class="company-icon flex flex-row items-center justify-center md:gap-12 xs:gap-4 sm:my-10 xs:my-5 opacity-60">
      <img src="../assets/atlas-icon.png" class="h-auto sm:w-[108px] xs:w-[78px]" alt="atlas logo">
      <img src="../assets/rogomi-icon.png" class="h-auto sm:w-[84px] xs:w-[54px]" alt="rogomo logo">
      <img src="../assets/fishbase-icon.png" class="h-auto sm:w-[113px] xs:w-[83px]" alt="fishbase logo">
      <img src="../assets/rlc-icon.png" class="h-auto sm:w-[40px] xs:w-[30px]" alt="rlc logo">
      <img src="../assets/g36o-logo.png" class="h-auto xs:hidden sm:block sm:w-[70px]" alt="g36o logo">
    </div>
  </section> -->
  <companies-section></companies-section>

  <experience-section></experience-section>
  <discover-section></discover-section>
  
  <section class="services-section container font-gellix max-w-full py-10">
    <div class="mx-[15px]">
      <h1 v-motion-slide-visible-once-bottom  class="label title font-extrabold text-[40px] text-center xl:py-4">Services</h1>
      <p v-motion-slide-visible-once-bottom  class="sub-title text-center font-medium text-[18px] md:w-[800px] md:mx-auto">From creating wireframes and prototypes to developing high-fidelity mockups and animations, able to utilize a range of design tools to bring my designs to life.</p>
      <div class="service-wrapper flex flex-row flex-wrap items-stretch items-center justify-center gap-10 py-10">
        <div v-motion-slide-visible-once-bottom class="item text-center flex flex-col justify-center items-center rounded-md border-black/30 gap-4 md:w-[370px] min-h-[370px] p-[50px]">
          <img :src="uxDesignServiceIcon" class="icon" alt="pencil edit">
          <p class="sub text-[24px] text-black font-extrabold">UX and UI Design</p>
          <p class="description text-base font-normal text-black">Creating intuitive, user-friendly, designs for web and mobile applications</p>
        </div>
        <div v-motion-slide-visible-once-bottom class="item text-center flex flex-col justify-center items-center rounded-md border-black/30 gap-4 md:w-[370px] min-h-[370px] p-[50px]">
          <img :src="interactionDesignServiceIcon" class="icon" alt="pencil edit">
          <p class="sub text-[24px] text-black font-extrabold">Interaction Design</p>
          <p class="description text-base font-normal text-black">Low and High fidelity mockups for user stimulation, animations and micro-interactions and transitions</p>
        </div>
        <div v-motion-slide-visible-once-bottom class="item text-center flex flex-col justify-center items-center rounded-md border-black/30 gap-4 md:w-[370px] min-h-[370px] p-[50px]">
          <img :src="uxAuditServiceIcon" class="icon" alt="pencil edit">
          <p class="sub text-[24px] text-black font-extrabold">UX Audits</p>
          <p class="description text-base font-normal text-black">Product recommendations on UX improvements</p>
        </div>
      </div>
    </div>
  </section>
  <testimonials-section></testimonials-section>
  <improve-ux></improve-ux>
  <!-- <contact-form></contact-form> -->

</div>
</template> 

<script>
import ExperienceSection from '@/sections/ExperienceSection.vue';
import DiscoverSection from '@/sections/DiscoverSection.vue';
import TestimonialsSection from '@/sections/TestimonialsSection.vue';
import ImproveUx from '@/sections/ImproveUx.vue';
import CompaniesSection from '@/components/CompaniesSection.vue';
//import ContactForm from '@/sections/ContactForm.vue';

export default {
  components: {
    ExperienceSection,
    DiscoverSection,
    TestimonialsSection,
    ImproveUx,
    CompaniesSection
    //ContactForm,
  },
  data() {
    return {
      uxDesignServiceIcon: new URL('@/assets/service-ux-and-design-icon.svg', import.meta.url).href,
      interactionDesignServiceIcon: new URL('@/assets/service-interaction-design-icon.svg', import.meta.url).href,
      uxAuditServiceIcon: new URL('@/assets/service-ux-audits-icon.svg', import.meta.url).href,

      mobileMenuOpen: false,
    }
}
};
</script>

<style scoped>
</style>
