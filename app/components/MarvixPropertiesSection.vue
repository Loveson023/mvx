<script setup lang="ts">
// Smooth scroll to next section

</script>

<template>
  <UPageHero orientation="horizontal"  reverse class="relative overflow-hidden px-6 md:px-16 p-0">

    <!-- 🟨 Headline -->
    <template #headline>
      <h3 class="uppercase mavrix-title text-mavrix">
        mavrix Properties
      </h3>
    </template>

    <!-- 🟩 Title -->
    <template #title>
      <h2 class="text-3xl uppercase font-light text-white leading-tight mavrix-title tracking-in-contract">
Handpicked. Iconic. Unforgettable.
      </h2>
    </template>

    <!-- 🟦 Description -->
    <template #description>
      <p class="text-base md:text-lg text-gray-300 mt-3 mavrix-description">
        Explore Dubai’s finest selection of luxury properties curated by Mavrix — from ultra-modern penthouses with skyline views to serene villas in the city’s most sought-after communities.

Every home we represent is a statement of design, comfort, and distinction — tailored for those who appreciate excellence in every detail.

      </p>
      
    </template>

    <!-- 🌀 Marquee (After Headline, Title, and Description) -->


    <!-- 🖼️ Optional Image -->
    <img src="/img_1.jpg" alt="App screenshot" class="rounded shadow-2xl ring ring-white/20 md:mt-0" height="200" width="500" loading="lazy" />
  </UPageHero>
</template>

