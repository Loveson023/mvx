<template>
  <div class="border theme-light theme-dark shadow hover:shadow-lg transition overflow-hidden">
    <img
      :src="property.images[0]"
      :alt="property.title"
      class="h-48 w-full object-cover"
    />
    <div class="p-4 bg-black">
      <NuxtLink
        :to="`/properties/${property.slug}`"
        class="block text-lg text-light font-semibold mt-3 hover:text-[#ffd700] transition"
      >
        {{ property.title }}
      </NuxtLink>
      <p class="text-theme-light text-theme-dark text-sm">{{ property.location }}</p>

      <div class="mt-2 text-gray-200 text-sm">
        <p>{{ property.size }} | {{ property.built_size }}</p>
        <p class="font-semibold text-mavrix mt-1">{{ property.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  property: Object
})
</script>
