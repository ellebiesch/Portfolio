<template>
    <section class="h-auto 2xl:pt-[140px] xs:px-[22px] md:px-[35px] xl:px-0">
      
    <div class="">
        <case-study-genie></case-study-genie>
    </div>
    
    <contact-form></contact-form>
        
    </section>
  </template>
  
  
  <script>
  import ContactForm from '@/sections/ContactForm.vue';
  import CaseStudyGenie from '@/components/CaseStudyGenie.vue';
  export default {
    components: {
        ContactForm,
        CaseStudyGenie
    },
    setup() {
    
  }
}
  </script>
  
  <style scoped></style>
  