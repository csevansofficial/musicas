<template>
  <div class="container mx-auto px-4 py-8">
    <MusicDetailCard
      title="Sentença de Amor"
      description="Uma música que fala ao coração. Uma canção sobre o amor incondicional de Deus e como Ele nos transforma através do Seu amor."
      image="/imagens/sentenca-de-amor.jpg"
      spotify-url="https://open.spotify.com/track/..."
      youtube-url="https://youtube.com/watch?v=..."
      youtube-music-url="https://music.youtube.com/watch?v=..."
      deezer-url="https://deezer.com/track/..."
      apple-music-url="https://music.apple.com/..."
      itunes-url="https://itunes.apple.com/..."
      amazon-music-url="https://music.amazon.com/..."
      tidal-url="https://tidal.com/track/..."
    />
  </div>
</template>

<script setup>
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