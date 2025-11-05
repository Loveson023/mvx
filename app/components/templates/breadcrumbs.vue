<template>
  <nav class="mavrix-breadcrumbs w-auto">
    <ul class="flex flex-wrap mt-5 justify-center items-center text-sm">
      <li>
        <NuxtLink to="/" class="hover:text-primary font-medium text-white flex gap-2 items-center transition-colors mavrix-text ">
          <House color="#c99171" />
            Home
            <!-- <img src="../../../Mavrix.svg" alt=""/> -->
        </NuxtLink>
      </li>

      <template v-for="(crumb, index) in crumbs" :key="index">
        <li class="mx-2 text-neutral-400">
          <ChevronsRight color="#c99171" />
        </li>
        <li>
          <NuxtLink
            v-if="index < crumbs.length - 1"
            :to="crumb.path"
            class="hover:text-primary transition-colors mavrix-text"
          >
            {{ crumb.label }}
          </NuxtLink>
          <span v-else class="mavrix-text font-semibold">
            {{ crumb.label }}
          </span>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { House, ChevronsRight } from 'lucide-vue-next'

const route = useRoute()

// Dynamically build breadcrumbs from current path
const crumbs = computed(() => {
  const parts = route.path.split('/').filter(Boolean)

  return parts.map((part, i) => ({
    label: decodeURIComponent(part)
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase()), // capitalize
    path: '/' + parts.slice(0, i + 1).join('/')
  }))
})
</script>

<style scoped>
.mavrix-breadcrumbs {
  margin-bottom: 24px;
}

.mavrix-breadcrumbs a {
  transition: color 0.3s ease;
}

.text-primary {
  color: #ae7353; /* Adjust to your theme color */
}
</style>
