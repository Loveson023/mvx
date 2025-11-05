<script setup lang="ts">
// import UPageHero from '@unvue/ui/components/UPageHero.vue';
import Features from '~/components/templates/features.vue';
</script>

<template>
  <UPageHero orientation="horizontal" class="relative overflow-hidden px-6 md:px-16 p-0 sec-top">
    <!-- 🟨 Headline -->
    <template #headline>
      <h1 class="text-custom-two text-9xl text-white">
        2
      </h1>
      <h3 class="text-lg md:text-2xl font-light uppercase tracking-widest text-mavrix">
        Our philosophy </h3>
    </template>

    <!-- 🟩 Title -->
    <template #title>
      <h1 class="text-3xl md:text-4xl font-light tracking-wider">
        WHAT WE DO </h1>
    </template>

    <!-- 🟦 Description -->
    <template #description>
      <!-- <p class="text-base md:text-lg text-gray-300 max-w-2xl mt-3 mavrix-description">
        Welcome to Mavrix Properties, Dubai’s trusted name in luxury and investment real estate. We help you find more
        than just a home — we help you discover your place in one of the world’s most vibrant cities. Whether you’re
        buying, selling, or investing, our team is committed to guiding you with integrity, insight, and innovation.
      </p> -->
      <Features />
      
    </template>

    <!-- 🌀 Marquee (After Headline, Title, and Description) -->


    <!-- 🖼️ Optional Image -->
    <img src="/img_1.jpg" alt="App screenshot" class="services-image-two" loading="lazy" >
  </UPageHero>
</template>
