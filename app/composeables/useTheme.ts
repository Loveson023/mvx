import { ref, watchEffect } from 'vue'

export const useTheme = () => {
  const theme = ref<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
  )

  const setTheme = (newTheme: 'light' | 'dark') => {
    theme.value = newTheme
    document.documentElement.setAttribute('data-bs-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  // Update immediately on load
  watchEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme.value)
  })

  return { theme, setTheme }
}
