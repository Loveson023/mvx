<template>

  <div class="bg-black min-h-screen text-white px-4 md:px-10 py-10">
          <Divider />
    <Breadcrumbs />
    <h1 class="text-center text-3xl md:text-4xl font-semibold mb-8">
      PROPERTIES FOR SALE IN DUBAI
    </h1>

    <!-- <FiltersBar class="mb-8" /> -->

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Property Cards -->
      <div class="lg:col-span-3 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <PropertyCard
          v-for="property in properties"
          :key="property.id"
          :property="property"
        />
      </div>

      <!-- Sidebar -->
      <div class="lg:col-span-1">
        <ConsultantCard />
      </div>
    </div>
      <Divider />
  </div>
</template>

<script setup>
import { properties } from "@/data/properties";
// import FiltersBar from "@/components/properties/FiltersBar.vue";
import PropertyCard from "@/components/properties/PropertyCard.vue";
import ConsultantCard from "@/components/properties/ConsultantCard.vue";
import Divider from "@/components/templates/divider.vue";
import Breadcrumbs from "@/components/templates/breadcrumbs.vue";
</script>
