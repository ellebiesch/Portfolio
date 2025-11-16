<template>
    <section class="h-auto">
        <div class="container my-32">
            <div class="content-wrapper font-sans flex flex-row justify-evenly items-center gap-4 bg-[#fafafa] xl:pt-[113px]">
                <div class="case-study-text flex flex-col items-center justify-center lg:w-[477px] lg:h-[260px] gap-5">
                    <h2 class="uppercase text-[20px] font-normal text-center"> case study 4</h2>
                    <div class="paragraph text-center">
                        <h1 class="font-extrabold text-[40px] pb-2">Fish Base Guide</h1>
                        <p class="text-xl font-medium pt-2 pb-5 text-black/80">
                            Simplifying Scientific Data for Fish Enthusiasts: A User-Centered Approach for the FishBase Guide App
                        </p>
                        <router-link to="/case-studies" class="button text-[14px] font-normal py-2 px-4 border-2 border-black rounded-md" >Read More</router-link>
                    </div>
                </div>
                <div class="phone-image">
                    <div class="content-wrapper flex justify-center items-center">
                        <img 
                            v-lazy="caseStudyFourImg" 
                            class="lg:w-auto lg:h-[540px]" 
                            alt="mobile phone">
                    </div>
                </div>
            </div>          
        </div>
    </section>
  </template>
  
  <script>
  export default {
    //composition API
    setup(){
          const caseStudyFourImg = new URL('../assets/fishbase-casestudy-four.png', import.meta.url).href
          return {caseStudyFourImg};
          //advance feature for v-lazy, setup loading and error image
      },

    //options API
    computed: {
        isAboutPage() {
        return this.$route.path === '/about';
        },
    }
   
}
  </script>
  
  <style scope></style>
  