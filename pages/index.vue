<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="container mx-auto px-4 py-8 flex-grow">
      <h1 class="text-3xl font-bold text-center mb-8">Músicas</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MusicCard
          v-for="single in singles"
          :key="single.id"
          :title="single.title"
          :description="single.description"
          :image="single.image"
          :route="single.route"
        />
      </div>
    </main>
    <Footer />
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