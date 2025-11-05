<template>
  <div class="flex flex-col text-white">
    <h2 class="text-sm uppercase text-gray-400 mb-2">Locations</h2>
    <div class="flex items-center gap-2 border bg-[#1a1918]">
      <!-- <LucideMap class="w-8 h-8 text-gray-200 pl-2" /> -->
      <USelect
       v-model="localValue"
      multiple
      :items="items"
      placeholder="Select Locations"
      class="w-52 bg-[#1a1918] text-sm rounded-none text-white"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
// import { LucideMap } from 'lucide-vue-next'
import { propertyLocations } from '~/data/properties'

const props = defineProps({
  modelValue: [String, Number]
  // default: () => []

})
const emit = defineEmits(['update:modelValue'])

const localValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const items = propertyLocations.map(t => t.name)

</script>
