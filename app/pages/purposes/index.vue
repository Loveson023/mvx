<script setup>
import { ref, onMounted } from 'vue'
import { getPurposes } from '@/services/purposeService'
import Divider from '~/components/templates/divider.vue'

const purposes = ref([])
const loading = ref(true)

onMounted(async () => {
  const listings = await getPurposes()

  console.log('Fetched listings:', listings) // 👈 Debug check in console

  // Extract unique purposes (Sale, Rent, etc.)
  const uniquePurposes = [
    ...new Map(
      listings
        .filter(item => item.purpose)
        .map(item => [
          item.purpose,
          {
            name: item.purpose,
            slug: item.purpose.toLowerCase().replace(/\s+/g, '-'),
            image: item.photos?.[0]?.thumbnail_path || '/placeholder.jpg',
          },
        ])
    ).values(),
  ]

  purposes.value = uniquePurposes
  loading.value = false
})
</script>

<template>
  <section class="pt-20 pb-16 text-white max-w-7xl mx-auto px-6 lg:px-12">
        <Divider />

    <h1 class="text-3xl md:text-4xl font-light uppercase mb-10">
      Property Purposes
    </h1>

    <div v-if="loading" class="text-center text-gray-400 py-20">Loading purposes...</div>

    <div v-else class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <NuxtLink
        v-for="purpose in purposes"
        :key="purpose.slug"
        :to="`/purposes/${purpose.slug}`"
        class="bg-neutral-900 hover:bg-neutral-800 rounded-xl overflow-hidden shadow-lg transition-all"
      >
        <img
          :src="purpose.image"
          :alt="purpose.name"
          class="h-56 w-full object-cover"
        />
        <div class="p-5">
          <h2 class="text-lg font-semibold capitalize">{{ purpose.name }}</h2>
        </div>
      </NuxtLink>
    </div>
        <Divider />

  </section>
</template>
