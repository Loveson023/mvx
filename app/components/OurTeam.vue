<!-- <template>
  <UPageSection
    headline="Experienced. Transparent. Dedicated."
    title="MEET OUR TEAM"
    description="Our team of real estate professionals is committed to providing exceptional service and expert guidance to help you find your perfect property in Dubai."
    icon="i-lucide-rocket"
    orientation="horizontal"
    :links="links"
  >
    <swiper
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      class="mySwiper team-swiper"
    >
      <swiper-slide v-for="n in 8" :key="n">
        <img
          src="../../member.jpg"
          width="352"
          alt="Team Member"
          class="slide-image"
        />
      </swiper-slide>
    </swiper>
  </UPageSection>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const links = ref([
  {
    label: "Explore components",
    to: "/docs/components/app",
    color: "neutral",
    trailingIcon: "i-lucide-arrow-right",
    class: "button-mavrix",
  },
]);

const modules = [EffectCards];
</script>

<style scoped>
.team-swiper {
  width: 380px;
  height: 500px;
  perspective: 4000px;
}

/* All slides: smooth transition */
.team-swiper .swiper-slide {
  transition: transform 0.6s ease, filter 0.6s ease, opacity 0.6s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  transition: all 0.5s ease;
}

/* 🌈 Active slide: full color, no blur */
.team-swiper .swiper-slide-active {
  filter: none;
  transform: scale(1);
  z-index: 10;
}

/* 🎨 All slides behind active: grayscale, blur, slightly bigger */
.team-swiper .swiper-slide:not(.swiper-slide-active) {
  filter: grayscale(100%) brightness(0.7);
  transform: scale(1.1);
  opacity: 0.6;
  z-index: 1;
}

/* Allow slides to show outside container */
.swiper {
  overflow: visible;
}
</style> -->
<template>
  <UPageHero orientation="horizontal" class="relative overflow-hidden px-6 md:px-16 p-0">

    <!-- 🟨 Headline -->
    <template #headline>
      <h3 class="uppercase mavrix-title text-mavrix">
Our Team
</h3>
    </template>

    <!-- 🟩 Title -->
    <template #title>
      <h2 class="tracking-in-contract text-3xl uppercase font-light text-white mt-2 mb-4 tracking-tight mavrix-title">
A Collective of Visionaries, Advisors, and Market Specialists
</h2>
    </template>

    <!-- 🟦 Description -->
    <template #description>
      <p class="text-base md:text-lg text-gray-300 max-w-2xl mt-3 mavrix-description">
Behind Mavrix is a dynamic team of real estate professionals who redefine what it means to serve with excellence.
Each member brings international experience, local expertise, and an unwavering commitment to transparency and trust.

We listen before we lead — ensuring every recommendation aligns with your vision and financial goals.

At Mavrix, our team doesn’t just sell properties. We shape real estate experiences that inspire confidence and connection.
      </p>
       <div class="mt-8">
      <NuxtLink  class="button-mavrix cursor-pointer" type="button" to="/agents">
      Meet Our Experts
      </NuxtLink >
      </div>
      <!-- <div class="mt-8 w-full">
        <UMarquee :repeat="6" class="flex gap-8 items-center">
          <UIcon name="i-simple-icons-github" class="text-white text-4xl hover:text-[#cbb26a] transition-all" />
          <UIcon name="i-simple-icons-discord" class="text-white text-4xl hover:text-[#cbb26a] transition-all" />
          <UIcon name="i-simple-icons-x" class="text-white text-4xl hover:text-[#cbb26a] transition-all" />
          <UIcon name="i-simple-icons-instagram" class="text-white text-4xl hover:text-[#cbb26a] transition-all" />
          <UIcon name="i-simple-icons-linkedin" class="text-white text-4xl hover:text-[#cbb26a] transition-all" />
          <UIcon name="i-simple-icons-facebook" class="text-white text-4xl hover:text-[#cbb26a] transition-all" />
        </UMarquee>
      </div>  -->
    </template>

    <!-- 🌀 Marquee (After Headline, Title, and Description) -->

<swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        navigation
         :slides-per-view="1"
        :space-between="10"
        
        class="mySwiper team-swiper"
        
      >
      <swiper-slide v-for="agent in agents" :key="agent.slug">
          <!-- <img
            src="/member.jpg"
            width="352"
            alt="Team Member"
            class="slide-image"
          /> -->
          <!-- <div class="flex "> -->
            <NuxtLink :to="`/agents/${agent.slug}`"
                class="shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div class="relative h-100 overflow-hidden">
                    <img :src="agent.image" :alt="agent.name"
                        class="object-cover h-full w-full transform group-hover:scale-105 transition-transform duration-500" />
                </div>

                <div
                    class="p-5 bg-gradient-to-t from-black/80 via-black/60 to-transparent -mt-24 backdrop-blur-2xl relative z-10">
                    <h2 class="text-lg font-semibold">{{ agent.name }}</h2>
                    <p class="text-sm text-gray-300">{{ agent.title }}</p>
                    <p class="text-xs mt-2 text-gray-400">
                        Experience: {{ agent.experience }}
                    </p>
                    <p class="text-xs text-gray-400">
                        Languages: {{ agent.languages.join(", ") }}
                    </p>
                </div>
            </NuxtLink>
        <!-- </div>  -->
        </swiper-slide>
      </swiper>
    <!-- 🖼️ Optional Image -->
    <!-- <img src="/img_1.jpg" alt="App screenshot" class="rounded shadow-2xl ring ring-white/20 md:mt-0" height="200"
      width="500" loading="lazy" /> -->
  </UPageHero>
  
</template>

<script setup>
// import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { EffectCards, Navigation } from "swiper/modules";
import agents from "@/data/agents";


// const links = ref([
//   {
//     label: "Explore components",
//     to: "/docs/components/app",
//     color: "neutral",
//     trailingIcon: "i-lucide-arrow-right",
//     class: "button-mavrix",
//   },
// ]);

const modules = [EffectCards, Navigation];
</script>

<style scoped>
.team-swiper {
  width: 380px;
  height: auto !important;
  perspective: 4000px;
}

/* Swiper slides */
.team-swiper .swiper-slide {
  transition: transform 0.6s ease, filter 0.6s ease, opacity 0.6s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  transition: all 0.5s ease;
}

.team-swiper .swiper-slide-active {
  filter: none;
  transform: scale(1);
  z-index: 10;
}

.team-swiper .swiper-slide:not(.swiper-slide-active) {
  filter: grayscale(100%) brightness(0.7);
  transform: scale(1.1);
  opacity: 0.6;
  z-index: 1;
}

/* Allow slides to show outside container */
.swiper {
  overflow: visible;
}
/* Swiper Navigation Buttons */
.swiper-button-prev,
.swiper-button-next {
 
    
    /* top: 100px; */
    /* right: -80px; */
}
/* .swiper-button-prev{
  left: 95px;
    margin-top: -10px;
      top: 240px;

}
.swiper-button-next{
  right: 95px;
  top: 240px;
    margin-top: -10px;
} */
.swiper-navigation-icon{
  position: absolute;
  left: --96px !important;
  color: #FFFFFF !important;
  
}
.swiper-button-prev, .swiper-button-next {
    svg {
        /* width: 24px !important;
        height: 24px !important; */
        fill: #FFFFFF !important;
         color: #ae7353 !important; /* Mavrix accent color */
  width: 40px;
  height: 40px;
  /* border-radius: 50%; */
  border: 1px solid #ae7353 !important;
  padding: 8px;
    }
  }

/* Positions */
/* .custom-prev {
  left: -80px;
} */

/* .custom-next {
  right: -80px;
} */

/* Add icons (Lucide or FontAwesome can work) */


.custom-prev::after {
  transform: rotate(-135deg);
}

.custom-next::after {
  transform: rotate(45deg);
}
</style>
