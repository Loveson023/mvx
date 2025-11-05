<template>
  <section class="bg-black text-white">
    <div class="container mx-auto text-center bg-black">
      <!-- Heading -->
      <!-- <h2 class="text-3xl md:text-4xl tracking-widest font-light mb-16">
        CONTACT US
      </h2> -->

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-16 w-7xl max-sm:w-full items-center justify-center mx-auto align-middle bg-transparent p-16 mavrix-gradient-border">
        <!-- Email -->
        <div class="flex flex-col items-center gap-4 ">
          <Mail class="w-8 h-8 text-[#AE7353]" />
          <h3 class="text-lg font-light tracking-wide">E-Mail</h3>
          <a
            href="mailto:info@mavrixproperties.ae"
            class="text-[#AE7353] hover:underline transition-all duration-300"
          >
            info@mavrixproperties.ae
          </a>
        </div>

        <!-- Phone -->
        <div class="flex flex-col items-center gap-4 ">
          <Phone class="w-8 h-8 text-[#AE7353]" />
          <h3 class="text-lg font-light tracking-wide">Call us</h3>
          <button
            @click="showPhone = !showPhone"
            class="button-mavrix-outline border-[#AE7353] text-[#AE7353] tracking-wide uppercase px-8 py-3 rounded-md hover:bg-[#AE7353] hover:text-white transition-all duration-300"
          >
            {{ showPhone ? '+971 50 123 4567' : 'Show Phone Number' }}
          </button>
        </div>

        <!-- Address -->
        <div class="flex flex-col items-center gap-4 ">
          <MapPin class="w-8 h-8 text-[#AE7353]" />
          <h3 class="text-lg font-light tracking-wide">Mailing Address</h3>
          <p class="text-gray-400 max-w-xs leading-relaxed">
            14th Floor, Westbury Tower, Business Bay,<br />
            Dubai, UAE, PO Box 340777
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Mail, Phone, MapPin } from "lucide-vue-next";

const showPhone = ref(false);
</script>

<style scoped>
section {
  background: linear-gradient(to bottom, #0b0b0b, #111);
}
</style>
