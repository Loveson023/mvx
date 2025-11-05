<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

const state = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ name: 'name', message: 'Name is required' })
  if (!state.email) errors.push({ name: 'email', message: 'Email is required' })
  if (!state.phone) errors.push({ name: 'phone', message: 'Phone number is required' })
  if (!state.subject) errors.push({ name: 'subject', message: 'Subject is required' })
  if (!state.message) errors.push({ name: 'message', message: 'Message cannot be empty' })
  return errors
}

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<typeof state>) {
  toast.add({ title: 'Success', description: 'Your message has been submitted successfully!', color: 'success' })
  console.log(event.data)
}
</script>

<template>
<div class="w-7xl flex items-center">
  <UForm :validate="validate" :state="state" class="space-y-4 contact-form" @submit="onSubmit">
    <UFormField label="Full Name" name="name">
      <UInput v-model="state.name" class="contact-input" placeholder="Enter your full name" />
    </UFormField>

    <UFormField label="Email" name="email">
      <UInput v-model="state.email" type="email" class="contact-input" placeholder="Enter your email address" />
    </UFormField>

    <UFormField label="Phone" name="phone">
      <UInput v-model="state.phone" type="tel" class="contact-input" placeholder="Enter your phone number" />
    </UFormField>

    <UFormField label="Subject" name="subject">
      <UInput v-model="state.subject" class="contact-input" placeholder="Enter subject" />
    </UFormField>

    <UFormField label="Message" name="message">
      <UTextarea v-model="state.message" class="contact-textarea" placeholder="Write your message..." />
    </UFormField>

    <UButton type="submit" class="buttton-mavrix">
      Send Message
    </UButton>
  </UForm>
  </div>
</template>