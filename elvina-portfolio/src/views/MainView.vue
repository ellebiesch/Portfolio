<template>
    <navigation-element v-if="!loading" />
    
      <loading-element v-if="loading" />
      <router-view v-if="!loading" />

    <footer-element v-if="!loading" class="absolute bottom-0 w-full" />
</template>

<script>
import NavigationElement from '../components/NavigationElement.vue';
import LoadingElement from '../components/LoadingElement.vue';
import FooterElement from '../components/FooterElement.vue';
export default {
  components: {
    NavigationElement,
    LoadingElement,
    FooterElement
  },
  data() {
    return {
      loading: true,
    };
  },
  // mounted(){
  //   setTimeout(()=>{
  //     this.loading = false
  //     console.log('Loading Completed: ', this.loading)
  //   }, 1300)
  // }
};
</script>

<style scoped></style>
