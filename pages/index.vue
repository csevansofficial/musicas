<template>
  <div class="min-h-screen flex flex-col">
    <main class="container mx-auto px-4 py-8 flex-grow">
      <h2 class="text-3xl font-bold text-center mb-8" lang="en"><i>Singles</i></h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center content-start">
        <MusicCard
          v-for="single in singles"
          :key="single.id"
          :title="single.title"
          :description="single.description"
          :image="single.image"
          :route="single.route"
          :spotifyLink="single.spotifyLink"
        />
      </div>
    </main>
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
    spotifyLink: 'https://open.spotify.com/embed/track/3TrhijH0n2Rd69IQ9rkCSG?utm_source=generator'
  },
  {
    id: 2,
    title: 'Sentença de Amor',
    description: 'Uma música que fala ao coração',
    image: '/imagens/sentenca-de-amor.jpg',
    route: '/sentenca-de-amor',
    spotifyLink: 'https://open.spotify.com/embed/track/2FEOgR19YJ6PfDIY4Z0Z7b?utm_source=generator'
  },
  {
    id: 3,
    title: 'O Dia em que o Reino Chegou',
    description: 'Uma celebração do Reino de Deus',
    image: '/imagens/o-dia-em-que-o-reino-chegou.jpg',
    route: '/o-dia-em-que-o-reino-chegou',
    spotifyLink: 'https://open.spotify.com/embed/track/5FBKxNqLiCaYLn4Ful6ING?utm_source=generator'
  }
];
</script>