<template>
  <section class="music-page">
    <MusicCard
      title="Me Fez Um Forte"
      description="Uma jornada de superação pela fé."
      image="/imagens/me-fez-um-forte.jpg"
    >
      <!-- Aqui podemos adicionar conteúdo adicional no futuro -->
    </MusicCard>
  </section>
</template>

<script>
import MusicCard from '../components/MusicCard.vue'

export default {
  name: 'MeFezUmForte',
  components: {
    MusicCard
  },
  metaInfo: {
    title: 'Me Fez Um Forte - C. S. Evans',
    meta: [
      { name: 'description', content: 'Me Fez Um Forte - Uma jornada de superação pela fé. Música de C. S. Evans.' }
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