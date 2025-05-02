<template>
  <div class="container mx-auto px-4 py-8">
    <MusicDetailCard
      title="O Dia em que o Reino Chegou"
      description="Uma celebração do Reino de Deus. Uma canção que fala sobre a presença de Deus em nossas vidas e como o Seu Reino se manifesta através de nós."
      image="/imagens/o-dia-em-que-o-reino-chegou.jpg"
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