<template>
  <div class="w-full">
    <label class="block text-xs text-gray-400 mb-2">Price Range (AED)</label>

    <!-- Nuxt UI Slider -->
    <div class=" w-full border border-mavrix ring-accented py-4 px-4 rounded-none text-gray-200">
      <USlider
        v-model="model"
        :min="0"
        :max="10000000"
        :step="100000"
        range
        class="custom-slider cursor-grab"
      />
    </div>

    <div class="text-xs text-gray-300 mt-2 flex justify-between">
      <span>Min: {{ format(model[0]) }}</span>
      <span>Max: {{ format(model[1]) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({ modelValue: Array })
const emit = defineEmits(['update:modelValue'])
const model = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>

<style scoped>
/* Customize Nuxt UI (U-Slider) colors */

</style>
