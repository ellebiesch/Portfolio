<template>
    <section class="h-auto">
        <div v-motion-slide-visible-once-bottom class="content-wrapper flex flex-col justify-center items-center font-gellix bg-gray-200 rounded-xl lg:my-10 lg:mx-12">
            <div class="contents">
                <div class="user-feedback font-gellix flex flex-col justify-center items-center lg:py-12 lg:gap-y-5">
                    <img :src="reverseQoute" class="w-auto h-full" alt="">
                    <h1 class="qoute text-[40px] font-semibold">"It's like Google Forms — but made for therapists."</h1>
                    <p class="sub-text">Internal User Feedback</p>
                </div>
                
            </div>
           
        </div>
        
    </section>
  </template>
  
<script>
export default {
    data(){
        return{
            reverseQoute: new URL('@/assets/reverse-qoute-symbol.png', import.meta.url).href,
        }
    }
}
</script>
  
  <style></style>
  