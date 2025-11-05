<template>
  <section class=" mx-auto" style="margin-right: 30px;">
    <div class="space-y-8">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-center justify-center align-middle gap-4 p-4 mavrix-gradient-border bg-white shadow-sm hover:shadow-md transition-all border border-gray-100 dark:bg-[#212121] dark:border-gray-700"
      >
        <div
          class="flex items-center justify-center w-12 h-12 text-white flex-shrink-0 list-bg"
        >
          <component :is="feature.icon" class="w-6 h-6" :stroke-width="1" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600 text-sm mt-1 dark:text-gray-400">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Home, Building2, Key } from 'lucide-vue-next'

const features = [
  {
    icon: Home,
    title: 'Luxury Villas',
    description: 'Explore handpicked villas with stunning designs and modern amenities.'
  },
  {
    icon: Building2,
    title: 'Premium Apartments',
    description: 'Discover high-rise apartments with breathtaking city views in Dubai.'
  },
  {
    icon: Key,
    title: 'Trusted Agents',
    description: 'Our verified agents ensure seamless buying and renting experiences.'
  }
]
</script>

<style scoped>
/* Optional hover effect enhancement */
@media (min-width: 768px) {
  .hover\:shadow-md:hover {
    transform: translateY(-2px);
  }
}
</style>
