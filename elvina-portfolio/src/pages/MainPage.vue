<template>
  <section class="h-auto 2xl:pt-[140px] 3xl:pt-[80px]" >
    <div id="main" class=" xl:px-[125px] 2xl:h-auto xs:px-3 sm:px-3 px-5">
      <div class="flex flex-col min-h-screen items-center justify-center lg:mb-[100px]">
        <div class="col-md-8 font-inter w-full flex flex-col justify-center items-center">
          <h1 class="container lg:text-7xl xl:font-extrabold lg:font-bold text-2xl xs:mt-8 md:text-3xl font-semibold text-center ">Simplify the interface, amplify the experience</h1>
          <p class="text-black lg:text-2xl flex justify-center items-center py-8 sm:text-base sm:flex-row sm:gap-2 xs:text-base">Hi, 
            <span class="flex items-center justify-center"> <img src="../assets/wave.png" alt="hand-wave" class="h-full w-[40px]"></span> I am Elvina. I create clear and effective design for seamless user experiences</p>
          <div class="hero-image max-w-full">
              <img src="../assets/inventing.jpg" class="h-full w-auto" alt="">
            </div>
        </div>
      </div>
    </div>

  <div class="container font-inter max-w-full py-10 bg-[#fafafa]">
    <h1 class="title font-extrabold text-3xl text-center xl:py-4">Worked and Contributed</h1>
    <div class="company-icon flex flex-row items-center justify-center gap-12 my-10">
      <img src="../assets/atlas-icon.png" class="h-auto w-[215px]" alt="atlas logo">
      <img src="../assets/rogomi-icon.png" class="h-auto w-[140px]" alt="rogomo logo">
      <img src="../assets/navix-icon.png" class="h-auto w-[220px]" alt="navix logo">
      <img src="../assets/fishbase-icon.png" class="h-auto w-[253px]" alt="fishbase logo">
      <img src="../assets/rlc-icon.png" class="h-auto w-[99px]" alt="rlc logo">
    </div>
    <div class="text-base font-medium text-black text-base text-center xl:py-4">and many more</div>
  </div>
  <case-study-one></case-study-one>
  <case-study-two></case-study-two>
</section>
</template> 

<script>
import CaseStudyOne from '../sections/CaseStudyOne.vue';
import CaseStudyTwo from '../sections/CaseStudyTwo.vue';

export default {
  components: {
    CaseStudyOne,
    CaseStudyTwo
  }
};
</script>

<style scoped></style>
