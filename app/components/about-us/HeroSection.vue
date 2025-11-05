<script setup lang="ts">
import HeroFilters from '~/components/templates/hero-filters.vue';
const links = ref([
  {
    label: 'Get started',
    to: '/docs/getting-started',
    icon: 'i-lucide-square-play',
    class: 'button-mavrix',
  },
  {
    label: 'Learn more',
    to: '/docs/getting-started/theme/design-system',
    // color: 'neutral',
    class: 'bg-mavrix-900 button-mavrix-outline text-white',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <!-- Page Hero -->
   <section class="relative w-full h-[100vh] overflow-hidden flex items-center justify-center mavrix-hero-section">
    <!-- 🎥 Background Video -->
    <!-- <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="../../assets/videos/Richkey.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video> -->
    <img src="/main_banner.jpeg" alt="" srcset="" class="absolute inset-0 w-full h-full object-cover top-center"/>

    <!-- 🖼️ Optional Dark Overlay -->
    <div class="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>

    <!-- 🌟 Page Hero Content -->
    <div class="relative z-10 w-full px-6 md:px-12 lg:px-20">
  <UPageHero orientation="horizontal" :links="links">
  <!-- Custom Headline -->
  <template #headline>
    <h3 class="text-lg md:text-2xl lato-thin text-mavrix uppercase tracking-wider">
      LET'S FIND YOUR
    </h3>
  </template>

  <!-- Custom Title -->
  <template #title>
    <h1 class="text-4xl md:text-6xl lato-thin text-light mavrix-title">
      LUXURY PROPERTY IN DUBAI
    </h1>
  </template>

  <!-- Custom Description -->
  <template #description>
    <p class="text-base md:text-lg text-light mavrix-description max-w-2xl">
      Welcome to <span class="font-semibold text-mavrix">mavrix Properties</span>, your ultimate destination for finding the most exclusive luxury properties in Dubai.
    </p>
  </template>

 <!-- 🎥 Background Video -->
    <!-- <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="../../assets/videos/mavrix.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video> -->
    <HeroFilters />
</UPageHero>
    </div>
  </section>

</template>
