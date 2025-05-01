<template>
  <section class="music-page">
    <MusicCard
      title="O Dia em que o Reino Chegou"
      description="Uma celebração do Reino de Deus."
      image="/imagens/o-dia-em-que-o-reino-chegou.jpg"
    >
      <!-- Aqui podemos adicionar conteúdo adicional no futuro -->
    </MusicCard>
  </section>
</template>

<script>
import MusicCard from '../components/MusicCard.vue'

export default {
  name: 'ReinoChegou',
  components: {
    MusicCard
  },
  metaInfo: {
    title: 'O Dia em que o Reino Chegou - C. S. Evans',
    meta: [
      { name: 'description', content: 'O Dia em que o Reino Chegou - Uma celebração do Reino de Deus. Música de C. S. Evans.' }
    ]
  }
}
</script>

<style scoped>
.music-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style> 