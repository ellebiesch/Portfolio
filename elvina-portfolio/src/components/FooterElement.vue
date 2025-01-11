<template>
  <!-- Footer start -->
  <section class="footer-bg bg-gradient-to-t h-auto w-full flex">
    <div class="w-full">
      <div class="flex flex-row justify-between items-center mx-auto">
        <div class="logo">
              <a href="#"><h1 class="elvina-logo font-sans text-2xl font-bold">Elvina.</h1></a>
        </div>
          <div class=" font-inter text-[#000] text-[11px] font-medium text-base tracking-widest">
            © 2025 Elvina Garcia. All rights reserved.
          </div>

          <div class="social-links flex flex-row justify-center items-center">
            <a href="#" target="_blank">
              <img src="../assets/facebook.png" alt="facebook" class="w-7 h-7">
            </a>
            <a href="#" target="_blank">
              <img src="../assets/twitter.png" alt="twitter" class="w-7 h-7">
            </a>
            <a href="#" target="_blank">
              <img src="../assets/instagram.png" alt="instagram" class="w-7 h-7">
            </a>
          </div>

        </div>
      </div>
  </section>
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
