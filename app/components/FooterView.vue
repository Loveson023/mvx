<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui'
// import { Mail, MessageCircle } from 'lucide-vue-next';

const columns: FooterColumn[] = [
  {
    label: 'Quick Links',
    children: [
      {
        label: 'About Mavrix',
        to: '/about',
        // target: '_blank'
      },
      {
        label: 'News & Media',
        to: '/news',
        // target: '_blank'
      },
      {
        label: 'Contact Us',
        to: '/contact',
        // target
        // to: 'https://github.com/nuxt',
        // target: '_blank'
      },
      {
        label: 'Map',
        to: '/maps',
        // target
        // to: 'https://github.com/nuxt',
        // target: '_blank'
      }
    ]
  },
  {
    label: 'Explore Mavrix',
    children: [
      {
        label: 'Developers',
        to: '/',
        // target: '_blank'
      },
      {
        label: 'Projects',
        to: '/projects',
        // target: '_blank'
      },
      {
        label: 'Area Guides',
        to: '/',
        // target: '_blank'
      },
      {
        label: 'Properties',
        to: '/properties',
        // target: '_blank'
        // to: '/',
        // target: '_blank'
      },
      // {
      //   label: 'Nuxt UI',
      //   to: 'https://ui.nuxt.com/',
      //   target: '_blank'
      // }
    ]
  },
  {
    label: 'Explore Mavrix',
    children: [
      {
        label: 'Developers',
        to: '/',
        // target: '_blank'
      },
      {
        label: 'Projects',
        to: '/projects',
        // target: '_blank'
      },
      {
        label: 'Area Guides',
        to: '/',
        // target: '_blank'
      },
      // {
      //   label: 'Nuxt UI',
      //   to: 'https://ui.nuxt.com/',
      //   target: '_blank'
      // }
    ]
  }
]
</script>

<template>
  <section class="text-white max-w-7xl mx-auto max-sm:mx-8 mb-4">
    <div class="container mx-auto mb-6 border-b border-b-gray-500 pb-4">
      <img src="/mavrix_properties.png" alt="Mavrix Luxury Properties Logo" class="h-10 w-auto" />
      <p class="text-gray-400 mt-6">
        Mavrix Luxury Properties — Elevating the Standard of Real Estate in Dubai.
      </p>
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
        <div class="mavrix-gradient-border p-6 shadow-sm border mt-4">
            <p class="text-light text-gray-200 text-center">Share</p>
            <!-- <h2 class="text-2xl font-bold text-gray-200 mb-2">
              {{ property.currency }} {{ property.price.toLocaleString() }}
            </h2> -->
            <!-- <p class="text-sm text-gray-200">({{ property.pricePerSqFt }} AED/sqft)</p> -->
             <div class="flex flex-row items-center justify-center gap-4 mt-4">
                <div class="button-social-mavrix">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
                <div class="button-social-mavrix"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></div>
                <!-- <Instagram /> -->
                 <div class="button-social-mavrix"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></div>
                <div class="button-social-mavrix"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg></div>
                <div class="button-social-mavrix"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></div>
                <!-- <Linkedin /> -->
                <!-- <Youtube /> -->
                <!-- <Twitter /> -->
                 <!-- <div class="button-social-mavrix">
                <MessageCircle />
                </div>
                <div class="button-social-mavrix">
                <Mail />
             </div> -->
                <!-- <Mail /> -->
             </div>
          </div>  
      </template>    
    </UFooterColumns>
    <div class="container mx-auto mb-6">
      <!-- <img src="/mavrix_properties.png" alt="Mavrix Luxury Properties Logo" class="h-10 w-auto" /> -->
      <p class="text-gray-200 mt-6 border-t border-t-gray-500 pt-4">
        Mavrix Luxury Properties | © 2025 All Rights Reserved.
      </p>
      <!-- <h2 class="text-2xl font-bold mb-6">Stay in the loop</h2>
      <p class="mb-6">Subscribe to our newsletter for the latest updates.</p> -->
    </div>
  </section>

</template>
