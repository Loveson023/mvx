<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui'

const columns: FooterColumn[] = [
  {
    label: 'Community',
    children: [
      {
        label: 'Nuxters',
        to: 'https://nuxters.nuxt.com',
        target: '_blank'
      },
      {
        label: 'Video Courses',
        to: 'https://masteringnuxt.com/nuxt3?ref=nuxt',
        target: '_blank'
      },
      {
        label: 'Nuxt on GitHub',
        to: 'https://github.com/nuxt',
        target: '_blank'
      }
    ]
  },
  {
    label: 'Solutions',
    children: [
      {
        label: 'Nuxt Content',
        to: 'https://content.nuxt.com/',
        target: '_blank'
      },
      {
        label: 'Nuxt DevTools',
        to: 'https://devtools.nuxt.com/',
        target: '_blank'
      },
      {
        label: 'Nuxt Image',
        to: 'https://image.nuxt.com/',
        target: '_blank'
      },
      {
        label: 'Nuxt UI',
        to: 'https://ui.nuxt.com/',
        target: '_blank'
      }
    ]
  }
]
</script>

<template>
  <section class="text-white max-w-7xl mx-auto py-12">
    <div class="container mx-auto mb-6">
      <img
            src="/mavrix_properties.png"
            alt="Mavrix Luxury Properties Logo"
            class="h-10 w-auto"
          />
      <!-- <h2 class="text-2xl font-bold mb-6">Stay in the loop</h2>
      <p class="mb-6">Subscribe to our newsletter for the latest updates.</p> -->
    </div>
  <UFooterColumns :columns="columns">
    <template #right>
      <UFormField name="email" label="Subscribe to our newsletter" size="lg">
        <UInput type="email" class="w-full" placeholder="Enter your email" :ui="{
          base: 'input-mavrix',
        }">
          <template #trailing>
            <UButton type="submit" size="xs" color="neutral" label="Subscribe" class="button-mavrix" />
          </template>
        </UInput>
      </UFormField>
    </template>
  </UFooterColumns>
    </section>

</template>
