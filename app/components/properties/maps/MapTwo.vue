<script setup>
import { ref, computed, onMounted } from "vue"
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import AdvancedFilters from "~/components/properties/AdvancedFilters.vue"
import { BedDouble, Bath, LandPlot } from "lucide-vue-next"
import { getListings } from "~/services/listingsService" // ✅ Your existing API service

// 🗺️ Map Settings
const center = ref([25.2048, 55.2708])
const zoom = ref(11)

// 🏡 Properties
const properties = ref([])
const loading = ref(true)
const error = ref(null)

// 🔍 Filters
const searchQuery = ref("")
const priceFilter = ref("all")
const typeFilter = ref("all")
const bedroomsFilter = ref("all")
const minPrice = ref("")
const maxPrice = ref("")

// ✅ Fetch properties from API
onMounted(async () => {
  try {
    loading.value = true
    const response = await getListings()
    // Ensure API returns array of properties
    properties.value = response?.data?.map((p) => ({
      id: p.id,
      title: p.title,
      price: p.price ? `AED ${p.price.toLocaleString()}` : "N/A",
      priceValue: p.price || 0,
      type: p.type || "N/A",
      bedrooms: p.bed?.name || 0,
      bathrooms: p.bath?.name || 0,
      area: p.area || "N/A",
      coords: [Number(p.latitude) || 25.2048, Number(p.longitude) || 55.2708],
      image: p.photos?.[0]?.full_path || "https://placehold.co/800x600",
    }))
  } catch (err) {
    console.error("Error fetching listings:", err)
    error.value = "Failed to load properties"
  } finally {
    loading.value = false
  }
})

// 🧮 Filtering logic
const filteredProperties = computed(() => {
  return properties.value.filter((p) => {
    const matchSearch = p.title?.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchType = typeFilter.value === "all" || p.type === typeFilter.value
    const matchBedrooms =
      bedroomsFilter.value === "all" || p.bedrooms == Number(bedroomsFilter.value)
    const matchPriceCategory =
      priceFilter.value === "all" ||
      (priceFilter.value === "low" && p.priceValue < 2000000) ||
      (priceFilter.value === "mid" && p.priceValue >= 2000000 && p.priceValue <= 5000000) ||
      (priceFilter.value === "high" && p.priceValue > 5000000)
    const matchMin = !minPrice.value || p.priceValue >= Number(minPrice.value)
    const matchMax = !maxPrice.value || p.priceValue <= Number(maxPrice.value)

    return matchSearch && matchType && matchBedrooms && matchPriceCategory && matchMin && matchMax
  })
})

// ♻️ Reset Filters
const resetFilters = () => {
  searchQuery.value = ""
  priceFilter.value = "all"
  typeFilter.value = "all"
  bedroomsFilter.value = "all"
  minPrice.value = ""
  maxPrice.value = ""
}

// 📍 Lucide-style marker icon
const createLucideMarker = (color = "#AF7554") =>
  L.divIcon({
    className: "lucide-marker",
    html: `
      <div class="flex items-center justify-center bg-transparent backdrop-blur-md rounded-full border-2 shadow-md w-10 h-10"
           style="border-color:${color}">
        <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none'
             stroke='${color}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'
             class='lucide lucide-map-pin'>
          <path d='M12 21c-4.28-4.28-8-8-8-12a8 8 0 0 1 16 0c0 4-3.72 7.72-8 12z'/>
          <circle cx='12' cy='9' r='3'/>
        </svg>
      </div>
    `,
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  })
</script>

