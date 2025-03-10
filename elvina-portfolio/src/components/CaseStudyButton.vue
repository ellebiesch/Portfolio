<template>
    <div class="case-button flex flex-row gap-x-4 items-center">
          <router-link 
            :to="to" 
            class="case-button flex flex-row gap-x-4 items-center"
            @mouseenter="isHovered = true"
            @mouseleave="isHovered = false"
            >
                <p class="text-black font-medium lg:text-base font-gellix">{{ label }}</p>
                    <img 
                        src="@/assets/arrow-button.svg" 
                        class="min-h-[24px] w-auto transition-transform duration-300" 
                        :class="{ 'translate-x-2': isHovered }"
                        alt="arrow-right">
            </router-link>
        </div>
</template>

<script>
    export default{
        props: {
            to: { type: String, required: true },
            label: {type: String, required: true }
        },
        data(){
            return{
                isHovered : false
            }
        }
    }

    </script>

<style scoped></style>