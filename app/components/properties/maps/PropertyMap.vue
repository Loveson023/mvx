<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- 🗺 Map (Left side) -->
    <div
      id="property-map"
      class="h-[400px] lg:h-[calc(100vh-120px)] rounded-xl overflow-hidden sticky top-24 z-0"
    ></div>

    <!-- 🏠 Properties (Right side) -->
    <div
      class="space-y-6 overflow-y-auto h-[400px] lg:h-[calc(100vh-120px)] pr-2 custom-scrollbar"
    >
      <div
        v-for="property in listings"
        :key="property.id"
        class="bg-neutral-900 text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
        @mouseenter="highlightMarker(property.id)"
        @mouseleave="resetMarker(property.id)"
      >
        <img
          :src="property.photos?.[0]?.thumbnail_path || '/placeholder.jpg'"
          :alt="property.title"
          class="h-56 w-full object-cover"
        />
        <div class="p-4">
          <h2 class="text-lg font-semibold truncate">{{ property.title }}</h2>
          <p class="text-sm text-gray-400 mt-1">
            {{ property.location?.full_path_json?.[2]?.value || 'Dubai' }}
          </p>
          <p class="text-sm mt-2 text-amber-400 font-semibold">
            AED {{ property.price?.toLocaleString() }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { ref, onMounted } from 'vue'
import { getCoordinatedListings } from '@/services/listingsService'

const listings = ref([])
const map = ref(null)
const markers = ref([])

// Custom Mavrix SVG marker
const customIcon = L.icon({
  iconUrl: '/Mavrix.svg', // Make sure it's in your /public folder
  iconSize: [40, 40], // adjust as needed
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
})

onMounted(async () => {
  listings.value = await getCoordinatedListings()

  // Initialize map
  map.value = L.map('property-map', {
    center: [25.2048, 55.2708],
    zoom: 10,
  })

  // Add tile layer
  L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    attribution: '© Mavrix Luxury Properties',
  }).addTo(map.value)

  // Add markers
  const bounds = L.latLngBounds([])

  listings.value.forEach((property) => {
    if (!property.latitude || !property.longitude) return

    const popupHTML = `
      <div style="max-width:200px">
        <img src="${property.photos?.[0]?.thumbnail_path || '/placeholder.jpg'}" 
          class="w-full h-24 object-cover rounded mb-2" />
        <strong>${property.title || 'Property'}</strong>
        <p style="font-size:12px;color:gray;">AED ${property.price?.toLocaleString() || 'N/A'}</p>
      </div>
    `

    const marker = L.marker([property.latitude, property.longitude], { icon: customIcon })
      .addTo(map.value)
      .bindPopup(popupHTML)

    markers.value.push({ id: property.id, marker })
    bounds.extend([property.latitude, property.longitude])
  })

  if (bounds.isValid()) map.value.fitBounds(bounds, { padding: [50, 50] })
})

// Highlight marker when hovering a property
function highlightMarker(id) {
  const m = markers.value.find((m) => m.id === id)
  if (m) m.marker.setZIndexOffset(1000)
}

// Reset marker highlight
function resetMarker(id) {
  const m = markers.value.find((m) => m.id === id)
  if (m) m.marker.setZIndexOffset(0)
}
</script>

<style scoped>
#property-map {
  z-index: 0;
}

/* Optional: custom scrollbar for property list */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #888;
}
</style>
