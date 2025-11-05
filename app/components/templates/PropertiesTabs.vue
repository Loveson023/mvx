<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import { properties } from '~/data/properties' // adjust path if needed

// Helper to filter properties by type
const getPropertiesByType = (type: string) =>
  properties.filter((p) => p.propertyType.toLowerCase() === type.toLowerCase())

const tabItems = ref<TabsItem[]>([
  {
    label: 'Apartments',
    icon: 'i-lucide-building-2',
    slot: 'apartments'
  },
  {
    label: 'Penthouses',
    icon: 'i-lucide-crown',
    slot: 'penthouses'
  },
  {
    label: 'Villas',
    icon: 'i-lucide-home',
    slot: 'villas'
  },
  {
    label: 'Townhouses',
    icon: 'i-lucide-rows',
    slot: 'townhouses'
  }
])
</script>

<template>
  <section class="bg-[#0c0c0c] text-white py-16 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-light tracking-wide mb-6">MAVRIX PROPERTIES</h2>
      <p class="text-gray-400 mb-10">
        Explore the finest selection of luxury properties across Dubai — tailored for every lifestyle.
      </p>

      <UTabs :items="tabItems" class="w-full">
        <!-- 🏙️ Apartments -->
        <template #apartments>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div
              v-for="(property, i) in getPropertiesByType('apartment')"
              :key="i"
              class="bg-[#141414] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                :src="property.images"
                :alt="property.title"
                class="w-full h-56 object-cover"
              />
              <div class="p-4">
                <h3 class="text-lg font-light mb-1">{{ property.title }}</h3>
                <p class="text-sm text-gray-400 mb-2">{{ property.location }}</p>
                <p class="text-[#c9a36a] font-medium text-sm mb-4">{{ property.price }}</p>
                <NuxtLink
                  :to="`/property/${property.slug}`"
                  class="text-sm text-white border border-[#c9a36a] px-4 py-1.5 rounded-md hover:bg-[#c9a36a] hover:text-black transition-all duration-300"
                >
                  View Details
                </NuxtLink>
              </div>
            </div>
          </div>
        </template>

        <!-- 🏢 Penthouses -->
        <template #penthouses>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div
              v-for="(property, i) in getPropertiesByType('penthouse')"
              :key="i"
              class="bg-[#141414] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                :src="property.images"
                :alt="property.title"
                class="w-full h-56 object-cover"
              />
              <div class="p-4">
                <h3 class="text-lg font-light mb-1">{{ property.title }}</h3>
                <p class="text-sm text-gray-400 mb-2">{{ property.location }}</p>
                <p class="text-[#c9a36a] font-medium text-sm mb-4">{{ property.price }}</p>
                <NuxtLink
                  :to="`/property/${property.slug}`"
                  class="text-sm text-white border border-[#c9a36a] px-4 py-1.5 rounded-md hover:bg-[#c9a36a] hover:text-black transition-all duration-300"
                >
                  View Details
                </NuxtLink>
              </div>
            </div>
          </div>
        </template>

        <!-- 🏡 Villas -->
        <template #villas>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div
              v-for="(property, i) in getPropertiesByType('villa')"
              :key="i"
              class="bg-[#141414] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                :src="property.images"
                :alt="property.title"
                class="w-full h-56 object-cover"
              />
              <div class="p-4">
                <h3 class="text-lg font-light mb-1">{{ property.title }}</h3>
                <p class="text-sm text-gray-400 mb-2">{{ property.location }}</p>
                <p class="text-[#c9a36a] font-medium text-sm mb-4">{{ property.price }}</p>
                <NuxtLink
                  :to="`/property/${property.slug}`"
                  class="text-sm text-white border border-[#c9a36a] px-4 py-1.5 rounded-md hover:bg-[#c9a36a] hover:text-black transition-all duration-300"
                >
                  View Details
                </NuxtLink>
              </div>
            </div>
          </div>
        </template>

        <!-- 🏘️ Townhouses -->
        <template #townhouses>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div
              v-for="(property, i) in getPropertiesByType('townhouse')"
              :key="i"
              class="bg-[#141414] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                :src="property.images"
                :alt="property.title"
                class="w-full h-56 object-cover"
              />
              <div class="p-4">
                <h3 class="text-lg font-light mb-1">{{ property.title }}</h3>
                <p class="text-sm text-gray-400 mb-2">{{ property.location }}</p>
                <p class="text-[#c9a36a] font-medium text-sm mb-4">{{ property.price }}</p>
                <NuxtLink
                  :to="`/property/${property.slug}`"
                  class="text-sm text-white border border-[#c9a36a] px-4 py-1.5 rounded-md hover:bg-[#c9a36a] hover:text-black transition-all duration-300"
                >
                  View Details
                </NuxtLink>
              </div>
            </div>
          </div>
        </template>
      </UTabs>
    </div>
  </section>
</template>
