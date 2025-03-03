<template>
    <section class="h-auto">
        <div class="about-page-banner max-w-full relative flex flex-col justify-center items-center pt-5">
          <img src="../assets/about-page-banner.png" alt="banner" loading="lazy" decoding="async" class="lg:h-full lg:w-full object-cover md:w-auto xs:h-[168px]">
          <img src="../assets/about-profile-image.png" alt="user image" loading="lazy" decoding="async" class="xl:h-[186px] lg:h-[130px] xs:h-[90px] w-auto object-cover rounded-full absolute xs:top-[70%] bg-white">
        </div>
        <div class=" xl:px-[125px] 2xl:h-auto">
          <div class="flex flex-col justify-center m-w-[1170px] items-center font-gellix xl:mt-[120px] lg:mt-[77px] xs:mt-[57px]">
            <div class="flex flex-row justify-center items-center gap-x-2 lg:mx-28">
              <h1 v-motion-slide-visible-once-bottom class="flex flex-row items-center text-black xl:text-[64px] lg:text-3xl xs:text-[34px] font-bold text-center 2xl:ml:16 xl:ml-10 xs:ml-6 3xl:ml-[70px]">Kumusta! 
                <span class="pb-3 w-auto">
                  👋🏻
                </span>
              </h1>
              </div>

              <div class="about-parag font-gellix text-left flex flex-col items-center gap-y-5 max-w-[1167px] lg:width-1167px mx-auto pt-9 w-full xs:px-5">

                <p v-motion-slide-visible-once-bottom class="text-black lg:text-base font-medium">Hey, I am Elvina! I’m a Product Designer, and I’ve made it my mission to create digital experiences that are as seamless as they are delightful! Whether it’s crafting B2B SaaS web and mobile apps or designing those oh-so-satisfying screens, I’m all about making things that just feel right for the user.</p>
                <p v-motion-slide-visible-once-bottom class="text-black lg:text-base font-medium">I’ve worked across industries like <span class="font-bold"> Behavioral Healthcare, Recruitment, and Logistics,</span> which means I’m no stranger to complex challenges. But that’s where the fun begins! I dive into projects with a sprint-based approach—no dragging timelines here, 
                  just focused feature drops, productive sync-ups, and a little room for tweaks and revisions (because hey, perfection is a process!).🤸‍♂️</p>
                <p v-motion-slide-visible-once-bottom class="text-black lg:text-base font-medium">🎨 Figma is my playground—think of me as a wizard with auto-layouts, components, and advanced prototyping! I’m all about making designs scalable and beautifully consistent, thanks to my passion for design systems and component libraries. Oh, and did I mention? 
                  I’m all in for leveraging AI-generated images to spice up the design process!</p>
                <p v-motion-slide-visible-once-bottom class="text-black lg:text-base font-medium">Based in Davao, Philippines, I bring a little bit of that island spirit into my work—laid back but serious about delivering results. And I know that design should be as practical as it is beautiful, so I make sure it’s priced right too. My goal? 
                  To create designs that look amazing and make users’ lives easier, all while bringing your vision to life.</p>
                
              </div>
            
          </div>
        </div>
        
        <!-- Design Process Dekstop View -->
        <div class="design-section hidden lg:block font-gellix mt-40">
          <h2 v-motion-slide-visible-once-bottom class="text-black text-center font-bold text-[40px]">Design Process</h2>
          <div class="mt-20 flex flex-col items-center justify-center">
            <img class="xl:ml-[220px] lg:ml-[178px] xl:w-[462px] lg:w-[362px]" src="../assets/arrow-header.svg" alt="">
          </div>
          <div class="overall-items-content  flex flex-row items-start justify-center">
       
            <div class="each-item">
              <div class="flex flex-col flex-wrap items-center justify-center text-center min-w-full h-auto">
                    <div v-motion-slide-visible-once-top class="inner-item flex flex-row xl:w-[130px] xl:h-[130px] lg:w-[100px] lg:h-[100px] rounded-full border-1 items-center px-2">
                      <p class="text-[14px] text-black text-center font-semibold">Discovery & Research</p>
                </div>
                <div class="label flex flex-col flex-wrap justify-center items-center text-center">
                  <img class="xl:w-[14px] lg:w-[10px] h-auto z-50 my-4" src="../assets/two-circle-connector.svg" alt="">
                  <p v-motion-slide-visible-once-bottom class="font-medium xl:text-base lg:text-[14px] text-black/80 text-center xl:w-[153px] lg:w-[130px] h-auto">I dive deep into your business and user needs through research and analysis to identify key pain points.</p>
                </div>
              </div>
            </div>
            <img class="xl:mt-15 lg:mt-11 lg:w-[40px] xl:w-[67px]" src="../assets/Arrow-black.svg" alt="arrow">
            
            <div class="each-item">
              <div class="flex flex-col flex-wrap items-center justify-center text-center min-w-full h-auto">
                  <div v-motion-slide-visible-once-top class="inner-item flex flex-row xl:w-[130px] xl:h-[130px] lg:w-[100px] lg:h-[100px] rounded-full border-2 border-gray-300 items-center px-2">
                    <p class="xl:text-[13px] lg:text-[10px] text-gray-400 text-center">Ideation & Conceptualization</p>
                  </div>
                  <div class="label flex flex-col flex-wrap justify-center items-center text-center">
                    <img class="xl:w-[14px] lg:w-[10px] h-auto z-50 my-4" src="../assets/two-circle-connector.svg" alt="">
                    <p v-motion-slide-visible-once-bottom class="font-medium xl:text-base lg:text-[14px] text-black/50 text-center xl:w-[153px] lg:w-[130px] h-auto">I brainstorm and outline innovative solutions, focusing on user journeys and core features.</p>
                  </div>
              </div>
            </div>
            <img class="xl:mt-15 lg:mt-11 lg:w-[40px] xl:w-[67px]" src="../assets/Arrow-fade.svg" alt="arrow">

            <div class="each-item">
              <div class="flex flex-col flex-wrap items-center justify-center text-center min-w-full h-auto">
                  <div v-motion-slide-visible-once-top class="inner-item flex flex-row xl:w-[130px] xl:h-[130px] lg:w-[100px] lg:h-[100px] rounded-full border-2 border-gray-300 items-center px-2">
                    <p class="xl:text-[13px] lg:text-[10px] text-gray-400 text-center">Wireframing & Structuring</p>
                  </div>
                  <div class="label flex flex-col flex-wrap justify-center items-center text-center">
                    <img class="xl:w-[14px] lg:w-[10px] h-auto z-50 my-4" src="../assets/two-circle-connector.svg" alt="">
                    <p v-motion-slide-visible-once-bottom class="font-medium xl:text-base lg:text-[14px] text-black/50 text-center xl:w-[153px] lg:w-[130px] h-auto">I create detailed, responsive wireframes to map out the structure and flow of your product.</p>
                  </div>
              </div>
            </div>
            <img class="xl:mt-15 lg:mt-11 lg:w-[40px] xl:w-[67px]" src="../assets/Arrow-fade.svg" alt="arrow">

            <div class="each-item">
              <div class="flex flex-col flex-wrap items-center justify-center text-center min-w-full h-auto">
                  <div v-motion-slide-visible-once-top class="inner-item flex flex-row xl:w-[130px] xl:h-[130px] lg:w-[100px] lg:h-[100px] rounded-full border-2 border-gray-300 items-center px-2">
                    <p class="xl:text-[13px] lg:text-[10px] text-gray-400 text-center md:ml-6 lg:ml-5">Protyping</p>
                  </div>
                  <div class="label flex flex-col flex-wrap justify-center items-center text-center">
                    <img class="xl:w-[14px] lg:w-[10px] h-auto z-50 my-4" src="../assets/two-circle-connector.svg" alt="">
                    <p v-motion-slide-visible-once-bottom class="font-medium xl:text-base lg:text-[14px] text-black/50 text-center xl:w-[153px] lg:w-[130px] h-auto">I create detailed, responsive wireframes to map out the structure and flow of your product.</p>
                  </div>
              </div>
            </div>
            <img class="xl:mt-15 lg:mt-11 lg:w-[40px] xl:w-[67px]" src="../assets/Arrow-fade.svg" alt="arrow">

            <div class="each-item">
              <div class="flex flex-col flex-wrap items-center justify-center text-center min-w-full h-auto">
                  <div class="inner-item flex flex-row xl:w-[130px] xl:h-[130px] lg:w-[100px] lg:h-[100px] rounded-full border-2 border-gray-300 items-center px-2">
                    <p v-motion-slide-visible-once-top class="xl:text-[13px] lg:text-[10px] text-gray-400 text-center">Testing & Iteration</p>
                  </div>
                  <div class="label flex flex-col flex-wrap justify-center items-center text-center">
                    <img class="xl:w-[14px] lg:w-[10px] h-auto z-50 my-4" src="../assets/two-circle-connector.svg" alt="">
                    <p v-motion-slide-visible-once-bottom class="font-medium xl:text-base lg:text-[14px] text-black/50 text-center xl:w-[153px] lg:w-[130px] h-auto">I test designs with real users, gather insights, and refine the product through continuous iterations.</p>
                  </div>
              </div>
            </div>
            <img class="xl:mt-15 lg:mt-11 lg:w-[40px] xl:w-[67px]" src="../assets/Arrow-fade.svg" alt="arrow">

            <div class="each-item">
              <div class="flex flex-col flex-wrap items-center justify-center text-center min-w-full h-auto">
                  <div v-motion-slide-visible-once-top class="inner-item flex flex-row xl:w-[130px] xl:h-[130px] lg:w-[100px] lg:h-[100px] rounded-full border-2 border-gray-300 items-center px-2">
                    <p class="xl:text-[13px] lg:text-[10px] text-gray-400 text-center">Handoff & Documentation</p>
                  </div>
                  <div class="label flex flex-col flex-wrap justify-center items-center text-center">
                    <img class="xl:w-[14px] lg:w-[10px] h-auto z-50 my-4" src="../assets/two-circle-connector.svg" alt="">
                    <p v-motion-slide-visible-once-bottom class="font-medium xl:text-base lg:text-[14px] text-black/50 text-center xl:w-[153px] lg:w-[130px] h-auto">I provide detailed design systems and documentation for a smooth handoff to developers.</p>
                  </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Design Process Mobile View -->
        <div class="design-section lg:hidden xs:block block font-gellix mt-40">
          <h2 class="text-black text-center font-bold text-[40px]">Design Process</h2>
          <div class="overall-items-content  flex flex-row items-start justify-center">

            <div class="mobile-items-content flex flex-col items-center justify-center mt-10">
              <div class="each-item flex flex-col flex-wrap items-center justify-center font-gellix w-[280px] h-auto">
                <div class="text-content">
                  <p class="title text-black text-[14px] font-medium text-center">Discovery & Research</p>
                  <p class="label text-black/70 text-[14px] text-center ">I dive Deep into your business and user needs through research and analysis to identify key pain points.</p>
                </div>
              </div>
              <img class="rotate-90 transform origin-center w-[60px] h-[14px] my-auto mt-15" src="../assets/Arrow-black.svg" alt="arrow">
            </div>
       

          </div>
        </div>

    </section>
      <tools-section></tools-section>
      <contact-form></contact-form>
</template>

  
<script>
import ToolsSection from '@/sections/ToolsSection.vue';
import ContactForm from '@/sections/ContactForm.vue';

  export default {
    components: {
      ToolsSection,
      ContactForm
    }
  };
</script>
  
  <style scoped></style>
  