<template>
  <div class="w-full">
    <!-- Toggle Button -->
    <button @click="toggleFilters" class="cursor-pointer flex items-center gap-2 px-4 py-2 button-mavrix shadow transition">
      <div class="flex items-center gap-4">
        <SlidersVertical :stroke-width="1" />
        <span class="ml-1">All Filters</span>
      </div>
      <!-- <svg :class="{ 'rotate-180': isOpen }" class="w-5 h-5 transform transition-transform" fill="none"
        stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg> -->
    </button>

    <!-- Filter Panel -->
    <transition name="fade">
      <div v-if="isOpen" class="mt-4 p-6 border-gray-700 property_card rounded flex flex-col gap-4 bg-[#212121] text-gray-200">
        <!-- Location -->
         <div class="col-span-3">
          <label class="block text-sm font-light mb-1">Property / Location</label>
          <UInput v-model="filters.keyword" placeholder="Search for Property / Location" class="w-full" />
        </div>
        <div class="flex flex-row max-sm:flex-col gap-4"> 
          <!-- <label class="block text-sm font-semibold mb-1">Location</label> -->
          <!-- <USelect
            v-model="filters.location"
            :items="uniqueLocations"
            placeholder="All Locations"
            class="w-full text-white border bg-[#1a1918] rounded-none"
          /> -->
          <Category v-model="filters.type" :data="data" />
          <Locations v-model="filters.location" :data="data" />
          <Bedrooms v-model="filters.bedrooms" :data="data" />
          <PriceRange v-model="filters.price" />
        </div>
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
        <!-- Amenities -->
         <!-- <div>
          <Amentities v-model="filters.amenities" :data="data" />
         </div> -->

        <!-- Category -->
        <!-- <div>
          <label class="block text-sm font-semibold mb-1">Category</label>
          <USelect
            v-model="filters.category"
            :items="uniqueCategories"
            placeholder="All Categories"
            class="w-full text-white border bg-[#1a1918] rounded-none"
          />
        </div> -->

        <!-- Price Range -->
        <!-- <div>
          <label class="block text-sm font-semibold mb-1">Price Range (AED)</label>
          <div class="px-1">
            <USlider v-model="filters.price" :min="0" :max="20000000" step="100000" />
            <div class="flex justify-between text-xs mt-1">
              <span>{{ filters.price[0].toLocaleString() }}</span>
              <span>{{ filters.price[1].toLocaleString() }}</span>
            </div>
          </div>
        </div> -->

        <!-- Bedrooms -->
        <!-- <div>
          <label class="block text-sm font-semibold mb-1">Bedrooms</label>
          <USelect
            v-model="filters.bedrooms"
            :items="uniqueBedrooms"
            placeholder="Any"
            class="w-full text-white border bg-[#1a1918] rounded-none"
          />
        </div> -->

        <!-- Bathrooms -->
        <!-- <div>
          <label class="block text-sm font-semibold mb-1">Bathrooms</label>
          <USelect
            v-model="filters.bathrooms"
            :items="uniqueBathrooms"
            placeholder="Any"
            class="w-full text-white border bg-[#1a1918] rounded-none"
          />
        </div> -->

        <!-- Area -->
        

        <!-- Furnishing -->
        <!-- <div>
          <label class="block text-sm font-semibold mb-1">Furnishing</label>
          <USelect v-model="filters.furnishing" :items="['Any', 'Furnished', 'Unfurnished', 'Partly Furnished']"
            class="w-full text-white border bg-[#1a1918] rounded-none" />
        </div> -->

        <!-- Keyword -->
        

        <!-- Action Buttons -->
        <div class="md:col-span-3 flex justify-end gap-3 mt-4">
          <UButton variant="soft" class="button-mavrix-outline cursor-pointer" @click="resetFilters">
            Reset
          </UButton>
          <UButton class="button-mavrix cursor-pointer" @click="applyFilters">
            Apply Filters
          </UButton>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
// import USelect from '@/components/ui/USelect.vue'
// import UInput from '@/components/ui/UInput.vue'
// import USlider from '@/components/ui/USlider.vue'
// import UButton from '@/components/ui/UButton.vue'
// import ApplyButton from './ApplyButton.vue'
import Category from './Category.vue'
import Locations from './Locations.vue'
import Bedrooms from './Bedrooms.vue'
import PriceRange from './PriceRange.vue'
// import { SlidersVertical } from 'lucide-vue-next'
// import Amentities from './Amentities.vue'
import {
  Dumbbell,
  Car,
  Flower,
  ShieldCheck,
  Home,
  Dog,
  Key,
  Waves,
  SlidersVertical
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

const props = defineProps({
  data: { type: Array, default: () => [] }
})
const emit = defineEmits(['apply'])

const isOpen = ref(false)
const toggleFilters = () => (isOpen.value = !isOpen.value)

const filters = ref({
  location: '',
  category: '',
  bedrooms: '',
  bathrooms: '',
  price: [0, 20000000],
  minArea: '',
  maxArea: '',
  // furnishing: '',
  keyword: '',
  amenities: [],
})

// Computed unique options from API
const uniqueLocations = computed(() =>
  [...new Set(props.data.map(p => p.location?.full_path).filter(Boolean))]
)
const uniqueCategories = computed(() =>
  [...new Set(props.data.map(p => p.category).filter(Boolean))]
)
const uniqueBedrooms = computed(() =>
  [...new Set(props.data.map(p => p.bed?.name).filter(Boolean))]
)
const uniqueBathrooms = computed(() =>
  [...new Set(props.data.map(p => p.bath?.name).filter(Boolean))]
)


// Apply filters to parent
const applyFilters = () => {
  emit('apply', filters.value)
  isOpen.value = false // ✅ close panel when applied
}

// Reset all filters
const resetFilters = () => {
  filters.value = {
    location: '',
    category: '',
    bedrooms: '',
    bathrooms: '',
    price: [0, 20000000],
    minArea: '',
    maxArea: '',
    // furnishing: '',
    keyword: '',
    amenities: [],
  }
  emit('apply', filters.value)
  isOpen.value = false // ✅ close on reset too
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.95);
}
</style>
