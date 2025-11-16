<template>
    <div class="">
          <router-link
            class="case-button flex flex-row gap-x-4 items-center" 
            :to="`${to}/${caseStudy}`"
            @mouseenter="isHovered = true"
            @mouseleave="isHovered = false"
            >
                <p class="text-black font-medium lg:text-base font-sans xs:text-[14px]">{{ label }}</p>
                    <img 
                        src="@/assets/arrow-button.svg" 
                        class="min-h-[24px] w-auto transition-transform duration-300" 
                        :class="{ 'translate-x-2': isHovered }"
                        alt="arrow-right">
            </router-link>
            <!-- <p class="text-black">{{ caseStudy }}</p> -->
        </div>
</template>

<script>
    export default{
        props: {
            to: { type: String, required: true },
            label: {type: String, required: true },
            caseStudy: { type: String, default: "" }
        },
        data(){
            return{
                isHovered : false
            }
        }
    }

    </script>

<style scoped></style>