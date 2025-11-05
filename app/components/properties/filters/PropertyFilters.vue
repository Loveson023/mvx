<template>
  <div class="backdrop-blur-md shadow-md border border-neutral-800 rounded-xl p-4 flex flex-wrap gap-4 items-center">
    <PropertyTypeSelect v-model="filters.type" />
    <LocationSelect v-model="filters.location" />
    <BedroomsSelect v-model="filters.bedrooms" />
    <PriceRangeSlider v-model="filters.price" />
    <ApplyButton @click="applyFilters" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PropertyTypeSelect from '@/components/properties/filters/PropertyTypeSelect.vue'
import LocationSelect from '@/components/properties/filters/LocationSelect.vue'
import BedroomsSelect from '@/components/properties/filters/BedroomsSelect.vue'
import PriceRangeSlider from '@/components/properties/filters/PriceRangeSlider.vue'
import ApplyButton from '@/components/properties/filters/ApplyButton.vue'

const emit = defineEmits(['filter'])

const filters = ref({
  type: '',
  location: '',
  bedrooms: '',
  price: [0, 5000000],
})

const applyFilters = () => {
  emit('filter', { ...filters.value })
}
</script>
