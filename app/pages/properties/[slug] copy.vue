<script setup>
import { useRoute } from 'vue-router'
import PropertyGallery from '~/components/properties/PropertyGallery.vue'
import Divider from '~/components/templates/divider.vue'
import Breadcrumbs from '~/components/templates/breadcrumbs.vue'
import { properties } from '~/data/properties.js'

const route = useRoute()

// Match property based on the slug in the URL
const property = computed(() =>
  properties.find((p) => p.slug === route.params.slug)
)
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <Divider />
    <Breadcrumbs />

    <div v-if="property">
      <h1 class="text-3xl font-bold mb-4">{{ property.title }}</h1>

      <!-- Image with fallback -->
      <!-- <img
        :src="property.images[0] || '/images/fallback.jpg'"
        @error="(e) => e.target.src = '/images/fallback.jpg'"
        class="rounded-lg w-full max-h-[500px] object-cover"
        alt="Property Image"
      /> -->
      <!-- Property Carousel -->
      <PropertyGallery :images="property.images" />

      <div class="mt-6">
        <p class="text-gray-700 leading-relaxed">{{ property.content }}</p>
      </div>

      <ul class="mt-6 flex flex-wrap gap-3">
        <li
          v-for="(amenity, i) in property.amenities"
          :key="i"
          class="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
        >
          {{ amenity }}
        </li>
      </ul>
    </div>

    <div v-else>
      <p class="text-center text-gray-500">Property not found.</p>
    </div>
  </div>
</template>
