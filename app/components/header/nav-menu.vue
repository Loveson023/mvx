<template>
  <header
    class="mavrix-header fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-mavrix-900 shadow-md transition"
  >
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-between px-4 py-3">
        <!-- Logo -->
        <img
          src="/mavrix_properties.png"
          alt="Mavrix Luxury Properties Logo"
          class="h-10 w-auto"
        />

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <UNavigationMenu :items="items" />
        </div>
        <!-- <ThemeToggle /> -->

        <!-- Socials + Mobile Toggle -->
        <div class="flex items-center space-x-3">
          <div class="hidden md:block">
            <SocialDropdown />
          </div>

          <!-- Your Only Mobile Toggle -->
          <button
            @click="isOpen = !isOpen"
            class="md:hidden p-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <svg
              v-if="!isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="md:hidden bg-mavrix-900/95 backdrop-blur-lg text-white py-6 space-y-4 shadow-lg"
      >
        <nav class="flex flex-col items-start pl-8 space-y-3">
          <NuxtLink
            v-for="item in items"
            :key="item.label"
            :to="item.to"
            @click="isOpen = false"
            class="block text-base font-medium hover:text-primary transition"
            active-class="menu-active"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'
import SocialDropdown from '../SocialDropdown.vue'
// import ThemeToggle from '../ThemeToggle.vue'

const isOpen = ref(false)

const items = computed<NavigationMenuItem[]>(() => [
  { label: 'Home', to: '/', activeClass: 'menu-active' },
  { label: 'About Us', to: '/about', activeClass: 'menu-active' },
  { label: 'Properties', to: '/buy/dubai/properties', activeClass: 'menu-active' },
  { label: 'Projects', to: '/projects', activeClass: 'menu-active' },
  { label: 'Our Services', to: '/services', activeClass: 'menu-active' },
  { label: 'Our Team', to: '/agents', activeClass: 'menu-active' },
  { label: 'Contact Us', to: '/contact', activeClass: 'menu-active' }
])
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
