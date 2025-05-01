<template>
  <section class="singles" aria-labelledby="singles-title">
    <h3 id="singles-title">🎶 Singles</h3>
    <div class="card-grid" role="list">
      <router-link v-for="single in singles" 
         :key="single.id" 
         :to="single.route" 
         class="card-link"
         role="listitem"
         :aria-label="'Abrir música ' + single.title + ' - ' + single.description">
        <MusicCard
          :title="single.title"
          :description="single.description"
          :image="single.image"
        />
      </router-link>
    </div>
  </section>
</template>

<script>
import MusicCard from '../components/MusicCard.vue'

export default {
  name: 'Home',
  components: {
    MusicCard
  },
  data() {
    return {
      singles: [
        {
          id: 1,
          title: 'Me Fez Um Forte',
          description: 'Uma jornada de superação pela fé.',
          image: '/imagens/me-fez-um-forte.jpg',
          route: '/me-fez-um-forte'
        },
        {
          id: 5,
          title: 'Sentença de Amor',
          description: 'Uma música que fala ao coração.',
          image: '/imagens/sentenca-de-amor.jpg',
          route: '/sentenca-de-amor'
        },
        {
          id: 6,
          title: 'O Dia em que o Reino Chegou',
          description: 'Uma celebração do Reino de Deus.',
          image: '/imagens/o-dia-em-que-o-reino-chegou.jpg',
          route: '/o-dia-em-que-o-reino-chegou'
        }
      ]
    }
  }
}
</script>

<style scoped>
.singles {
  padding: 2rem 1rem;
}

#singles-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.75rem;
  color: #333;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}
</style> 