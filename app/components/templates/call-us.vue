<script setup lang="ts">
const openChat = () => {
  // This function calls Chatbase’s internal openChat API
  if (window.ChatbaseAPI?.openChat) {
    window.ChatbaseAPI.openChat()
  } else {
    alert('Chatbot is still loading. Please try again in a moment.')
  }
}
</script>

<template>
  <div
    class="fixed bottom-4 right-6 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-3"
  >
    <UButton
      icon="i-lucide-message-circle"
      label="Chat with us"
      color="neutral"
      variant="subtle"
      @click="openChat"
    />
  </div>
</template>
