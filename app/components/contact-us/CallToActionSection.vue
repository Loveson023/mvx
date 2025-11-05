<template>
  <!-- <section class="cta-section">
    <div>
      <h2 class="text-3xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
      <p class="mb-6">Contact us today and let our experts guide you to the perfect home or investment.</p>
      <NuxtLink to="/contact" class="cta-button">Contact Us</NuxtLink>
    </div> -->
  <!-- <HeroFilters /> -->
   <div class="w-full flex flex-col align-middle items-center justify-center ">
   <InquiryForm />
    </div>
  <!-- </section> -->
</template>

<script setup lang="ts">
import InquiryForm from '../forms/InquiryForm.vue';

// import HeroFilters from '~/components/templates/hero-filters.vue';
</script>

<style scoped>
.cta-section {
  /* background: #333; */
  /* color: white; */
  /* padding: 0 8rem; */
  text-align: center;
}
.cta-button {
  margin-top: 1rem;
  padding: 12px 30px;
  background: #bfa14a;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>
