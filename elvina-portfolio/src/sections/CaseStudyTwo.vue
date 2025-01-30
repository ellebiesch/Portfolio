<template>
    <section class="h-auto">
        <div class="container my-32 min-h-screen">
            <!-- v-if here -->
            <div class="content-wrapper font-inter flex flex-col justify-evenly items-center gap-4">
                <div class="case-study-text flex flex-col items-center justify-center gap-5">
                    <h2 class="uppercase text-[20px] font-normal text-center"> case study 2</h2>
                    <div class="paragraph text-center lg:w-[900px]">
                        <h1 class="font-bold text-3xl pb-2">Navix Health CRM</h1>
                        <p class="text-xl font-normal pt-3 pb-7">
                            Transforming Patient Care and Streamlining Operations: A UX/UI Case Study on Redesigning the CRM Module for a Healthcare SaaS Platform
                        </p>
                        <router-link to="/case-studies" class="button text-[14px] font-normal py-2 px-4 border-2 border-black rounded-md" >Read More</router-link>
                    </div>
                </div>
                <div class="phone-image">
                    <div class="content-wrapper flex justify-center items-center my-10">
                        <!-- <img v-lazy="require('../assets/navix-crm.png')" class="lg:w-full lg:h-[547px]" alt="navix"> -->
                        <img src="../assets/navix-crm.png" class="" alt="navix">
                    </div>
                </div>
            </div>
        </div>
    </section>
  </template>
  
  <script>
  export default {
    
  };
  </script>
  
  <style scope></style>
  