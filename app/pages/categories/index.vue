<script setup>
import { ref, onMounted } from 'vue'
import { getCategories } from '@/services/categoryService'
import Divider from '~/components/templates/divider.vue'

const categories = ref([])
const loading = ref(true)

onMounted(async () => {
  const listings = await getCategories()

  // Extract unique categories
  const uniqueCategories = [
    ...new Map(
      listings
        .filter(item => item.category)
        .map(item => [
          item.category,
          {
            name: item.category,
            slug: item.category.toLowerCase().replace(/\s+/g, '-'),
            image: item.photos?.[0]?.thumbnail_path || '/placeholder.jpg',
          }
        ])
    ).values()
  ]

  categories.value = uniqueCategories
  loading.value = false
})
</script>

<template>
  <section class="pt-20 pb-16 text-white max-w-7xl mx-auto px-6 lg:px-12">
    <Divider />
    <h1 class="text-3xl md:text-4xl font-light uppercase mb-10">Property Categories</h1>

    <div v-if="loading" class="text-center text-gray-400 py-20">Loading categories...</div>

    <div v-else class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <NuxtLink
        v-for="category in categories"
        :key="category.slug"
        :to="`/categories/${category.slug}`"
        class="bg-neutral-900 hover:bg-neutral-800 rounded-xl overflow-hidden shadow-lg transition-all"
      >
        <img
          :src="category.image"
          :alt="category.name"
          class="h-56 w-full object-cover"
        />
        <div class="p-5">
          <h2 class="text-lg font-semibold capitalize">{{ category.name }}</h2>
        </div>
      </NuxtLink>
    </div>
    <Divider />
  </section>
</template>
