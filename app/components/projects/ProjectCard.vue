<script setup>
import { projects } from "@/data/projects.js";
import Breadcrumbsv2 from "../templates/breadcrumbsv2.vue";
import { Building2, Handshake, Hourglass, MapPin, Wallet } from "lucide-vue-next";
</script>

<template>
  <section class="py-12 text-gray-800">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbsv2 />
      <h1 class="text-3xl font-light uppercase text-white mb-8 text-center md:text-left">
        Latest Projects
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink v-for="project in projects" :key="project.id" :to="`/projects/${project.slug}`"
          class="block bg-mavrix transition duration-300 overflow-hidden">
          <div class="relative h-100 overflow-hidden">
            <img :src="project.images[0]" alt="project image"
              class="object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-500" />
          </div>

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
        </NuxtLink>
      </div>
      <!-- <div v-if="filteredAgents.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <NuxtLink v-for="agent in filteredAgents" :key="agent.slug" :to="`/agents/${agent.slug}`"
                class="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div class="relative h-100 overflow-hidden">
                    <img :src="agent.image" :alt="agent.name"
                        class="object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-500" />
                </div>

                <div class="p-5 bg-gradient-to-t from-black/80 via-black/60 to-transparent -mt-24 backdrop-blur-2xl relative z-10">
                    <h2 class="text-lg font-semibold">{{ agent.name }}</h2>
                    <p class="text-sm text-gray-300">{{ agent.title }}</p>
                    <p class="text-xs mt-2 text-gray-400">
                        Experience: {{ agent.experience }}
                    </p>
                    <p class="text-xs text-gray-400">
                        Languages: {{ agent.languages.join(", ") }}
                    </p>
                </div>
            </NuxtLink>
        </div> -->
    </div>
  </section>
</template>
