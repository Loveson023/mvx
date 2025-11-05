<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getAllListings } from '@/services/listingsService'
import Divider from '~/components/templates/divider.vue'

const route = useRoute()
const slug = route.params.slug
const properties = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await getAllListings({ category: slug })
    properties.value = response.data || [] // Adjust if response format differs
  } catch (err) {
    error.value = 'Failed to load properties for this category.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="pt-20 pb-16 text-white max-w-7xl mx-auto px-6 lg:px-12">
    <Divider />
    <h1 class="text-3xl md:text-4xl font-light uppercase mb-10">
      {{ slug.replace('-', ' ') }}
    </h1>

    <div v-if="loading" class="text-center text-gray-400 py-20">
      Loading properties...
    </div>

    <div v-else-if="error" class="text-center text-red-400 py-20">
      {{ error }}
    </div>

    <div v-else-if="properties.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="property in properties"
        :key="property.id"
        class="bg-neutral-900 rounded-xl overflow-hidden hover:shadow-xl transition-all"
      >
        <img
          :src="property.image_path || '/placeholder.jpg'"
          :alt="property.title"
          class="h-64 w-full object-cover"
        />
        <div class="p-5">
          <h2 class="text-lg font-semibold">{{ property.title }}</h2>
          <p class="text-sm text-gray-400">{{ property.location }}</p>
          <p class="text-sm mt-2 text-gray-300">
            AED {{ property.price?.toLocaleString() }}
          </p>
        </div>
      </div>
    </div>

    <div v-else class="text-center mt-16 bg-neutral-900 rounded-2xl py-10 border border-neutral-800">
      <h2 class="text-2xl font-light text-gray-300">No properties found in this category.</h2>
    </div>
        <Divider />
  </section>
</template>
