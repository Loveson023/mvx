<template>
  <div>
    <!-- <HeroSection /> -->
       <!-- <HeroSlider /> -->
\    <HeroSectionTwo />
    
    <Divider id="next-section"/>
    <MarvixPropertiesSection />
    <Logos />
    <Divider />
    <OurTeam />
    <Divider />
<!-- <FeaturedProjectsSection /> -->
         <Counter />
    <Divider />
    <AboutSection />
    <Divider />
    <!-- <TestimonialsSection /> -->
    <CallToActionSection />
    <Divider />
    <!-- <BuyRentAccordion /> -->
    <!-- <ProjectsCarousel />
    <PropertiesTabs />
    <Divider /> -->

  </div>
</template>

<script setup>
// import HeroSection from '~/components/HeroSection.vue'
import HeroSectionTwo from '~/components/HeroSectionTwo.vue'
import AboutSection from '~/components/AboutSection.vue'
import MarvixPropertiesSection from '~/components/MarvixPropertiesSection.vue'
import OurTeam from '~/components/OurTeam.vue'
// import FeaturedProjectsSection from '~/components/FeaturedProjectsSection.vue'
import Counter from '~/components/about-us/counter.vue'
// import TestimonialsSection from '~/components/TestimonialsSection.vue'
import CallToActionSection from '~/components/CallToActionSection.vue'
import Divider from '~/components/templates/divider.vue'
import Logos from '~/components/templates/logos.vue'
// import BuyRentAccordion from '~/components/templates/BuyRentAccordion.vue'
// import ProjectsCarousel from '~/components/templates/ProjectsCarousel.vue'
// import PropertiesTabs from '~/components/templates/PropertiesTabs.vue'
// import MarvixPropertiesSection from '~/components/MarvixPropertiesSection.vue'
useSeoMeta({
  title: 'Marvix Properties | Luxury RealEstate in UAE',
  ogTitle: 'Marvix Luxury Properties',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: '/images/mavrix_properties.png',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
/* page-specific styles if required */
</style>
