<template>
      <div class="main-wrapper flex flex-col xl:mx-[200px] lg:mx-[50px] xs:mx-[20px] justify-center items-center">
        <div class="text-content font-gellix flex flex-col justify-center items-center gap-y-6 xs:pt-[100px] xs:pb-[50px] md:pt-[120px]  xl:pb-[80px] xl:pt-[140px]  xl:my-auto xl:py-0">
            <p v-motion-slide-visible-once-bottom class="head-title text-black font-normal md:text-[18px] lg:text-[20px]">Genie</p>
            <p v-motion-pop-visible-once class="case-study-title text-black font-extrabold xs:text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[38px] text-center 2xl:max-w-[70%] leading-[1.2]">Empowering Elders to Cherish and Share Their Life's Stories: A Thoughtfully Designed Mobile App for Preserving Meaningful Moments</p>
            <p v-motion-slide-visible-once-bottom class="case-study-desc text-black font-medium md:text-[20px] text-left w-full " :class="{'hidden': isMobile}" >Older adults often face challenges in using technology due to complex interfaces and unfamiliar workflows. 
                                                                        Many are looking for ways to document their life stories but may need help with digital tools. Genie aims to bridge this gap 
                                                                        by providing an accessible and friendly platform where older adults can easily create memory books with the assistance of a designated Genie.</p>
        </div>
        <div v-motion-pop-visible-once class="case-hero-image flex flex-col justify-center items-center">
            <div class="flex flex-row flex-nowrap gap-7 justify-center items-center bg-[#f5f5f5] xs:py-[30px] xs:px-[30px] sm:py-[70px] md:py-[100px] lg:pl-[60px] lg:pr-[20px] xs:rounded-lg md:rounded-xl border-0">
                <img class="xs:max-h-[160px] sm:max-h-[250px] md:max-h-[320px] lg:max-h-[420px] w-auto xs:pl-[10px] md:pl-[50px] lg:pl-[25px] lg:pr-[20px] 2xl:pl-[60px]" :src="images[1]" alt="genie-mobile">
                <img class="xs:max-h-[160px] sm:max-h-[250px] md:max-h-[320px] lg:max-h-[420px] w-auto" :src="images[0]" alt="genie-mobile">
                <img class="xs:max-h-[160px] sm:max-h-[250px] md:max-h-[320px] lg:max-h-[420px] w-auto sm:pl-[20px]  md:pl-[30px] md:pr-[20px] xl:pl-[60px] 2xl:pr-[90px]" :src="images[2]" alt="genie-mobile">
            </div>
        </div>
        <div class="goal flex flex-col flex-wrap font-gellix sm:pt-[110px] gap-y-10 ">
            <div v-motion-slide-visible-once-bottom class="">
                <p class="font-extrabold text-black text-[24px] uppercase">Goal</p>
                <p class="text-[20px] text-gray-700 text-left py-2 font-semibold" >To design an intuitive, user-centered mobile app that empowers older adults to preserve their life stories and memories 
                        through the support of a ‘Genie’ who assists in creating personalized memory books.</p>
            </div>
            <div v-motion-slide-visible-once-bottom class="">
                <p class="font-extrabold text-black text-[24px] uppercase">Target Audience</p>
                <p class="text-[20px] text-gray-700 text-left py-2 font-semibold" >Demographics: Primarily adults aged 60+ who want to preserve their life stories. Psychographics: 
                        Individuals who value meaningful connections and want to share their legacy with family or frie</p>
            </div>    
        </div>

         <div v-motion-slide-visible-once-bottom class="design-process font-gellix flex flex-col sm:pt-[130px]">
            <h1 class="font-semibold text-black lg:text-[43px] xs:text-[36px] md:text-[40px] text-center xs:py-10 sm:py-5">Design Process</h1>
            <p class="text-gray-700 text-[20px] font-semibold xs:text-center md:text-left"><span class="text-black font-extrabold text-[20px]">Competitive Analysis: </span>Analyzed existing memory-preservation tools to identify gaps, 
                        like overly complex interfaces or lack of personalized assistance</p>
            <img class="h-auto xs:max-w-[330px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] mx-auto xs:py-[3rem] lg:py-[7rem]" :src="images[3]" alt="">
        </div>

        <div v-motion-slide-visible-once-bottom class=" flex flex-col flex-wrap font-gellix sm:pt-[60px] gap-y-10">
            <div class="">
                <p class="font-extrabold text-black text-[24px] uppercase">Key Design Challenges</p>
                <p class="text-[20px] text-gray-800 text-left py-1 font-semibold" >Simplicity: Ensuring that the interface is straightforward, with large, readable text, clear buttons, and minimal options on each screen.</p>
                <p class="text-[20px] text-gray-800 text-left py-1 font-semibold" >Assistance: Making the role of the ‘Genie’ clear, showing that this is a supportive feature aimed at guiding users through the memory-preservation process.</p>
                <p class="text-[20px] text-gray-800 text-left py-1 font-semibold" >Emotional Connection: Emphasizing features that let users reflect on their life journey and create a product they feel is deeply personal.</p>
            </div>
            <div v-motion-slide-visible-once-bottom class="">
                <p class="font-extrabold text-black text-[24px] uppercase">Wireframing and Prototyping</p>
                <p class="text-gray-700 text-[20px] font-semibold text-left py-2"><span class="text-black font-extrabold text-[20px]">Low-Fidelity Wireframes: </span> Began with hand-drawn sketches to map out the basic layout and flow, 
                    keeping in mind simplicity and ease of navigation. This approach allowed for quick iteration and feedback, focusing on core screens like onboarding, memory capture, and Genie interactions.</p>
            </div>    
        </div>
        <div class="py-10">
            <img v-motion-pop-visible-once class="h-auto xs:max-w-[330px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] mx-auto" :src="images[4]" alt="">
        </div>

        <div v-motion-slide-visible-once-bottom class=" flex flex-col flex-wrap justify-start items-start font-gellix sm:pt-[60px] gap-y-10">
            <div class="">
                <p class="font-extrabold text-black text-[24px] uppercase">Wireframing and Prototyping</p>
                <p class="text-gray-700 text-[20px] font-semibold text-left py-2"><span class="text-black font-extrabold text-[20px]">High-Fidelity Wireframes: </span> Developed a fully interactive prototype in Figma, incorporating color, typography, and accessible UI elements to mirror the final design</p>
            </div>  
        </div>
        <div v-motion-pop-visible-once class="md:py-[100px] xs:py-[50px] overflow-hidden">
            <img class="h-auto xs:max-w-[330px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-full mx-auto" :src="images[5]" alt="">
        </div>
    </div>

    <ImproveUx></ImproveUx>

  </template>
  
  
  <script>
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  import ImproveUx from '@/sections/ImproveUx.vue';

