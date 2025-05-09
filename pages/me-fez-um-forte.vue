<template>
  <div class="container mx-auto px-4 py-8">
    <MusicDetailCard
      title="Me Fez Um Forte"
      description="Uma música que celebra a força que vem de Deus. Uma canção que fala sobre a transformação que acontece quando entregamos nossa vida ao Senhor."
      image="/imagens/me-fez-um-forte.jpg"
      :platforms="platforms"
      :spotifyPlayer="platforms.spotifyPlayer"
    />
  </div>
</template>

<script setup>
const platforms = {
  spotify: 'https://open.spotify.com/intl-pt/track/3TrhijH0n2Rd69IQ9rkCSG?si=11994e1eee434990',
  spotifyPlayer: 'https://open.spotify.com/embed/track/3TrhijH0n2Rd69IQ9rkCSG?utm_source=generator',
  youtube: 'https://youtu.be/SRAN5uDGZWE?si=13WGUPZjY1BbPzHe',
  deezer: 'https://dzr.page.link/Xn1Bc6tonvXwG74X8',
  appleMusic: 'https://music.apple.com/us/song/me-fez-um-forte/1806039277',
  // itunes: 'https://itunes.apple.com/...',
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