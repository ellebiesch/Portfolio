<template>
  <!-- Footer start -->
  <footer class="footer-bg bg-gradient-to-t h-[142px] w-full relative flex">
    <div class="w-full lg:mx-28 sm:mx-5">
      <div class="flex sm:flex-row xs:flex-col xs:justify-center xs:items-start sm:justify-between sm:items-center sm:mx-auto xs:m-0 h-[142px] xs:gap-y-3 xs:mx-5">
        <div class="logo">
              <a href="#"><h1 class="elvina-logo font-gellix lg:text-2xl md:text-xl font-bold">Elvina.</h1></a>
        </div>
          <div class=" font-gellix text-[#000] text-[11px] font-medium lg:text-base md:text-sm tracking-normal">
            © 2025 Elvina Garcia. All rights reserved.
          </div>

          <!-- <div class="social-links flex flex-row sm:justify-between items-center lg:gap-x-8 xs:gap-x-3">
            <a href="#" target="_blank">
              <img src="../assets/facebook.png" alt="facebook" class="w-7 h-7">
            </a>
            <a href="#" target="_blank">
              <img src="../assets/twitter.png" alt="twitter" class="w-7 h-7">
            </a>
            <a href="#" target="_blank">
              <img src="../assets/instagram.png" alt="instagram" class="w-7 h-7">
            </a>
          </div> -->

        </div>
      </div>
    </footer>
  <!-- Footer end -->
</template>

<script>
export default {
  methods: {
    isMobile() {
      return window.innerWidth < 1024;
    },
  },
};
</script>

<style scope></style>
