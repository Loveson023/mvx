<template>
    <section class="pt-16 pb-20 text-white max-w-7xl mx-auto px-6 lg:px-12">
        <!-- <h1 class="text-3xl font-light mb-6">Our Agents</h1> -->

        <!-- Filters -->
        <div class="flex flex-wrap justify-between">
            <div class="flex justify-start gap-2 flex-col">

                <div class="flex justify-start gap-2">
                    <House color="#c99171" />
                    <ChevronsRight color="#c99171" />
                    <span>Real Estate Agents In Dubai </span>
                </div>
                <h1 class="text-3xl md:text-4xl font-light uppercase mb-8 text-center">
                    FIND YOUR PARTNER
                </h1>
            </div>
            <div class="flex gap-4 flex-wrap">
                <LanguageFilter v-model="selectedLang" />
                <SpecializationFilter v-model="selectedSpec" />
            </div>
        </div>

        <!-- Agents Grid -->
        <!-- <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <NuxtLink
        v-for="agent in filteredAgents"
        :key="agent.slug"
        :to="`/agents/${agent.slug}`"
        class="flex flex-col items-center text-center transition-colors"
      >
        <img
          :src="agent.image"
          :alt="agent.name"
          class="w-full h-100 object-cover mb-4"
        />
        <h3 class="text-lg font-medium">{{ agent.name }}</h3>
        <p class="text-gray-400 text-sm">{{ agent.title }}</p>
      </NuxtLink>
    </div> -->
        <div v-if="filteredAgents.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <NuxtLink v-for="agent in filteredAgents" :key="agent.slug" :to="`/agents/${agent.slug}`"
                class="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div class="relative h-100 overflow-hidden">
                    <img :src="agent.image" :alt="agent.name"
                        class="object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-500" />
                </div>

                <div
                    class="p-5 bg-gradient-to-t from-black/80 via-black/60 to-transparent -mt-24 backdrop-blur-2xl relative z-10">
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
        </div>
        <!-- ❗No Results Message -->
        <div v-else class="text-center mt-16 bg-neutral-900 rounded-2xl py-10 border border-neutral-800">
            <h2 class="text-2xl font-light text-gray-300">Sorry!</h2>
            <p class="text-gray-500 mt-2">Your query doesn’t match any agents.</p>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import agents from "@/data/agents";
import LanguageFilter from "@/components/properties/agents/filters/languages.vue";
import SpecializationFilter from "@/components/properties/agents/filters/specialization.vue";
import { ChevronsRight, House } from "lucide-vue-next";

const route = useRoute();
const router = useRouter();

const selectedLang = ref(route.query.lang || "");
const selectedSpec = ref(route.query.spec || "");

// ✅ Filter logic
const filteredAgents = computed(() => {
    return agents.filter(agent => {
        const langMatch =
            !selectedLang.value || agent.languages.includes(selectedLang.value);
        const specMatch =
            !selectedSpec.value || agent.specialization === selectedSpec.value;
        return langMatch && specMatch;
    });
});

// ✅ Sync query with filters
watch([selectedLang, selectedSpec], () => {
    router.replace({
        query: {
            lang: selectedLang.value || undefined,
            spec: selectedSpec.value || undefined,
        },
    });
});

// ✅ Reflect query when back/forward navigation
watch(
    () => route.query,
    (q) => {
        selectedLang.value = q.lang || "";
        selectedSpec.value = q.spec || "";
    }
);

</script>
