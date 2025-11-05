<template>
  <div class="relative w-full h-screen overflow-hidden">
    <Swiper
      :modules="[Autoplay, EffectFade]"
      :autoplay="{ delay: 6000, disableOnInteraction: false }"
      :effect="'fade'"
      :speed="2000"
      :loop="true"
      class="h-full w-full"
    >
      <SwiperSlide v-for="(image, i) in images" :key="i">
        <div
          class="keenburn absolute inset-0 bg-center bg-cover"
          :style="{ backgroundImage: `url(${image})` }"
        ></div>
      </SwiperSlide>
    </Swiper>

    <!-- Overlay text example -->
    <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 bg-black/30">
      <h1 class="text-5xl font-light mb-4">Discover Dubai Luxury</h1>
      <p class="text-gray-300 max-w-xl mx-auto">
        Curated villas, penthouses, and exclusive investments — only at Mavrix.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";

const images = ["/main_banner.jpeg", "/b1.jpg", "/b2.jpg"];
</script>

<style scoped>
.swiper {
  width: 100% !important;
  height: 100% !important;
}
.keenburn {
  animation: kenburns 14s ease-in-out infinite;
}

@keyframes kenburns {
  0% {
    transform: scale(1) translate(0, 0);
  }
  50% {
    transform: scale(1.1) translate(2%, 2%);
  }
  100% {
    transform: scale(1) translate(0, 0);
  }
}
</style>
