<template>
  <div class="min-h-screen flex flex-col">
    <main class="container mx-auto px-4 py-8 flex-grow">
      <h2 class="text-3xl font-bold text-center mb-8" lang="en"><i>Sobre</i></h2>
      <UnderConstruction />
    </main>
  </div>
</template>

<script setup>
import UnderConstruction from '@/components/UnderConstruction.vue'
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