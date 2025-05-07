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
const singles = [
  {
    id: 1,
    title: 'Me Fez Um Forte',
    description: 'Uma música que celebra a força que vem de Deus',
    image: '/imagens/me-fez-um-forte.jpg',
    route: '/me-fez-um-forte',
    platforms: [
      { name: 'YouTube', icon: '/imagens/icons/youtube.png', link: 'https://youtube.com' },
      { name: 'YouTube Music', icon: '/imagens/icons/youtube-music.png', link: 'https://music.youtube.com' },
      { name: 'Spotify', icon: '/imagens/icons/spotify-correct.png', link: 'https://spotify.com' },
      { name: 'Apple Music', icon: '/imagens/icons/apple-music-correct.png', link: 'https://music.apple.com' }
    ]
  },
  {
    id: 2,
    title: 'Sentença de Amor',
    description: 'Uma música que fala ao coração',
    image: '/imagens/sentenca-de-amor.jpg',
    route: '/sentenca-de-amor',
    platforms: [
      { name: 'YouTube', icon: '/imagens/icons/youtube.png', link: 'https://youtube.com' },
      { name: 'YouTube Music', icon: '/imagens/icons/youtube-music.png', link: 'https://music.youtube.com' },
      { name: 'Spotify', icon: '/imagens/icons/spotify-correct.png', link: 'https://spotify.com' },
      { name: 'Apple Music', icon: '/imagens/icons/apple-music-correct.png', link: 'https://music.apple.com' }
    ]
  },
  {
    id: 3,
    title: 'O Dia em que o Reino Chegou',
    description: 'Uma celebração do Reino de Deus',
    image: '/imagens/o-dia-em-que-o-reino-chegou.jpg',
    route: '/o-dia-em-que-o-reino-chegou',
    platforms: [
      { name: 'YouTube', icon: '/imagens/icons/youtube.png', link: 'https://youtube.com' },
      { name: 'YouTube Music', icon: '/imagens/icons/youtube-music.png', link: 'https://music.youtube.com' },
      { name: 'Spotify', icon: '/imagens/icons/spotify-correct.png', link: 'https://spotify.com' },
      { name: 'Apple Music', icon: '/imagens/icons/apple-music-correct.png', link: 'https://music.apple.com' }
    ]
  }
]
</script>