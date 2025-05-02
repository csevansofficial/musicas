<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white h-full flex flex-col">
    <div class="aspect-w-16 aspect-h-9">
      <img :src="image" :alt="title" class="w-full h-full object-cover">
    </div>
    <div class="px-6 py-4 flex-grow">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">{{ description }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <NuxtLink :to="route" class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Ver mais
      </NuxtLink>
    </div>
  </div>
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