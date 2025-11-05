export default defineNuxtConfig({ 
  css: ['~/assets/css/main.css',
        'leaflet/dist/leaflet.css', 
    // 'bootstrap/dist/css/bootstrap.min.css'       
  ],
  
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
          // '~/plugins/bootstrap.client.ts': {},
      // '~/plugins/pinia.client.ts': {},
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@vueform/nuxt'
    // '@pinia/nuxt',

  ],
  vite: {
    optimizeDeps: {
      include: ['@vue-leaflet/vue-leaflet']
    }
  }
})