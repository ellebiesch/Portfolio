<template>
    <section class="h-auto 2xl:pt-[140px]">
      
      <div class="case-study-hero">
        <div class="content flex xl:flex-row flex-wrap items-center justify-around">
          <div class="text-content flex flex-col w-[550px] items-start justify-center text-left font-gellix">
            <p class="text-black font-bold text-[24px]">Case Studies</p>
            <h1 class="text-black font-extrabold text-[72px]">5 Projects</h1>
            <p class="text-black font-medium text-[20px]">Exploring the Intersection of Design and Innovation: My UX Design Journey</p>
          </div>
          <div class="hero-image xl:max-w-full">
            <img src="@/assets/case-study-hero-image.svg" class="xl:w-[470px] xl:h-[412px]" alt="project-planning">
          </div>
        </div>
      </div>
      

        <case-study-one></case-study-one>
        <case-study-two></case-study-two>
        <case-study-three></case-study-three>
        <case-study-four></case-study-four>
        <case-study-five></case-study-five>
    
        <contact-form></contact-form>
        
    </section>
</template>

  
  <script>
  // import CaseStudyOne from '@/sections/CaseStudyOne.vue';
  // import CaseStudyTwo from '@/sections/CaseStudyTwo.vue';
  // import CaseStudyThree from '@/sections/CaseStudyThree.vue';
  // import CaseStudyFour from '@/sections/CaseStudyFour.vue';
  // import CaseStudyFive from '@/sections/CaseStudyFive.vue';
  import ContactForm from '@/sections/ContactForm.vue';
  export default {
    components: {
        // CaseStudyOne,
        // CaseStudyTwo,
        // CaseStudyThree,
        // CaseStudyFour,
        // CaseStudyFive,
        ContactForm
    }
  };
  </script>
  
  <style scoped></style>
  