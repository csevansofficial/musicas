<template>

  <div class="container mx-auto px-4 py-8">
    <MusicDetailCard
      title="O Dia em que o Reino Chegou"
      description="Uma celebração do Reino de Deus. Uma canção que fala sobre a presença de Deus em nossas vidas e como o Seu Reino se manifesta através de nós."
      image="/imagens/o-dia-em-que-o-reino-chegou.jpg"
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

useHead({
  title: 'O Dia em que o Reino Chegou | C. S. Evans',
  meta: [
    { name: 'description', content: 'Uma celebração do Reino de Deus' },
    { property: 'og:title', content: 'O Dia em que o Reino Chegou - C. S. Evans' },
    { property: 'og:description', content: 'Uma celebração do Reino de Deus' },
    { property: 'og:image', content: '/imagens/o-dia-em-que-o-reino-chegou.jpg' },
    { property: 'og:type', content: 'music.song' }
  ]
})
</script>