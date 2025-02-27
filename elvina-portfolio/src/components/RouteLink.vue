<template>
    <router-link 
    :to="to"
    class="relative flex items-center px-5 py-0 text-xs duration-150 ease-in-out group hover:border-b-2 border-black "
    :class="{
      'bg-light-gradient bg-no-repeat bg-[length:200%_100%] border-b-2 border-b-[#000]': isActive
    }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <span 
      class="absolute inset-0 bg-light-gradient bg-no-repeat bg-[length:200%_100%] transition-all"
      :class="{
        'hidden': isActive, 
        'group-hover:animate-light-sweep': isHovered && !isActive,
        'group-hover:animate-reverse-light-sweep': !isHovered && !isActive,
        'opacity-0': !isHovered && !isActive
      }" 
    ></span>
    <p class="tracking-widest font-medium text-base text-[#000]">{{ label }}</p>
  </router-link>
  </template>
  
  <script>
  export default {
    props: {
      to: { type: String, required: true },
      label: { type: String, required: true },
      isActive: { type: Boolean, default: false },
    },
    data() {
      return {
        isHovered: false,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom animation style here if needed */
  </style>
  