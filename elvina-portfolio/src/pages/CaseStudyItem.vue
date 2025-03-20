<template>
    <section class="h-auto 2xl:pt-[140px] xs:px-[22px] md:px-[35px] xl:px-0">
      <div class="main-wrapper flex flex-col">
        <div class="text-content font-gellix flex flex-col justify-center items-center gap-y-6 xs:pt-[100px] xs:pb-[50px] md:pt-[120px] lg:mx-[50px] xl:pb-[80px] xl:pt-[140px] xl:mx-[100px] xl:my-auto xl:py-0">
            <p class="head-title text-black font-normal md:text-[18px] lg:text-[20px]">Genie</p>
            <p class="case-study-title text-black font-extrabold xs:text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[38px] text-center 2xl:max-w-[70%] leading-[1.2]">Empowering Elders to Cherish and Share Their Life's Stories: A Thoughtfully Designed Mobile App for Preserving Meaningful Moments</p>
            <p class="case-study-desc text-black font-normal md:text-[16px] text-left w-auto 2xl:max-w-[80%]">Older adults often face challenges in using technology due to complex interfaces and unfamiliar workflows. 
                                                                        Many are looking for ways to document their life stories but may need help with digital tools. Genie aims to bridge this gap 
                                                                        by providing an accessible and friendly platform where older adults can easily create memory books with the assistance of a designated Genie.</p>
        </div>

        
        <div class="case-hero-image flex flex-col justify-center items-center">
            <div class="flex flex-row flex-nowrap gap-7 justify-center items-center bg-[#f5f5f5] xs:py-[30px] xs:px-[30px] sm:py-[70px] md:py-[100px] lg:pl-[60px] lg:pr-[20px] xs:rounded-lg md:rounded-xl border-0">
                <img class="xs:max-h-[160px] sm:max-h-[250px] md:max-h-[320px] lg:max-h-[420px] w-auto xs:pl-[10px] md:pl-[50px] lg:pl-[25px] lg:pr-[20px] 2xl:pl-[60px]" :src="images[1]" alt="genie-mobile">
                <img class="xs:max-h-[160px] sm:max-h-[250px] md:max-h-[320px] lg:max-h-[420px] w-auto" :src="images[0]" alt="genie-mobile">
                <img class="xs:max-h-[160px] sm:max-h-[250px] md:max-h-[320px] lg:max-h-[420px] w-auto sm:pl-[20px]  md:pl-[30px] md:pr-[20px] xl:pl-[60px] 2xl:pr-[90px]" :src="images[2]" alt="genie-mobile">
            </div>

        </div>

      </div>

    
        <contact-form></contact-form>
        
    </section>
  </template>
  
  
  <script>
  import {ref, onMounted} from 'vue';
  import ContactForm from '@/sections/ContactForm.vue';
  export default {
    components: {
        ContactForm,
    },
    setup() {
    const images = ref([]);

    // Function to preload an image
    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = (error) => reject({ src, error });
      });
    };

    // Preload all images before rendering the page
    onMounted(async () => {
      const imagePaths = [
        new URL('@/assets/case-study-genie-hero-img-center.jpg', import.meta.url).href,
        new URL('@/assets/case-study-genie-hero-img-left.jpg', import.meta.url).href,
        new URL('@/assets/case-study-genie-hero-img-right.jpg', import.meta.url).href,
      ];

      try {
        // Preload all images
        await Promise.all(imagePaths.map(preloadImage));
        images.value = imagePaths;
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    });

    return {
      images,
    };
  },
    
  };
  </script>
  
  <style scoped></style>
  