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
  spotifyPlayer: 'https://open.spotify.com/embed/track/5FBKxNqLiCaYLn4Ful6ING?utm_source=generator',
  spotify: 'https://open.spotify.com/intl-pt/track/5FBKxNqLiCaYLn4Ful6ING?si=b1577c6964644a28',
  deezer: 'https://dzr.page.link/BDtRwG16KXTiYB768',
  youtube: 'https://youtu.be/X2FhTtbxzHo?si=I8dSXn5Y0xwS7WyY',
  youtubeMusic: 'https://music.youtube.com/watch?v=X2FhTtbxzHo&si=kE2XvPtUuPBXW4a7',
  appleMusic: 'https://music.apple.com/us/song/o-dia-em-que-o-reino-chegou/1811187628',
  amazonMusic: 'https://music.amazon.com.br/albums/B0F6NZB839?marketplaceId=A2Q3Y263D00KWC&musicTerritory=BR&ref=dm_sh_VXmAg2GO1OL2zj9obJ3bWTmR9',
  // itunes: 'https://itunes.apple.com/...',
  // tidal: 'https://tidal.com/track/...'
}

const title = 'Sentença de Amor'
const description = 'Uma música profética que canta o futuro prometido por Jesus — quando os mansos herdarão a Terra.'
const imagem = '/imagens/o-dia-em-que-o-reino-chegou.jpg'

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