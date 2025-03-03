<template>
  <div class="navigation">
    <nav
      class="fixed w-full z-50 md:px-10 2xl:px-40 px-5 py-2.5 bg-[#fff] xs:min-h-[80px] md:min-h-[115px]"
    >
      <div class=" container mx-auto flex justify-between items-center relative lg:block ">
        
        <!-- Logo -->
        <div class="logo lg:hidden">
              <a href="/"><h1 class="elvina-logo font-gellix text-2xl font-bold xs:text-[20px]">Elvina.</h1></a>
        </div>

        <!-- DESKTOP LINKS -->
        <div class="hidden lg:flex items-center justify-between text-black h-[25px] my-6 mx-28">
          <!-- Logo -->
            <div class="logo min-w-[200px]">
              <a href="/"><h1 class="elvina-logo font-gellix text-2xl font-bold">Elvina.</h1></a>
            </div>
            <div class="center-nav xl:ml-[5%] lg:ml-[0px] flex flex-row font-gellix">
              <!-- <a href=""><p class="font-gellix text-base pr-[52px]">About</p></a>
              <a href=""><p class="font-gellix text-base">Case Studies</p></a> -->
              <RouteLink 
              to="/about"
              label="About"
              :isActive="$route.path === '/about'"
              />
              <RouteLink 
              to="/case-studies"
              label="Case Studies"
              :isActive="$route.path === '/case-studies'"
              />
            </div>

            <div class="right-nav flex flex-row items-center text-white">
              <a href="#"><p class="font-gellix font-medium pr-[52px] text-black">Download Resume</p></a>
              <a
                href="#_"
                class=" inline-flex font-gellix items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 bg-gray-900 rounded-lg hover:bg-white hover:text-black border focus:shadow-outline focus:outline-none"
              >
                Contact
              </a>
            </div>
        </div>
        <!-- button Hamburger -->
        <div class="lg:hidden absolute top-0 right-0">
            <button class="text-white focus:outline-none mt-1" @click.stop="toggleMobileMenu"  >
              <svg v-show="mobileMenuOpen == false" v-motion-pop-visible  xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: #000;">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg v-show="mobileMenuOpen == true" v-motion-pop-visible xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7" style="color: #000;">
                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </button>
        </div>
        <!-- Sidebar Menu -->
      </div>
    </nav>
    <transition name="slide">
          <div v-if="mobileMenuOpen" class="sidebar fixed bg-[#FFF] top-0 bottom-0 w-60 md:w-80 z-40 mt-[80px]" :class="{'justify-start': isMobile()}" @click.stop>
            <!-- Links -->
             <div class="flex flex-col uppercase font-gellix">
                <router-link to="/about" class=" flex items-center py-5 hover:bg-[#D1D1D1] hover:bg-opacity-10" :class="{ 'bg-[#D9D9D9] bg-opacity-10 border-l-2 border-l-[#F5F5F6]': $route.path === '/about' }" @click="mobileMenuOpen = false">
                  <div class="flex flex-row justify-center items-center ml-4 gap-2">
                      <p class="tracking-widest font-bold text-xs text-[#000]">About</p>
                  </div>
              </router-link>
              <router-link to="/case-studies" class=" flex items-center py-5 hover:bg-[#D1D1D1] hover:bg-opacity-10" :class="{ 'bg-[#D9D9D9] bg-opacity-10 border-l-2 border-l-[#F5F5F6]': $route.path === '/case-studies' }" @click="mobileMenuOpen = false">
                  <div class="flex flex-row justify-center items-center ml-4 gap-2">
                      <p class="tracking-widest font-bold text-xs text-[#000]">Case Studies</p>
                  </div>
              </router-link>
              <router-link to="/resume" class=" flex items-center py-5 hover:bg-[#D1D1D1] hover:bg-opacity-10" :class="{ 'bg-[#D9D9D9] bg-opacity-10 border-l-2 border-l-[#F5F5F6]': $route.path === '/resume' }" @click="mobileMenuOpen = false">
                  <div class="flex flex-row justify-center items-center ml-4 gap-2">
                      <p class="tracking-widest font-bold text-xs text-[#000]">Download Resume</p>
                  </div>
              </router-link>

              <!-- REWORK THE CONTACT PAGE TO DIRECT TO THE CONTACT SECTION ONLY RATHER THAN DIFFERENT PAGE -->
              <router-link to="/contact" class=" flex items-center py-5 hover:bg-[#D1D1D1] hover:bg-opacity-10" :class="{ 'bg-[#D9D9D9] bg-opacity-10 border-l-2 border-l-[#D1D1D1]': $route.path === '/contact' }" @click="mobileMenuOpen = false">
                  <div class="flex flex-row justify-center items-center ml-4 gap-2 font-gellix">
                      <p class="tracking-widest font-bold text-xs text-[#000]"> Contact</p>
                  </div>
              </router-link> 
             </div>
          </div>
      </transition>
  </div>
</template>

<script>
import RouteLink from './RouteLink.vue';
export default {
  components: {
    RouteLink,
  },
  data() {
    return {
      mobileMenuOpen: false,
      isScrolled: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    handleClickOutside(event) {
      if (this.mobileMenuOpen && !event.target.closest('.sidebar')) {
        this.mobileMenuOpen = false;
      }
    },
    isMobile() {
      return window.innerWidth < 1024;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
      if (this.showMenu && window.innerWidth < 768) {
          this.isScrolled = true;
      }
    },
    mounted() {
      window.addEventListener('click', this.handleClickOutside);
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('click', this.handleClickOutside);
      window.removeEventListener('scroll', this.handleScroll);
    },
  },
};
</script>
<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
