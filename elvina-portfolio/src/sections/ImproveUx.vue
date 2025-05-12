<template>
    <section class="h-auto">
        <div v-motion-slide-visible-once-bottom class="content-wrapper flex flex-col justify-center items-center font-gellix bg-gray-900 lg:mx-[40px] xs:py-[50px] xl:py-[150px] rounded-t-[50px] gap-y-2">
            <div class="contents font-gellix">
                <img src="../assets/oc-puzzle-white.svg" class="" alt=""> 
                <div v-if="$route.path === '/'" class="">
                    <h1 class="text-white xs:text-[24px] md:text-[32px] lg:text-[40px] font-extrabold text-center">Let's Talk UX.</h1>
                </div>
                <h2 class="text-white xs:text-[20px] md:text-[24px] lg:text-[32px] text-center lg:my-5" :class="{'d-none ': $route.path === '/'}">Big ideas deserve great design. Let's talk!</h2>
                <h2 v-if="$route.path === '/'" class="text-white xs:text-[20px] md:text-[24px] lg:text-[32px] text-center">Have a project or question? Reach out anytime.</h2>
                <a
                    href="#"
                    :class="{'d-none': $route.path === '/'}"
                    class="inline-flex font-gellix items-center justify-center text-white h-12 px-6 font-medium tracking-normal transition duration-200 bg-gray-900 rounded-lg border-2 border-white cursor-pointer hover:bg-[#000]/60"
                    >
                    Improve My UX Now!
                </a>
                <div v-if="$route.path === '/'" class="font-gellix">
                    <p class="text-white text-center text-normal xs:text-[16px] md:text-[18px]">📩elvinagarcia.design@gmail.com</p>
                </div>
            </div>
           
        </div>
        
    </section>
  </template>
  
<script>
export default {
}
</script>
  
  <style></style>
  