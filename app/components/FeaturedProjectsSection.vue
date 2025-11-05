<script setup lang="ts">
// import Divider from '~/components/templates/divider.vue'
import type { container } from '#build/ui';
import type { TabsItem } from '@nuxt/ui'

const items = [
  {
    label: 'Apartments',
    description: 'Explore Dubai apartments designed for modern living with luxury finishes and smart layouts.',
    icon: 'i-lucide-home',
    slot: 'apartments' as const
  },
  {
    label: 'Villas',
    description: 'Discover stunning villas with private gardens and pools in Dubai’s most desirable communities.',
    icon: 'i-lucide-building-2',
    slot: 'villas' as const
  },
  {
    label: 'Townhouses',
    description: 'Family-friendly townhouses offering spacious designs and tranquil neighborhoods.',
    icon: 'i-lucide-house',
    slot: 'townhouses' as const
  },

  {
    label: 'Townhouses',
    description: 'Family-friendly townhouses offering spacious designs and tranquil neighborhoods.',
    icon: 'i-lucide-house',
    slot: 'townhouses' as const
  },
  {
    label: 'Townhouses',
    description: 'Family-friendly townhouses offering spacious designs and tranquil neighborhoods.',
    icon: 'i-lucide-house',
    slot: 'townhouses' as const
  }
] satisfies TabsItem[]

const state = reactive({
  name: 'Benjamin Canac',
  username: 'benjamincanac',
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})
</script>

<template>
  <!-- <Divider /> -->
  <div class=" w-full flex flex-col align-middle items-center justify-center">
    <div>
      <h2 class="text-3xl uppercase font-light text-white mt-2 mb-4 tracking-tight mavrix-title text-center">FEATURED LISTINGS</h2>
      <p class="mb-6 text-center">Contact us today and let our experts guide you to the perfect home or investment.</p>
      <!-- <NuxtLink to="/contact" class="cta-button">Contact Us</NuxtLink> -->
    </div>
    <UTabs :items="items" :ui="{
      list: 'flex justify-center gap-6 border-b border-gray-800 ',
      trigger: 'tab-trigger',
      active: 'tab-active',
      inactive: 'tab-inactive',
      content: 'tab-content',
      container: 'tab-container',
    }" class=" bg-mavrix-900 backdrop-blur-md p-10 shadow-xl transition w-full mavrix-gradient-border">
      <!-- 🏙 Apartments Tab -->
      <template #apartments="{ item }">
        <p class="tab-description">{{ item.description }}</p>

        <!-- <UForm :state="state" class="form-mavrix">
          <UFormField label="Name" name="name">
            <UInput v-model="state.name" :ui="{ base: 'input-mavrix' }" />
          </UFormField>
          <UFormField label="Username" name="username">
            <UInput v-model="state.username" :ui="{ base: 'input-mavrix' }" />
          </UFormField>
          
        </UForm> -->
        <div class="flex justify-between">
          <UButton label="Save changes" class="button-mavrix" />
          <UButton label="Cancel" class="button-mavrix-outline" />
        </div>
      </template>

      <!-- 🏡 Villas Tab -->
      <template #villas="{ item }">
        <p class="tab-description">{{ item.description }}</p>

        <UForm :state="state" class="form-mavrix flex flex-col gap-4">
          <UFormField label="Current Password" name="current">
            <UInput v-model="state.currentPassword" type="password" :ui="{ base: 'input-mavrix' }" />
          </UFormField>
          <UFormField label="New Password" name="new">
            <UInput v-model="state.newPassword" type="password" :ui="{ base: 'input-mavrix' }" />
          </UFormField>
          <UFormField label="Confirm Password" name="confirm">
            <UInput v-model="state.confirmPassword" type="password" :ui="{ base: 'input-mavrix' }" />
          </UFormField>

          <div class="flex justify-between">
            <UButton label="Save" class="button-mavrix" />
            <UButton label="Cancel" class="button-mavrix-outline" />
          </div>
        </UForm>
      </template>

      <!-- 🏘 Townhouses Tab -->
      <template #townhouses="{ item }">
        <p class="tab-description">{{ item.description }}</p>
        <div class="p-6 text-gray-300">Coming soon...</div>
      </template>
    </UTabs>
  </div>
</template>
