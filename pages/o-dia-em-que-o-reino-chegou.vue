<template>
  <div class="container mx-auto px-4 py-8">
    <MusicDetailCard
      title="O Dia em que o Reino Chegou"
      description="Uma celebração do Reino de Deus. Uma canção que fala sobre a presença de Deus em nossas vidas e como o Seu Reino se manifesta através de nós."
      image="/imagens/o-dia-em-que-o-reino-chegou.jpg"
      :platforms="platforms"
    />
  </div>
</template>

<script setup>
const platforms = {
  spotify: 'https://open.spotify.com/track/...',
  youtube: 'https://youtube.com/watch?v=...',
  deezer: 'https://deezer.com/track/...',
  appleMusic: 'https://music.apple.com/...',
  itunes: 'https://itunes.apple.com/...',
  amazonMusic: 'https://music.amazon.com/...',
  tidal: 'https://tidal.com/track/...'
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