<template>
  <button 
    class="btn btn-outline-secondary d-flex align-items-center gap-2"
    @click="toggleTheme"
  >
    <i :class="theme === 'light' ? 'bi bi-moon-fill' : 'bi bi-sun-fill'"></i>
    <span>{{ theme === 'light' ? 'Dark Mode' : 'Light Mode' }}</span>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from '../composeables/useTheme'

const { theme, setTheme } = useTheme()

const toggleTheme = () => {
  setTheme(theme.value === 'light' ? 'dark' : 'light')
}
</script>
