<template>
  <section class="relative bg-black text-white py-24 overflow-hidden">
    <!-- Background overlay -->
    <div
      class="absolute inset-0 bg-cover bg-center-no-repeat opacity-30 parallax-bg"
      :style="{ backgroundImage: `url('../../img_1.jpg')` }"
    ></div>

    <div class="relative container mx-auto text-center px-6">
      <h2 class="text-3xl md:text-4xl font-light tracking-wider mb-16">
        IN NUMBERS
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 bg-black/40  mavrix-gradient-border border-gray-600 py-12 px-6 md:px-10 rounded-xl backdrop-blur-sm">
        <div
          v-for="(item, index) in counters"
          :key="index"
          class="flex flex-col items-center justify-center"
        >
          <h3 class="text-4xl md:text-5xl font-light mb-2">
            {{ displayValue(item.value, index) }}+
          </h3>
          <p class="text-sm tracking-widest uppercase text-gray-300">
            {{ item.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const counters = ref([
  { value: 30, label: 'Languages' },
  { value: 700, label: 'Specialists' },
  { value: 7000, label: 'Offers in the Database' },
  { value: 14000, label: 'Number of Deals' }
])

// Animated counter logic
const currentValues = ref([0, 0, 0, 0])

const animateCounter = (index, endValue) => {
  let start = 0
  const duration = 2000
  const increment = endValue / (duration / 16)

  const counter = () => {
    start += increment
    if (start < endValue) {
      currentValues.value[index] = Math.floor(start)
      requestAnimationFrame(counter)
    } else {
      currentValues.value[index] = endValue
    }
  }
  counter()
}

onMounted(() => {
  counters.value.forEach((item, index) => {
    animateCounter(index, item.value)
  })
})

const displayValue = (value, index) => currentValues.value[index]
</script>

<style scoped>
section {
  position: relative;
  z-index: 10;
}

.container {
  max-width: 1200px;
}
.parallax-bg {
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
</style>
