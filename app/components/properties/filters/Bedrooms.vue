<template>
  <div class="w-full">
    <label class="block text-xs text-gray-400 mb-1">Bedrooms</label>

    <USelectMenu
      v-model="model"
      :items="uniqueBeds"
      placeholder="Any Bedrooms"
      class="w-full border border-none py-3 px-4 rounded-none text-gray-200"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: String,
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const uniqueBeds = computed(() => {
  const beds = props.data.map((p) => p.bedrooms || p.bed?.name).filter(Boolean)
  return ['Any', ...new Set(beds)]
})
</script>

<style scoped>
/* .custom-select :deep(.u-select-menu-button) {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  color: #f3f4f6;
  font-size: 0.875rem;
  border-radius: 0.75rem;
  transition: border-color 0.2s ease;
}

.custom-select :deep(.u-select-menu-button:hover) {
  border-color: #fbbf24;
}

.custom-select :deep(.u-select-menu-item-active) {
  background: linear-gradient(to right, #b8860b, #fbbf24);
  color: #111;
} */
</style>
