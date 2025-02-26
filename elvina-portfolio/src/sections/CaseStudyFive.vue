<template>
    <section class="h-auto">
        <div class="container mt-[100px] min-h-screen">
            <div v-if="$route.path === '/case-studies'" class="content-wrapper bg-[#fafafa] font-gellix flex flex-col justify-evenly items-center gap-4 xl:pt-[113px]">
                <div class="case-study-text flex flex-col items-center justify-center gap-5">
                    <h2 class="uppercase text-[20px] font-normal text-center"> case study 5</h2>
                    <div class="paragraph text-center lg:w-[900px]">
                        <h1 class="font-extrabold text-[40px] pb-2">Whitewood Transport <span class="block"> Driven by effeciency, delevering experience</span></h1>
                        <p class="text-xl font-medium pt-3 pb-7 text-black/80">
                            Revamping Whitewood Transport's Digital Experience: A UX Case Study on Improving User Engagement and Accessibility
                        </p>
                        <router-link to="/case-studies" class="button text-[14px] font-normal py-2 px-4 border-2 border-black rounded-md" >Read More</router-link>
                    </div>
                </div>
                <div class="image-wrapper">
                    <div class="content-wrapper flex justify-center items-center mt-10">
                        <img 
                            v-lazy="caseStudyTwoImg" 
                            class="lg:w-full lg:h-[514px]" 
                            alt="navix">
                    </div>
                </div>
            </div>
        </div>
    </section>
  </template>
  
<script>
export default {

    //composition api for images
  setup(){
    const caseStudyTwoImg = new URL('../assets/navix-crm.png', import.meta.url).href
    return {caseStudyTwoImg};
  }
}
</script>
  
  <style scope></style>
  