<template>
  <div class="flex flex-col w-full h-[700px] overflow-hidden">

    <!-- 🧭 Top Filters -->
    <div class="flex flex-wrap items-center justify-between gap-3 border-b p-3 sticky top-0 z-10">
      <div class="flex flex-wrap gap-3">

        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by name"
          class="px-3 py-2 text-sm border text-gray-200 placeholder-gray-400"
        />

        <input
          v-model="minPrice"
          type="number"
          placeholder="Min AED"
          class="px-3 py-2 text-sm border text-gray-200 placeholder-gray-400 w-24"
        />
        <input
          v-model="maxPrice"
          type="number"
          placeholder="Max AED"
          class="px-3 py-2 text-sm border text-gray-200 placeholder-gray-400 w-24"
        />

        <select v-model="priceFilter" class="border px-3 py-2 text-sm  text-gray-200">
          <option value="all">Any Price</option>
          <option value="low">Below 2M</option>
          <option value="mid">2M - 5M</option>
          <option value="high">Above 5M</option>
        </select>

        <select v-model="typeFilter" class="border px-3 py-2 text-sm  text-gray-200">
          <option value="all">All Types</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="studio">Studio</option>
        </select>

        <select v-model="bedroomsFilter" class="border px-3 py-2 text-sm  text-gray-200">
          <option value="all">Any Beds</option>
          <option value="1">1 Bed</option>
          <option value="2">2 Beds</option>
          <option value="3">3 Beds</option>
          <option value="4">4+ Beds</option>
        </select>

        <button
          @click="resetFilters"
          class="px-4 py-2 text-sm button-mavrix text-white"
        >
          Apply Filters
        </button>
      </div>

      <div class="text-sm text-gray-400">
        <!-- Showing {{ filteredProperties.length }} / {{ properties.length }} -->
          <AdvancedFilters />
      </div>
    </div>

    <!-- 🗺️ Two-column layout -->
    <div class="flex flex-1 overflow-hidden max-md:flex-col">
      <!-- Left: Map -->
      <div class="w-1/2 h-full max-sm:w-full max-sm:hidden">
        <LMap :zoom="zoom" :center="center" style="height: 100%; width: 100%">
          <LTileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            attribution="© OpenStreetMap, © Stadia Maps"
          />
          <LMarker
            v-for="property in filteredProperties"
            :key="property.id"
            :lat-lng="property.coords"
            :icon="createLucideMarker('#AF7554')"
          >
            <LPopup>
              <div class="w-48 flex flex-col gap-2">
                <img
                  :src="property.image"
                  alt="Property Image"
                  class="w-full h-28 object-cover rounded-md"
                />
                <div class="text-gray-200 font-semibold">{{ property.title }}</div>
                <div class="text-sm text-gray-200">{{ property.price }}</div>
                <button class="button-mavrix text-white text-xs px-3 py-1">
                  EXPLORE MORE
                </button>
              </div>
            </LPopup>
          </LMarker>
        </LMap>
      </div>

      <!-- Right: Property list -->
      <div class="w-1/2 overflow-auto h-full p-4 max-sm:w-full">
        <h2 class="px-4 pt-4 text-lg font-semibold mb-3 text-gray-100">Properties</h2>
        <div class="grid grid-cols-2 gap-2 max-md:grid-cols-1">
        <div
          v-for="property in filteredProperties"
          :key="property.id"
          class="mb-3 overflow-auto border bg-dark hover:shadow-lg transition"
        >
          <img :src="property.image" alt="Property" class="w-full h-32 object-cover" />
          <div class="p-3">
            <h3 class="font-semibold text-gray-100 text-sm mb-1">{{ property.title }}</h3>
            <p class="text-xs text-gray-400 mb-2">{{ property.price }}</p>
              <p class="text-xs text-gray-400">{{ property.type }}</p>
            <div class="flex flex-col gap-2 mt-2">
              <div class="flex gap-2">
                  <div class="flex gap-4 border px-2 py-4 items-center align-middle">
                    <span class="h-4 w-4 "> <BedDouble /></span>
                    <p class="text-xs text-gray-400">{{ property.bedrooms }} Bed</p>
                  </div>
                  <div class="flex gap-4 border px-2 py-4 items-center align-middle">
                    <span class="h-4 w-4 "> <Bath /></span>
                    <p class="text-xs text-gray-400">{{ property.bathrooms }}  Bath</p>
                  </div>
                  <div class="flex gap-4 border px-2 py-4 items-center align-middle">
                    <span class="h-4 w-4 "> <LandPlot /></span>
                    <p class="text-xs text-gray-400">{{ property.area }} Sq.Ft.</p>
                  </div>
              </div>
            <button
              class="button-mavrix text-white text-xs px-3 py-1 "
            >
              View Details
            </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lucide-marker {
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.lucide-marker:hover {
  transform: scale(1.15);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}
</style>
