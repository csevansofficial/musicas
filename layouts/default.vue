<template>
  <div class="min-h-screen flex flex-col relative">
    <NavBar />

    <main class="flex-1 py-8 flex justify-center items-center">
      <div class="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <NuxtPage />
      </div>
    </main>

    <Footer />
    <ScrollToTopButton />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import ScrollToTopButton from "@/components/ScrollToTopButton.vue";
</script>

<style>
body {
  font-family: var(--font-sans);
}
</style>