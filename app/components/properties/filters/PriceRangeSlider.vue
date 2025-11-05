<template>
  <div class="flex flex-col text-white w-full sm:w-80">
    <h2 class="text-sm uppercase text-gray-400 mb-2">Price Range (AED)</h2>
    <div class="bg-[#1a1918] ">
      <USlider
        v-model="localValue"
        :min="0"
        :max="10000000"
        :step="50000"
        color="blue"
      />
      <div class="flex justify-between text-xs mt-2 text-gray-400">
        <span>{{ formatPrice(localValue[0]) }}</span>
        <span>{{ formatPrice(localValue[1]) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: Array, default: () => [0, 10000000] }
})
const emit = defineEmits(['update:modelValue'])

const localValue = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})

function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AED',
    maximumFractionDigits: 0
  }).format(value)
}
</script>
