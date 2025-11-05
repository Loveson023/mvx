<script setup>
import { useRoute } from 'vue-router'
import { getListingById } from '~/services/listingsService'

const route = useRoute()
const listingId = route.params.id

const { data: property, error } = await useAsyncData('property', () =>
  getListingById(listingId)
)

if (error.value) console.error('Error fetching property:', error.value)
</script>

<template>
  <div v-if="property" class="py-20">
    <h1 class="text-3xl font-semibold">{{ property.title }}</h1>
    <div v-html="property.description" class="mt-4 text-gray-300"></div>
  </div>
  <div v-else>
    <p class="text-center text-blue-400 mt-20">Property not found</p>
  </div>
</template>
