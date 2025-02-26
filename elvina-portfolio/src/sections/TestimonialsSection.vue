<template>
    <section class="h-auto">
        <div class=" mt-[100px] flex flex-row  items-center justify-evenly flex-wrap font-gellix bg-[#fafafa] md:py-20">
            <div class="title">
                <h1 class="font-semibold text-[40px] text-center">Testimonials</h1>
            </div>
            <div class="wrapper">
                <div class="item flex flex-row xs:flex-col flex-wrap items-start xs:items-center xs:justify-center md:gap-6 sm:gap-4 xs:gap-y-10 md:pt-5">
                    <img v-lazy="testimonialUser" class="rounded-full md:w-[72px] min-h-[70px]" alt="testimonial user">
                    <div class="content flex flex-col justify-start items-start md:w-[542px] min-h-[190px] gap-2">
                        <p class="text-black font-normal text-base text-justify">The redesign of our applicant tracking system was outstanding. She took the time to understand our needs and our users, and the result was a sleek, user-friendly interface that has dramatically improved our hiring process. Their attention to detail and focus on interaction design made all the difference</p>
                        <p class="uppercase text-black font-bold text-sm opacity-30">alex h., CEO AND FOUNDER</p>
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
    const testimonialUser = new URL('../assets/testimonial-user.png', import.meta.url).href
    return {testimonialUser};
  }
}
</script>
  
  <style scope></style>
  