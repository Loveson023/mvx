<script setup>
import { ref } from "vue"
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

const center = ref([25.2048, 55.2708])
const zoom = ref(11)

// Dummy properties (3 different coordinates)
const properties = ref([
  {
    id: 1,
    title: "Downtown Luxury Apartment",
    price: "AED 2,450,000",
    coords: [25.1975, 55.2744],
    image: "https://images.unsplash.com/photo-1600585154356-596af9009e82?w=400&q=80",
  },
  {
    id: 2,
    title: "Palm Jumeirah Villa",
    price: "AED 12,900,000",
    coords: [25.1105, 55.1386],
    image: "https://images.unsplash.com/photo-1613977257361-5dc23a5f9f9b?w=400&q=80",
  },
  {
    id: 3,
    title: "Dubai Marina Studio",
    price: "AED 850,000",
    coords: [25.0800, 55.1400],
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20d?w=400&q=80",
  },
  {
    id: 4,
    title: "Jumeirah Village Circle Apartment",
    price: "AED 1,150,000",
    coords: [25.0572, 55.2398],
    image: "https://images.unsplash.com/photo-1628744876487-b86a69c42d27?w=400&q=80",
  },
  {
    id: 5,
    title: "Business Bay Waterfront Condo",
    price: "AED 3,200,000",
    coords: [25.1851, 55.2722],
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?w=400&q=80",
  },
  {
    id: 6,
    title: "Dubai Hills Estate Villa",
    price: "AED 5,900,000",
    coords: [25.0943, 55.2553],
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80",
  },
  {
    id: 7,
    title: "Jumeirah Lake Towers Apartment",
    price: "AED 1,450,000",
    coords: [25.0736, 55.1468],
    image: "https://images.unsplash.com/photo-1600585154205-2de57b3a2c76?w=400&q=80",
  },
  {
    id: 8,
    title: "Al Barsha Family Villa",
    price: "AED 3,600,000",
    coords: [25.1075, 55.2003],
    image: "https://images.unsplash.com/photo-1613490493590-8b42f1a79d86?w=400&q=80",
  },
  {
    id: 9,
    title: "Damac Hills Townhouse",
    price: "AED 2,950,000",
    coords: [25.0138, 55.2566],
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?w=400&q=80",
  },
  {
    id: 10,
    title: "Arabian Ranches Villa",
    price: "AED 4,800,000",
    coords: [25.0462, 55.3081],
    image: "https://images.unsplash.com/photo-1613490493590-8b42f1a79d86?w=400&q=80",
  },
])


// Lucide pin SVG for marker
const createLucideMarker = (color = "#2563eb") =>
  L.divIcon({
    className: "lucide-marker",
    html: `
      <div class="flex items-center justify-center bg-white rounded-full border-2 shadow-md w-10 h-10"
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
  <div class="w-full h-[600px] rounded-lg overflow-hidden border border-gray-200">
    <LMap :zoom="zoom" :center="center" style="height: 100%; width: 100%">
      <!-- OpenStreetMap tiles -->
      <!-- <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      /> -->
      <!-- <LTileLayer
  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
  attribution="© OpenStreetMap, © CartoDB"
/> -->
<!-- <LTileLayer
  url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  attribution="© OpenStreetMap contributors, © Stadia Maps"
/> -->
<!-- <LTileLayer
  url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
  attribution="Tiles © Esri — Esri, DeLorme, NAVTEQ"
/> -->
<!-- <LTileLayer
  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
  attribution="© OpenStreetMap, © CartoDB"
/> -->
<LTileLayer
  url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  attribution="© OpenStreetMap, © Stadia Maps"
  class="map-golden"
/>

      <!-- Multiple property markers -->
      <LMarker
        v-for="property in properties"
        :key="property.id"
        :lat-lng="property.coords"
        :icon="createLucideMarker('#AF7554')"
      >
        <LPopup>
            <div class="w-48 flex gap-2 flex-col bg-{#000000}">
            <img
              :src="property.image"
              alt="Property Image"
              class="w-full h-28 object-cover rounded-md mb-2"
            />
          <div class="text-gray-200 font-semibold">{{ property.title }}</div>
          <div class="text-sm text-gray-200">{{ property.price }}</div>
          <div>
            <button class="button-mavrix">
                EXPLORE MORE
            </button>
          </div>
          </div>
        </LPopup>
      </LMarker>
    </LMap>
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
