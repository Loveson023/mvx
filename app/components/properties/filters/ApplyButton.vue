<template>
  <button
    class="flex items-center w-auto gap-2 button-mavrix cursor-pointer font-light px-4 py-4 transition"
    @click="$emit('click')"
  >
    <LucideSearch class="w-4 h-4" />
    Apply
  </button>
</template>

<script setup>
import { LucideSearch } from 'lucide-vue-next'
</script>
