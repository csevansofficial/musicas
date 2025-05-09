<template>
  <nav class="glass bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div>
          <NuxtLink to="/" class="flex items-center">
            <span class="font-semibold text-gray-700 text-lg"><Logo /></span>
          </NuxtLink>
        </div>

        <!-- Botão do menu para telas pequenas -->
        <button
          class="md:hidden text-gray-700 focus:outline-none"
          @click="toggleMenu"
          aria-label="Abrir menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

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
      </div>
    </div>

    <!-- Menu responsivo para telas pequenas -->
    <Teleport to="body">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-md flex flex-col justify-center items-center space-y-6 z-50"
        role="dialog"
        aria-modal="true"
      >
        <NuxtLink
          to="/"
          class="text-gray-700 hover:text-blue-600 text-xl font-medium transition-colors"
          @click="closeMenu"
        >
          Início
        </NuxtLink>
        <NuxtLink
          to="/devocionais"
          class="text-gray-700 hover:text-blue-600 text-xl font-medium transition-colors"
          @click="closeMenu"
        >
          Devocionais
        </NuxtLink>
        <NuxtLink
          to="/sobre"
          class="text-gray-700 hover:text-blue-600 text-xl font-medium transition-colors"
          @click="closeMenu"
        >
          Sobre
        </NuxtLink>
        <NuxtLink
          to="/contato"
          class="text-gray-700 hover:text-blue-600 text-xl font-medium transition-colors"
          @click="closeMenu"
        >
          Contato
        </NuxtLink>
        <!-- Botão para fechar o menu -->
        <button
          class="absolute top-4 right-4 text-gray-700 focus:outline-none"
          @click="closeMenu"
          aria-label="Fechar menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Teleport>
  </nav>
</template>

<script setup>
import { ref, watch } from "vue";
import Logo from "@/components/Logo.vue";

// Estado para controlar o menu responsivo
const isMenuOpen = ref(false);

// Função para abrir/fechar o menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Função para fechar o menu
const closeMenu = () => {
  isMenuOpen.value = false;
};

// Bloquear rolagem e navegação do site quando o menu está aberto
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden"; // Bloqueia a rolagem
    document.body.setAttribute("aria-hidden", "true"); // Torna o restante do site inacessível
  } else {
    document.body.style.overflow = ""; // Restaura a rolagem
    document.body.removeAttribute("aria-hidden"); // Remove a restrição de acessibilidade
  }
});
</script>

<style scoped>
/* Remover border-radius do elemento raiz */
nav {
  border-radius: 0;
}
</style>