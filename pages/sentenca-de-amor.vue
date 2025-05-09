<template>
  <div class="container mx-auto px-4 py-8">
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
  spotifyPlayer: 'https://open.spotify.com/embed/album/6Uax1kIvDvUqL4w35eBQgU?utm_source=generator',
  spotify: 'https://open.spotify.com/intl-pt/album/6Uax1kIvDvUqL4w35eBQgU?si=gl7g4XfjTrOb7ikdXCjsNg',
  youtube: 'https://youtu.be/B_y0DKJBTKA?si=bhN9bB_wsIDQ526O',
  youtubeMusic: 'https://music.youtube.com/watch?v=B_y0DKJBTKA&si=W8FfJmJKfHzB5vLe',
  deezer: 'https://dzr.page.link/xmVg8g3w1R8zVgn88',
  appleMusic: 'https://music.apple.com/us/song/senten%C3%A7a-de-amor/1808729158',
  amazonMusic: 'https://music.amazon.com.br/albums/B0F4Y5LWPF?marketplaceId=A2Q3Y263D00KWC&musicTerritory=BR&ref=dm_sh_oZyI2OdHYzqkpSoluQOTp60vH',
  // itunes: 'https://itunes.apple.com/...',
  // tidal: 'https://tidal.com/track/...'
}

const title = 'Sentença de Amor'
const description = 'Uma canção que revela o juízo misericordioso de Cristo, onde a sentença é o perdão que transforma.'
const imagem = '/imagens/sentenca-de-amor.jpg'

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