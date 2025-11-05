<script setup lang="ts">
const links = ref([
  {
    label: 'Explore Mavrix',
    to: '/about',
    // icon: 'i-lucide-square-play',
    class: 'button-mavrix',
  },
  {
    label: 'Discover Dubai Living',
    to: '/properties',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right',
    class: 'button-mavrix-outline text-white'
  }
])

</script>

<template>
       <section class="relative w-full h-[100vh] overflow-hidden flex items-end pb-8 justify-center mavrix-hero-section snap-y snap-mandatory overflow-y-scroll">
        <!-- <img src="/main_banner.jpeg" alt="" srcset="" class="absolute inset-0 w-full h-full object-cover top-center img-parallax"/> -->
<!-- Background Video -->
      <!-- <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://videocdn.cdnpk.net/videos/58943169-0866-56aa-b88e-f96badb191a0/horizontal/previews/watermarked/large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> -->
    <!-- 🖼️ Optional Dark Overlay -->
    <div class="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
            <div class="relative z-10 w-full px-6 md:px-12 lg:px-20">
  <!-- <UPageHero
  class="transition-all tracking-in-contract"
  title="Discover Dubai’s Most Prestigious Properties"
  description="Find handpicked villas, apartments, and townhouses across Dubai’s prime communities — Downtown Dubai, Dubai Hills, Palm Jumeirah, and more."
    :links="links"
  /> -->
  <UPageHero orientation="vertical" class="relative overflow-hidden px-6 md:px-16 p-0">

    <!-- 🟩 Title -->
    <template #title>
      <h1 class="text-4xl uppercase font-light text-white leading-tight mavrix-title tracking-in-contract">
       Discover Dubai’s Most Prestigious Properties
      </h1>
    </template>

    <!-- 🟦 Description -->
    <template #description>
      <p class="text-base md:text-lg text-gray-300 mt-3 mavrix-description">
        At Mavrix Luxury Properties, we don’t just sell homes — we curate lifestyles.
       
      </p>
    </template>
    

    <!-- 🌀 Marquee (After Headline, Title, and Description) -->


    <!-- 🖼️ Optional Image -->
    <!-- <img src="/img_1.jpg" alt="App screenshot" class="rounded shadow-2xl ring ring-white/20 md:mt-0" height="200" width="500" loading="lazy" /> -->
  </UPageHero>
  <div class="flex gap-4 mt-8 items-center justify-center max-sm:flex-col">
    <NuxtLink to="/about" class="button-mavrix text-white text-center">
      EXPLORE MAVRIX
    </NuxtLink>
    <NuxtLink to="/properties"  class="button-mavrix-outline text-white text-center">
      DISCOVER DUBAI LIVING
    </NuxtLink>
  </div>
  <!-- 🎞️ GIF Image Below Buttons -->
     <!-- 🎞️ Scroll GIF -->
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
