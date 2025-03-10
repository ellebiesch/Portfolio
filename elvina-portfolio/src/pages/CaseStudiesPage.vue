<template>
    <section class="h-auto 2xl:pt-[140px]">
      
      <div class="case-study-hero">
        <div class="content flex flex-wrap items-center justify-around gap-y-10 border-b-2 border-gray-300 xs:mx-5 xs:py-[100px] md:py-[120px] lg:mx-[50px] xl:py-[140px] xl:mx-[100px] xl:flex-row xl:my-auto xl:py-0">
          <div class="text-content flex flex-col w-auto justify-center font-gellix xs:items-center xs:text-center lg:items-start xl:text-left">
            <p class="text-black font-bold xs:text-[20px] md:text-[24px] lg:text-base xl:text-[24px]">Case Studies</p>
            <h1 class="text-black font-extrabold xs:pb-5 lg:pb-0 lg:text-[42px] md:text-[72px] xl:text-[72px]">5 Projects</h1>
            <p class="text-black font-medium xs:px-5 xs:text-[16px] md:text-[20px] md:px-0 lg:w-[320px] xl:min-w-[500px] lg:text-left leading-[1.5]">Exploring the Intersection of Design and Innovation: My UX Design Journey</p>
          </div>
          <div class="hero-image xl:max-w-full">
            <img
              src="@/assets/case-study-hero-image.svg"
              class="xs:h-[212px] xs:w-[270px] md:h-[258px] md:w-[300px] xl:h-[412px] xl:w-[470px]"
              alt="project-planning"
            />
          </div>
        </div>
      </div>

      <case-study
        label="Empowering Elders to Cherish and Share Their Life's Stories: A Thoughtfully Designed Mobile App for Preserving Meaningful Moments"
        :image-source="caseStudyOneImg"
        type="mobile"
        >
      </case-study>

      <case-study
        label="Transforming Patient Care and Streamlining Operations: A UX/UI Case Study on Redesigning the CRM Module for a Healthcare Saas Platform"
        :image-source="caseStudyTwoImg"
        type="web"
        >
      </case-study>

      <case-study
        label="Simplifying Scientific Data for Fish Enthusiasts: A User - Centered Approach for the Fishbase Guide App"
        :image-source="caseStudyThreeImg"
        type="mobile"
        >
      </case-study>
      <case-study
        label="Revolutionizing the User Experience of a Next-Generation Applicant Tracking System"
        :image-source="caseStudyFourImg"
        type="web"
        >
      </case-study>
      <case-study
        label="Revamping Whitewood Transport's Digital Experience: A UX Case Study on Improving User Engagement and Accessibility"
        :image-source="caseStudyFiveImg"
        type="web"
        >
      </case-study>

    
        <contact-form></contact-form>
        
    </section>
</template>

  
  <script>
  import ContactForm from '@/sections/ContactForm.vue';
  import CaseStudy from '@/components/CaseStudy.vue';
  export default {
    components: {
        ContactForm,
        CaseStudy,
    },
    setup(){ 
      //composition api
        //how to pass this image from different page to this template
        const caseStudyOneImg = new URL('@/assets/case-study-phone.jpg', import.meta.url).href
        const caseStudyTwoImg = new URL('@/assets/case-study-navix-image.jpg', import.meta.url).href
        const caseStudyThreeImg = new URL('@/assets/case-study-fishbase-image.jpg', import.meta.url).href
        const caseStudyFourImg = new URL('@/assets/case-study-atlas-image.jpg', import.meta.url).href
        const caseStudyFiveImg = new URL('@/assets/case-study-whitewood-image.jpg', import.meta.url).href

        return { 
            caseStudyOneImg, 
            caseStudyTwoImg, 
            caseStudyThreeImg, 
            caseStudyFourImg, 
            caseStudyFiveImg};
        
        },
  };
  </script>
  
  <style scoped></style>
  