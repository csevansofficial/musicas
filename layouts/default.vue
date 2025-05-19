<template>
  <div class="min-h-screen flex flex-col relative">
    <NavBar />

    <main class="flex-1 py-8 flex justify-center items-center">
      <div class="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-4">
        <p class="bg-white shadow-lg rounded-lg p-4 glass">Todas as músicas disponíveis para ouvir gratuitamente no meu canal do YouTube:<br/>
          <a href="https://www.youtube.com/@csevansofficial/releases" target="_blank">
            <button class="inline-flex items-center justify-center gap-2
         h-10 px-5
         rounded-md
         bg-blue-600 text-white
         hover:bg-blue-700
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
         transition-colors duration-200 ease-in-out
         disabled:opacity-50 disabled:pointer-events-none">Canal Oficial no Youtube</button>
          </a>
        </p>
        <NuxtPage />
      </div>
    </main>

    <Footer />
    <ScrollToTopButton />
  </div>
</template>
z
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