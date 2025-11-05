<template>
    <div class="px-8 py-16">
        <Divider />
        <Breadcrumbs />
        <!-- Header -->
        <div class="px-6 py-8 text-center">
            <h1 class="text-3xl font-light uppercase text-gray-200 mb-2">Dubai Luxury Properties</h1>
            <p class="text-gray-500">Explore exclusive listings and refined investments</p>
        </div>

        <!-- Filters Bar -->

        <!-- Filters Section -->
        <div class="px-6">
            <FilterTop @filter="applyFilters" :data="listings" />
            <!-- <AllFilters :data="listings" @apply="applyFilters" /> -->
        </div>

        <!-- Listings -->
        <div v-if="pending" class="text-center text-gray-500 py-20">Loading listings...</div>
        <div v-else-if="error" class="text-center text-red-500 py-20">Failed to load listings.</div>

        <div v-else class="grid gap-8 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div v-for="property in filteredListings" :key="property.id"
                class="rounded property_card transition overflow-hidden flex flex-col">
                <div class="relative">
                    <img :src="property.photos?.[0]?.full_path || '/images/properties/mavrix.jpg'" alt="Property"
                        class="h-40 w-full object-cover hover:scale-0.95 transition" />
                    <span class="absolute top-3 right-3 property-badge text-white text-xs px-3 py-1 rounded-full">
                        {{ property.purpose }}
                    </span>
                </div>

                <div class="p-5 flex flex-col flex-1">
                    <h2 class="text-lg font-light text-gray-200 line-clamp-2">
                        {{ property.title }}
                    </h2>
                    <div class="flex gap-2 items-center py-4">
                        <MapPin color="#c99171" class="h-8 w-8" :stroke-width="1" />
                        <p class="text-gray-400 text-sm">
                            {{ property.location?.full_path }}
                        </p>
                    </div>
                    <!-- <p class="text-sm text-gray-500 mt-1">
            {{ property.location?.full_path }}
          </p> -->
                    <div class="flex gap-2 border-t border-b py-3 my-2 justify-between">
                        <div class="flex gap-2 px-2 align-middle items-center">
                            <Wallet class="h-6 w-6" :stroke-width="1" />
                            <p class="text-md font-light text-mavrix">
                                AED {{ property.price?.toLocaleString() }}
                            </p>
                        </div>
                        <div class="flex gap-2 px-2 align-middle items-center">
                            <Building2 class="h-6 w-6" :stroke-width="1" />
                            <p class="text-xs text-gray-400">{{ property.category || 'N/A' }}</p>
                        </div>

                    </div>
                    <div class="flex gap-2 py-3">
                        <div class="flex gap-2 px-2  items-center border-r border-r-gray-600">
                            <BedDouble class="h-8 w-8" :stroke-width="1" />
                            <p class="text-xs text-gray-400">{{ property.bed?.name || 'N/A' }} </p>
                        </div>
                        <div class="flex gap-2 px-2 items-center border-r border-r-gray-600">
                            <Bath class="h-8 w-8" :stroke-width="1" />
                            <p class="text-xs text-gray-400">{{ property.bath?.name || 'N/A' }} </p>
                        </div>
                        <div class="flex gap-2 px-2 items-center">
                            <LandPlot class="h-8 w-8" :stroke-width="1" />
                            <p class="text-xs text-gray-400">
                                {{ property.built_size }} Sq.Ft.
                            </p>
                        </div>
                    </div>
                    <!-- <div class="mt-2 text-gray-700 text-sm">
            🛏️ {{ property.bed?.name || 'N/A' }} | 🛁 {{ property.bath?.name || 'N/A' }}
            | 📏 {{ property.built_size }} sq.ft
          </div> -->

                    <!-- <p class="mt-3 text-lg font-bold text-mavrix">
            AED {{ property.price?.toLocaleString() }}
          </p> -->

                    <!-- <div class="border-t mt-4 pt-3 text-xs text-gray-500 space-y-1">
            <p><strong>Permit:</strong> {{ property.permit_number }}</p>
            <p><strong>Status:</strong> {{ property.completion_status }}</p>
          </div> -->

                    <!-- <div class="flex items-center gap-3 mt-4 border-t pt-3">
            <img
              :src="property.user?.thumbnail_image_path || '/agent-placeholder.jpg'"
              alt="Agent"
              class="w-10 h-10 rounded-full object-cover"
             />
             <div>
              <p class="text-gray-800 font-medium text-sm">{{ property.user?.name }}</p>
              <p class="text-xs text-gray-500">{{ property.user?.designation }}</p>
            </div>
          </div> -->

                    <div class="flex justify-between gap-4 items-center mt-4">
                        <NuxtLink :to="`/listings/${property.uuid}`"
                            class="button-mavrix w-full text-center font-light uppercase text-sm">
                            View Details →
                        </NuxtLink>
                        <a :href="`tel:${property.user?.mobile}`" class="button-mavrix-outline">
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
import { computed, ref } from 'vue'
import FilterTop from '~/components/properties/filters/FilterTop.vue'
import Breadcrumbs from '~/components/templates/breadcrumbs.vue'
import Divider from '~/components/templates/divider.vue'
// import AllFilters from '~/components/properties/filters/AllFilters.vue'


// Fetch listings from API
const { data, pending, error } = await useFetch(
    'https://elist.solz.cloud/backend/api/external/external-listings'
)
const listings = computed(() => data?.value?.data || [])

// Reactive filter state
const activeFilters = ref({
    type: '',
    location: '',
    bedrooms: '',
    price: [0, 5000000],
})

// Update filters from child component
const applyFilters = (filters: any) => {
    activeFilters.value = filters
}

// Normalize helper for “All” or “Any”
const normalize = (val: string) => {
    if (!val || val === 'All' || val === 'Any') return null
    return val
}

// Computed filtered listings
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
