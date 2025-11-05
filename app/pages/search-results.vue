<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getAllListings } from '@/services/listingsService'

const route = useRoute()
const listings = ref([])
const filteredListings = ref([])
const loading = ref(true)

async function loadResults() {
  loading.value = true
  const query = route.query

  // Fetch all listings
  const allListings = await getAllListings()

  listings.value = allListings

  // Apply filters from query
  filteredListings.value = allListings.filter((item) => {
    const matchesCategory = !query.category || item.category === query.category
    const matchesPurpose = !query.purpose || item.purpose === query.purpose
    const matchesLocation =
      !query.location || item.location?.full_path_json?.[2]?.value === query.location
    const matchesBedrooms = !query.bedrooms || item.bed?.name === query.bedrooms
    const matchesPrice =
      (!query.minPrice || item.price >= Number(query.minPrice)) &&
      (!query.maxPrice || item.price <= Number(query.maxPrice))

    return matchesCategory && matchesPurpose && matchesLocation && matchesBedrooms && matchesPrice
  })

  loading.value = false
}

onMounted(loadResults)
watch(() => route.query, loadResults)
</script>
<template>
  <section class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6 text-white">Search Results</h1>

    <div v-if="loading" class="text-center text-white">Loading...</div>

    <div v-else>
      <div v-if="filteredListings.length === 0" class="text-center text-white">
        No results found.
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="listing in filteredListings"
          :key="listing.id"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            :src="listing.images?.[0]?.url || 'https://via.placeholder.com/400x300?text=No+Image'"
            :alt="listing.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{{ listing.title }}</h2>
            <p class="text-gray-600 mb-4">{{ listing.location?.full_path || 'Unknown Location' }}</p>
            <p class="text-lg font-bold text-blue-600">${{ listing.price.toLocaleString() }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
