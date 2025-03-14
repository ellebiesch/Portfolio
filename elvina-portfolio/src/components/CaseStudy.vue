<template>
    <div class="case-study-container xl:mx-[100px] md:py-[140px] xs:py-[70px]">
        <div class="case-study-wrapper flex md:flex-row xs:flex-col flex-wrap xl:justify-evenly items-center xs:gap-y-8 md:gap-x-10 border-b-2 border-gray-300 xl:pb-[170px] md:pb-[120px]">
            <div 
                v-motion-slide-visible-once-left
                class="image-cont bg-[#F3F4F5] border-0 rounded-lg xs:pt-[50px]" 
                :class="containerClasses">
                <img :src="imageSource" :class="imageClasses" alt="phone ui">
            </div>
            <div class="case-study-desc font-gellix">
            <p 
                v-motion-slide-visible-once-right
                class="case-label font-semibold xl:text-[32px] lg:max-w-[500px] leading-[1.2] xs:text-[24px] lg:text-[28px] text-left"
                :class="textClasses"> {{ label }}
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
                ? 'xs:px-[60px] sm:px-[70px] sm:pt-[70px] md:px-[50px] md:pt-[50px] xl:px-[100px] xl:pt-[100px] ' //mobile
                : 'xs:pl-[50px] sm:pl-[60px] sm:pt-[90px] '; //web
            },
            imageClasses() {
                return this.type === 'mobile'
                    ? 'h-auto xs:max-w-[200px] sm:max-w-[260px] md:max-w-[170px]  lg:max-w-[200px] xl:max-w-[250px] ' //mobile
                    : 'h-auto xs:max-w-[270px] sm:max-w-[420px]  md:max-w-[220px] lg:max-w-[300px] xl:max-w-[420px] ' //web
            },
            textClasses(){
                return this.type === 'mobile'
                    ? 'md:max-w-[380px] ' //mobile
                    : 'md:max-w-[340px] xl:max-w-auto' //web
            }
        },
    };
   
</script>

<style scoped>
</style>