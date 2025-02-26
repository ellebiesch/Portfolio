<template>
    <section class="h-auto 2xl:pt-[140px]">
      <div class="flex flex-col justify-center items-center font-gellix gap-y-5">
        <p class="uppercase text-[20px] font-medium text-gray-800">featured</p>
        <h1 class="font-extrabold text-[64px]">Case Studies</h1>
      </div>
        <case-study-one></case-study-one>
        <case-study-two></case-study-two>
        <case-study-three></case-study-three>
        <case-study-four></case-study-four>
        <case-study-five></case-study-five>
        <testimonials-section></testimonials-section>
        <contact-form></contact-form>
        
    </section>
</template>

  
  <script>
  import CaseStudyOne from '@/sections/CaseStudyOne.vue';
  import CaseStudyTwo from '@/sections/CaseStudyTwo.vue';
  import CaseStudyThree from '@/sections/CaseStudyThree.vue';
  import CaseStudyFour from '@/sections/CaseStudyFour.vue';
  import CaseStudyFive from '@/sections/CaseStudyFive.vue';
  import TestimonialsSection from '@/sections/TestimonialsSection.vue';
  import ContactForm from '@/sections/ContactForm.vue';
  export default {
    components: {
        CaseStudyOne,
        CaseStudyTwo,
        CaseStudyThree,
        CaseStudyFour,
        CaseStudyFive,
        TestimonialsSection,
        ContactForm
    }
  };
  </script>
  
  <style scoped></style>
  