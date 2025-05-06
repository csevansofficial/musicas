<template>
  <div class="min-h-screen flex flex-col">
    <main class="container mx-auto px-4 py-8 flex-grow">
      <h2 class="text-3xl font-bold text-center mb-8">Devocionais</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center content-start">
        <Devocional1/>
      </div>
    </main>
  </div>
</template>

<script setup>
import Devocional1 from '~/devocionals/Devocional1.vue'
</script>