<script setup lang="ts">
import HeroSectionTwo from '~/components/our-agents/HeroSectionTwo.vue';
import Divider from '~/components/templates/divider.vue';
import CallToActionSection from '~/components/our-agents/CallToActionSection.vue';
// import AgentsGrid from '~/components/properties/agents/AgentsGrid.vue';
// import AgentGridV2 from '~/components/properties/agents/AgentGridV2.vue';
import AgentList from '~/components/properties/agents/AgentList.vue';
// import ContactInfo from '~/components/our-agents/ContactInfo.vue';
// import EnquireNow from '~/components/forms/enquire-now.vue';

</script>

<template>
    <div>
    <HeroSectionTwo />
    <Divider />
    <!-- <AgentsGrid /> -->
      <!-- <AgentGridV2 /> -->
    <!-- <ContactInfo /> -->
     <AgentList />
    <Divider />
      


    <CallToActionSection />
    <Divider />
    <!-- <EnquireNow /> -->
    </div>
</template>