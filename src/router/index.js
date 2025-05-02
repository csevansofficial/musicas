import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MeFezUmForte from '../views/MeFezUmForte.vue'
import SentencaDeAmor from '../views/SentencaDeAmor.vue'
import ReinoChegou from '../views/ReinoChegou.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'C. S. Evans - Músicas',
      metaTags: [
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
    }
  },
  {
    path: '/me-fez-um-forte',
    name: 'MeFezUmForte',
    component: MeFezUmForte,
    meta: {
      title: 'Me Fez Um Forte - C. S. Evans',
      metaTags: [
        { name: 'description', content: 'Me Fez Um Forte - Uma música que celebra a força que vem de Deus. Música de C. S. Evans.' },
        { property: 'og:type', content: 'music.song' },
        { property: 'og:title', content: 'Me Fez Um Forte - C. S. Evans' },
        { property: 'og:description', content: 'Me Fez Um Forte - Uma música que celebra a força que vem de Deus. Música de C. S. Evans.' },
        { property: 'og:image', content: 'https://csevans.netlify.app/imagens/me-fez-um-forte.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Me Fez Um Forte - Capa do single' },
        { property: 'og:url', content: 'https://csevans.netlify.app/me-fez-um-forte' },
        { property: 'og:site_name', content: 'C. S. Evans' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: 'Me Fez Um Forte - C. S. Evans' },
        { property: 'twitter:description', content: 'Me Fez Um Forte - Uma música que celebra a força que vem de Deus. Música de C. S. Evans.' },
        { property: 'twitter:image', content: 'https://csevans.netlify.app/imagens/me-fez-um-forte.jpg' }
      ]
    }
  },
  {
    path: '/sentenca-de-amor',
    name: 'SentencaDeAmor',
    component: SentencaDeAmor,
    meta: {
      title: 'Sentença de Amor - C. S. Evans',
      metaTags: [
        { name: 'description', content: 'Sentença de Amor - Uma música que fala ao coração. Música de C. S. Evans.' },
        { property: 'og:type', content: 'music.song' },
        { property: 'og:title', content: 'Sentença de Amor - C. S. Evans' },
        { property: 'og:description', content: 'Sentença de Amor - Uma música que fala ao coração. Música de C. S. Evans.' },
        { property: 'og:image', content: 'https://csevans.netlify.app/imagens/sentenca-de-amor.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Sentença de Amor - Capa do single' },
        { property: 'og:url', content: 'https://csevans.netlify.app/sentenca-de-amor' },
        { property: 'og:site_name', content: 'C. S. Evans' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: 'Sentença de Amor - C. S. Evans' },
        { property: 'twitter:description', content: 'Sentença de Amor - Uma música que fala ao coração. Música de C. S. Evans.' },
        { property: 'twitter:image', content: 'https://csevans.netlify.app/imagens/sentenca-de-amor.jpg' }
      ]
    }
  },
  {
    path: '/o-dia-em-que-o-reino-chegou',
    name: 'ReinoChegou',
    component: ReinoChegou,
    meta: {
      title: 'O Dia em que o Reino Chegou - C. S. Evans',
      metaTags: [
        { name: 'description', content: 'O Dia em que o Reino Chegou - Uma celebração do Reino de Deus. Música de C. S. Evans.' },
        { property: 'og:type', content: 'music.song' },
        { property: 'og:title', content: 'O Dia em que o Reino Chegou - C. S. Evans' },
        { property: 'og:description', content: 'O Dia em que o Reino Chegou - Uma celebração do Reino de Deus. Música de C. S. Evans.' },
        { property: 'og:image', content: 'https://csevans.netlify.app/imagens/o-dia-em-que-o-reino-chegou.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'O Dia em que o Reino Chegou - Capa do single' },
        { property: 'og:url', content: 'https://csevans.netlify.app/o-dia-em-que-o-reino-chegou' },
        { property: 'og:site_name', content: 'C. S. Evans' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: 'O Dia em que o Reino Chegou - C. S. Evans' },
        { property: 'twitter:description', content: 'O Dia em que o Reino Chegou - Uma celebração do Reino de Deus. Música de C. S. Evans.' },
        { property: 'twitter:image', content: 'https://csevans.netlify.app/imagens/o-dia-em-que-o-reino-chegou.jpg' }
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 