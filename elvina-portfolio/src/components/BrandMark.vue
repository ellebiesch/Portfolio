<template>
  <!-- "E" monogram: three slanted bars, middle one in the brand accent -->
  <svg
    class="brand-mark"
    viewBox="0 0 100 99"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path class="bar bar-ink" d="M14.4 0 H100 L80 28.8 H14.4 A14.4 14.4 0 0 1 14.4 0 Z" />
    <path class="bar bar-accent" d="M37.9 36.5 H86.3 A13.4 13.4 0 0 1 86.3 63.3 H12.1 Z" />
    <path class="bar bar-ink" d="M13.8 70.7 H60.3 L89.7 98.3 H13.8 A13.8 13.8 0 0 1 13.8 70.7 Z" />
  </svg>
</template>

<script>
export default {
  name: 'BrandMark',
};
</script>

<style scoped>
.brand-mark {
  display: block;
  height: 1em;
  width: auto;
}
.bar-ink {
  fill: currentColor;
}
.bar-accent {
  fill: var(--accent);
}
</style>
