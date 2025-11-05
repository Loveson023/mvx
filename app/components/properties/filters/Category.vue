<template>
  <div class="w-full">
    <label class="block text-xs text-gray-400 mb-1">Property Category</label>

     <USelectMenu
    v-model="model"
    :items="items"
    placeholder="Select Category"
    class="w-56"
  />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: String,
  items: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue'])
const model = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>