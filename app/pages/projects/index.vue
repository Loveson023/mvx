<script setup>
// import { projects } from "@/data/projects.js"
import Divider from "@/components/templates/divider.vue"
import ProjectCard from "~/components/projects/ProjectCard.vue";
</script>

<template>
  <section class="pt-16">
    <!-- <h1 class="text-3xl font-bold mb-8">Our Projects</h1> -->

    <Divider />
    <ProjectCard />
    <Divider />
    <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <NuxtLink
        v-for="project in projects"
        :key="project.id"
        :to="`/projects/${project.slug}`"
        class="block bg-white rounded-2xl shadow hover:shadow-lg transition"
      >
        <img
          :src="project.images[0]"
          alt="project image"
          class="rounded-t-2xl h-56 w-full object-cover"
        />
        <div class="p-5">
          <h2 class="text-xl font-semibold mb-2">{{ project.name }}</h2>
          <p class="text-gray-500 mb-2">{{ project.location }}</p>
          <p class="text-sm text-gray-400">From {{ project.priceFrom }}</p>
        </div>
      </NuxtLink>
    </div> -->
  </section>
</template>
