<template>
  <NuxtLink :to="route" class="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow w-[320px] glass">
    <img
      :src="image"
      :alt="title"
      class="w-full aspect-square object-cover"
    >
    <div class="p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-2">{{ title }}</h2>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      <div class="flex justify-center space-x-2">
        <NuxtLink
          :to="route"
          class="inline-flex items-center justify-center px-4 py-2 rounded bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Ver Detalhes
        </NuxtLink>
        <button
          class="inline-flex items-center justify-center px-4 py-2 rounded border border-gray-300 text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Ouça um Trecho
        </button>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: true
  }
})
</script>