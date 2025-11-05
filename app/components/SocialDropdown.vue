<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[][] = [
  [
    {
      label: 'Facebook',
      icon: 'i-lucide-facebook',
      class: 'mavrix-brand'

    },
    {
      label: 'Instagram',
      icon: 'i-lucide-instagram',
      class: 'mavrix-brand'

    },
    {
      label: 'Twitter',
      icon: 'i-lucide-twitter',
      class: 'mavrix-brand'

    }
  ],
  [
    {
      label: 'LinkedIn',
      icon: 'i-lucide-linkedin',
            class: 'mavrix-brand'

    }
  ]
]
</script>

<template>
   <UDropdownMenu :items="items" :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width) ' } ">
    <div class="flex items-center bg-transparent space-x-2 cursor-pointer p-2 shadow-sm ">
    <UButton
      label="Follow Us"
      class="w-46 button-mavrix-outline cursor-pointer p-2 shadow-sm"
      color="neutral"
      variant="outline"
      block
      trailing-icon="i-lucide-chevron-down"    
    />
    </div>
  </UDropdownMenu>
</template>

