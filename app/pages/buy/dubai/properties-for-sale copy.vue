<template>
  <div class="px-8 py-16">
    <Divider />
    <Breadcrumbs />

    <!-- Header -->
    <div class="px-6 py-8 text-center">
      <h1 class="text-3xl font-light uppercase text-gray-200 mb-2">
        Dubai Luxury Properties
      </h1>
      <p class="text-gray-500">Explore exclusive listings and refined investments</p>
    </div>

    <!-- Filters Section -->
    <div class="px-6">
      <FilterTop @filter="applyFilters" :data="listings" />
    </div>

    <!-- Listings -->
    <div v-if="loading" class="text-center text-gray-500 py-20">
      Loading listings...
    </div>
    <div v-else-if="error" class="text-center text-red-500 py-20">
      Failed to load listings.
    </div>

    <div v-else class="grid gap-8 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div
        v-for="property in filteredListings"
        :key="property.id"
        class="rounded property_card transition overflow-hidden flex flex-col"
      >
        <div class="relative">
          <img
            :src="property.photos?.[0]?.full_path || '/images/properties/mavrix.jpg'"
            alt="Property"
            class="h-40 w-full object-cover transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
          />
          <span
            class="absolute top-3 right-3 property-badge text-white text-xs px-3 py-1 rounded-full"
          >
            {{ property.purpose }}
          </span>
        </div>

        <div class="p-5 flex flex-col flex-1">
          <h2 class="text-lg font-light text-gray-200 line-clamp-2">
            {{ property.title }}
          </h2>

          <div class="flex gap-2 items-center py-4">
            <MapPin color="#c99171" class="h-8 w-8" :stroke-width="1" />
            <p class="text-gray-400 text-sm">{{ property.location?.full_path }}</p>
          </div>

          <div
            class="flex gap-2 border-t border-b py-3 my-2 justify-between"
          >
            <div class="flex gap-2 px-2 align-middle items-center">
              <Wallet class="h-6 w-6" :stroke-width="1" />
              <p class="text-md font-light text-mavrix">
                AED {{ property.price?.toLocaleString() }}
              </p>
            </div>
            <div class="flex gap-2 px-2 align-middle items-center">
              <Building2 class="h-6 w-6" :stroke-width="1" />
              <p class="text-xs text-gray-400">
                {{ property.category || 'N/A' }}
              </p>
            </div>
          </div>

          <div class="flex gap-2 py-3">
            <div class="flex gap-2 px-2 items-center border-r border-r-gray-600">
              <BedDouble class="h-8 w-8" :stroke-width="1" />
              <p class="text-xs text-gray-400">{{ property.bed?.name || 'N/A' }}</p>
            </div>
            <div class="flex gap-2 px-2 items-center border-r border-r-gray-600">
              <Bath class="h-8 w-8" :stroke-width="1" />
              <p class="text-xs text-gray-400">{{ property.bath?.name || 'N/A' }}</p>
            </div>
            <div class="flex gap-2 px-2 items-center">
              <LandPlot class="h-8 w-8" :stroke-width="1" />
              <p class="text-xs text-gray-400">
                {{ property.built_size }} Sq.Ft.
              </p>
            </div>
          </div>

          <div class="flex justify-between gap-4 items-center mt-4">
            <NuxtLink
              :to="`/listings/${property.uuid}`"
              class="button-mavrix w-full text-center font-light uppercase text-sm"
            >
              View Details →
            </NuxtLink>
            <a
              :href="`tel:${property.user?.mobile}`"
              class="button-mavrix-outline"
            >
              <PhoneCall color="#c99171" class="h-4 w-4" :stroke-width="1" />
            </a>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { MapPin, BedDouble, Bath, LandPlot, PhoneCall, Wallet, Building2 } from 'lucide-vue-next'
import { ref, computed, onMounted } from 'vue'
import { fetchListings } from '@/services/listingsService.js'

import FilterTop from '~/components/properties/filters/FilterTop.vue'
import Breadcrumbs from '~/components/templates/breadcrumbs.vue'
import Divider from '~/components/templates/divider.vue'

const listings = ref([])
const loading = ref(true)
const error = ref(null)
const listingsCount = ref(0)

const activeFilters = ref({
  type: '',
  location: '',
  bedrooms: '',
  price: [0, 5000000],
})

// ✅ Initial Fetch
onMounted(async () => {
  try {
    const res = await fetchListings({ page: 1, itemsPerPage: 20 })
    listings.value = res.data
    listingsCount.value = res.meta?.total || res.data?.length || 0
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
})

// ✅ Apply filters from child component
const applyFilters = async (filters: any) => {
  activeFilters.value = filters
  loading.value = true
  try {
    const res = await fetchListings({
      type: filters.type,
      location: filters.location,
      bedrooms: filters.bedrooms,
      minPrice: filters.price[0],
      maxPrice: filters.price[1],
    })
    listings.value = res.data
    listingsCount.value = res.meta?.total || res.data?.length || 0
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
}

// ✅ Helper for “All” or “Any”
const normalize = (val: string) => (!val || val === 'All' || val === 'Any' ? null : val)

// ✅ Computed filtered list
const filteredListings = computed(() => {
  const type = normalize(activeFilters.value.type)
  const location = normalize(activeFilters.value.location)
  const bedrooms = normalize(activeFilters.value.bedrooms)
  const price = activeFilters.value.price || [0, 10000000]

  return listings.value.filter(item => {
    const matchesType = !type || item.category === type
    const matchesLocation = !location || item.location?.full_path === location
    const matchesBeds = !bedrooms || item.bed?.name === bedrooms
    const matchesPrice = item.price >= price[0] && item.price <= price[1]
    return matchesType && matchesLocation && matchesBeds && matchesPrice
  })
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
