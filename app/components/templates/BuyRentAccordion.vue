<template>
  <section
    class="flex flex-col md:flex-row items-stretch justify-between bg-[#0e0d0d] text-white min-h-[80vh] overflow-hidden"
  >
    <!-- LEFT CONTENT -->
    <div
      class="flex-1 flex flex-col justify-center items-start border border-gray-700 p-8 md:p-16 relative z-10"
    >
      <div class="space-y-8 w-full">
        <div
          v-for="(property, index) in properties"
          :key="index"
          @mouseenter="active = property.type"
          @mouseleave="active = ''"
          @click="navigateTo('/projects')"
          class="group cursor-pointer transition-all duration-500"
        >
          <div class="flex items-center justify-between">
            <h2
              class="text-5xl md:text-6xl font-light tracking-tight transition-all duration-500"
              :class="active === property.type ? 'text-[#AF7554] opacity-100' : 'text-gray-500 opacity-60'"
            >
              {{ property.label }}
            </h2>
            <span
              class="w-10 h-[1px] transition-all duration-500"
              :class="active === property.type ? 'bg-[#AF7554]' : 'bg-gray-500/40'"
            ></span>
          </div>
        </div>

        <p
          class="text-gray-400 max-w-md leading-relaxed mt-10 transition-all duration-700"
          :class="active ? 'opacity-100' : 'opacity-70'"
        >
          Discover our curated collection of Dubai’s most luxurious apartments,
          villas, and townhouses — each crafted for refined living.
        </p>
      </div>
    </div>

    <!-- RIGHT IMAGE -->
    <div class="flex-1 relative overflow-hidden transition-all duration-700">
      <transition name="fade" mode="out-in">
        <NuxtLink :to="'/projects'" :key="currentImage">
          <img
            :src="currentImage"
            alt="Property"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 scale-105 hover:scale-110"
          />
        </NuxtLink>
      </transition>
      <div class="absolute inset-0 bg-black/40"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const properties = [
  { type: "apartments", label: "APARTMENTS", image: "/images/projects/2.jpg" },
  { type: "villas", label: "VILLAS", image: "/images/projects/4.jpg" },
  { type: "townhouses", label: "TOWNHOUSES", image: "/images/projects/5.jpg" },
  { type: "penthouses", label: "PENTHOUSES", image: "/images/projects/6.jpg" },
];

const active = ref("");

const currentImage = computed(() => {
  const activeItem = properties.find((p) => p.type === active.value);
  return activeItem ? activeItem.image : "/images/projects/1.jpg";
});

const navigateTo = (url) => {
  router.push(url);
};
</script>

<style scoped>
/* Image fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Optional: make the section feel smooth when switching */
section {
  transition: all 0.5s ease;
}
</style>
