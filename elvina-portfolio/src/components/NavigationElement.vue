<template>
  <div class="navigation">
    <nav
      :class="{
        'bg-[#fff]': !isScrolled && !isMobile(),
        'bg-[#fff]': isScrolled && !isMobile(),
        'bg-[#fff]': isMobile(),
      }"
      class="fixed w-full z-50 md:px-10 2xl:px-40 border-2 border-[#000]"
    >
      <div class="container hidden lg:block">
        <div class="container mx-auto flex justify-between items-center h-[120px]" :class="{'hidden': isMobile()}">
        <!-- Logo -->
        <div class="logo">
          <a href="#"><h1 class="elvina-logo font-sans text-2xl font-bold">Elvina.</h1></a>
        </div>
        <div class="center-nav flex flex-row">
          <a href=""><p class="font-inter text-base pr-[52px]">About</p></a>
          <a href=""><p class="font-inter text-base">Case Studies</p></a>
        </div>

        <div class="right-nav flex flex-row items-center">
          <a href="#"><p class="font-inter text-base pr-[52px]">Download Resume</p></a>
          <a
            href="#_"
            class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
          >
            Contact
          </a>
        </div>
      </div>

        <!-- button Hamburger -->
        <div class="lg:hidden md:block">
            <button class="text-white focus:outline-none mt-1" @click.stop="toggleMobileMenu" >
              <svg v-show="mobileMenuOpen == false" v-motion-pop-visible  xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: #000;">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg v-show="mobileMenuOpen == true" v-motion-pop-visible xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7" style="color: #000;">
                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
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
  },
};
</script>
<style scoped></style>
