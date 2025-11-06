<template>
  <section class="bg-[#fafafa] font-gellix w-full flex flex-row items-center justify-around py-20">
    <!-- Title -->
    <div v-motion-slide-visible-once-left class="mb-12">
      <h1 class="font-semibold text-[36px] md:text-[40px] text-center text-black">
        Testimonials
      </h1>
    </div>

    <!-- Testimonial Card -->
    <div
      v-motion-slide-visible-once-right
      class="max-w-[720px] flex flex-col items-start justify-start px-6"
    >
      <!-- Quote -->
      <p class="italic text-[18px] font-bold md:text-[20px] leading-relaxed text-black/80 mb-10 text-left">
        “ Elvina brought creativity, thoughtfulness, and a strong user-centric mindset to every
        project. Her contributions made a meaningful impact on our product experience and internal
        workflows. “
      </p>

      <!-- Author Info -->
      <div class="flex flex-row justify-start items-center gap-2">
        <img
          v-lazy="testimonialUser"
          alt="testimonial user"
          class="rounded-full w-[72px] h-[72px] object-cover"
        />
        <div class="flex flex-col justify-start gap-y-3 pl-3">
            <p class="font-semibold text-lg text-black">JUSTIN LU</p>
          <p class="text-[14px] text-gray-500 tracking-wide uppercase">
            CEO AND CO-FOUNDER, TRUCKPEDIA
          </p>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const testimonialUser = new URL('../assets/testimonial-user.png', import.meta.url).href;
    return { testimonialUser };
  }
};
</script>

<style scoped>
p {
  max-width: 700px;
}
</style>
