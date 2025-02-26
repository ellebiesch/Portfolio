<template>
    <section class="h-auto">
        <div class="container my-32">
            <!-- v-if here -->
            <div v-if="$route.path === '/'" class="content-wrapper font-gellix flex flex-row justify-evenly items-center gap-4">
                <div class="case-study-text flex flex-col items-center justify-center lg:w-[477px] lg:h-[260px] gap-5">
                    <h2 class="uppercase text-[20px] font-normal text-center"> case study 1</h2>
                    <div class="paragraph text-center">
                        <h1 class="font-extrabold text-[40px] pb-2">Genie</h1>
                        <p class="text-xl font-medium pt-2 pb-5 text-black/80">
                            Empowering Elders to Cherish and Share Their Life's Stories: A Thoughtfully Designed Mobile App for Preserving Meaningful Moments
                        </p>
                        <router-link to="/case-studies" class="button text-[14px] font-normal py-2 px-4 border-2 border-black rounded-md" >Read More</router-link>
                    </div>
                </div>
                <div class="phone-image">
                    <div class="content-wrapper flex justify-center items-center">
                        <!-- <img src="../assets/mobile-model.svg" class="lg:w-auto lg:h-[540px]" alt="mobile phone"> -->
                        <img 
                            v-lazy="caseStudyOneImg" 
                            class="lg:w-auto lg:h-[540px]" 
                            alt="mobile phone">
                    </div>
                </div>
            </div>
            <!-- case study one -->
            <div v-if="$route.path === '/case-studies'" class="content-wrapper font-gellix flex flex-row justify-evenly items-center gap-4">
                <div class="phone-image">
                    <div class="content-wrapper flex justify-center items-center">
                        <!-- <img src="../assets/mobile-model.svg" class="lg:w-auto lg:h-[540px]" alt="mobile phone"> -->
                        <img 
                            v-lazy="caseStudyOneImg" 
                            class="lg:w-auto lg:h-[540px]" 
                            alt="mobile phone">
                    </div>
                </div>
                <div class="case-study-text flex flex-col items-center justify-center lg:w-[477px] lg:h-[260px] gap-5">
                    <h2 class="uppercase text-[20px] font-normal text-center"> case study 1</h2>
                    <div class="paragraph text-center">
                        <h1 class="font-extrabold text-[40px] pb-2">Genie</h1>
                        <p class="text-xl font-medium pt-2 pb-5 text-black/80">
                            Empowering Elders to Cherish and Share Their Life's Stories: A Thoughtfully Designed Mobile App for Preserving Meaningful Moments
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
    setup(){
          const caseStudyOneImg = new URL('../assets/mobile-model.svg', import.meta.url).href
          return {caseStudyOneImg};
          //advance feature for v-lazy, setup loading and error image
      },

    computed: {
        isAboutPage() {
        return this.$route.path === '/about';
        },
    }
   
}
  </script>
  
  <style scope></style>
  