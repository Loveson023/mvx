<template>
  <section class="min-h-screen bg-[#212121] pt-16 text-gray-200">
    <Divider />
    <Breadcrumbs />

    <div class="container mx-auto px-4">
      <!-- Loading -->
      <div v-if="pending" class="text-center text-gray-400 py-20 text-lg">
        Loading property details...
      </div>

      <!-- Error -->
      <div v-else-if="error" class="text-center text-red-500 py-20 text-lg">
        Failed to load property details. Please try again later.
      </div>

      <!-- Property Details -->
      <div
        v-else-if="property"
        class="bg-[#212121] shadow-lg overflow-hidden rounded-2xl"
      >
        <!-- Property Image -->
        <img
          :src="property.photos?.[0]?.full_path || 'https://placehold.co/1200x500'"
          alt="Property Image"
          class="w-full h-[450px] object-cover rounded-t-2xl"
        />

        <div class="p-6 md:p-10">
          <!-- Two Column Layout -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <!-- Left Column: Property Info -->
            <div class="md:col-span-2">
              <!-- Title and Location -->
              <h1 class="text-3xl md:text-4xl font-bold mb-2 text-gray-100">
                {{ property.title }}
              </h1>
              <div class="flex items-center gap-2 text-gray-400 mb-4">
                <MapPin class="w-5 h-5 text-mavrix" />
                <p>{{ property.location?.full_path || 'Dubai, UAE' }}</p>
              </div>

              <!-- Key Info -->
              <div
                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 text-gray-300"
              >
                <div class="flex items-center gap-2">
                  <Home class="w-5 h-5 text-mavrix" />
                  <span>{{ property.category || 'N/A' }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Layers class="w-5 h-5 text-mavrix" />
                  <span>{{ property.type || 'N/A' }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <BedDouble class="w-5 h-5 text-mavrix" />
                  <span>{{ property.bed?.name || 'N/A' }} Bedrooms</span>
                </div>
                <div class="flex items-center gap-2">
                  <Bath class="w-5 h-5 text-mavrix" />
                  <span>{{ property.bath?.name || 'N/A' }} Bathrooms</span>
                </div>
                <div class="flex items-center gap-2">
                  <DollarSign class="w-5 h-5 text-mavrix" />
                  <span>AED {{ property.price?.toLocaleString() || 'N/A' }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Layers class="w-5 h-5 text-mavrix" />
                  <span>{{ property.completion_status || 'Ready' }}</span>
                </div>
              </div>

              <!-- Description -->
              <div
                class="prose prose-invert max-w-none text-gray-300 mb-10"
                v-html="property.description"
              ></div>

              <!-- Amenities -->
              <div v-if="property.amenities?.length" class="mt-8">
                <h2 class="text-xl font-semibold text-gray-100 mb-4">
                  Amenities
                </h2>
                <div
                  class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
                >
                  <div
                    v-for="(amenity, index) in property.amenities"
                    :key="index"
                    class="flex items-center  button-mavrix-outline p-6 rounded-lg gap-2 text-gray-300 hover:text-mavrix transition"
                  >
                    <CheckCircle class="w-5 h-5 text-mavrix" />
                    <span>{{ amenity.name }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column: Agent Card -->
            <div
              class="bg-[#2a2a2a] p-6 sticky top-28 mavrix-gradient-border  h-fit flex flex-col gap-6"
            >
              <div class="flex items-center gap-4">
                <img
                  :src="property.user?.thumbnail_image_path || 'https://placehold.co/100x100'"
                  alt="Agent"
                  class="w-16 h-16 rounded-full object-cover border border-gray-600"
                />
                <div>
                  <p class="font-semibold text-gray-100">
                    {{ property.user?.name }}
                  </p>
                  <p class="text-sm text-gray-400">
                    {{ property.user?.designation }}
                  </p>
                  <p class="text-sm text-gray-400">
                    {{ property.user?.mobile }}
                  </p>
                </div>
              </div>

              <a
                :href="`tel:${property.user?.mobile}`"
                class="button-mavrix cursor-pointer text-white py-2 px-5 rounded-lg font-medium text-center"
              >
                Call Agent
              </a>

              <button
      @click="showPopup = true"
      class="button-mavrix-outline cursor-pointer text-white py-2 px-5 font-medium transition"
    >
      Enquire Now
    </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Not Found -->
      <div v-else class="text-center text-gray-400 py-20 text-lg">
        Property not found.
      </div>
    </div>

    <!-- Enquiry Popup -->
    <!-- <transition name="fade">
      <div
        v-if="showPopup"
        class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <div
          class="bg-[#2a2a2a] rounded-2xl p-6 w-[90%] max-w-md border border-gray-700 relative"
        >
          <button
            @click="showPopup = false"
            class="absolute top-3 right-3 text-gray-400 hover:text-white cursor-pointer"
          >
            ✕
          </button>

          <h2 class="text-xl font-semibold mb-4 text-gray-100">
            Enquire Now
          </h2>

          <form @submit.prevent="submitEnquiry" class="flex flex-col gap-4">
            <input
              v-model="form.name"
              type="text"
              placeholder="Your Name"
              class="bg-[#1f1f1f] border border-gray-700 rounded-lg p-3 text-gray-200"
              required
            />
            <input
              v-model="form.email"
              type="email"
              placeholder="Your Email"
              class="bg-[#1f1f1f] border border-gray-700 rounded-lg p-3 text-gray-200"
              required
            />
            <input
              v-model="form.phone"
              type="tel"
              placeholder="Your Phone"
              class="bg-[#1f1f1f] border border-gray-700 rounded-lg p-3 text-gray-200"
              required
            />
            <textarea
              v-model="form.message"
              class="bg-[#1f1f1f] border border-gray-700 rounded-lg p-3 text-gray-200 h-28"
              required
            ></textarea>

            <button
              type="submit"
              class="button-mavrix text-white py-3 cursor-pointer rounded-lg font-medium transition"
            >
              SUBMIT ENQUIRY
            </button>
          </form>
          <p v-if="successMessage" class="text-green-500">{{ successMessage }}</p>
          <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
        </div>
      </div>
    </transition> -->
 

    <!-- Reusable Enquiry Form -->
    <ListingsEnquiryForm
      v-if="property"
      :show="showPopup"
      :property="property"
      @close="showPopup = false"
    />
    <Divider />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { extractRefFromSlug } from '~/utils/slugify'
import { getListingByRef } from '~/services/listingsService'
import Divider from '~/components/templates/divider.vue'
import Breadcrumbs from '~/components/templates/breadcrumbs.vue'
import {
  BedDouble,
  Bath,
  Home,
  Layers,
  DollarSign,
  MapPin,
  CheckCircle,
} from 'lucide-vue-next'
import ListingsEnquiryForm from '~/components/forms/listings-enquiry-form.vue'

const route = useRoute()
const showPopup = ref(false)
// const form = ref({
//   name: '',
//   email: '',
//   phone: '',
//   message: '',
// })

const refNumber = extractRefFromSlug(route.params.slug)
const { data: property, pending, error } = await useAsyncData(
  `property-${refNumber}`,
  () => getListingByRef(refNumber)
)

// onMounted(() => {
//   if (property.value?.title) {
//     form.value.message = `Hi, I am interested in ${property.value.title}, reference_number: ${property.value.ref_number}, UUID: ${property.value.uuid}`
//   }
// })

// function submitEnquiry() {
//   console.log('Form submitted:', form.value)
//   alert('Enquiry submitted successfully!')
//   showPopup.value = false
// }
// const successMessage = ref('')
// const errorMessage = ref('')
// async function submitEnquiry() {
//   // Validate required fields
//   successMessage.value = 'Thank you for your enquiry. Our team will get back to you soon.'
//   errorMessage.value = 'Please fill all required fields before submitting.'
//   if (!form.value.name || !form.value.email || !form.value.phone) {
//     alert('Please fill all required fields before submitting.')
//     return
//   }

//   const payload = {
//     name: form.value.name,
//     email: form.value.email,
//     mobile: form.value.phone, // CRM expects "mobile"
//     message: form.value.message || '',
//     // listing_uuid: property.value?.uuid || null,
//     // listing_ref_number: property.value?.ref_number || null,
//   }

//   try {
//     const response = await fetch(
//       'https://crm.mavrixproperties.ae/backend/api/create-lead-from-external-form/source/95b54971-0026-4fa6-949a-4053dda21830',
//       {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       }
//     )

//     const data = await response.json()

//     if (response.ok) {
//       alert(`${data.successMessage}`)
//       // Reset form
//       form.value = { name: '', email: '', phone: '', message: '' }
//       showPopup.value = false
//     } else {
//       console.error('CRM Error:', data)
//       alert(`❌ Failed: ${data.errorMessage }`)
//     }
//   } catch (error) {
//     console.error('Network Error:', error)
//     alert('❌ Network error. Please try again later.')
//   }
// }

useHead(() => ({
  title: property.value?.title || 'Property Details | Mavrix Properties',
  meta: [
    {
      name: 'description',
      content:
        property.value?.description?.slice(0, 150) ||
        'Explore exclusive Dubai properties at Nexus Properties.',
    },
  ],
}))
</script>

<style scoped>
.prose-invert h2,
.prose-invert p {
  color: #d1d1d1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.bg-mavrix {
  background-color: #c5a15e;
}
</style>
