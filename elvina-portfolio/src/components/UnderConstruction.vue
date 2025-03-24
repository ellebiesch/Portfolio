<template>
      <div class="loading-screen" >
        <div class="h-full flex flex-col justify-center items-center">
          <div class="m-auto flex flex-col gap-y-5 justify-center items-center">
            <img loading="lazy" src="@/assets/loading-hero-image.svg" class="lg:w-[390px] h-auto xs:w-[330px]" alt="elvina" />
            <div class="text-black font-extrabold mx-auto font-gellix flex flex-col justify-center items-center px-[200px]">
              <p class="font-extrabold lg:text-[62px] xs:text-[30px]" >UX STUDY: Coming Soon...ish🚀</p>
              <p class="font-normal text-gray-800 text-[16px]">Between client work, side hustles, and an embarrassing amount of snack breaks, this case study is <span class="font-bold italic">still under construction.</span>  
                  It’ll be worth the wait—assuming I don’t get distracted by another cool project. Stay tuned (or send snacks for motivation)! 😆🍕</p>
                  <router-link to="/" class=" flex items-center py-5 hover:bg-[#D1D1D1] hover:bg-opacity-10" :class="{ 'bg-[#D9D9D9] bg-opacity-10 border-l-2 border-l-[#D1D1D1]': $route.path === '/' }" @click="mobileMenuOpen = false">
                  <div class="flex flex-row justify-center items-center ml-4 gap-2 font-gellix">
                      <p class="tracking-widest font-bold text-xs text-[#000]"> Back to Home</p>
                  </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
 
    data() {
      return {
        mobileMenuOpen: false,
      }
    },
  }
  </script>
  
  <style scoped>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white; /* Or your hero-bg color */
    z-index: 9999;
  }
  

  </style>