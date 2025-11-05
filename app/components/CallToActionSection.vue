<template>
  <!-- <section class="w-7xl flex flex-col align-middle items-center justify-center"> -->
    
   <!-- <HeroFilters /> -->
  <!-- </section> -->
   <!-- <EnquireNow /> -->
    <div class="w-full flex flex-col align-middle items-center justify-center ">
   <InquiryForm />
    </div>
</template>

<script setup lang="ts">
// import HeroFilters from '~/components/templates/hero-filters.vue';
// import EnquireNow from './forms/enquire-now.vue';
import InquiryForm from './forms/InquiryForm.vue';
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
