<!-- <template>
  <div class="flex flex-wrap gap-3 p-4 shadow-sm items-center border">
    <select v-model="selected.type" class="border px-3 py-2 text-sm">
      <option value="">All Types</option>
      <option v-for="t in types" :key="t" :value="t">{{ t }}</option>
    </select>

    <select v-model="selected.location" class="border px-3 py-2 text-sm">
      <option value="">All Locations</option>
      <option v-for="loc in locations" :key="loc" :value="loc">{{ loc }}</option>
    </select>

    <select v-model="selected.bedrooms" class="border px-3 py-2 text-sm">
      <option value="">All Bedrooms</option>
      <option v-for="b in bedrooms" :key="b" :value="b">{{ b }}</option>
    </select>

    <button
      @click="applyFilters"
      class="button-mavrix transition text-sm"
    >
      Apply Filters
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  types: Array,
  locations: Array,
  bedrooms: Array
})

const emit = defineEmits(["filter"])

const selected = ref({
  type: "",
  location: "",
  bedrooms: ""
})

const applyFilters = () => {
  emit("filter", { ...selected.value })
}
</script> -->
<template>
  <div class="backdrop-blur-md shadow-md">
    <!-- Mobile Toggle -->
    <div class="flex justify-between items-center md:hidden">
      <h3 class="font-semibold text-gray-800 text-lg">Filters</h3>
      <button @click="isOpen = !isOpen" class="text-gray-600 hover:text-gray-800 transition">
        <LucideFilter class="w-5 h-5" />
      </button>
    </div>

    <!-- Filters (collapsible on mobile) -->
    <transition name="slide-fade">
      <div v-show="isOpen || isDesktop" class="mt-4 flex flex-wrap gap-4 items-center">
        <!-- Property Type -->
        <div class="flex items-center gap-2">
          <!-- <LucideHome class="w-4 h-4 text-gray-500" />
          <select
            v-model="selected.type"
            class="outline-none bg-transparent text-sm text-gray-700"
          >
            <option value="">All Types</option>
            <option v-for="t in types" :key="t" :value="t">{{ t }}</option>
          </select> -->
          <!-- <FiltersPropertyTypeSelect /> -->
          <!-- PROPERTY TYPE FILTER -->
          <div class="bg-[#0f0f0f] text-white">
            <h2 class="text-sm uppercase text-gray-400 mb-2">Property Type</h2>
            <USelect v-model="value" multiple :items="items" placeholder="Select property type"
              class="w-full sm:w-64 bg-[#1a1918] border text-sm rounded-none text-white" />

            <!-- <p class="mt-3 text-xs text-gray-400">
              Selected: <span class="text-[#C59A7B]">{{ value.join(', ') || 'None' }}</span>
            </p> -->
          </div>
        </div>

        <!-- Location -->
         <div class="flex  flex-col gap-2">
          <h2 class="text-sm uppercase  text-gray-400">All Locations</h2>
        <div class="flex items-center gap-2 border border-gray-200 px-3 py-2 shadow-sm">
          <LucideMapPin class="w-4 h-4 text-gray-500" />
          <select v-model="selected.location" class="outline-none bg-transparent text-sm text-gray-700">
            <option value="">All Locations</option>
            <option v-for="loc in locations" :key="loc" :value="loc">{{ loc }}</option>
          </select>
        </div>
        </div>


        <!-- Bedrooms -->
         <div class="flex  flex-col gap-2">
          <h2 class="text-sm uppercase  text-gray-400">Bedrooms</h2>
        <div class="flex items-center gap-2 border border-gray-200 px-3 py-2 shadow-sm">
          <LucideBed class="w-4 h-4 text-gray-500" />
          <select v-model="selected.bedrooms" class="outline-none bg-transparent text-sm">
            <option value="">All Bedrooms</option>
            <option v-for="b in bedrooms" :key="b" :value="b">{{ b }}</option>
          </select>
        </div>
        </div>

        <!-- ✅ Price Range -->
        <!-- ✅ Price Range Slider -->
        <!-- <div class="w-full md:w-[350px] flex flex-col gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
          <label class="text-sm text-gray-700 font-medium flex items-center gap-2">
            <LucideDollarSign class="w-4 h-4 text-gray-500" />
            Price Range
          </label>

          <USlider
            v-model="selected.priceRange"
            :min="0"
            :max="10000000"
            :step="100000"
            color="blue "
            class="mt-1 slider-mavrix"
          />

          <div class="flex justify-between text-xs text-gray-600">
            <span>Min: {{ formatPrice(selected.priceRange[0]) }}</span>
            <span>Max: {{ formatPrice(selected.priceRange[1]) }}</span>
          </div>
        </div> -->
        <div class="flex gap-4 space-y-6 bg-[#111] text-white rounded-xl">
          <!-- <RangeSlider
      label="Area"
      :min="300"
      :max="25000"
      :step="10"
      v-model="areaRange"
      :unitOptions="['SQ.M', 'SQ.FT']"
      @change="updateFilters"
    /> -->

          <!-- <RangeSlider
      label="Currency"
      :min="40000"
      :max="175000000"
      :step="10000"
      v-model="priceRange"
      :currencyOptions="['GBP', 'CNY', 'EUR', 'AED', 'USD']"
      @change="updateFilters"
    /> -->


          <!-- <USlider v-model="value" /> -->
          <RangeSlider />

        </div>
        <!-- Apply Button -->
        <button class="flex items-center gap-2 button-mavrix border" @click="applyFilters">
          <LucideSearch class="w-4 h-4" />
          <!-- <span class="text-sm transition-all">Apply Filters</span> -->
          <!-- Apply Filters -->
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { LucideFilter, LucideMapPin, LucideBed, LucideSearch } from "lucide-vue-next"
// import FiltersPropertyTypeSelect from "@/components/properties/filters/PropertyTypeSelect.vue"
import RangeSlider from '@/components/properties/filters/PriceRangeSlider.vue'
import { propertyTypes } from '~/data/properties'

// selected property types
const value = ref([])

// Map propertyTypes to the format USelect expects
const items = propertyTypes.map(t => t.name)

const props = defineProps({
  types: Array,
  locations: Array,
  bedrooms: Array
})

const emit = defineEmits(["filter"])

const selected = ref({
  type: "",
  location: "",
  bedrooms: "",
  // priceRange: [0, 10000000]
})

const isOpen = ref(true)
const isDesktop = ref(false)

const checkScreen = () => {
  isDesktop.value = window.innerWidth >= 768
  if (isDesktop.value) isOpen.value = true
}

onMounted(() => {
  checkScreen()
  window.addEventListener("resize", checkScreen)
})

onUnmounted(() => {
  window.removeEventListener("resize", checkScreen)
})

const applyFilters = () => {
  emit('filter', {
    ...selected.value,

  })
}

// function formatPrice(value) {
//   return new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'AED',
//     maximumFractionDigits: 0
//   }).format(value)
// }
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Optional: customize Nuxt UI USelect colors to fit your dark theme */
:deep(.u-select) {
  background-color: #1a1918 !important;
  color: white !important;
  border-color: #4b4039 !important;
}

:deep(.u-select:hover) {
  border-color: #C59A7B !important;
}

:deep(.u-select-multiple-tag) {
  background-color: #C59A7B !important;
  color: black !important;
  border-radius: 8px !important;
}
</style>
