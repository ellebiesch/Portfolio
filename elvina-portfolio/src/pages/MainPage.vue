<template>
  <div class="h-auto 2xl:pt-[140px] 3xl:pt-[80px]" >
    <section class="hero-section">
    <div id="main" class=" xl:px-[125px] 2xl:h-auto xs:px-3 sm:px-3 px-5">
      <div class="flex flex-col min-h-screen items-center justify-center lg:mb-[100px]">
        <div class="col-md-8 font-inter w-full flex flex-col justify-center items-center">
          <h1 class="container lg:text-7xl xl:font-extrabold lg:font-bold text-2xl xs:mt-8 md:text-3xl font-semibold text-center ">Simplify the interface, amplify the experience</h1>
          <p class="text-black lg:text-2xl flex justify-center items-center py-8 sm:text-base sm:flex-row sm:gap-2 xs:text-base">Hi, 
            <span class="flex items-center justify-center"> <img src="../assets/wave.png" alt="hand-wave" class="h-full w-[40px]"></span> I am Elvina. I create clear and effective design for seamless user experiences</p>
          <div class="hero-image max-w-full">
              <img src="../assets/inventing.jpg" class="h-full w-auto" alt="">
            </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container font-inter max-w-full py-10 bg-[#fafafa]">
    <h1 class="title font-extrabold text-3xl text-center xl:py-4">Worked and Contributed</h1>
    <div class="company-icon flex flex-row items-center justify-center gap-12 my-10">
      <img src="../assets/atlas-icon.png" class="h-auto w-[215px]" alt="atlas logo">
      <img src="../assets/rogomi-icon.png" class="h-auto w-[140px]" alt="rogomo logo">
      <img src="../assets/navix-icon.png" class="h-auto w-[220px]" alt="navix logo">
      <img src="../assets/fishbase-icon.png" class="h-auto w-[253px]" alt="fishbase logo">
      <img src="../assets/rlc-icon.png" class="h-auto w-[99px]" alt="rlc logo">
    </div>
    <div class="text-base font-medium text-black text-base text-center xl:py-4">and many more</div>
  </section>
  <case-study-one></case-study-one>
  <case-study-two></case-study-two>
  <case-study-three></case-study-three>

  <section class="services-section container font-inter max-w-full py-10">
    <div class="container">
      <h1 class="label title font-extrabold text-3xl text-center xl:py-4">Services</h1>
      <div class="service-wrapper flex flex-row items-center justify-center gap-10 py-10">
        <div class="item text-center flex flex-col justify-center items-center rounded-md border-[1.5px] border-black/30 gap-4 w-[370px] h-full p-[50px]">
          <img :src="uxDesignServiceIcon" class="icon" alt="pencil edit">
          <p class="sub text-[22px] text-black font-semibold">UX and UI Design</p>
          <p class="description text-base font-normal text-black opacity-70">User research methodologies, user interface for both Mobile App and B2B and B2C SaaS Products</p>
        </div>
        <div class="item text-center flex flex-col justify-center items-center rounded-md border-[1.5px] border-black/30 gap-4 w-[370px] h-full p-[50px]">
          <img :src="interactionDesignServiceIcon" class="icon" alt="pencil edit">
          <p class="sub text-[22px] text-black font-semibold">Interaction Design</p>
          <p class="description text-base font-normal text-black opacity-70">Low and High fidelity mockups for user stimulation, animations and micro-interactions and transitions</p>
        </div>
        <div class="item text-center flex flex-col justify-center items-center rounded-md border-[1.5px] border-black/30 gap-4 w-[370px] h-full p-[50px]">
          <img :src="uxAuditServiceIcon" class="icon" alt="pencil edit">
          <p class="sub text-[22px] text-black font-semibold">UX Audits</p>
          <p class="description text-base font-normal text-black opacity-70">Product recommendations on UX improvements</p>
        </div>
      </div>
    </div>
  </section>

</div>
</template> 

<script>
import CaseStudyOne from '../sections/CaseStudyOne.vue';
import CaseStudyTwo from '../sections/CaseStudyTwo.vue';
import CaseStudyThree from '../sections/CaseStudyThree.vue';

export default {
  components: {
    CaseStudyOne,
    CaseStudyTwo,
    CaseStudyThree
  },
  data() {
    return {
      uxDesignServiceIcon: new URL('../assets/service-ux-and-design-icon.svg', import.meta.url).href,
      interactionDesignServiceIcon: new URL('../assets/service-interaction-design-icon.svg', import.meta.url).href,
      uxAuditServiceIcon: new URL('../assets/service-ux-audits-icon.svg', import.meta.url).href
    }
}
};
</script>

<style scoped></style>
