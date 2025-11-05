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
  <UPageSection
    headline="Experienced. Transparent. Dedicated."
    title="MEET OUR TEAM"
    description="Our team of real estate professionals is committed to providing exceptional service and expert guidance to help you find your perfect property in Dubai."
    icon="i-lucide-rocket"
    orientation="horizontal"
    :links="links"
  >
    <div class="relative flex justify-center items-center">
      <!-- Swiper Navigation Buttons -->
      <!-- <div class="swiper-button-prev custom-prev"></div>
      <div class="swiper-button-next custom-next"></div> -->

      <!-- Swiper -->
      <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        navigation
        class="mySwiper team-swiper"
      >
        <swiper-slide v-for="n in 8" :key="n">
          <img
            src="/member.jpg"
            width="352"
            alt="Team Member"
            class="slide-image"
          />
        </swiper-slide>
      </swiper>
    </div>
  </UPageSection>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { EffectCards, Navigation } from "swiper/modules";

const links = ref([
  {
    label: "Explore components",
    to: "/docs/components/app",
    color: "neutral",
    trailingIcon: "i-lucide-arrow-right",
    class: "button-mavrix",
  },
]);

const modules = [EffectCards, Navigation];
</script>

<style scoped>
.team-swiper {
  width: 380px;
  height: 500px;
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
