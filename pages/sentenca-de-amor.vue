<template>
  <div class="container mx-auto px-4 py-8">
    <MusicDetailCard
      title="Sentença de Amor"
      description="Uma música que fala ao coração. Uma canção sobre o amor incondicional de Deus e como Ele nos transforma através do Seu amor."
      image="/imagens/sentenca-de-amor.jpg"
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