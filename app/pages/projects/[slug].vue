<script setup>
import { useRoute } from "vue-router";
import { projects } from "@/data/projects";
import { MapPin, Building2, Ruler, KeyRound } from "lucide-vue-next";
import Divider from "~/components/templates/divider.vue";

const route = useRoute();
const project = projects.find((p) => p.slug === route.params.slug);
</script>

<template>
  <section v-if="project" class="text-gray-20">
    <!-- Hero -->
    <div class="relative">
      <img :src="project.gallery[0]" class="w-full h-[100vh] object-cover" />
      <div class="absolute inset-0 bg-black/50 flex flex-col justify-end px-8 lg:px-24">
        <h1 class="text-4xl font-light">{{ project.name }}</h1>
        <p class="mt-2 flex items-center gap-2 text-gray-300">
          <MapPin class="h-4 w-4 text-mavrix" /> {{ project.location }}
        </p>
        <p class="mt-4 text-mavrix font-semibold text-xl">{{ project.startingPrice }}</p>
      </div>
    </div>

    <!-- Overview -->
    <div class="max-w-7xl mx-auto px-6 py-12 space-y-6">
      <h2 class="text-2xl font-semibold text-white">Project Overview</h2>
      <p class="text-gray-400 leading-relaxed">{{ project.description }}</p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 text-gray-300">
        <div class="flex items-center gap-3"><Building2 /> <span>{{ project.developer }}</span></div>
        <div class="flex items-center gap-3"><Ruler /> <span>{{ project.propertyTypes.join(", ") }}</span></div>
        <div class="flex items-center gap-3"><KeyRound /> <span>{{ project.status }}</span></div>
        <div class="flex items-center gap-3"><MapPin /> <span>{{ project.location }}</span></div>
      </div>
    </div>

    <!-- Floor Plans -->
    <!-- <div class="max-w-7xl mx-auto px-6 py-12">
      <h2 class="text-2xl font-semibold text-white mb-6">Floor Plans & Pricing</h2>
      <div class="grid sm:grid-cols-3 gap-8">
        <div v-for="plan in project.floorPlans" :key="plan.title" class="bg-zinc-900 p-4 shadow mavrix-gradient-border">
          <img :src="plan.image" class="rounded-xl mb-3" />
          <h3 class="text-lg font-semibold">{{ plan.title }}</h3>
          <p class="text-gray-400 text-sm">{{ plan.size }}</p>
          <p class="text-mavrix font-semibold mt-2">{{ plan.price }}</p>
        </div>
      </div>
    </div> -->

    <!-- Gallery -->
    <div class="max-w-7xl mx-auto px-6 py-12">
      <h2 class="text-2xl font-semibold text-white mb-6">Gallery</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <img v-for="(img, i) in project.gallery" :key="i" :src="img" class="rounded-lg object-cover" />
      </div>
    </div>

    <!-- Payment milestones -->
      <div class="mx-auto px-6 py-12 relative bg-black text-white py-24 overflow-hidden">
        <div
      class="absolute inset-0 bg-cover bg-center-no-repeat opacity-30 parallax-bg"
      :style="{ backgroundImage: `url('/img_1.jpg')` }"
    ></div>
      <h2 class="text-2xl font-semibold text-white mb-6 text-center">Payment Plan</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in project.paymentPlan.milestones"
          :key="index"
          class="p-6 mavrix-gradient-border backdrop-blur-sm bg-black/40 shadow hover:shadow-lg transition-all text-center"
        >
          <div class="text-4xl font-bold text-mavrix">{{ item.percentage }}</div>
          <p class="uppercase tracking-wider text-gray-400">{{ item.label }}</p>
        </div>
      </div>
      </div>

    <!-- Amenities -->
    <div class="max-w-7xl mx-auto px-6 py-12">
      <h2 class="text-2xl font-semibold text-white mb-6">Features & Amenities</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-gray-300">
        <div v-for="(a, i) in project.amenities" :key="i" class="bg-zinc-900 py-3 px-4 border text-center">
          {{ a }}
        </div>
      </div>
    </div>
    <Divider />
  </section>

  <!-- Fallback -->
  <section v-else class="text-center py-20 text-gray-400">
    Project not found.
  </section>
</template>
