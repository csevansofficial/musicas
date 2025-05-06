<template>
  <div class="container mx-auto px-4 py-8">
    <MusicDetailCard
      title="Sentença de Amor"
      description="Uma música que fala ao coração. Uma canção sobre o amor incondicional de Deus e como Ele nos transforma através do Seu amor."
      image="/imagens/sentenca-de-amor.jpg"
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
  title: 'Sentença de Amor | C. S. Evans',
  meta: [
    { name: 'description', content: 'Uma música que fala ao coração' },
    { property: 'og:title', content: 'Sentença de Amor - C. S. Evans' },
    { property: 'og:description', content: 'Uma música que fala ao coração' },
    { property: 'og:image', content: '/imagens/sentenca-de-amor.jpg' },
    { property: 'og:type', content: 'music.song' }
  ]
})
</script>