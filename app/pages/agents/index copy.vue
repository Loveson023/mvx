<script setup lang="ts">
import HeroSectionTwo from '~/components/our-agents/HeroSectionTwo.vue';
import Divider from '~/components/templates/divider.vue';
import CallToActionSection from '~/components/our-agents/CallToActionSection.vue';
import AgentsGrid from '~/components/properties/agents/AgentsGrid.vue';
// import ContactInfo from '~/components/our-agents/ContactInfo.vue';
// import EnquireNow from '~/components/forms/enquire-now.vue';

</script>

<template>
    <div>
    <HeroSectionTwo />
    <Divider />
    <AgentsGrid />
    <!-- <ContactInfo /> -->
    <Divider />

    <CallToActionSection />
    <Divider />
    <!-- <EnquireNow /> -->
    </div>
</template>