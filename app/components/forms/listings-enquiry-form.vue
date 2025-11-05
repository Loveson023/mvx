<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div
        class="bg-[#2a2a2a] rounded-2xl p-6 w-[90%] max-w-md border border-gray-700 relative"
      >
        <button
          @click="$emit('close')"
          class="absolute top-3 right-3 text-gray-400 hover:text-white cursor-pointer"
        >
          ✕
        </button>

        <h2 class="text-xl font-semibold mb-4 text-gray-100">Enquire Now</h2>

        <form @submit.prevent="submitForm" class="flex flex-col gap-4">
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

        <p v-if="successMessage" class="text-green-500 mt-3">{{ successMessage }}</p>
        <p v-if="errorMessage" class="text-red-500 mt-3">{{ errorMessage }}</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  show: { type: Boolean, required: true },
  property: { type: Object, required: true },
})

const emit = defineEmits(['close'])

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})
const successMessage = ref('')
const errorMessage = ref('')

// Auto-fill message when property is passed
watch(
  () => props.property,
  (newVal) => {
    if (newVal?.title) {
      form.value.message = `Hi, I am interested in ${newVal.title}, reference_number: ${newVal.ref_number}, UUID: ${newVal.uuid}`
    }
  },
  { immediate: true }
)

async function submitForm() {
  successMessage.value = ''
  errorMessage.value = ''

  if (!form.value.name || !form.value.email || !form.value.phone) {
    errorMessage.value = 'Please fill all required fields before submitting.'
    return
  }

  const payload = {
    name: form.value.name,
    email: form.value.email,
    mobile: form.value.phone,
    message: form.value.message,
    listing_uuid: props.property?.uuid || null,
    listing_ref_number: props.property?.ref_number || null,
  }

  try {
    const response = await fetch(
      'https://crm.mavrixproperties.ae/backend/api/create-lead-from-external-form/source/95b54971-0026-4fa6-949a-4053dda21830',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    )

    const data = await response.json()

    if (response.ok) {
      successMessage.value = 'Thank you! Our team will get back to you soon.'
      form.value = { name: '', email: '', phone: '', message: '' }
      setTimeout(() => emit('close'), 1500)
    } else {
      console.error('CRM Error:', data)
      errorMessage.value = data?.message || 'Failed to submit. Please try again.'
    }
  } catch (error) {
    console.error('Network Error:', error)
    errorMessage.value = 'Network error. Please try again later.'
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
