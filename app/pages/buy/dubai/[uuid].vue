<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import PropertyGallery from '~/components/properties/PropertyGallery.vue'
import Divider from '~/components/templates/divider.vue'
import Breadcrumbs from '~/components/templates/breadcrumbs.vue'
import {
  MapPinHouse,
  Dumbbell,
  Shield,
  Waves,
  Building2,
  MessageCircle,
  Mail,
} from 'lucide-vue-next'
import { getListingByUuid } from '../../../services/listingsService' // ✅ import service

const route = useRoute()
const property = ref<any>(null)
const loading = ref(true)
const error = ref<string | null>(null)

// ✅ Fetch property by UUID using your service
const fetchProperty = async () => {
  try {
    const uuid = route.params.uuid
    const res = await getListingByUuid(uuid)
    if (res?.data) {
      // Some APIs return {data: {...}}, others {data: [{...}]}
      property.value = Array.isArray(res.data) ? res.data[0] : res.data
    } else {
      error.value = 'Property not found'
    }
  } catch (err) {
    console.error(err)
    error.value = 'Failed to load property'
  } finally {
    loading.value = false
  }
}

onMounted(fetchProperty)

// ✅ Map feature names to icons
const featureIcons = {
  'Shared gym': Dumbbell,
  Security: Shield,
  'Shared swimming pool': Waves,
  Balcony: Building2,
}
</script>

<template>
  <div class="container mx-auto px-4 py-10">
    <Divider />
    <div class="flex items-start">
      <Breadcrumbs />
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center text-gray-400 py-20">
      Loading property...
    </div>

    <!-- Error -->
    <div v-else-if="error" class="text-center text-red-500 py-20">
      {{ error }}
    </div>

    <!-- Property -->
    <div
      v-else-if="property"
      class="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6"
    >
      <!-- LEFT SIDE -->
      <div class="lg:col-span-2">
        <PropertyGallery :images="property.photos || []" />

        <div class="mt-6 border-b pb-4">
          <h1 class="text-3xl font-extralight my-4">
            {{ property.title }}
          </h1>
          <div class="flex flex-row gap-2 my-4">
            <MapPinHouse />
            <p class="text-gray-200">{{ property.location?.name }}</p>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div class="border p-4 text-center">
            <p class="text-sm text-gray-500">Price</p>
            <p class="text-lg font-semibold">
              AED {{ property.price?.toLocaleString() }}
            </p>
          </div>
          <div class="border p-4 text-center">
            <p class="text-sm text-gray-500">Bedrooms</p>
            <p class="text-lg font-semibold">
              {{ property.bed?.name || '-' }}
            </p>
          </div>
          <div class="border p-4 text-center">
            <p class="text-sm text-gray-500">Bathrooms</p>
            <p class="text-lg font-semibold">
              {{ property.bath?.name || '-' }}
            </p>
          </div>
          <div class="border p-4 text-center">
            <p class="text-sm text-gray-500">Area</p>
            <p class="text-lg font-semibold">
              {{ property.built_size || '-' }} ft²
            </p>
          </div>
        </div>

        <!-- Description -->
        <div class="border-b pb-4 mt-10">
          <h2 class="text-2xl font-semibold mb-3">Description</h2>
          <div
            class="text-gray-200 leading-relaxed"
            v-html="property.description"
          ></div>
        </div>

        <!-- Amenities -->
        <div class="mt-10 border-b pb-4">
          <h2 class="text-2xl font-semibold mb-4">Features & Amenities</h2>
          <div class="flex flex-wrap gap-3">
            <div
              v-for="(feature, i) in property.amenities || []"
              :key="i"
              class="flex items-center gap-2 border border-gray-700 text-gray-200 text-sm px-3 py-2 bg-gray-900/40 hover:bg-gray-800/60 transition"
            >
              <component
                :is="featureIcons[feature.name] || Building2"
                class="w-4 h-4 text-[#AF7554]"
              />
              <span>{{ feature.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <aside class="lg:col-span-1 relative">
        <div class="sticky top-28 space-y-6">
          <div class="mavrix-gradient-border p-6 shadow-sm border">
            <p class="text-sm text-gray-200">Price</p>
            <h2 class="text-2xl font-bold text-gray-200 mb-2">
              AED {{ property.price?.toLocaleString() }}
            </h2>
          </div>

          <div class="mavrix-gradient-border p-6 border shadow-sm">
            <div class="flex items-center gap-4">
              <img
                :src="property.user?.image || 'https://randomuser.me/api/portraits/men/30.jpg'"
                alt="Agent"
                class="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p class="font-semibold">
                  {{ property.user?.name || 'Agent Name' }}
                </p>
                <p class="text-sm text-gray-200">
                  {{ property.user?.designation || 'Agent' }}
                </p>
              </div>
            </div>
            <div class="mt-5 flex flex-col gap-3">
              <a
                :href="`tel:${property.user?.mobile}`"
                class="button-mavrix text-center"
              >
                <MessageCircle class="inline w-4 h-4 mr-2" /> Call Agent
              </a>
              <a
                :href="`mailto:${property.user?.email}`"
                class="button-mavrix-outline text-center"
              >
                <Mail class="inline w-4 h-4 mr-2" /> Email Agent
              </a>
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
