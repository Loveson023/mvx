<template>
  <div class="flex flex-col text-white">
    <!-- <h2 class="text-sm uppercase text-gray-400 mb-2">Language</h2> -->
    <USelect
      v-model="localValue"
      :items="languages"
      placeholder="Select Language"
      class="w-52 border text-sm rounded-none text-white"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import agents from "~/data/agents";

const props = defineProps({
  modelValue: {
    type: String,
    default: ""
  }
});
const emit = defineEmits(["update:modelValue"]);

const localValue = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val)
});

// ✅ Extract unique languages
const languages = [
  ...new Set(agents.flatMap(a => a.languages))
];
</script>
