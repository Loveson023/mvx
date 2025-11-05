<script setup lang="ts">
// import Breadcrumbs from '~/components/templates/breadcrumbs.vue';
</script>

<template>
       <section class="relative w-full h-[100vh] overflow-hidden flex items-end justify-center mavrix-hero-section">
        <img src="/images/agents/agents_banner.png" alt="" srcset="" class="absolute inset-0 w-full h-full object-cover top-center"/>

    <!-- 🖼️ Optional Dark Overlay -->
    <div class="absolute inset-0 "></div>
            <div class="relative z-10 w-full pb-8 px-6 md:px-12 lg:px-20">
  <!-- <UPageHero
  class="transition-all"
  title="REAL ESTATE AGENTS IN DUBAI"
  description="Team of real estate experts"
  /> -->
    <UPageHero orientation="vertical" class="relative overflow-hidden px-6 md:px-16 p-0">

    <!-- 🟩 Title -->
    <template #title>
      <h1 class="text-4xl uppercase font-light text-white leading-tight mavrix-title tracking-in-contract">
REAL ESTATE AGENTS IN DUBAI</h1>
    </template>

    <!-- 🟦 Description -->
    <template #description>
      <p class="text-base md:text-lg text-gray-300 mt-3 mavrix-description">
Team of real estate experts       
      </p>
    </template>
    

    <!-- 🌀 Marquee (After Headline, Title, and Description) -->


    <!-- 🖼️ Optional Image -->
    <!-- <img src="/img_1.jpg" alt="App screenshot" class="rounded shadow-2xl ring ring-white/20 md:mt-0" height="200" width="500" loading="lazy" /> -->
  </UPageHero>
    <!-- <breadcrumbs /> -->
<div class="flex justify-center mt-8">
        <NuxtLink
          to="#next-section"
          
          class="block hover:opacity-80 transition-opacity duration-300"
        >
          <img
            src="/Scroll.gif"
            alt="Scroll Down"
            class="w-[60px] md:w-[80px] object-contain"
            loading="lazy"
          />
        </NuxtLink>
      </div>
</div>
</section>
</template>
