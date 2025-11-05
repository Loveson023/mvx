<template>
  <div class="filter-shadow property_card rounded bg-[#212121] flex flex-col gap-4 p-4 ">
    <div class="flex flex-row max-sm:flex-col gap-4 items-center">
      <!-- Quick Filters -->
      <!-- <Category v-model="filters.type" :data="data" />
      <Locations v-model="filters.location" :data="data" />
      <Bedrooms v-model="filters.bedrooms" :data="data" />
      <PriceRange v-model="filters.price" /> -->
<Category v-model="filters.category" :items="options.categories" />
    <Locations v-model="filters.location" :items="options.locations" />
    <Bedrooms v-model="filters.bedrooms" :items="options.bedrooms" />
    <PriceRange v-model="filters.price" />

    <button
      @click="apply"
      class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
    >
      Apply Filters
    </button>
      <!-- Apply Button -->
      <!-- <ApplyButton @click="applyFilters" class="max-sm:w-full text-center" /> -->

      <!-- Advanced Filters Panel -->
    </div>
  </div>
  <div class="mt-4">
      <AllFilters :data="data" @apply="updateFiltersFromAdvanced" />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
// import ApplyButton from './ApplyButton.vue'
import Category from './Category.vue'
import Locations from './Locations.vue'
import Bedrooms from './Bedrooms.vue'
import PriceRange from './PriceRange.vue'
import AllFilters from './AllFilters.vue'

// const emit = defineEmits(['filter'])
// const props = defineProps({ data: Array })

// const filters = ref({
//   type: '',
//   location: '',
//   bedrooms: '',
//   price: [0, 5000000],
// })

// // Emit filters to parent (listings page)
// const applyFilters = () => {
//   emit('filter', { ...filters.value })
// }
const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['filter'])

const filters = ref({
  category: 'Any',
  location: 'Any',
  bedrooms: 'Any',
  price: [0, 10000000],
})

const apply = () => emit('filter', filters.value)

// Update main filters when advanced filters applied
const updateFiltersFromAdvanced = (advancedFilters) => {
  filters.value = {
    ...filters.value,
    ...advancedFilters,
  }
  applyFilters()
}
</script>
