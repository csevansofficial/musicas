<template>
  <div class="min-h-screen flex flex-col relative">
    <NavBar />

    <main class="flex-1 py-8 flex justify-center items-center">
      <div class="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <p class="bg-white shadow-lg rounded-lg p-4 glass">Todas as músicas disponíveis para ouvir gratuitamente no meu canal do YouTube:<br/>
          <a href="https://www.youtube.com/@csevansofficial/releases" target="_blank">C. S. Evans - Canal Oficial no Youtube</a>
        </p>
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