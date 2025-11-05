<script setup>
import { ref, computed, onMounted } from 'vue'
import { getListings } from '@/services/listingsService'
import { House, ChevronsRight } from 'lucide-vue-next'

// Optional: filters (you can comment out if not ready)
import LanguageFilter from "@/components/properties/agents/filters/languages.vue";
import SpecializationFilter from "@/components/properties/agents/filters/specialization.vue";

// Reactive states
const selectedLang = ref(null)
const selectedSpec = ref(null)
const agents = ref([])

// Fetch agents from listings
onMounted(async () => {
  const response = await getListings()
  const listings = response.data || []

  // Extract unique agents from listing.user
  const uniqueAgents = [
    ...new Map(
      listings
        .filter(l => l.user)
        .map(l => [l.user.id, l.user])
    ).values()
  ]

  // Map agent fields to your template format
  agents.value = uniqueAgents.map(agent => ({
    id: agent.id,
    slug: agent.uuid, // using uuid for route
    name: agent.name,
    title: agent.designation || 'Real Estate Agent',
    image: agent.image_path || agent.thumbnail_image_path,
    experience: agent.experience_since ? `${new Date().getFullYear() - new Date(agent.experience_since).getFullYear()} years` : 'N/A',
    languages: agent.languages || ['English'],
  }))
})

// Computed filter (optional)
const filteredAgents = computed(() => {
  return agents.value.filter(agent => {
    const langMatch = !selectedLang.value || agent.languages.includes(selectedLang.value)
    const specMatch = !selectedSpec.value || agent.title.toLowerCase().includes(selectedSpec.value.toLowerCase())
    return langMatch && specMatch
  })
})
</script>

<template>
  <section class="pt-16 pb-20 text-white max-w-7xl mx-auto px-6 lg:px-12">
    <!-- Header -->
    <div class="flex flex-wrap justify-between">
      <div class="flex justify-start gap-2 flex-col">
        <div class="flex justify-start gap-2 items-center">
          <House color="#c99171" />
          <ChevronsRight color="#c99171" />
          <span>Real Estate Agents In Dubai</span>
        </div>
        <h1 class="text-3xl md:text-4xl font-light uppercase mb-8 text-center lg:text-left">
          FIND YOUR PARTNER
        </h1>
      </div>

      <div class="flex gap-4 flex-wrap">
        <LanguageFilter v-model="selectedLang" />
        <SpecializationFilter v-model="selectedSpec" />
      </div>
    </div>

    <!-- Agents Grid -->
    <div v-if="filteredAgents.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <NuxtLink
        v-for="agent in filteredAgents"
        :key="agent.id"
        :to="`/agents/${agent.slug}`"
        class="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group rounded-xl bg-neutral-900"
      >
        <div class="relative h-96 overflow-hidden">
          <img
            :src="agent.image"
            :alt="agent.name"
            class="object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div class="p-5 bg-gradient-to-t from-black/80 via-black/60 to-transparent -mt-24 backdrop-blur-2xl relative z-10">
          <h2 class="text-lg font-semibold">{{ agent.name }}</h2>
          <p class="text-sm text-gray-300">{{ agent.title }}</p>
          <p class="text-xs mt-2 text-gray-400">Experience: {{ agent.experience }}</p>
          <p class="text-xs text-gray-400">Languages: {{ agent.languages.join(', ') }}</p>
        </div>
      </NuxtLink>
    </div>

    <!-- ❗No Results Message -->
    <div v-else class="text-center mt-16 bg-neutral-900 rounded-2xl py-10 border border-neutral-800">
      <h2 class="text-2xl font-light text-gray-300">Sorry!</h2>
      <p class="text-gray-500 mt-2">Your query doesn’t match any agents.</p>
    </div>
  </section>
</template>

<style scoped>
/* Optional hover effects */
.group:hover img {
  transform: scale(1.05);
}
</style>
