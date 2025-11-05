<template>
    <section class="text-white">
        <div class="container mx-auto px-6">


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
                <div class=" gap-4 flex-wrap">
                                    <!-- <USelect 
                            v-model="localValue"
                            multiple
                            :items="items"
                            placeholder="All Specializations"
                            class="w-52 bg-[#1a1918] border text-sm rounded-none text-white"
                            /> -->
                    <select v-model="selectedSpecialization" class=" border px-4 py-2 mx-2 text-sm focus:outline-none">
                        <option value="all">All Specializations</option>
                        <option v-for="spec in uniqueSpecializations" :key="spec" :value="spec">
                            {{ spec }}
                        </option>
                    </select>

                    <select v-model="selectedLanguage" class=" border px-4 py-2 text-sm focus:outline-none">
                        <option value="all">All Languages</option>
                        <option v-for="lang in uniqueLanguages" :key="lang" :value="lang">
                            {{ lang }}
                        </option>
                    </select>
                </div>
            </div>

            <!-- Agent Cards -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from "vue";
import agentsData from "@/data/agents";
import { ChevronsRight, House } from "lucide-vue-next";

// const items = 

const selectedSpecialization = ref("all");
const selectedLanguage = ref("all");
const agents = ref(agentsData);

const uniqueSpecializations = computed(() => [
    ...new Set(agents.value.map((a) => a.specialization)),
]);

const uniqueLanguages = computed(() => [
    ...new Set(agents.value.flatMap((a) => a.languages)),
]);

const filteredAgents = computed(() => {
    return agents.value.filter((agent) => {
        const matchSpec =
            selectedSpecialization.value === "all" ||
            agent.specialization === selectedSpecialization.value;
        const matchLang =
            selectedLanguage.value === "all" ||
            agent.languages.includes(selectedLanguage.value);
        return matchSpec && matchLang;
    });
});
</script>
