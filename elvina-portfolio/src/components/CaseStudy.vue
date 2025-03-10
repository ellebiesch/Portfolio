<template>
    <div class="case-study-container xl:mx-[100px] xl:py-[140px]">
        <div class="case-study-wrapper flex flex-row flex-wrap xl:justify-evenly items-center gap-x-10 border-b-2 border-gray-300 xl:pb-[170px]">
            <div 
                class="image-cont bg-[#F3F4F5] border-0 rounded-lg " 
                :class="containerClasses">
                <img v-lazy="imageSource" :class="imageClasses" alt="phone ui">
            </div>
            <div class="case-study-desc font-gellix">
            <p class="case-label xl:w-[600px] font-semibold xl:text-[32px] leading-[1.2]">
              {{ label }}
            </p>
            <case-study-button
              class="py-8" 
              to="#"
              label="See Case Study">
            </case-study-button>
          </div>
        </div>
      </div>
</template>

<script>
    import CaseStudyButton from './CaseStudyButton.vue';

    export default {
        components: {
            CaseStudyButton,
        },

        props:{
            label: { 
                type: String, 
                required: true 
            },
            imageSource: { 
                type: String, 
                required: true 
            },
            type: { 
                type: String, 
                required: true, 
                validator: (value) => ['web', 'mobile'].includes(value), 
            }
        },
        computed: {
            containerClasses() {
            return this.type === 'mobile'
                ? 'xl:px-[100px] xl:pt-[100px]'
                : 'xl:pl-[60px] xl:pt-[90px]';
            },
            imageClasses() {
                return this.type === 'mobile'
                    ? 'xl:max-h-[434px] xl:max-w-[250px]' 
                    : 'xl:max-h-[380px] xl:max-w-[420px]'
            }
        },
    };
   
</script>

<style scoped>
</style>