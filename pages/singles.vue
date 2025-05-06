<template>
  <div class="container mx-auto px-4 py-8 space-y-12">
    <h1 class="text-3xl font-bold text-center text-gray-900 mb-8">Singles</h1>
    
    <MusicDetailCard
      title="Me Fez Um Forte"
      description="Uma música que celebra a força que vem de Deus. Uma canção que fala sobre a transformação que acontece quando entregamos nossa vida ao Senhor."
      image="/imagens/me-fez-um-forte.jpg"
      :platforms="meFezUmForte.platforms"
    />

    <MusicDetailCard
      title="Sentença de Amor"
      description="Uma música que fala ao coração. Uma canção sobre o amor incondicional de Deus e como Ele nos transforma através do Seu amor."
      image="/imagens/sentenca-de-amor.jpg"
      :platforms="sentencaDeAmor.platforms"
    />

    <MusicDetailCard
      title="O Dia em que o Reino Chegou"
      description="Uma celebração do Reino de Deus. Uma canção que fala sobre a presença de Deus em nossas vidas e como o Seu Reino se manifesta através de nós."
      image="/imagens/o-dia-em-que-o-reino-chegou.jpg"
      :platforms="oDiaEmQueOReinoChegou.platforms"
    />
  </div>
</template>

<script setup>
const meFezUmForte = {
  platforms: {
    spotify: 'https://open.spotify.com/track/...',
    youtube: 'https://youtube.com/watch?v=...',
    deezer: 'https://deezer.com/track/...',
    appleMusic: 'https://music.apple.com/...',
    itunes: 'https://itunes.apple.com/...',
    amazonMusic: 'https://music.amazon.com/...',
    tidal: 'https://tidal.com/track/...'
  }
}

const sentencaDeAmor = {
  platforms: {
    spotify: 'https://open.spotify.com/track/...',
    youtube: 'https://youtube.com/watch?v=...',
    deezer: 'https://deezer.com/track/...',
    appleMusic: 'https://music.apple.com/...',
    itunes: 'https://itunes.apple.com/...',
    amazonMusic: 'https://music.amazon.com/...',
    tidal: 'https://tidal.com/track/...'
  }
}

const oDiaEmQueOReinoChegou = {
  platforms: {
    spotify: 'https://open.spotify.com/track/...',
    youtube: 'https://youtube.com/watch?v=...',
    deezer: 'https://deezer.com/track/...',
    appleMusic: 'https://music.apple.com/...',
    itunes: 'https://itunes.apple.com/...',
    amazonMusic: 'https://music.amazon.com/...',
    tidal: 'https://tidal.com/track/...'
  }
}

useHead({
  title: 'Singles | C. S. Evans',
  meta: [
    { name: 'description', content: 'Coleção de singles lançados por C. S. Evans' },
    { property: 'og:title', content: 'Singles - C. S. Evans' },
    { property: 'og:description', content: 'Coleção de singles lançados por C. S. Evans' },
    { property: 'og:type', content: 'music.playlist' }
  ]
})
</script>