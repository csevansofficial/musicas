<template>
  <div class="min-h-screen flex flex-col">
    <main class="container mx-auto px-4 py-8 flex-grow">
      <h2 class="text-3xl font-bold text-center mb-8" lang="en"><i>Álbuns</i></h2>
      <div class="flex justify-center items-center min-h-[410px]">
        <iframe
          class="rounded-lg"
          src="https://open.spotify.com/embed/album/7uZGH4W7qTMhv50XbjA0Mp?utm_source=generator"
          width="100%"
          height="410"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <br><br>
      <h2 class="text-3xl font-bold text-center mb-8" lang="en"><i>Singles</i></h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center content-start">
        <MusicCard
          v-for="single in singles"
          :key="single.id"
          :title="single.title"
          :description="single.description"
          :image="single.image"
          :route="single.route"
          :spotifyLink="single.spotifyLink"
          class="w-[320px]"
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
  },
  {
    id: 2,
    title: 'Sentença de Amor',
    description: 'Uma música que fala ao coração',
    image: '/imagens/sentenca-de-amor.jpg',
    route: '/sentenca-de-amor',
  },
  {
    id: 3,
    title: 'O Dia em que o Reino Chegou',
    description: 'Uma celebração do Reino de Deus',
    image: '/imagens/o-dia-em-que-o-reino-chegou.jpg',
    route: '/o-dia-em-que-o-reino-chegou',
  }
];
</script>