export default {
    components: {
        ImproveUx,
    },
    setup() {
        const images = ref([]);
        const windowWidth = ref(window.innerWidth); // Track window width

        const preloadImage = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = (error) => reject({ src, error });
        });
        };

        onMounted(async () => {
        const imagePaths = [
            new URL('@/assets/case-study-genie-hero-img-center.jpg', import.meta.url).href,
            new URL('@/assets/case-study-genie-hero-img-left.jpg', import.meta.url).href,
            new URL('@/assets/case-study-genie-hero-img-right.jpg', import.meta.url).href,
            new URL('@/assets/case-study-genie-design-process.jpg', import.meta.url).href,
            new URL('@/assets/case-study-genie-wireframing-1.jpg', import.meta.url).href,
            new URL('@/assets/case-study-genie-wireframing-2.jpg', import.meta.url).href,
        ];

        try {
            await Promise.all(imagePaths.map(preloadImage));
            images.value = imagePaths;
        } catch (error) {
            console.error('Error preloading images:', error);
        }

        // Add resize event listener to update window width
        window.addEventListener('resize', updateWindowWidth);
        });

        // Remove resize event listener when component is unmounted
        onUnmounted(() => {
        window.removeEventListener('resize', updateWindowWidth);
        });

        // Function to update window width
        const updateWindowWidth = () => {
        windowWidth.value = window.innerWidth;
        };

        // Computed property to check if the screen is mobile-sized
        const isMobile = computed(() => {
        return windowWidth.value < 1024;
        });

        return {
        images,
        isMobile,
        };
    },
    };
  </script>
  
  <style scoped></style>
  