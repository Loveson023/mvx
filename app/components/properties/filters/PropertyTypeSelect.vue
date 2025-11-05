<template>
  <div class="flex flex-col text-white">
    <h2 class="text-sm uppercase text-gray-400 mb-2">Property Type</h2>
    <USelect 
      v-model="localValue"
      multiple
      :items="items"
      placeholder="Select property type"
      class="w-52 bg-[#1a1918] border text-sm rounded-none text-white"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { propertyTypes } from '~/data/properties'

const props = defineProps({
  modelValue: {
    type: [String, Array],
    default: () => []
  }
})

const emit = defineEmits(['update:modelValue'])

// ✅ Computed getter/setter for v-model
const localValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

// Map propertyTypes to usable USelect options
const items = propertyTypes.map(t => t.name)
</script>
