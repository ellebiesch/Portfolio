<template>
  <div class="container">
    <main-page></main-page>
  </div>
</template>

<script>
  import MainPage from './components/MainPage.vue'
export default {
  components: {
    MainPage
  },
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.isMobile = window.innerWidth < 768
  }
}
</script>

<style scoped>

</style>