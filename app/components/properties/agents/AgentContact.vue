<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-10 mavrix-gradient-border p-6"  >
    <!-- Email -->
    <div
      class="flex flex-col items-center justify-center space-y-2 hover:text-mavrix transition-colors"
    >
      <Mail class="w-6 h-6 text-mavrix" />
      <p class="text-gray-300 text-sm">Email</p>
      <a
        :href="`mailto:${agents.email}`"
        class="text-white font-medium hover:underline"
      >
        {{ agents.email }}
      </a>
    </div>

    <!-- Call -->
    <div
      class="flex flex-col items-center justify-center space-y-2 hover:text-mavrix transition-colors"
    >
      <Phone class="w-6 h-6 text-mavrix" />
      <p class="text-gray-300 text-sm">Call</p>
      <a
        :href="`tel:${agents.phone}`"
        class="text-white font-medium hover:underline"
      >
        {{ agents.phone }}
      </a>
    </div>

    <!-- WhatsApp -->
    <div
      class="flex flex-col items-center justify-center space-y-2 hover:text-mavrix transition-colors"
    >
      <MessageCircle class="w-6 h-6 text-mavrix" />
      <!-- <p class="text-gray-300 text-sm"></p> -->
      <a
        :href="`https://wa.me/${agents.whatsapp}`"
        target="_blank"
        class="text-white font-light text-sm"
      >
        WhatsApp
      </a>
    </div>
  </div>
</template>

<script setup>
import { Mail, Phone, MessageCircle } from "lucide-vue-next";
import agents from "~/data/agents";
</script>
