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
import MusicCard from '@/components/MusicCard.vue'
import { useHead } from '@vueuse/head'

export default {
  name: 'Home',
  components: {
    MusicCard
  },
  setup() {
    useHead({
      title: 'C. S. Evans - Músicas',
      meta: [
        { name: 'description', content: 'Músicas de C. S. Evans' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'C. S. Evans - Músicas' },
        { property: 'og:description', content: 'Músicas de C. S. Evans' },
        { property: 'og:url', content: 'https://csevans.netlify.app/' },
        { property: 'og:image', content: 'https://csevans.netlify.app/imagens/o-caminho.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'C. S. Evans - Músicas' },
        { property: 'og:site_name', content: 'C. S. Evans' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: 'C. S. Evans - Músicas' },
        { property: 'twitter:description', content: 'Músicas de C. S. Evans' },
        { property: 'twitter:url', content: 'https://csevans.netlify.app/' },
        { property: 'twitter:image', content: 'https://csevans.netlify.app/imagens/o-caminho.jpg' }
      ]
    })
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