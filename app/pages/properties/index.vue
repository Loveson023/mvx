<template>
  <section class="p-2">
     <Divider />
    <Breadcrumbs />
    <!-- Filter Bar -->
    <FilterBar
      :types="types"
      :locations="locations"
      :bedrooms="bedrooms"
      @filter="handleFilter"
    />
    <AdvancedFilters />

    <!-- Property List -->
         <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 py-8">
    <div class="lg:col-span-3 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      <PropertyCard
        v-for="property in filteredProperties"
        :key="property.id"
        :property="property"
      />
    </div>
 <!-- Sidebar -->
      <div class="lg:col-span-1">
        <ConsultantCard />
      </div>
    <!-- No results -->
    <p v-if="!filteredProperties.length" class="text-dark text-light mt-8 text-center">
      No properties match your filters.
    </p>
    </div>
         <Divider />

  </section>
</template>

<script setup>
import { ref, computed } from "vue"
import { properties } from "~/data/properties.js"
import FilterBar from "~/components/properties/filters/PropertyFilters.vue"
import PropertyCard from "@/components/properties/PropertyCard.vue";
import ConsultantCard from "@/components/properties/ConsultantCard.vue";
import Divider from "@/components/templates/divider.vue";
import Breadcrumbs from "@/components/templates/breadcrumbs.vue";
import AdvancedFilters from "~/components/properties/AdvancedFilters.vue";


const types = [...new Set(properties.map(p => p.type))]
const locations = [...new Set(properties.map(p => p.location))]
const bedrooms = [...new Set(properties.map(p => p.bedrooms))]

const filters = ref({ type: "", location: "", bedrooms: "" })

const handleFilter = f => {
  filters.value = f
}

const filteredProperties = computed(() =>
  properties.filter(p => {
    const matchType = !filters.value.type || p.type === filters.value.type
    const matchLocation = !filters.value.location || p.location === filters.value.location
    const matchBedrooms = !filters.value.bedrooms || p.bedrooms === filters.value.bedrooms
    return matchType && matchLocation && matchBedrooms
  })
)
</script>
