<template>
  <section class="bg-[#212121]px-8 py-16">
    <Divider />
    <Breadcrumbs />
    <div class="container mx-auto px-4">
      <div class="px-6 py-8 text-center">
        <h1 class="text-3xl font-light uppercase text-gray-200 mb-2">
          Dubai Luxury Properties
        </h1>
        <p class="text-gray-500">Explore exclusive listings and refined investments</p>
      </div>

      <!-- Filter bar -->
      <!-- <FilterTop @filter="applyFilters" /> -->
      <ListingFilters />
      <!-- Loader -->
      <div v-if="loading" class="text-center text-gray-500 mt-8">
        <!-- Loading listings... -->
        <span class="inline-flex items-center gap-2">
          <img src="/loader.svg" alt="" class="h-12 w-12 animate-spin" />
        </span>
      </div>

      <!-- Property cards -->
      <div v-else class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-6">
        <div v-for="property in listings" :key="property.id"
          class="bg-[#212121] rounded-2xl property_card shadow-md hover:shadow-xl transition overflow-hidden group">
          <NuxtLink :to="`/${createSlug(property)}`">
            <!-- <img
              :src="property.photos?.[0]?.full_path || 'https://placehold.co/600x400'"
              alt="Property"
              class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            /> -->
            <div class="relative">
              <img :src="property.photos?.[0]?.full_path || '/images/properties/mavrix.jpg'" alt="Property"
                class="h-40 w-full object-cover transform group-hover:scale-105 transition-transform duration-500 cursor-pointer" />
              <span class="absolute top-3 right-3 property-badge text-white text-xs px-3 py-1 rounded-full">
                {{ property.purpose }}
              </span>
            </div>
          </NuxtLink>
          <div class="p-5 flex flex-col flex-1">
            <h2 class="text-lg font-light text-gray-200 line-clamp-2">
              {{ property.title }}
            </h2>

            <div class="flex gap-2 items-center py-4">
              <MapPin color="#c99171" class="h-8 w-8" :stroke-width="1" />
              <p class="text-gray-400 text-sm">{{ property.location?.full_path }}</p>
            </div>

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
                <p class="text-xs text-gray-400">{{ property.built_size }} Sq.Ft.</p>
              </div>
            </div>

            <div class="flex justify-between gap-4 items-center mt-4">
              <NuxtLink :to="`/${createSlug(property)}`"
                class="button-mavrix w-full text-center font-light uppercase text-sm">
                View Details →
              </NuxtLink>
              <a :href="`tel:${property.user?.mobile}`" class="button-mavrix-outline">
                <PhoneCall color="#c99171" class="h-4 w-4" :stroke-width="1" />
              </a>
            </div>
          </div>

          <!-- <div class="p-5">
            <h2 class="text-lg font-semibold text-gray-200 mb-2 line-clamp-1">
              {{ property.title }}
            </h2>

            <p class="text-sm text-gray-500 mb-2">
              {{ property.location?.full_path || 'Location not specified' }}
            </p>

            <div class="flex items-center justify-between">
              <p class="text-lg font-bold text-mavrix">
                AED {{ property.price?.toLocaleString() }}
              </p>
              <p class="text-sm text-gray-400">Ref: {{ property.ref_number }}</p>
            </div>

            <div class="flex items-center gap-4 mt-3 text-gray-600">
              <span><i class="fa fa-bed mr-1"></i>{{ property.bed?.name || '-' }} Bed</span>
              <span><i class="fa fa-bath mr-1"></i>{{ property.bath?.name || '-' }} Bath</span>
            </div>

            <NuxtLink
              :to="`/${createSlug(property)}`"
              class="mt-4 inline-block w-full text-center py-2 button-mavrix text-white rounded-lg font-medium transition"
            >
              View Details
            </NuxtLink>
          </div> -->
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center mt-10 gap-2">
        <button v-for="pageNum in totalPages" :key="pageNum" @click="changePage(pageNum)" :class="[
          'px-4 py-2 rounded-lg border',
          pageNum === page
            ? 'button-mavrix text-white'
            : 'bg-white text-gray-700 hover:bg-gray-200'
        ]">
          {{ pageNum }}
        </button>
      </div>
    </div>
    <Divider />

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Breadcrumbs from '~/components/templates/breadcrumbs.vue'
import Divider from '~/components/templates/divider.vue'
// import FilterTop from '~/components/properties/filters/FilterTop.vue'
import { getListings } from '~/services/listingsService'
import { createSlug } from '~/utils/slugify'
import {
  MapPin,
  BedDouble,
  Bath,
  LandPlot,
  PhoneCall,
  Wallet,
  Building2
} from 'lucide-vue-next'
import ListingFilters from '~/components/properties/filters/ListingFilters.vue'
// 🧩 State
const listings = ref([])
const loading = ref(false)
const page = ref(1)
const totalPages = ref(1)
const activeFilters = ref({
  type: '',
  location: '',
  bedrooms: '',
  price: [0, 10000000],
})

// 🧠 Fetch listings with filters + pagination
const fetchListings = async () => {
  loading.value = true
  try {
    const res = await getListings({
      page: page.value,
      itemsPerPage: 9,
      type: activeFilters.value.type,
      location: activeFilters.value.location,
      bedrooms: activeFilters.value.bedrooms,
      minPrice: activeFilters.value.price[0],
      maxPrice: activeFilters.value.price[1],
    })
    listings.value = res.data || []
    totalPages.value = Math.ceil((res.totalRecords || 0) / 9)
  } catch (err) {
    console.error('Error fetching listings:', err)
  } finally {
    loading.value = false
  }
}

// 🔹 Apply filters
const applyFilters = (filters) => {
  activeFilters.value = filters
  page.value = 1 // reset to first page
  fetchListings()
}

// 🔹 Change page
const changePage = (num) => {
  page.value = num
  fetchListings()
}

// 🚀 Initial load
onMounted(() => {
  fetchListings()
})
</script>
