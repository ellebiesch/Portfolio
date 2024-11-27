<template>
  <!-- navbar start -->
  <navigation-element v-if="loading == false"></navigation-element>
  <!-- navbar end -->

  <loading-element v-if="loading == true"></loading-element>
  <router-view v-if="loading == false"></router-view>

  <!-- footer start -->
  <footer-element v-if="loading == false"></footer-element>
  <!-- footer end -->
</template>

<script>
import NavigationElement from '../components/NavigationElement.vue';
import LoadingElement from '../components/LoadingElement.vue';
//import FooterElement from '../components/FooterElement.vue';
export default {
  components: {
    NavigationElement,
    LoadingElement,
    //FooterElement
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style scoped></style>
