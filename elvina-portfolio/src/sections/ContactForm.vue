<template>
    <section id="contact-form" class="h-auto" >
        <div class=" mt-[100px] flex flex-row items-center justify-between lg:px-7 flex-wrap font-sans min-h-screen xs:mx-[15px] lg:mx-[100px] overflow-hidden">
            <div v-motion-slide-visible-once-left class="title flex flex-wrap flex-col justify-center items-start font-sans md:w-[370px] h-auto">
                <img src="../assets/contact-form-puzzle.svg" alt=""> 
                <h1 class="font-semibold text-[40px] text-left mb-10">Let's create something meaningful</h1>
                <div class="flex flex-row justify-center items-center gap-x-2">
                    <img :src="mobileNumberIcon" class="font-medium text-[18px] text-black w-[15px] m-h-[22px]" alt="phone icon">
                    <p class="font-medium text-black text-[18px]">+63 966 245 60484</p>
                </div>
                <div class="flex flex-row justify-center items-center gap-2">
                    <img :src="emailIcon" class="font-medium text-[18px] text-black w-[18px] m-h-[38px]" alt="envelop icon">
                    <p class="font-medium text-black text-[18px] py-4">elvinagarcia0710@gmail.com</p>
                </div>
            </div>
            <div v-motion-slide-visible-once-right class="wrapper font-sans border rounded-md xs:w-[340px] sm:w-auto xs:h-auto oveflow-hidden">
                <div class="content flex flex-col text-left justify-center items-start  py-[48px] px-[32px] gap-6">
                    <p class="uppercase text-[14px] text-gray-800 font-bold">e-mail</p>
                    <input 
                    type="text" 
                    class="pl-4 w-full min-h-[50px] rounded-md bg-white border focus:ring-0 placeholder:font-sans placeholder:text-[18px] 
                            placeholder:text-gray-300 placeholder:font-medium focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Your email">
                    <p class="message uppercase text-gray-800 text-[14px] font-bold">message</p>
                    <textarea 
                    id="contact-textarea"
                    rows="20" 
                    name="contact-textarea" 
                    class="h-[15em] min-h-[200px] w-full bg-white font-sans text-[18px] text-gray-300 font-medium placeholder:text-gray-400 placeholder:opacity-75 border rounded-md 
                            p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" 
                    placeholder="Drop a line"></textarea>
                    <p class="uppercase text-gray-800 text-[14px] font-bold">Name</p>
                    <div class="yourname flex flex-row flex-wrap justify-center items-start">
                        <input 
                        class="pl-4 border mr-4 md:w-[458px] xs:w-full rounded-md min-h-[50px] bg-white border-0 focus:ring-0 placeholder:font-sans placeholder:text-[18px] 
                                placeholder:text-gray-300 placeholder:font-medium focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                        type="text" 
                        placeholder="Your name"> 
                        <router-link to="" class="xs:mt-[40px] sm:m-auto text-white">
                            <a href="#" class="inline-flex items-center justify-center text-base font-semibold px-[47px] py-[13px] bg-gray-900 rounded-md border hover:bg-white hover:text-black transition duration-200 tracking-wide focus:shadow-outline focus:outline-none">Send</a>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </template>
  
<script>
export default {
    data() {
        return {
            mobileNumberIcon: new URL('@/assets/mobile-number-icon.svg', import.meta.url).href,
            emailIcon: new URL('@/assets/email-icon.svg', import.meta.url).href
        }
    }
}
</script>
  
  <style scope></style>
  