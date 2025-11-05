<script setup>
import { useRoute } from 'vue-router'
import PropertyGallery from '~/components/properties/PropertyGallery.vue'
import Divider from '~/components/templates/divider.vue'
import Breadcrumbs from '~/components/templates/breadcrumbs.vue'
import { properties } from '~/data/properties.js'
import { MapPinHouse, Dumbbell, Shield, Waves, Building2, MessageCircle, Mail} from 'lucide-vue-next'

const route = useRoute()

// Find property by slug
const property = computed(() => properties.find(p => p.slug === route.params.slug))
const featureIcons = {
  "Shared gym": Dumbbell,
  "Security": Shield,
  "Shared swimming pool": Waves,
  "Balcony": Building2,
}
</script>

<template>
  <div class="container mx-auto px-4 py-10">
    <Divider />
    <div class="flex items-start">
      <Breadcrumbs />
    </div>

    <div v-if="property" class="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6">
      <!-- LEFT SIDE: Property Content -->
      <div class="lg:col-span-2">
        <!-- Gallery -->
        <PropertyGallery :images="property.images" />

        <!-- Title + Info -->
        <div class="mt-6 border-b pb-4">
          <h1 class="text-3xl font-extralight my-4">{{ property.title }}</h1>
          <div class="flex flex-row gap-2 my-4">
            <MapPinHouse />
            <p class="text-gray-200">
              {{ property.location }}
            </p>
          </div>
        </div>

        <!-- Quick Info Boxes -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div class="border p-4 text-center">
            <p class="text-sm text-gray-500">Price</p>
            <p class="text-lg font-semibold">{{ property.currency }} {{ property.price.toLocaleString() }}</p>
          </div>
          <div class="border p-4 text-center">
            <p class="text-sm text-gray-500">Bedrooms</p>
            <p class="text-lg font-semibold">{{ property.bedrooms }}</p>
          </div>
          <div class="border p-4 text-center">
            <p class="text-sm text-gray-500">Bathrooms</p>
            <p class="text-lg font-semibold">{{ property.bathrooms }}</p>
          </div>
          <div class="border p-4 text-center">
            <p class="text-sm text-gray-500">Area</p>
            <p class="text-lg font-semibold">{{ property.areaSqFt }} ft²</p>
          </div>
        </div>

        <!-- Description -->
        <div class="border-b pb-4 mt-10">
          <h2 class="text-2xl font-semibold mb-3">Description</h2>
          <p class="text-gray-200 leading-relaxed whitespace-pre-line">
            {{ property.description }}
          </p>
        </div>

        <!-- Features -->
        <!-- <div class="mt-10">
          <h2 class="text-2xl font-semibold mb-3">Features & Amenities</h2>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(feature, i) in property.features"
              :key="i"
              class=" px-3 py-1 border text-gray-200 text-sm"
            >
              {{ feature }}
            </span>
          </div>
        </div> -->
        <div class="flex flex-wrap gap-3 mt-10 border-b pb-4">
                    <h2 class="text-2xl font-semibold mb-3">Features & Amenities</h2>
                  <div class="flex flex-wrap gap-3">
          <div v-for="(feature, i) in property.features" :key="i"
            class="flex items-center gap-2 border border-gray-700 text-gray-200 text-sm px-3 py-2 bg-gray-900/40 hover:bg-gray-800/60 transition">
            <component :is="featureIcons[feature]" class="w-4 h-4 text-[#AF7554]" />
            <span>{{ feature }}</span>
          </div>
        </div>
        </div>

        <!-- Listing Details -->
        <div class="mt-10 border-b pb-4">
          <h2 class="text-2xl font-semibold mb-3">Listing Details</h2>
          <ul class="grid sm:grid-cols-2 gap-y-3 text-gray-700">
            <li><strong>Location:</strong> {{ property.listingDetails.location }}</li>
            <li><strong>Reference No:</strong> {{ property.listingDetails.referenceNo }}</li>
            <li><strong>Price per SqFt:</strong> {{ property.listingDetails.pricePerSqFt }}</li>
            <li><strong>Furnishing:</strong> {{ property.listingDetails.furnishing }}</li>
            <li><strong>Property Type:</strong> {{ property.listingDetails.propertyType }}</li>
            <li><strong>Parking Lots:</strong> {{ property.listingDetails.parkingLots }}</li>
          </ul>
        </div>

        <!-- Nearby Schools -->
        <div class="mt-10">
          <h2 class="text-2xl font-semibold mb-3">Nearby Schools</h2>
          <ul class="divide-y divide-gray-100 grid grid-cols-2">
            <li v-for="(school, i) in property.nearbySchools" :key="i" class="py-3">
              <strong>{{ school.name }}</strong>
              <p class="text-gray-600 text-sm">{{ school.address }}</p>
              <p class="text-gray-500 text-xs">Distance: {{ school.distance }}</p>
            </li>
          </ul>
        </div>

        <!-- Market Comparison -->
        <div class="mt-10 border-t pt-6">
          <h2 class="text-2xl font-semibold mb-3">Market Comparison</h2>
          <div class="grid sm:grid-cols-2 gap-6">
            <div class="mavrix-gradient-border p-4 rounded-lg">
              <p><strong>This Property:</strong> {{ property.comparison.thisPropertyPricePerSqFt }} AED/sqft</p>
              <p><strong>Market Avg:</strong> {{ property.comparison.marketAveragePricePerSqFt }} AED/sqft</p>
              <p><strong>Difference:</strong> {{ property.comparison.difference }}</p>
            </div>
            <div class="mavrix-gradient-border p-4 rounded-lg">
              <p><strong>This Area:</strong> {{ property.comparison.thisPropertyAreaSqFt }} ft²</p>
              <p><strong>Average Area:</strong> {{ property.comparison.averageAreaSqFt }} ft²</p>
              <p><strong>Area Diff:</strong> {{ property.comparison.areaDifference }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE: Sticky Agent + Contact -->
      <aside class="lg:col-span-1 relative">
        <div class="sticky top-28 space-y-6">
          <!-- Price Box -->
          <div class="mavrix-gradient-border p-6 shadow-sm border">
            <p class="text-sm text-gray-200">Price</p>
            <h2 class="text-2xl font-bold text-gray-200 mb-2">
              {{ property.currency }} {{ property.price.toLocaleString() }}
            </h2>
            <p class="text-sm text-gray-200">({{ property.pricePerSqFt }} AED/sqft)</p>
          </div>

          <!-- Agent Card -->
          <div class="mavrix-gradient-border p-6 border shadow-sm">
            <div class="flex items-center gap-4">
              <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="Agent"
                class="w-14 h-14 rounded-full object-cover" />
              <div>
                <p class="font-semibold">{{ property.agent.name }}</p>
                <p class="text-sm text-gray-200">{{ property.agent.position }}</p>
              </div>
            </div>

            <div class="mt-5 flex flex-col gap-3">
              <button class="button-mavrix">
                {{ property.agent.contact.phone }}
              </button>
              <button class="button-mavrix-outline">
                {{ property.agent.contact.whatsapp }}
              </button>
            </div>
          </div>
           <div class="mavrix-gradient-border p-6 shadow-sm border">
            <p class="text-light text-gray-200 text-center">Share</p>
            <!-- <h2 class="text-2xl font-bold text-gray-200 mb-2">
              {{ property.currency }} {{ property.price.toLocaleString() }}
            </h2> -->
            <!-- <p class="text-sm text-gray-200">({{ property.pricePerSqFt }} AED/sqft)</p> -->
             <div class="flex flex-row items-center justify-center gap-4 mt-4">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
                <div> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></div>
                <!-- <Instagram /> -->
                 <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></div>
                <!-- <Linkedin /> -->
                <!-- <Youtube /> -->
                <!-- <Twitter /> -->
                <MessageCircle />
                <Mail />
             </div>
          </div>
        </div>
      </aside>
    </div>

    <div v-else class="text-center text-gray-500 py-20">
      Property not found.
    </div>
    <Divider />
  </div>

</template>
