<script setup lang="ts">
import Breadcrumbs from '~/components/templates/breadcrumbs.vue';
</script>

<template>
       <section class="relative w-full h-[100vh] overflow-hidden flex items-center justify-center mavrix-hero-section">
        <!-- <img src="/main_banner.jpeg" alt="" srcset="" class="absolute inset-0 w-full h-full object-cover top-center"/> -->

    <!-- 🖼️ Optional Dark Overlay -->
    <div class="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
            <div class="relative z-10 w-full px-6 md:px-12 lg:px-20">
  <UPageHero
  class="transition-all"
  title="OUR SERVICES"
  description="Find handpicked villas, apartments, and townhouses across Dubai’s prime communities — Downtown Dubai, Dubai Hills, Palm Jumeirah, and more."
  
  />
    <breadcrumbs />
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
