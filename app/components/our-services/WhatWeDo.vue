<script setup lang="ts">
// import UPageHero from '@unvue/ui/components/UPageHero.vue';
import Features from '~/components/templates/features.vue';
</script>

<template>
  <UPageHero orientation="horizontal" reverse class="relative overflow-hidden px-6 md:px-16 p-0">

    <!-- 🟨 Headline -->
    <template #headline>
      <h3 class="text-lg md:text-2xl font-semibold uppercase tracking-widest text-mavrix">
        Our Approach </h3>
    </template>

    <!-- 🟩 Title -->
    <template #title>
      <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight mavrix-title">
        What We Do </h1>
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
    <img src="/img_1.jpg" alt="App screenshot" class="rounded shadow-2xl ring ring-white/20 md:mt-0"
      height="400" width="500" loading="lazy" />
  </UPageHero>
</template>
