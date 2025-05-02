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
          :link="single.route"
        />
      </router-link>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import MusicCard from '../components/MusicCard.vue'

export default {
  name: 'Home',
  components: {
    MusicCard
  },
  setup() {
    const singles = ref([
      {
        id: 1,
        title: 'Me Fez Um Forte',
        artist: 'C. S. Evans',
        cover: '/imagens/me-fez-um-forte.jpg',
        link: '/me-fez-um-forte'
      },
      {
        id: 2,
        title: 'Sentença de Amor',
        artist: 'C. S. Evans',
        cover: '/imagens/sentenca-de-amor.jpg',
        link: '/sentenca-de-amor'
      },
      {
        id: 3,
        title: 'O Dia em que o Reino Chegou',
        artist: 'C. S. Evans',
        cover: '/imagens/o-dia-em-que-o-reino-chegou.jpg',
        link: '/o-dia-em-que-o-reino-chegou'
      }
    ])

    return {
      singles
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
  gap: 3rem;
  max-width: 1000px;
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
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 