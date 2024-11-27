<template>
  <!-- Footer start -->
  <section class="footer-bg bg-gradient-to-t h-auto w-full flex">
    <div :class="{ 'inner-frame': !isMobile(), 'inner-frame-mobile': isMobile() }" class="w-full">
      <div
        class="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center container mx-auto px-6 py-6 lg:py-14 2xl:px-40 gap-6 lg:gap-0"
      >
        <img src="../assets/ballyboy_x_roobet.png" alt="ballyboy_x_roobet" class="w-[180px]" />
        <div
          class="flex flex-col lg:flex-row gap-4 lg:gap-6 text-white text-sm font-bold tracking-widest"
          style="font-family: Oxanium, sans-serif"
        >
          <router-link to="/">Home</router-link>
          <router-link to="/challenges">Challenges</router-link>
          <router-link to="/leaderboards">Leaderboard</router-link>
          <router-link to="/store">Store</router-link>
        </div>
        <div class="flex flex-col justify-center items-center gap-1">
          <div class="flex justify-center items-center space-x-1">
            <a href="https://kick.com/bally_boy" target="_blank">
              <img src="../assets/kick.png" alt="kick" class="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/ballyboyoffical" target="_blank">
              <img src="../assets/instagram.png" alt="instagram" class="w-7 h-7" />
            </a>
            <a href="https://www.youtube.com/@KickBally_Boy" target="_blank">
              <img src="../assets/youtube.png" alt="youtube" class="w-7 h-7" />
            </a>
            <a href="https://discord.com/invite/Rh6kTmSJuP" target="_blank">
              <img src="../assets/discordlogo.png" alt="discord" class="w-6 h-6" />
            </a>
            <a href="https://x.com/Bally_BoyonKick" target="_blank">
              <img src="../assets/twitter.png" alt="twitter" class="w-7 h-7" />
            </a>
          </div>
          <div class="text-[#BBBBBB] text-[11px] font-bold tracking-widest" style="font-family: Oxanium, sans-serif">
            © All rights reserved.
          </div>
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
