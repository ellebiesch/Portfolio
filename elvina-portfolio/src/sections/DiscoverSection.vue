<template>
    <section class="h-auto">
        <div class="content-wrapper flex flex-col items-center justify-center bg-[#fafafa] md:py-32">
            <div class="flex xl:flex-row xs:flex-col-reverse flex-wrap xl:items-start sm:items-center xs:items-center md:justify-between xs:justify-center gap-x-4 xs:py-10 mx-[15px]">
                <div class="text-label flex flex-col justify-center items-start gap-y-4 font-gellix md:w-[700px] xs:min-w-auto xs:py-6">
                    <h1 v-motion-slide-visible-once-bottom class="md:font-semibold xs:font-semibold text-black md:text-[40px] xs:text-[24px] lg:text-left ">Discover the products I've helped shape</h1>
                    <p v-motion-slide-visible-once-bottom class="text-black/80 font-medium sm:text-[20px] xs:text-base text-left">I collaborate closely with clients to deeply understand their business goals and audience needs, 
                        crafting intuitive, high-impact designs that not only meet expectations but exceed them—delivering seamless experiences that drive real results</p>
                    <router-link  
                      v-motion-slide-visible-once-right to="/case-studies" 
                          class="inline-flex items-center justify-center text-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 border-black/20 
                                  border-2 rounded-lg hover:bg-gray-200 focus:shadow-outline focus:outline-none xs:mx-auto sm:m-[0] xs:text-[14px]"> See All Works </router-link>
                </div>
                <div class="discover-img-wrapper">
                    <img v-motion-slide-visible-once-right src="../assets/discover-img.svg" class="h-auto md:min-w-[516px] xs:min-w-auto" alt="">
                </div>
            </div>

            <div class="company-logo-wrapper flex flex-row flex-wrap gap-10 sm:max-w-[445px] lg:max-w-full justify-center mx-[15px]">
                <div class="item flex flex-col justify-start items-center lg:max-w-[370px]">
                    <div v-motion-slide-visible-once-bottom class="logo-img drop-shadow-sm bg-[#fff]">
                      <img v-lazy="navixLogoImg" class="h-auto lg:min-w-[200px] xl:min-w-[370px] md:min-w-[445px] bg-[#fff] drop-shadow-lg rounded-sm rounded" alt="navix-logo">
                    </div>
                    <div v-motion-slide-visible-once-bottom class="text-content font-gellix flex flex-col justify-start flex-wrap gap-y-6">
                        <p class="text-title uppercase text-black font-extrabold text-[30px] pt-6">sass</p>
                        <p class="text-desc lg:text-base text-black/80 font-medium">I have designed various SAAS products which allowed me to successfully deliver high-quality and impactful products.</p>
                        <div class="case-button flex flex-row gap-x-4 items-center">
                              <case-study-button 
                                to="/case-studies"
                                label="See Case Study"
                                case-study="navix">
                              </case-study-button>
                        </div>
                    </div>
                </div>
                <div class="item flex flex-col justify-start items-center lg:max-w-[370px]">
                    <div v-motion-slide-visible-once-bottom class="logo-img drop-shadow-sm bg-[#fff]">
                      <img v-lazy="rogomiLogoImg" class="h-auto lg:min-w-[200px] xl:min-w-[370px] md:min-w-[445px] bg-[#fff] drop-shadow-lg rounded-sm rounded" alt="navix-logo">
                    </div>
                    <div v-motion-slide-visible-once-bottom class="text-content font-gellix flex flex-col justify-start flex-wrap gap-y-6">
                        <p class="text-title  text-black font-extrabold text-[30px] pt-6">Mobile</p>
                        <p class="text-desc lg:text-base text-black/80 font-medium">Designed several mobile products which allowed me to enchance users tasks effeciently. </p>
                        <div class="case-button flex flex-row gap-x-4 items-center">
                              <case-study-button 
                                to="/case-studies"
                                label="See Case Study"
                                case-study="rogomi">
                              </case-study-button>
                        </div>
                    </div>
                </div>
                <div class="item flex flex-col justify-start items-center lg:max-w-[370px]">
                    <div v-motion-slide-visible-once-bottom class="logo-img drop-shadow-sm bg-[#fff]">
                      <img v-lazy="truckpediaImg" class="h-auto lg:min-w-[200px] xl:min-w-[370px] md:min-w-[445px] bg-[#fff] drop-shadow-lg rounded-sm rounded" alt="navix-logo">
                    </div>
                    <div v-motion-slide-visible-once-bottom class="text-content font-gellix flex flex-col justify-start flex-wrap gap-y-6">
                        <p class="text-title  text-black font-extrabold text-[30px] pt-6">Websites</p>
                        <p class="text-desc lg:text-base text-black/80 font-medium">Crafted intuitive and engaging web experiences that prioritize usability, accessbility and seamless interaction</p>
                        <div class="case-button flex flex-row gap-x-4 items-center">
                              <case-study-button 
                                to="/case-studies"
                                label="See Case Study"
                                case-study="rogomi">
                              </case-study-button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>
  </template>
  
  <script>
import CaseStudyButton from '@/components/CaseStudyButton.vue';

  export default {
    components: {
      CaseStudyButton
    },
    //composition api for images
    setup(){
      
      const navixLogoImg = new URL('../assets/discover-item-navix.jpg', import.meta.url).href
      const rogomiLogoImg = new URL('../assets/discover-item-rogomi.jpg', import.meta.url).href
      const truckpediaImg = new URL('../assets/discover-item-truckpedia.jpg', import.meta.url).href
      return {navixLogoImg, rogomiLogoImg, truckpediaImg};
      
    },
    data() {
      return{
        isHoveredArrowOne: false,
        isHoveredArrowTwo: false,
        isHoveredArrowThree: false,
      }
    },
  }
</script>
  
  <style scope></style>
  