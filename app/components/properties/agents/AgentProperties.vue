<template>
  <section v-if="agentProperties.length" class="text-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <h2 class="text-2xl font-semibold mb-6">
        Properties by {{ agent?.name }}
      </h2>

      <!-- ✅ Swiper Carousel -->
      <Swiper
        :slides-per-view="1"
        :space-between="10"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }"
        :modules="modules"
        navigation
        
        class="pb-10"
      >
        <SwiperSlide
          v-for="property in agentProperties"
          :key="property.id"
          class="overflow-hidden border rounded-none shadow-lg hover:shadow-2xl transition-all duration-300 !h-auto"
        >
          <NuxtLink :to="`/properties/${property.slug}`">
            <img
              :src="property.images[0]"
              :alt="property.title"
              class="w-full aspect-[4/3] object-cover"
            />
          </NuxtLink>

          <div class="p-3">
            <h3 class="font-semibold text-gray-100 text-sm mb-1">
              {{ property.title }}
            </h3>

            <div class="flex justify-between gap-2 border-b border-t border-gray-700 py-2">
              <div class="flex gap-2 items-center">
                <MapPin color="#c99171" class="h-4 w-4" />
                <p class="text-gray-400 text-sm">{{ property.location }}</p>
              </div>
              <p class="text-mavrix ">
                {{ property.currency }} {{ property.price.toLocaleString() }}
              </p>
            </div>

            <p class="text-xs text-gray-400 mt-1">{{ property.propertyType }}</p>

            <div class="flex flex-col gap-2 mt-2">
              <div class="flex gap-2">
                <div class="flex gap-2 border px-2 py-4 items-center">
                  <BedDouble class="h-4 w-4" />
                  <p class="text-xs text-gray-400">{{ property.bedrooms }} Bed</p>
                </div>
                <div class="flex gap-2 border px-2 py-4 items-center">
                  <Bath class="h-4 w-4" />
                  <p class="text-xs text-gray-400">{{ property.bathrooms }} Bath</p>
                </div>
                <div class="flex gap-2 border px-2 py-4 items-center">
                  <LandPlot class="h-4 w-4" />
                  <p class="text-xs text-gray-400">
                    {{ property.areaSqFt }} Sq.Ft.
                  </p>
                </div>
              </div>

              <NuxtLink
                :to="`/properties/${property.slug}`"
                class="button-mavrix text-white text-xs px-3 py-1 text-center"
              >
                View Details
              </NuxtLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>

  <!-- ❌ No properties fallback -->
  <section v-else class="py-10 text-center text-gray-400">
    <p>Sorry! No properties found for this agent.</p>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

import agents from "@/data/agents";
import { properties } from "@/data/properties";
import { Bath, BedDouble, LandPlot, MapPin } from "lucide-vue-next";

const route = useRoute();
const agent = agents.find((a) => a.slug === route.params.slug);

// ✅ Filter properties linked to this agent
const agentProperties = computed(() =>
  properties.filter((p) => p.agent?.agent_id === agent?.id)
);

const modules = [Navigation];
</script>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  color: #c99171;
}
.swiper-pagination-bullet {
  background-color: #c99171;
  opacity: 0.7;
}
.swiper-pagination-bullet-active {
  opacity: 1;
}
.swiper-slide{
    border-radius: 0px !important;
}
.swiper {
    width: 100% !important;
    height: auto !important;
}
</style>