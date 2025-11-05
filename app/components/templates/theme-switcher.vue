<template>
  <button
    @click="toggleTheme"
    class="p-2 rounded-full transition duration-300"
    :class="isDark ? 'theme-dark' : 'theme-light'"
  >
    <span v-if="isDark">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const isDark = ref(false)

// Load from storage or system preference
onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
})

// Watch theme change
watch(isDark, () => {
  applyTheme()
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
})

const toggleTheme = () => {
  isDark.value = !isDark.value
}

const applyTheme = () => {
  const body = document.body
  body.classList.remove('theme-dark', 'theme-light')

  if (isDark.value) {
    body.classList.add('theme-dark')
  } else {
    body.classList.add('theme-light')
  }
}
</script>
