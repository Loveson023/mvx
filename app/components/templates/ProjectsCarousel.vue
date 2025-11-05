<template>
    <section class="bg-[#0c0c0c] text-white py-16 px-6 md:px-12 relative overflow-hidden">
        <div class="max-w-7xl mx-auto relative">
            <h2 class="text-3xl md:text-4xl font-light tracking-wide mb-4 text-center">EXCLUSIVES</h2>
            <p class="text-gray-400 mb-10 text-center">
                Discover the outstanding range of Dubai properties only with Mavrix.
            </p>

            <Swiper 
            :modules="[Navigation, Pagination]" 
            :slides-per-view="1.2" 
            :centered-slides="true"
                :space-between="40" 
                navigation :pagination="{ type: 'fraction' }" 
                :loop="true" class="projects-swiper"
                :breakpoints="{
                    768: { slidesPerView: 1.5 },
                    1024: { slidesPerView: 2.2 }
                }">
                <SwiperSlide v-for="(project, index) in projects" :key="index"
                    class="project-slide pb-16 flex flex-col md:flex-row items-stretch gap-6 md:gap-10 transition-all duration-700">
                    <!-- LEFT: Image -->
                    <div class="w-full max-md:w-full relative overflow-hidden rounded-lg">
                        <img :src="project.images[0]" :alt="project.name"
                            class="slide-image w-full h-[400] object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        <!-- <div class="absolute bottom-4 left-4">
                            <h3 class="text-xl font-light">{{ project.name }}</h3>
                            <p class="text-sm text-gray-300">@ {{ project.location }}</p>
                            
                        </div> -->
                        <div
            class="p-5 bg-gradient-to-t from-black/80 via-black/60 to-transparent -mt-24 backdrop-blur-md relative z-10">
            <div class="flex flex-col gap-2">
              <h2 class="text-lg md:text-xl font-light text-white text-gray-900 line-clamp-1">
                {{ project.name }}
              </h2>
              <div class="flex gap-2 border-t border-t-old-neutral-200 py-2">
                <span class="font-medium text-gray-200">
                  <MapPin color="#AF7554" />
                </span>
                <span class="font-medium text-gray-200">
                  {{ project.location }}
                </span>
              </div>
              <div
                class="flex justify-between border-b border-b-old-neutral-200 border-t border-t-old-neutral-200 py-2">
                <div class="flex  gap-2">
                  <span class="font-medium text-gray-200">
                    <Building2 color="#AF7554" />
                  </span>
                  <span class="font-medium text-gray-200">
                    {{ project.developer }}
                  </span>
                </div>
                <div class="flex  gap-2">
                  <span class="font-medium text-gray-200">
                    <Wallet color="#AF7554" />
                  </span>
                  <span class="font-medium text-gray-200">
                    {{ project.priceFrom }}
                  </span>
                </div>
              </div>
              <div class="flex flex-row justify-between border-b border-b-old-neutral-200 py-2">
                <div class="flex gap-2">
                  <span class="font-medium text-gray-200">
                    <Handshake color="#AF7554" />
                  </span>
                  <span class="font-medium text-gray-200">
                    {{ project.handover }}
                  </span>
                </div>
                <div class="flex gap-2">
                  <span class="font-medium text-gray-200">
                    <Hourglass color="#AF7554" />
                  </span>
                  <span class="font-medium text-gray-200">
                    {{ project.status }}
                  </span>
                </div>
              </div>
              <p class="text-sm button-mavrix font-light text-center">
                EXPLORE PROJECT
              </p>
            </div>
          </div>

                    </div>

                    <!-- RIGHT: Details -->
                    <!-- <div class="md:w-2/3 max-md:w-full flex flex-col justify-between">
            <div>
              <div class="grid grid-cols-2 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 class="text-gray-400 mb-1">PROFITABILITY</h4>
                  <p>High rental yields and value appreciation.</p>
                </div>
                <div>
                  <h4 class="text-gray-400 mb-1">AREA</h4>
                  <p>{{ project.location }}</p>
                </div>
                <div>
                  <h4 class="text-gray-400 mb-1">AMENITIES</h4>
                  <p>
                    {{ project.amenities.slice(0, 2).join(", ") }}
                    <span v-if="project.amenities.length > 2">...</span>
                  </p>
                </div>
                <div>
                  <h4 class="text-gray-400 mb-1">VIEW</h4>
                  <p>Spectacular views of Dubai skyline and waterfront.</p>
                </div>
              </div>

              <p class="mt-6 text-gray-300 leading-relaxed text-sm">
                {{ project.description }}
              </p>
            </div>

            <div class="flex gap-4 mt-8">
              <button
                class="px-6 py-2 button-mavrix text-white font-light text-sm transition-all duration-300"
              >
                Enquire now
              </button>
              <NuxtLink
                :to="`/projects/${project.slug}`"
                class="px-6 py-2 button-mavrix-outline font-light text-sm transition-all duration-300"
              >
                Learn more
              </NuxtLink>
            </div>
          </div> -->
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Building2, Handshake, Hourglass, MapPin, Wallet } from "lucide-vue-next";

</script>

<style scoped>
.projects-swiper :deep(.swiper-button-next),
.projects-swiper :deep(.swiper-button-prev) {
    color: #fff;
}

.projects-swiper :deep(.swiper-pagination-fraction) {
    color: #fff;
    bottom: 0 !important;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 1px;
}

/* --- Fade + blur effect for inactive slides --- */
.projects-swiper :deep(.swiper-slide) {
    filter: blur(3px) grayscale(1);
    transform: scale(0.95);
    transition: all 0.7s ease;
    transform: scale(0.95);
    transition: all 0.7s ease;
    opacity: 0.5;
}

.projects-swiper :deep(.swiper-slide-active) {
    filter: blur(0px) brightness(1);
    transform: scale(1);
    opacity: 1;
    z-index: 10;
}

/* optional smooth width adjustments */
.projects-swiper :deep(.slide-image) {
    transition: transform 0.7s ease, filter 0.7s ease;
}

.projects-swiper {
    width: 100% !important;
    height: auto !important;
    overflow: visible !important;
}

.project-slide {
    display: flex !important;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 16px !important;
}
</style>
