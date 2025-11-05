<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    <PropertyList
      v-for="item in properties"
      :key="item.id"
      :property="item"
    />
  </div>
</template>

<!-- <script setup lang="ts">
import { ref, onMounted } from 'vue'
import PropertyList from '~/components/properties/PropertyList.vue'
// import PropertyCard from '~/components/PropertyCard.vue'

const properties = ref([])

onMounted(async () => {
</template> -->

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PropertyList from '~/components/properties/PropertyList.vue'
// import PropertyCard from '~/components/PropertyCard.vue'

const properties = ref([])

onMounted(async () => {
  try {
    const res = await fetch('https://elist.solz.cloud/backend/api/external/external-listings?page=1&itemsPerPage=20')
    const json = await res.json()
    if (json.status === 200) {
      // Map API data to match your PropertyCard props
      properties.value = json.data.map(item => ({
        id: item.id,
        title: item.title,
        slug: item.slug, // or custom slug logic if needed
        location: item.location?.full_path || 'Dubai, UAE',
        price: `AED ${item.price?.toLocaleString()}`,
        images: item.gallery && item.gallery.length > 0 
          ? item.gallery.map(img => img.path) 
          : ['/mavrix_properties.png'], // fallback image
        plot_size: item.plot_size || 'N/A',
        area: item.built_size ? `${item.built_size} sq.ft` : 'N/A'
      }))
    }
  } catch (error) {
    console.error('Error fetching listings:', error)
  }
})
</script>
