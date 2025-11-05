<template>
  <div class="w-full">
    <label class="block text-xs text-gray-400 mb-1">Location</label>

    <USelectMenu
      v-model="model"
      :items="uniqueLocations"
      placeholder="All Locations"
      searchable
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

const uniqueLocations = computed(() => {
  const locs = props.data.map((p) => p.location?.full_path).filter(Boolean)
  return ['All', ...new Set(locs)]
})
</script>

<style scoped>

</style>
