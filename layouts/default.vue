<template>
  <div class="min-h-screen flex flex-col glass">
    <NavBar />
    <NuxtPage />
    <Footer />
    <ScrollToTopButton />
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all border border-red-500"
      aria-label="Voltar ao topo"
    ></button>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import ScrollToTopButton from "@/components/ScrollToTopButton.vue";
</script>