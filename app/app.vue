<template id="mavrix">
  <!-- <body > -->
   <NuxtLayout>
    <NuxtPage />
   </NuxtLayout>
   <!-- </body> -->
</template>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // This loads Chatbase script only once
  if (!document.getElementById('UvW1qY7YmMC-Q19y6lDB7')) {
    const script = document.createElement('script')
    script.src = 'https://www.chatbase.co/embed.min.js'
    script.id = 'UvW1qY7YmMC-Q19y6lDB7'
    script.defer = true
    document.body.appendChild(script)
  }
})
</script>