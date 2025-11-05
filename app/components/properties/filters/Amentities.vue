<template>
  <div>
    <label class="block text-sm font-semibold mb-2">Amenities</label>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      <button
        v-for="(amenity, i) in uniqueAmenities"
        :key="i"
        @click="toggleAmenity(amenity)"
        class="flex items-center gap-2 px-3 py-2 rounded-md border transition"
        :class="isSelected(amenity) ? 'button-mavrix text-white' : 'bg-[#212121] text-gray-300 border-gray-700'"
      >
        <component :is="getIcon(amenity)" class="w-4 h-4" />
        <span class="text-sm">{{ amenity }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Bath, Dumbbell, Wifi, Car, Trees, Sparkles, Home } from 'lucide-vue-next'

const props = defineProps({
  modelValue: { type: Array, default: () => [] },
  data: { type: Array, default: () => [] },
})
const emit = defineEmits(['update:modelValue'])


const selected = ref([...props.modelValue])

// Watch for parent updates
watch(
  () => props.modelValue,
  val => (selected.value = [...val])
)

const toggleAmenity = (amenity) => {
  if (selected.value.includes(amenity)) {
    selected.value = selected.value.filter(a => a !== amenity)
  } else {
    selected.value.push(amenity)
  }
  emit('update:modelValue', selected.value)
}

const isSelected = (amenity) => selected.value.includes(amenity)

// Simple icon mapping
const getIcon = (amenity) => {
  const key = amenity.toLowerCase()
  if (key.includes('pool')) return Sparkles
  if (key.includes('gym')) return Dumbbell
  if (key.includes('parking')) return Car
  if (key.includes('wifi') || key.includes('internet')) return Wifi
  if (key.includes('garden')) return Trees
  if (key.includes('bath')) return Bath
  return Home
}
</script>
