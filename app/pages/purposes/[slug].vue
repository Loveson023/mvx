<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getAllListings } from '@/services/listingsService'
import Divider from '~/components/templates/divider.vue'
import { createSlug } from '~/utils/slugify'
// import Breadcrumbs from '~/components/templates/breadcrumbs.vue'
import { MapPin, BedDouble, Bath, LandPlot, PhoneCall, Wallet, Building2 } from 'lucide-vue-next'

const route = useRoute()
const slug = route.params.slug
const properties = ref([])
const loading = ref(true)

onMounted(async () => {
  const listings = await getAllListings()

  console.log('Fetched listings:', listings) // 👈 Check what’s coming in

  // ✅ Filter properties by purpose slug
  properties.value = listings.filter((p) => {
    const purposeSlug = p.purpose?.toLowerCase().replace(/\s+/g, '-')
    return purposeSlug === slug
  })

  loading.value = false
})
</script>

<template>
  <section class="pt-20 pb-16 text-white max-w-7xl mx-auto px-6 lg:px-12">
    <Divider />
    <h1 class="text-3xl md:text-4xl font-light uppercase mb-10">
      Properties for {{ slug.replace('-', ' ') }} in Dubai
    </h1>

    <div v-if="loading" class="text-center text-gray-400 py-20">
      Loading properties...
    </div>

    <div v-else-if="properties.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- <div
        v-for="property in properties"
        :key="property.id"
        class="bg-neutral-900 rounded-xl overflow-hidden hover:shadow-xl transition-all"
      >
        <img
          :src="property.photos?.[0]?.thumbnail_path || '/placeholder.jpg'"
          :alt="property.title"
          class="h-64 w-full object-cover"
        />
        <div class="p-5">
          <h2 class="text-lg font-semibold">{{ property.title }}</h2>
          <p class="text-sm text-gray-400">
            {{ property.location?.full_path_json?.[2]?.value || 'Dubai' }}
          </p>
          <p class="text-sm mt-2 text-mavrix font-semibold">
            AED {{ property.price?.toLocaleString() }}
          </p>
        </div>
      </div> -->
      <div v-for="property in properties" :key="property.id"
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
        </div>
    </div>

    <div
      v-else
      class="text-center mt-16 bg-neutral-900 rounded-2xl py-10 border border-neutral-800"
    >
      <h2 class="text-2xl font-light text-gray-300">
        No properties found for this purpose.
      </h2>
    </div>
        <Divider />

  </section>
</template>
