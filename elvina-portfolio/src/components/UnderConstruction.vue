<template>
      <div class="loading-screen" >
        <div class="h-full flex flex-col justify-center items-center md:pt-[200px] lg:pb-[100px] xs:pt-[100px]">
          <div v-motion-slide-visible-once-bottom class="m-auto flex flex-col gap-y-5 justify-center items-center">
            <img loading="lazy" src="@/assets/loading-hero-image.svg" class="lg:w-[350px] h-auto xs:w-[330px]" alt="elvina" />
            <div class="text-black font-extrabold mx-auto font-gellix flex flex-col justify-center items-center xl:px-[200px] xs:px-[10px]">
              <p class="font-extrabold lg:text-[62px] xs:text-[30px] text-center" >UX STUDY: Coming Soon...ish🚀</p>
              <p class="font-normal text-gray-800 xs:text-[16px] md:text-[20px]">Between client work, side hustles, and an embarrassing number of snack breaks, this case study page is still under construction. 
                                                                If you’re interested in seeing my work, please contact the email below and I’ll gladly send over the case studies (snacks optional but appreciated 😆🍕). <br> <br> 
                                                                Stay tuned — or better yet, let’s connect!</p>
                  <!-- <router-link to="/" class=" flex items-center py-5 hover:bg-[#D1D1D1] hover:bg-opacity-10" :class="{ 'bg-[#D9D9D9] bg-opacity-10 border-l-2 border-l-[#D1D1D1]': $route.path === '/' }" @click="mobileMenuOpen = false">
                  <div class="flex flex-row justify-center items-center ml-4 gap-2 font-gellix">
                      <p class="tracking-widest font-bold text-xs text-[#000]"> Back to Home</p>
                  </div>
              </router-link> -->
            </div>
          </div>
        </div>
        <improve-ux></improve-ux>
      </div>
  </template>
  
  <script>

  import ImproveUx from '@/sections/ImproveUx.vue';

  export default {
    components: {
      ImproveUx,
    },
    data() {
      return {
        mobileMenuOpen: false,
      }
    },
  }
  </script>
  
  <style scoped>
  
  

  </style>