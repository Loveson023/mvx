<template>
<div class="border rounded p-3">
<div class="flex items-center gap-3">
<img :src="agent.avatar || 'https://via.placeholder.com/80'" class="w-16 h-16 rounded-full object-cover" />
<div>
<h4 class="font-semibold">{{ agent.name }}</h4>
<p class="text-sm text-gray-500">{{ agent.agency }}</p>
</div>
</div>
<div class="mt-3 flex gap-2">
<NuxtLink :to="`/agents/${agent.id}`" class="px-3 py-1 rounded border">Profile</NuxtLink>
<button class="px-3 py-1 rounded bg-green-600 text-white">Contact</button>
</div>
</div>
</template>


<script setup>
const props = defineProps({ agent: Object })
</script>