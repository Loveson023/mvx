<script setup lang="ts">
import FooterView from '~/components/FooterView.vue';
// import CallUs from '~/components/templates/call-us.vue';

</script>

<template>
  <div>
    <NavBar />
    <!-- <USkeleton /> -->
    <main>
      <slot />
      <!-- <CallUs /> -->
    </main>
    <FooterView />
  </div>
</template>
