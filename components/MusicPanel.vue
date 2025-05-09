<template>
  <div class="bg-white shadow-lg rounded-lg p-4 glass">
    <div class="music-panel__header w-full bg-gray-800 text-white p-4 rounded-lg mb-4">
      <h2 class="text-xl font-bold mb-4">Ficha Técnica</h2>
      <ul class="list-disc list-inside text-gray-200 mb-6">
        <li><strong>Composição e Produção:</strong> {{ ficha.composicao }}</li>
        <li><strong>Gravação:</strong> {{ ficha.gravacao }}</li>
        <li><strong>Lançamento:</strong> {{ ficha.lancamento }}</li>
      </ul>
    </div>

    <h2 class="text-xl font-bold mb-4">Letra</h2>
    <p class="whitespace-pre-line text-gray-700 columns-1 sm:columns-2 lg:columns-3 gap-4 break-inside-avoid">
      {{ letra }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  ficha: {
    type: Object,
    required: true,
    default: () => ({
      composicao: '',
      producao: '',
      gravacao: '',
      lancamento: '',
    }),
  },
  letra: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.music-panel__header {
  background-color: #2d3748; /* Cor mais escura (cinza) */
  color: #ffffff; /* Texto branco */
  padding: 1rem; /* Espaçamento interno */
  border-radius: 0.5rem; /* Cantos arredondados */
  margin-bottom: 1rem; /* Espaçamento inferior */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra leve */
}

p {
  break-inside: avoid; /* Evita que o parágrafo seja quebrado entre colunas */
}
</style>