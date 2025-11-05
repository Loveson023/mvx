<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

function handleSubmit() {
  console.log('Form submitted:', state)
  alert('Thank you for contacting us! Our team will reach out soon.')
}
</script>

<template>
  <section class="w-full flex flex-col items-center justify-center py-12  max-sm:px-4">
    <div class="text-center mb-8 max-w-2xl">
      <h2 class="text-3xl uppercase font-light mb-2">Let’s Begin Your Real Estate Journey
</h2>
      <p class="text-gray-400">
Whether you’re searching for your next investment, a luxury home, or an exclusive opportunity — our team is ready to assist.      </p>
    </div>

    <div class=" mavrix-gradient-border p-8 backdrop-blur-sm w-full max-w-lg">
      <UForm :state="state" class="flex flex-col gap-4" @submit.prevent="handleSubmit">
        <UFormField label="Full Name" name="name" required>
          <UInput
            v-model="state.name"
            placeholder="John Doe"
            class="w-full"
            :ui="{ base: 'input-mavrix' }"
          />
        </UFormField>

        <UFormField label="Email Address" name="email" required>
          <UInput
            v-model="state.email"
            type="email"
            placeholder="john@example.com"
            class="w-full"
            :ui="{ base: 'input-mavrix' }"
          />
        </UFormField>

        <UFormField label="Phone Number" name="phone">
          <UInput
            v-model="state.phone"
            type="tel"
            placeholder="+971 50 123 4567"
            class="w-full"
            :ui="{ base: 'input-mavrix' }"
          />
        </UFormField>

        <UFormField label="Subject" name="subject">
          <UInput
            v-model="state.subject"
            placeholder="Property Enquiry"
            class="w-full"
            :ui="{ base: 'input-mavrix' }"
          />
        </UFormField>

        <UFormField label="Message" name="message" required>
          <UTextarea
            v-model="state.message"
            placeholder="Tell us what you’re looking for..."
            rows="4"
            class="w-full"
            :ui="{ base: 'input-textarea' }"
          />
        </UFormField>

        <UButton
          label="Enquire Now"
          type="submit"
          variant="soft"
          class="button-mavrix w-full text-center flex items-center justify-center mt-2"
        />
      </UForm>
    </div>
  </section>
</template>
