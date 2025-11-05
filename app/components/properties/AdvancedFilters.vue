<template>
  <div class="w-full">
    <!-- Toggle Button -->
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 px-4 py-2 button-mavrix shadow transition"
    >
      <span>Advanced Filters</span>
      <svg
        :class="{'rotate-180': isOpen}"
        class="w-5 h-5 transform transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Filter Panel -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="mt-4 p-6 border shadow-sm grid gap-6 md:grid-cols-3"
      >
        <!-- 🔹 Location -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Location</label>
          <USelect
            v-model="filters.location"
            :items="propertyLocations"
            option-attribute="name"
            placeholder="Select Location"
            class="w-full bg-[#1a1918] border text-sm rounded-none text-white"
          />
        </div>

        <!-- 🔹 Property Type -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Property Type</label>
          <USelect
            v-model="filters.type"
            :items="propertyTypes"
            option-attribute="name"
            placeholder="Select Type"
            class="w-full bg-[#1a1918] border text-sm rounded-none text-white"
          />
        </div>

        <!-- 🔹 Price Range -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Price Range (AED)</label>
          <div class="flex gap-2">
            <UInput
              v-model.number="filters.minPrice"
              placeholder="Min"
              type="number"
              class="w-1/2"
            />
            <UInput
              v-model.number="filters.maxPrice"
              placeholder="Max"
              type="number"
              class="w-1/2"
            />
          </div>
        </div>

        <!-- 🔹 Beds & Baths -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Bedrooms</label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="option in bedroomOptions"
              :key="option"
              @click="filters.bedrooms = option"
              :class="[
                'px-3 py-1 border transition text-sm cursor-pointer',
                filters.bedrooms === option
                  ? 'button-mavrix'
                  : 'border-gray-200'
              ]"
            >
              {{ option }}
            </button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Bathrooms</label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="option in bathroomOptions"
              :key="option"
              @click="filters.bathrooms = option"
              :class="[
                'px-3 py-1 border transition text-sm cursor-pointer',
                filters.bathrooms === option
                  ? 'button-mavrix'
                  : 'border-gray-300'
              ]"
            >
              {{ option }}
            </button>
          </div>
        </div>

        <!-- 🔹 Area -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Area (sqft)</label>
          <div class="flex gap-2">
            <UInput
              v-model.number="filters.minArea"
              placeholder="Min"
              type="number"
              class="w-1/2"
            />
            <UInput
              v-model.number="filters.maxArea"
              placeholder="Max"
              type="number"
              class="w-1/2"
            />
          </div>
        </div>

        <!-- 🔹 Furnishing -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Furnishing</label>
          <USelect
            v-model="filters.furnishing"
            :items="furnishingOptions"
            placeholder="Select"
            class="w-full bg-[#1a1918] border text-sm rounded-none text-white"
          />
        </div>

        <!-- 🔹 Amenities -->
        <!-- <div class="md:col-span-3">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Amenities</label>
          <div class="flex flex-wrap gap-3">
            <label
              v-for="amenity in amenities"
              :key="amenity"
              class="flex items-center gap-2 text-sm"
            >
              <UCheckbox v-model="filters.amenities" :value="amenity" />
              {{ amenity }}
            </label>
          </div>
        </div> -->
        <!-- 🔹 Amenities -->
<!-- 🔹 Amenities -->
<!-- 🔹 Amenities -->
<div class="md:col-span-3">
  <label class="block text-sm font-semibold text-gray-700 mb-2">Amenities</label>

  <div class="flex flex-wrap gap-3">
    <label
      v-for="amenity in amenities"
      :key="amenity.name"
      @click="toggleAmenity(amenity.name, !filters.amenities.includes(amenity.name))"
      :class="[
        'flex items-center gap-2 border px-8 py-4 border text-sm cursor-pointer select-none transition',
        filters.amenities.includes(amenity.name)
          ? ' button-mavrix text-gray-200'
          : ' border-gray-300 text-gray-200'
      ]"
    >
      <component
        :is="amenity.icon"
        :class="[
          'w-6 h-6 transition',
          filters.amenities.includes(amenity.name)
            ? 'text-gray-200'
            : 'text-gray-200'
        ]"
      />
      <span>{{ amenity.name }}</span>
    </label>
  </div>
</div>



        <!-- 🔹 Keyword Search -->
        <div class="md:col-span-3">
          <label class="block text-sm font-semibold text-gray-700 mb-1">Keyword</label>
          <UInput
            v-model="filters.keyword"
            placeholder="e.g. waterfront, balcony..."
            class="w-full"
          />
        </div>

        <!-- 🔹 Actions -->
        <div class="md:col-span-3 flex justify-end gap-3 mt-4">
          <UButton
            variant="soft"
            class="button-mavrix-outline"
            @click="resetFilters"
          >
            Reset
          </UButton>
          <UButton class="button-mavrix" @click="applyFilters">
            Apply Filters
          </UButton>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { propertyTypes, propertyLocations } from '@/data/properties'
// import { propertyLocations } from '@/data/properties'
import {
  Dumbbell,
  Car,
  Flower,
  ShieldCheck,
  Home,
  Dog,
  Key,
  Waves,
} from 'lucide-vue-next' // ✅ Lucide icons

// Amenity list with icons
const amenities = [
  { name: 'Pool', icon: Waves },
  { name: 'Gym', icon: Dumbbell },
  { name: 'Parking', icon: Car },
  { name: 'Garden', icon: Flower },
  { name: 'Security', icon: ShieldCheck },
  { name: 'Maid Room', icon: Home },
  { name: 'Pets Allowed', icon: Dog },
  { name: 'Key Card Access', icon: Key },
]
const toggleAmenity = (name, checked) => {
  const list = filters.value.amenities
  if (checked && !list.includes(name)) list.push(name)
  else if (!checked) filters.value.amenities = list.filter((a) => a !== name)
}
const isOpen = ref(false)

const filters = ref({
  location: '',
  type: '',
  minPrice: '',
  maxPrice: '',
  bedrooms: 'Any',
  bathrooms: 'Any',
  minArea: '',
  maxArea: '',
  furnishing: '',
  amenities: [],
  keyword: ''
})

const bedroomOptions = ['Any', '1+', '2+', '3+', '4+', '5+']
const bathroomOptions = ['Any', '1+', '2+', '3+', '4+', '5+']
const furnishingOptions = ['Any', 'Furnished', 'Unfurnished', 'Partly Furnished']
// const amenities = ['Pool', 'Gym', 'Parking', 'Balcony', 'Garden', 'Security', 'Maid Room', 'Pets Allowed']

function resetFilters() {
  filters.value = {
    location: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: 'Any',
    bathrooms: 'Any',
    minArea: '',
    maxArea: '',
    furnishing: '',
    amenities: [],
    keyword: ''
  }
}

function applyFilters() {
  console.log('Applied Filters:', filters.value)
  // emit filters or trigger API request
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: scaleY(0.95);
}
</style>
