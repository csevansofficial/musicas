<template>
  <div class="container mx-auto px-4 py-8">
    <MusicDetailCard
      title="Me Fez Um Forte"
      description="Uma música que celebra a força que vem de Deus. Uma canção que fala sobre a transformação que acontece quando entregamos nossa vida ao Senhor."
      image="/imagens/me-fez-um-forte.jpg"
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