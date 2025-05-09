<template>
  <NuxtLink :to="route" class="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow w-[320px] glass flex flex-col justify-between h-full">
    <div class="p-4 flex-grow">
      <img
        :src="image"
        :alt="title"
        class="w-full aspect-square object-cover mb-4"
      />
      <h2 class="text-xl font-bold text-gray-800 mb-2">{{ title }}</h2>
      <p class="text-gray-600">{{ description }}</p>
    </div>
    <div class="p-4">
      <NuxtLink
        :to="route"
        class="button text-sm w-full text-center flex justify-center items-center h-12 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
      >
        Ouça a Música Completa e Saiba Mais
      </NuxtLink>
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
});
</script>