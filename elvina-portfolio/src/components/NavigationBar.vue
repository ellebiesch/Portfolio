<template>
  <div class="navigation">
    <nav
      :class="{
        'bg-[#fff]': !isScrolled && !isMobile(),
        'bg-[#fff]': isScrolled && !isMobile(),
        'bg-[#fff]': isMobile(),
      }"
      class="fixed w-full z-50 px-6 md:px-10 2xl:px-40"
    >
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="logo flex items-center">
          <h1 class="elvina-logo">Elvina</h1>
        </div>
        <!-- button Hamburger -->
        <div class="lg:hidden">
          <button class="text-white focus:outline-none mt-1" @click.stop="toggleMobileMenu">
            <svg
              v-show="mobileMenuOpen == false"
              v-motion-pop-visible
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg
              v-show="mobileMenuOpen == true"
              v-motion-pop-visible
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-7 w-7"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <!-- Links Desktop -->
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
    isMobile() {
      return window.innerWidth < 1024;
    },
  },
};
</script>
<style scoped></style>
