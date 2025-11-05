<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array as () => string[],
    required: true
  }
})

const carousel = ref()
const activeIndex = ref(0)

function onClickPrev() {
  activeIndex.value--
}
function onClickNext() {
  activeIndex.value++
}
function onSelect(index: number) {
  activeIndex.value = index
}
function select(index: number) {
  activeIndex.value = index
  carousel.value?.emblaApi?.scrollTo(index)
}
</script>

<template>
  <div class="flex-1 w-full">
    <UCarousel
      ref="carousel"
      v-slot="{ item }"
      :items="images"
      :prev="{ onClick: onClickPrev }"
      :next="{ onClick: onClickNext }"
      class="w-full max-w-3xl mx-auto"
      @select="onSelect"
    >
      <img
        :src="item"
        width="400"
        height="200"
        class="rounded-xl w-full object-cover"
        @error="(e) => (e.target.src = '/images/mavrix_properties.png')"
        alt="Property image"
      />
    </UCarousel>

    <!-- Thumbnails -->
    <div class="flex gap-2 justify-center pt-4 flex-wrap">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="w-16 h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-all"
        :class="activeIndex === index ? 'border-{#AF7554} opacity-100' : 'border-transparent opacity-60 hover:opacity-100'"
        @click="select(index)"
      >
        <img
          :src="img"
          class="object-cover w-full h-full"
          @error="(e) => (e.target.src = '/images/mavrix_properties.png')"
          alt="Thumbnail"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add smooth transitions for active thumbnails */
</style>
