<template>
    <div class="main-wrapper flex flex-col xl:mx-[200px] lg:mx-[50px] xs:mx-[20px] justify-center items-center xs:mb-[50px] xl:mb-[100px]">
      <div class="text-content font-gellix flex flex-col justify-center items-center gap-y-6 xs:pt-[100px] xs:pb-[50px] md:pt-[120px]  xl:pb-[80px] xl:pt-[140px]  xl:my-auto xl:py-0">
          <p v-motion-slide-visible-once-bottom class="head-title text-black font-normal md:text-[18px] lg:text-[20px]">Navix Health CRM</p>
          <p v-motion-slide-visible-once-bottom class="case-study-title text-black font-extrabold xs:text-[20px] md:text-[24px] lg:text-[32px] 2xl:text-[38px] text-center 2xl:max-w-[70%] leading-[1.2] font-gellix">Transforming Healthcare Efficiency: The Ultimate Navix Health CRM UI Overhaul</p>
      </div>
      <div class="case-hero-image flex flex-col justify-center items-center font-gellix">
          <img v-motion-pop-visible-once :src="images[0]" class="h-auto xs:w-[380px] sm:w-[500px] lg:w-[800px] xl:w-[900px]" alt="">
          <p v-motion-slide-visible-once-bottom class="case-study-desc text-black font-semibold md:text-[16px] text-left w-full  pt-[100px]" >Navix Health CRM is a customer relationship management platform designed to streamline healthcare operations, improve patient engagement, and enhance care coordination for medical professionals.</p>
        </div>
      <div class="goal flex flex-col flex-wrap font-gellix sm:pt-[110px] gap-y-10 ">
          <div class="">
              <p class="font-extrabold text-black text-[24px] uppercase xs:pt-10 md:pt-0">Problem Statement</p>
              <p class="text-[16px] text-gray-800 text-left py-2 font-semibold" >The existing UI of Navix Health CRM was outdated, complex, and difficult to navigate, leading to poor user adoption and inefficiencies in healthcare workflows. Users struggled with cluttered layouts, redundant actions, and a lack of intuitive interactions, negatively impacting the overall user experience</p>
          </div>    
          <div v-motion-slide-visible-once-bottom class="">
              <p class="font-extrabold text-black text-[24px] uppercase">Goal</p>
              <p class="text-[16px] text-gray-800 text-left py-2 font-semibold" >Revamp the UI to enhance the UX, making the platform more intuitive, visually appealing, and efficient for healthcare professionals.</p>
          </div>
      </div>
<!-- 
       <div class="design-process font-gellix flex flex-col sm:pt-[130px] justify-between items-center">
          <h1 v-motion-slide-visible-once-bottom class="font-semibold text-black lg:text-[43px] xs:text-[36px] md:text-[40px] text-center xs:py-10 sm:py-5">Design Process</h1>
      </div>

      <div class=" flex flex-col flex-wrap font-gellix sm:pt-[60px] gap-y-10">
          <div v-motion-slide-visible-once-bottom class="">
              <p class="font-extrabold text-black text-[24px] uppercase">Research & Discovery</p>
              <p class="text-[16px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                    <span class="inline-flex ml-2 py-0 sm:pl-7">
                        <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                        <span>Conducted stakeholder interviews with doctors, nurses, and administrative staff to understand pain points </span>
                    </span> 
                </p>
              <p class="text-[16px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                    <span class="inline-flex ml-2 py-0 sm:pl-7">
                        <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                        <span>Performed heuristic evaluations to identify UI inconsistencies and friction points.</span>
                    </span> 
                </p>
              <p class="text-[16px] text-gray-800 text-left xl:py-2 lg:py-0 xs:pl-4 sm:pl-0 font-semibold " > 
                    <span class="inline-flex ml-2 py-0 sm:pl-7">
                        <img :src="images[1]" class="xs:h-5 w-auto mr-1" alt="">
                        <span>Analyzed competitor CRM solutions to benchmark modern UI standards and best practices.</span>
                    </span> 
                </p>
          </div>
          <div v-motion-slide-visible-once-bottom class="">
            <p class="font-extrabold text-black text-[24px] uppercase">Enhancements:</p>
            <span class="inline-flex ml-2 xs:pl-4 py-2 sm:pl-7">
                <img :src="images[1]" alt="" class="h-5 w-auto mr-1">
                <span class="text-[16px] text-gray-800 font-extrabold mr-1">Modernized Interface: 
                    <span class="text-[16px] text-gray-800 font-semibold">Redesigned the visual elements to follow a clean, minimalistic, and accessible design language.</span>
                </span>
            </span>
            <span class="inline-flex ml-2 xs:pl-4 py-2 sm:pl-7">
                <img :src="images[1]" alt="" class="h-5 w-auto mr-1">
                <span class="text-[16px] text-gray-800 font-extrabold mr-1">Compact Design: 
                    <span class="text-[16px] text-gray-800 font-semibold">Optimized screen space by reducing unnecessary elements, allowing for a more focused and efficient user interface.</span>
                </span>
            </span>
            <span class="inline-flex ml-2 xs:pl-4 py-2 sm:pl-7">
                <img :src="images[1]" alt="" class="h-5 w-auto mr-1">
                <span class="text-[16px] text-gray-800 font-extrabold mr-1">Enhanced Interactions: 
                    <span class="text-[16px] text-gray-800 font-semibold"> Implemented micro-interactions and hover states for a more responsive and engaging experience.</span>
                </span>
            </span>
            <span class="inline-flex ml-2 py-2 pl-7">
                <img :src="images[1]" alt="" class="h-5 w-auto mr-1">
                <span class="text-[16px] text-gray-800 font-extrabold mr-1">Mobile-Responsive Redesign: 
                    <span class="text-[16px] text-gray-800 font-semibold">Ensured a seamless experience across desktop, tablet, and mobile devices.</span>
                </span>
            </span>
         </div>
         
         <div v-motion-slide-visible-once-bottom class="">
              <p class="font-extrabold text-black text-[24px] uppercase">Result</p>
              <p class="text-[16px] text-gray-800 text-left py-2 font-semibold" >Increased task efficiency by 45% through a more intuitive interface with a user satisfaction of 80% positive feedback rating post - revamp</p>
          </div>
          <div v-motion-slide-visible-once-bottom class="">
              <p class="font-extrabold text-black text-[24px] uppercase">Conclusion</p>
              <p class="text-[16px] text-gray-800 text-left py-2 font-semibold" >The UI revamp of Navix Health CRM significantly enhanced the overall UX, improving usability, efficiency, and visual appeal. By focusing on intuitive design, structured layouts, and responsive interactions, the new UI empowers 
                    healthcare professionals to navigate the platform effortlessly, ultimately improving patient care and operational workflows.</p>
          </div>
      </div> -->
   
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
          new URL('@/assets/case-study-navix-hero-img.jpg', import.meta.url).href,
          new URL('@/assets/enter-arrow.svg', import.meta.url).href,
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
