<template>
    <section class="h-auto">
        <div class="content-wrapper flex flex-col items-center justify-center bg-[#fafafa] md:py-32">
            <div class="flex flex-row flex-wrap items-start justify-center">
                <div class="text-label flex flex-col justify-center items-start gap-y-4 font-gellix md:w-[600px]">
                    <h1 class="font-extrabold text-black text-[40px] text-left ">Discover the products I've helped shape</h1>
                    <p class="text-black font-medium text-[20px] text-left">I collaborate closely with clients to deeply understand their business goals and audience needs, 
                        crafting intuitive, high-impact designs that not only meet expectations but exceed them—delivering seamless experiences that drive real results</p>
                    <a 
                        href="#_" 
                        class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 border-black/20 
                                border-2 rounded-lg hover:bg-gray-200 focus:shadow-outline focus:outline-none"> See All Works </a>

                </div>
                <div class="discover-img-wrapper">
                    <img src="../assets/discover-img.svg" class="h-auto md:min-w-[516px]" alt="">
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
  