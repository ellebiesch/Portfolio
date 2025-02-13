<template>
    <section class="h-auto">
        <div class="container min-h-screen">
            <div :class="{ 'bg-[#fafafa]': $route.path === '/' }" class="content-wrapper font-inter flex flex-row justify-center items-center gap-4 pt-[118px] 3xl:pr-[20px]">
                <div class="phone-image -translate-x-1/4">
                    <div class="content-wrapper flex justify-center items-center pb-3">
                        <img 
                            v-lazy="caseStudyThreeImg" 
                            class="lg:w-full lg:h-[540px]" 
                            alt="mobile phone">
                    </div>
                </div>
                <div class="case-study-text flex flex-col items-center justify-center lg:w-[570px] lg:h-[260px] gap-5">
                    <h2 class="uppercase text-[20px] font-normal text-center"> case study 3</h2>
                    <div class="paragraph text-center lg:min-w-[515px] lg:w-full">
                        <h1 class="font-extrabold text-[40px] pb-2">Atlas</h1>
                        <p class="text-xl font-medium pt-2 pb-5">
                            Revolutionizing the User Experience of a Next-Generation Applicant Tracking System
                        </p>
                        <router-link to="/case-studies" class="button text-[14px] font-normal py-2 px-4 border-2 border-black rounded-md" >Read More</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </template>
  
  <script>
  export default {
    // composition api for images
    setup(){
        const caseStudyThreeImg = new URL('../assets/atlas-hero-image.png', import.meta.url).href
        return {caseStudyThreeImg};
    },

  computed: {
    isAboutPage() {
      return this.$route.path === '/about';
    }
  }
}
  </script>
  
  <style scope></style>
  