<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div>
          <NuxtLink to="/" class="flex items-center">
            <span class="font-semibold text-gray-700 text-lg"><Logo/></span>
          </NuxtLink>
        </div>

        <!-- Links para desktop -->
        <div class="hidden md:flex space-x-6">
          <NuxtLink
            to="/"
            class="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Início
          </NuxtLink>
          <NuxtLink
            to="/devocionais"
            class="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Devocionais
          </NuxtLink>
          <NuxtLink
            to="/sobre"
            class="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Sobre
          </NuxtLink>
          <NuxtLink
            to="/contato"
            class="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contato
          </NuxtLink>
        </div>

        <!-- Botão do menu para dispositivos móveis -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="text-gray-700 focus:outline-none focus:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Menu para dispositivos móveis -->
      <div
        v-if="isMenuOpen"
        class="md:hidden flex flex-col space-y-2 py-2 border-t border-gray-200"
      >
        <NuxtLink
          to="/"
          class="text-gray-700 hover:text-blue-600 transition-colors px-4"
        >
          Início
        </NuxtLink>
        <NuxtLink
          to="/musicas"
          class="text-gray-700 hover:text-blue-600 transition-colors px-4"
        >
          Músicas
        </NuxtLink>
        <NuxtLink
          to="/sobre"
          class="text-gray-700 hover:text-blue-600 transition-colors px-4"
        >
          Sobre
        </NuxtLink>
        <NuxtLink
          to="/contato"
          class="text-gray-700 hover:text-blue-600 transition-colors px-4"
        >
          Contato
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

// Estado para controlar o menu móvel
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>