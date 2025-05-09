<template>
  <div class="container mx-auto">
    <MusicDetailCard
      :title="title"
      :description="description"
      :image="imagem"
      :spotifyPlayer="platforms.spotifyPlayer"
      :platforms="platforms"
    />
  </div>
</template>

<script setup>
const platforms = {
  spotifyPlayer: 'https://open.spotify.com/embed/track/3TrhijH0n2Rd69IQ9rkCSG?utm_source=generator',
  spotify: 'https://open.spotify.com/intl-pt/track/3TrhijH0n2Rd69IQ9rkCSG?si=11994e1eee434990',
  deezer: 'https://dzr.page.link/Xn1Bc6tonvXwG74X8',
  youtube: 'https://youtu.be/SRAN5uDGZWE?si=13WGUPZjY1BbPzHe',
  youtubeMusic: 'https://music.youtube.com/watch?v=SRAN5uDGZWE&si=9nL9maKKvyw5BifO',
  appleMusic: 'https://music.apple.com/us/song/me-fez-um-forte/1806039277',
  amazonMusic: 'https://music.amazon.com.br/tracks/B0F3C9J2LP?marketplaceId=A2Q3Y263D00KWC&musicTerritory=BR&ref=dm_sh_uHk5EGLm2Zc20CvL3eXb0rbAc',
  // itunes: 'https://itunes.apple.com/...',
  // tidal: 'https://tidal.com/track/...'
}

const title = 'Me Fez Um Forte'
const description = 'Uma música que celebra a força que vem de Deus. Uma canção que fala sobre a transformação que acontece quando entregamos nossa vida ao Senhor.'
const imagem = '/imagens/me-fez-um-forte.jpg'

useHead({
  title: `${title} - C. S. Evans`,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: `${title} - C. S. Evans` },
    { property: 'og:description', content: description },
    { property: 'og:image', content: imagem },
    { property: 'og:type', content: 'music.song' }
  ]
})
</script>