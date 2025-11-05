<template>
  <section class="text-white pt-16">
    <Divider />

    <div
      class="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start gap-10"
    >
      <!-- Left Column (Breadcrumb + Image) -->
      <div class="w-full md:w-1/3 flex flex-col">
        <Breadcrumbsv2 />

        <img
          :src="agent.image"
          :alt="agent.name"
          class="object-cover shadow-2xl"
        />
      </div>

      <!-- Right Column (Agent Info) -->
      <div class="w-full md:w-2/3 pt-12 flex flex-col gap-4">
        <h1 class="text-3xl md:text-4xl font-light">{{ agent.name }}</h1>
        <p class="text-gray-400">{{ agent.title }}</p>

        <!-- Info Grid -->
        <div class="text-sm text-gray-300 flex flex-col gap-3">
          <p>
            <span class="text-mavrix font-medium">Experience:</span>
            {{ agent.experience }}
          </p>
          <p>
            <span class="text-mavrix font-medium">Specialization:</span>
            {{ agent.specialization }}
          </p>
          <p>
            <span class="text-mavrix font-medium">Languages:</span>
            {{ agent.languages.join(", ") }}
          </p>
        </div>

        <!-- Bio -->
        <div class="text-gray-200 leading-relaxed mt-4">
          <p>{{ agent.bio }}</p>
          <div v-if="agent.personal" class="mt-4">
            <strong class="block mb-1 text-white text-lg">
              A little about personal life
            </strong>
            <p>{{ agent.personal }}</p>
          </div>
        </div>
        <AgentContact :agent="agent" />
      </div>
      
    </div>

    <Divider />
    <!-- <AgentGridV3 /> -->
    <AgentProperties :agent="agent" />
    <Divider />
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import agents from "@/data/agents";
import Divider from "~/components/templates/divider.vue";
import AgentContact from "~/components/properties/agents/AgentContact.vue";
import Breadcrumbsv2 from "~/components/templates/breadcrumbsv2.vue";
// import AgentGridV3 from "~/components/properties/agents/AgentGridV3.vue";
import AgentProperties from "~/components/properties/agents/AgentProperties.vue";

const route = useRoute();
const agent = agents.find(a => a.slug === route.params.slug);
</script>
