<template>
  <loading-element v-if="loading"/>
  <router-view v-if="!loading" :class="{ block: hasSubPath() }"></router-view>
  <section v-if="!hasSubPath()" class="h-auto 2xl:pt-[140px] xs:px-[22px] md:px-[35px] xl:px-0">
    
    <div class="case-study-hero">
      <div class="content flex flex-wrap items-center justify-around gap-y-10 border-b-2 border-gray-300 xs:mx-5 xs:py-[100px] md:py-[120px] lg:mx-[50px] xl:py-[140px] xl:mx-[100px] xl:flex-row xl:my-auto xl:py-0">
        <div class="text-content flex flex-col w-auto justify-center font-gellix xs:items-center xs:text-center lg:items-start xl:text-left">
          <p class="text-black font-bold xs:text-[20px] md:text-[24px] lg:text-base xl:text-[24px]">Case Studies</p>
          <h1 class="text-black font-extrabold xs:pb-5 lg:pb-0 xs:text-[52px] lg:text-[42px] md:text-[72px] xl:text-[72px]">5 Projects</h1>
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

    <div class="">
      <case-study 
        v-for=" (study, index) in caseStudies"
        :key="index"
        :sub-page="study.subPage"
        :label="study.label"
        :image-source="study.imageSource"
        :type="study.type">
      </case-study>
    </div>
  
      <contact-form></contact-form>
      
  </section>
</template>


<script>
import {ref, onMounted} from 'vue';
import ContactForm from '@/sections/ContactForm.vue';
import CaseStudy from '@/components/CaseStudy.vue';
import LoadingElement from '@/components/LoadingElement.vue';
export default {
  components: {
      ContactForm,
      CaseStudy,
      LoadingElement
  },
  setup() {
  const caseStudies = ref([]);

  // Function to preload an image
  const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };

  // Preload all images before rendering the page
  onMounted(async () => {
    const images = [
      new URL('@/assets/case-study-phone.jpg', import.meta.url).href,
      new URL('@/assets/case-study-navix-image.jpg', import.meta.url).href,
      new URL('@/assets/case-study-fishbase-image.jpg', import.meta.url).href,
      new URL('@/assets/case-study-atlas-image.png', import.meta.url).href,
      new URL('@/assets/case-study-whitewood-image.png', import.meta.url).href,
    ];

    try {
      // Preload all images
      await Promise.all(images.map(preloadImage));

      caseStudies.value = [ //possible to add more case study
        {
          label: "Empowering Elders to Cherish and Share Their Life's Stories: A Thoughtfully Designed Mobile App for Preserving Meaningful Moments",
          imageSource: images[0],
          type: 'mobile',
          subPage: 'genie',
        },
        {
          label: "Transforming Patient Care and Streamlining Operations: A UX/UI Case Study on Redesigning the CRM Module for a Healthcare Saas Platform",
          imageSource: images[1],           
          type: 'web',
          subPage: 'navix',
        },
        {
          label:"Simplifying Scientific Data for Fish Enthusiasts: A User - Centered Approach for the Fishbase Guide App",
          imageSource: images[2],
          type:"mobile",
          subPage: 'under-construction',
        },
        {
          label:"Revolutionizing the User Experience of a Next-Generation Applicant Tracking System",
          imageSource: images[3],
          type:"web",
          subPage: 'under-construction',
        },
        {
          label:"Revamping Whitewood Transport's Digital Experience: A UX Case Study on Improving User Engagement and Accessibility",
          imageSource: images[4],
          type:"web",
          subPage: 'under-construction',
        },
      ];
    } catch (error) {
      console.error('Error preloading images:', error);
    }
  });

  return {
    caseStudies,
  };
},
data(){
    return {
      loading: true,
    }
},
mounted(){
  setTimeout(()=>{
    this.loading = false
    console.log('Loading Completed: ', this.loading)
  }, 1300)
},
methods: {
  hasSubPath(){
    return this.$route.path.split('/').length > 2;
  }
},

};
</script>

<style scoped></style>
