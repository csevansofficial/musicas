<template>
  <div class="container mx-auto px-4 py-8">
    <MusicDetailCard
      title="Me Fez Um Forte"
      description="Uma música que celebra a força que vem de Deus. Uma canção que fala sobre a transformação que acontece quando entregamos nossa vida ao Senhor."
      image="/imagens/me-fez-um-forte.jpg"
      :platforms="platforms"
    />
  </div>
</template>

<script setup>
const platforms = {
  spotify: 'https://open.spotify.com/track/...',
  youtube: 'https://youtube.com/watch?v=...',
  deezer: 'https://deezer.com/track/...',
  appleMusic: 'https://music.apple.com/...',
  itunes: 'https://itunes.apple.com/...',
  amazonMusic: 'https://music.amazon.com/...',
  tidal: 'https://tidal.com/track/...'
}

useHead({
  title: 'Me Fez Um Forte | C. S. Evans',
  meta: [
    { name: 'description', content: 'Uma música que celebra a força que vem de Deus' },
    { property: 'og:title', content: 'Me Fez Um Forte - C. S. Evans' },
    { property: 'og:description', content: 'Uma música que celebra a força que vem de Deus' },
    { property: 'og:image', content: '/imagens/me-fez-um-forte.jpg' },
    { property: 'og:type', content: 'music.song' }
  ]
})
</script>