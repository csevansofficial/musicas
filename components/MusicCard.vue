<template>
  <NuxtLink :to="route" class="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow w-[320px] glass">
    <img
      :src="image"
      :alt="title"
      class="w-full aspect-square object-cover"
    >
    <div class="p-2.5">
      <h2 class="text-xl font-bold text-gray-800 mb-2">{{ title }}</h2>
      <div class="flex flex-col items-center space-y-4">
        <NuxtLink
          :to="route"
          class="button text-sm"
        >
          Saiba mais e Ouça a Música
        </NuxtLink>
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