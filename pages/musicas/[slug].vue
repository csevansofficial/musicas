<template>
  <div class="container mx-auto px-4 py-8">
    <MusicDetailCard
      :title="music.title"
      :description="music.description"
      :image="music.image"
      :spotify-url="music.spotifyUrl"
      :youtube-url="music.youtubeUrl"
      :youtube-music-url="music.youtubeMusicUrl"
      :deezer-url="music.deezerUrl"
      :apple-music-url="music.appleMusicUrl"
      :itunes-url="music.itunesUrl"
      :amazon-music-url="music.amazonMusicUrl"
      :tidal-url="music.tidalUrl"
    />
  </div>
</template>

<script setup>
const { slug } = useRoute().params

// Aqui você pode buscar os dados da música do seu backend ou API
const music = {
  title: 'Título da Música',
  description: 'Descrição da música...',
  image: '/imagens/music-placeholder.jpg',
  spotifyUrl: 'https://open.spotify.com/track/...',
  youtubeUrl: 'https://youtube.com/watch?v=...',
  youtubeMusicUrl: 'https://music.youtube.com/watch?v=...',
  deezerUrl: 'https://deezer.com/track/...',
  appleMusicUrl: 'https://music.apple.com/...',
  itunesUrl: 'https://itunes.apple.com/...',
  amazonMusicUrl: 'https://music.amazon.com/...',
  tidalUrl: 'https://tidal.com/track/...'
}

// Meta tags para SEO
useHead({
  title: `${music.title} | C. S. EVANS`,
  meta: [
    { name: 'description', content: music.description },
    { property: 'og:title', content: music.title },
    { property: 'og:description', content: music.description },
    { property: 'og:image', content: music.image },
    { property: 'og:type', content: 'music.song' }
  ]
})
</script> 