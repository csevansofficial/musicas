<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
    aria-label="Voltar ao topo"
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
        d="M5 15l7-7 7 7"
      />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Estado para controlar a visibilidade do botão
const isVisible = ref(false);

// Função para rolar suavemente para o topo
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Função para verificar a posição de rolagem
const handleScroll = () => {
  isVisible.value = window.scrollY > 200; // Mostra o botão após 200px de rolagem
};

// Adiciona e remove o evento de rolagem
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Adiciona uma animação de fade-in para o botão */
button {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s, transform 0.3s;
}

button[aria-label="Voltar ao topo"]:hover {
  transform: translateY(0);
}

button[aria-label="Voltar ao topo"]:visible {
  opacity: 1;
  transform: translateY(0);
}
</style>