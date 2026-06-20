<template>
  <div class="">
    <LoadingElement v-if="isLoading" @loading-complete="isLoading = false" />
    <router-view v-else></router-view>
  </div>
</template>

<script>
import LoadingElement from '@/components/LoadingElement.vue'

export default {
  components: {
    LoadingElement,
  },
  data() {
    return {
      isMobile: false,
      isLoading: true,
    }
  },
  mounted() {
    this.isMobile = window.innerWidth < 768
    this.$nextTick(() => {
      setTimeout(() => {
        this.isLoading = false
      }, 1500)
    })
  },
}
</script>

<style scoped></style>