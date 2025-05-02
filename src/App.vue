<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue'

export default {
  name: 'App',
  components: {
    DefaultLayout
  },
  head: {
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
  }
}
</script>

<style>
@import './assets/styles/variables.css';
@import './assets/styles/utilities.css';

#app {
  font-family: var(--font-family-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-gray-800);
  background: var(--color-gray-50);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-6);
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .container {
    padding: var(--space-4);
  }
}
</style> 