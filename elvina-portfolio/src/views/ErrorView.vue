<template>
  <section>
    <div>
      <div class="mt-10 flex flex-col justify-center items-center">
        <img loading="lazy" src="" class="w-[400px]" alt="oeg" />
        <div
          class="text-white text-[50px] mx-auto"
          style="
            font-family:
              Roboto Slab,
              serif;
            line-height: 0.8;
          "
        >
          Page Not Found
        </div>
        <div
          class="text-white text-lg mt-8 mx-auto"
          style="
            font-family:
              Roboto Slab,
              serif;
            line-height: 0.8;
          "
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </div>
        <div class="mt-10">
          <router-link
            to="/"
            class="px-4 py-3 text-black uppercase bg-[#FDD79F]"
            style="
              font-family:
                Roboto Slab,
                serif;
            "
          >
            Back to Home
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
