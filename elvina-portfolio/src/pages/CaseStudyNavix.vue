<template>
    <div class="main-wrapper flex flex-col xl:mx-[200px] lg:mx-[50px] xs:mx-[20px] justify-center items-center xs:mb-[50px] xl:mb-[100px]">
        <div class="text-content font-sans flex flex-col justify-center items-center gap-y-6 xs:pt-[100px] xs:pb-[50px] md:pt-[120px]  xl:pb-[80px] xl:pt-[140px]  xl:my-auto xl:py-0">
            <p v-motion-slide-visible-once-bottom class="head-title text-black font-normal md:text-[18px] lg:text-[20px]">Navix Health CRM</p>
            <p v-motion-slide-visible-once-bottom class="case-study-title text-black font-extrabold xs:text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[38px] text-center 2xl:max-w-[70%] leading-[1.2] font-sans">70% Faster Form Creation: Rebuilding EHR Documentation for Simplicity and Speed </p>
        </div>
        <div class="case-hero-image flex flex-col justify-center items-center font-sans">
            <img v-motion-pop-visible-once :src="images[0]" class="h-auto xs:w-[380px] sm:w-[500px] lg:w-[800px] xl:w-[900px]" alt="">
            <p v-motion-slide-visible-once-bottom class="case-study-desc text-black font-semibold md:text-[20px] text-left w-full  pt-[100px]" >Navix is a behavioral health SaaS platform that streamlines documentation, workflows, and client management. One of the key challenges faced by our users — especially clinicians and case managers — was the lack of a simple, 
                scalable way to create and manage client documentation forms. <br> We set out to design a custom. Form Builder module, allowing users to create dynamic, reusable forms within the platform without relying on the support or dev teams.</p>
            </div>

        <div class=" flex flex-col flex-wrap font-sans sm:pt-[60px] gap-y-10">
            <div v-motion-slide-visible-once-bottom class="">
                <p class="font-extrabold text-black text-[24px] uppercase">Problem Statement</p>
                <p class="text-[20px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                        <span class="inline-flex ml-2 py-0 sm:pl-7">
                            <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                            <span>Overwhelming, form-heavy UIs that were hard to navigate</span>
                        </span> 
                    </p>
                <p class="text-[20px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                        <span class="inline-flex ml-2 py-0 sm:pl-7">
                            <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                            <span>Users had no autonomy over building or editing their own forms</span>
                        </span> 
                    </p>
                <p class="text-[20px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                        <span class="inline-flex ml-2 py-0 sm:pl-7">
                            <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                            <span>No flexibility for non-tech users to customize fields</span>
                        </span> 
                    </p>
                <p class="text-[20px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                        <span class="inline-flex ml-2 py-0 sm:pl-7">
                            <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                            <span>Redundant data entry that fatigued clinicians and slowed workflow</span>
                        </span> 
                    </p>
            </div>
            <div v-motion-slide-visible-once-bottom class="">
                    <p class="font-extrabold text-black text-[24px] uppercase">Goal</p>
                    <span class="inline-flex ml-2 xs:pl-4 py-2 sm:pl-7">
                        <img :src="images[1]" alt="" class="h-5 w-auto mr-1">
                        <span class="text-[20px] text-gray-800 font-extrabold mr-1"> 
                            <span class="text-[20px] text-gray-800 font-semibold">Our goal was to build a user-friendly, drag-and-drop form builder that could serve the needs of multiple behavioral health programs — from youth services to adult therapy — while maintaining form consistency and reducing internal dependencies.</span>
                        </span>
                    </span>
            </div>
        </div>
        <div class="design-process font-sans flex flex-col sm:pt-[130px] justify-between items-center">
            <h1 v-motion-slide-visible-once-bottom class="font-semibold text-black lg:text-[43px] xs:text-[36px] md:text-[40px] text-center xs:py-10 sm:py-5">🚀 Our Lean Approach: Discovery & Prototyping</h1>
            <p class="text-black text-center font-semibold xs:text-[16px] md:text-[20px]">Given timeline constraints and our team's existing knowledge of the domain, we skipped formal research documentation and focused on:</p>
        </div>
        <div class=" flex flex-col flex-wrap font-sans sm:pt-[30px] gap-y-10 w-full">
            <div v-motion-slide-visible-once-bottom class="">
                <p class="text-[20px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                        <span class="inline-flex ml-2 py-0 sm:pl-7">
                            <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                            <span>Quick Internal Syncs – aligned with our Product Manager and Business Team to identify common pain points</span>
                        </span> 
                    </p>
                <p class="text-[20px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                        <span class="inline-flex ml-2 py-0 sm:pl-7">
                            <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                            <span>Support Ticket Reviews – mined feedback from existing form-related tickets</span>
                        </span> 
                    </p>
                <p class="text-[20px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                        <span class="inline-flex ml-2 py-0 sm:pl-7">
                            <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                            <span>Competitive Benchmarking – drew inspiration from Jotform, TheraNest, and Typeform</span>
                        </span> 
                    </p>
                <p class="text-[20px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                        <span class="inline-flex ml-2 py-0 sm:pl-7">
                            <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                            <span>Rapid Low-Fidelity Wireframes – immediately translated insights into wireframes to validate direction</span>
                        </span> 
                    </p>
            </div>
        </div>
        <div class="design-process font-sans flex flex-col sm:pt-[130px] justify-between items-center">
            <h1 v-motion-slide-visible-once-bottom class="font-semibold text-black lg:text-[43px] xs:text-[36px] md:text-[40px] text-center xs:py-10 sm:py-5">📐 Low-Fidelity Wireframes</h1>
            <p class="text-black text-center font-semibold xs:text-[16px] md:text-[20px]">We focused on usability, visual simplicity and modularity:</p>
        </div>
        <div class=" flex flex-col flex-wrap font-sans sm:pt-[30px] gap-y-10 w-full">
            <div v-motion-slide-visible-once-bottom class="">
                <p class="text-[20px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                        <span class="inline-flex ml-2 py-0 sm:pl-7">
                            <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                            <span>Drag-and-drop interface for field placement</span>
                        </span> 
                    </p>
                <p class="text-[20px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                        <span class="inline-flex ml-2 py-0 sm:pl-7">
                            <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                            <span>Quick-add templates for commonly used forms</span>
                        </span> 
                    </p>
                <p class="text-[20px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                        <span class="inline-flex ml-2 py-0 sm:pl-7">
                            <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                            <span>Field logic and validation controls with inline previews</span>
                        </span> 
                    </p>
                <p class="text-[20px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                        <span class="inline-flex ml-2 py-0 sm:pl-7">
                            <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                            <span>Modular field blocks with clear labels and tooltips</span>
                        </span> 
                    </p>
            </div>
        </div>
        <div class="flex xs:flex-col lg:flex-row justify-center items-center xs:gap-y-10 lg:gap-x-10 xs:my-7 md:my-10">
            <img :src="images[2]" class="xl:h-[458px] w-auto" alt="">
            <img :src="images[3]" class="xl:h-[458px] w-auto" alt="">
        </div>
        <div class="design-process font-sans flex flex-col sm:pt-[130px] justify-start items-start w-full">
            <h1 v-motion-slide-visible-once-bottom class="font-semibold text-black lg:text-[43px] xs:text-[36px] md:text-[40px] text-left xs:py-10 sm:py-5">📊 Results & Impact</h1>
        </div>
        <div class=" flex flex-col flex-wrap font-sans sm:pt-[30px] gap-y-10 w-full">
            <div v-motion-slide-visible-once-bottom class="">
                <p class="text-[20px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                        <span class="inline-flex ml-2 py-0 sm:pl-7">
                            <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                            <span>⚡️ 70% reduction in form creation time</span>
                        </span> 
                    </p>
                <p class="text-[20px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                        <span class="inline-flex ml-2 py-0 sm:pl-7">
                            <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                            <span>📈 2.5x increase in form usage across programs</span>
                        </span> 
                    </p>
                <p class="text-[20px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                        <span class="inline-flex ml-2 py-0 sm:pl-7">
                            <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                            <span>🧾 Over 50 custom forms created in the first 6 weeks post-launch</span>
                        </span> 
                    </p>
                <p class="text-[20px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                        <span class="inline-flex ml-2 py-0 sm:pl-7">
                            <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                            <span>🛠️ Minor support requests — most issues were resolved in-product</span>
                        </span> 
                    </p>
            </div>
        </div>
    </div>

  <reflection-section></reflection-section>
  <improve-ux></improve-ux>

</template>


<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import ImproveUx from '@/sections/ImproveUx.vue';
import ReflectionSection from '@/sections/ReflectionSection.vue';

export default {
    components: {
        ImproveUx,
        ReflectionSection,
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
          new URL('@/assets/case-study-navix-hero-img.jpg', import.meta.url).href,
          new URL('@/assets/enter-arrow.svg', import.meta.url).href,
          new URL('@/assets/low-fid-img1.png', import.meta.url).href,
          new URL('@/assets/low-fid-img2.png', import.meta.url).href,
      ];

      try {
          await Promise.all(imagePaths.map(preloadImage));
          images.value = imagePaths;
      } catch (error) {
          console.error('Error preloading images:', error);
      }

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
