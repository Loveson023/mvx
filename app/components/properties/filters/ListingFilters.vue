<template>
  <div class="filter-shadow bg-[#212121] rounded-2xl flex flex-wrap gap-4 text-white p-4 items-center">
    <!-- Property Type -->
     <div class="grid grid-cols-5 gap-4 w-full max-sm:grid-cols-1">
    <USelectMenu
      v-model="filters.category"
      :items="filterOptions.categories"
      placeholder="Property Type"
      class="w-full"
    />

    <!-- Purpose -->
    <USelectMenu
      v-model="filters.purpose"
      :items="filterOptions.purposes"
      placeholder="Purpose"
      class="w-full"
    />

    <!-- Location -->
    <USelectMenu
      v-model="filters.location"
      :items="filterOptions.locations"
      placeholder="Location"
      class="w-full"
    />

    <!-- Bedrooms -->
    <USelectMenu
      v-model="filters.bedrooms"
      :items="filterOptions.bedrooms"
      placeholder="Bedrooms"
      class="w-full"
    />

    <!-- Price Range -->
    <div class="flex flex-col gap-2 w-full max-sm:w-full">
      <label class="text-sm text-gray-300">Price Range (AED)</label>
      <USlider
        v-model="filters.priceRange"
        :min="filterOptions.prices.min"
        :max="filterOptions.prices.max"
        step="10000"
        range
        color="amber"
        class="w-full cursor-grab"
      />
      <div class="flex justify-between text-xs text-gray-400">
        <span>{{ filters.priceRange[0].toLocaleString() }}</span>
        <span>{{ filters.priceRange[1].toLocaleString() }}</span>
      </div>
    </div>

    </div>
    <div class="flex justify-between w-full max-sm:flex-col gap-4 mt-4">
        <!-- Reset Button -->
        <button
          @click="resetFilters"
          class="w-auto button-mavrix-outline px-6 py-2 rounded-lg text-white cursor-pointer transition-all mt-2"
        >
          Reset
        </button>
    <!-- Search Button -->
    <button
      @click="searchProperties"
      class="w-auto button-mavrix px-6 py-2 rounded-lg text-white cursor-pointer transition-all mt-2"
    >

      Search
    </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getFilterOptions } from '@/services/filtersService'

const router = useRouter()

const filters = ref({
  category: '',
  purpose: '',
  location: '',
  bedrooms: '',
  priceRange: [0, 0],
})

const filterOptions = ref({
  categories: [],
  purposes: [],
  bedrooms: [],
  locations: [],
  prices: { min: 0, max: 0 },
})
function resetFilters() {
  filters.value = {
    category: '',
    purpose: '',
    location: '',
    bedrooms: '',
    priceRange: [filterOptions.value.prices.min, filterOptions.value.prices.max],
  }
}

onMounted(async () => {
  const options = await getFilterOptions()
  filterOptions.value = options
  filters.value.priceRange = [options.prices.min, options.prices.max]
})

function searchProperties() {
  const query = {
    ...filters.value,
    minPrice: filters.value.priceRange[0],
    maxPrice: filters.value.priceRange[1],
  }

  delete query.priceRange // remove slider array before query

  const queryString = new URLSearchParams(query).toString()
  router.push(`/search-results?${queryString}`)
}
</script>

<style scoped>
.filter-shadow {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}
</style>
