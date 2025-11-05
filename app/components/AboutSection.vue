<template>
 
  <UPageSection orientation="horizontal" reverse :links="links" >
    <template #headline>
      <h4 class="uppercase mavrix-title text-mavrix">
About Mavrix
      </h4>
    </template>

    <template #title>
      <h2 class="tracking-in-contract text-3xl uppercase font-light text-white mt-2 mb-4 tracking-tight mavrix-title">
Redefining Real Estate Through Integrity and Innovation
    </h2>
    </template>

    <template #description>
      <p class="text-gray-300 text-base leading-relaxed max-w-2xl mavrix-description">
        Mavrix is not just a brokerage — it’s a legacy of refined living.
Founded in Dubai, the global hub of luxury and architectural brilliance, Mavrix serves as a bridge between visionary investors and iconic developments.

Every property we represent reflects craftsmanship, exclusivity, and purpose. From sleek waterfront penthouses to bespoke villas and branded residences, we go beyond listings — we connect you to a lifestyle.

Our approach is personal. We understand that real estate isn’t just about location or price — it’s about emotion, identity, and long-term value.
With Mavrix, your property journey becomes effortless, insightful, and deeply rewarding.

      </p>
    <div class="mt-8">
      <NuxtLink  class="button-mavrix cursor-pointer" type="button" to="/projects">
      Explore Communities
      </NuxtLink >
      </div>
      
    </template>
     <img
          src="/img_1.jpg"
          alt="Team Member"
          class="slide-image"
        />
  </UPageSection>
</template>
