<template>
  <div class="bg-white shadow-md p-4 rounded-xl mb-6">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <select v-model="filters.category" class="border rounded-lg p-2">
        <option value="">All Categories</option>
        <option v-for="cat in options.categories" :key="cat.id" :value="cat.name">
          {{ cat.name }}
        </option>
      </select>

      <select v-model="filters.bedrooms" class="border rounded-lg p-2">
        <option value="">Any Beds</option>
        <option v-for="bed in options.beds" :key="bed.id" :value="bed.name">
          {{ bed.name }}
        </option>
      </select>

      <select v-model="filters.baths" class="border rounded-lg p-2">
        <option value="">Any Baths</option>
        <option v-for="bath in options.baths" :key="bath.id" :value="bath.name">
          {{ bath.name }}
        </option>
      </select>
    </div>

    <div class="mt-4 text-right">
      <button
        @click="$emit('apply-filters', filters)"
        class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
      >
        Apply Filters
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getFilterOptions } from '~/services/listingsService'

const filters = ref({
  category: '',
  bedrooms: '',
  baths: ''
})

const options = ref({
  categories: [],
  beds: [],
  baths: []
})

onMounted(async () => {
  const data = await getFilterOptions()
  options.value = data
})
</script>
