<template>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden max-w-[320px] mx-auto glass">
    <img :src="image" alt="Capa da música" class="w-full aspect-square object-cover">

    <div class="p-6 text-center">
      <h2 class="text-xl font-bold text-gray-800 mb-4">{{ title }}</h2>

      <button class="bg-blue-600 text-white text-base font-medium px-4 py-2 rounded mb-6 hover:bg-blue-700 transition-colors">
        Ouça um Trecho
      </button>

      <div class="flex flex-wrap justify-center gap-2 mb-6">
        <a v-if="platforms.spotify"
           :href="platforms.spotify"
           target="_blank"
           class="inline-flex items-center justify-center px-4 py-2 rounded border border-gray-300 text-sm font-medium min-w-[8rem] hover:bg-gray-100 transition-colors">
          Spotify
        </a>

        <a v-if="platforms.appleMusic"
           :href="platforms.appleMusic"
           target="_blank"
           class="inline-flex items-center justify-center px-4 py-2 rounded border border-gray-300 text-sm font-medium min-w-[8rem] hover:bg-gray-100 transition-colors">
          Apple Music
        </a>

        <a v-if="platforms.deezer"
           :href="platforms.deezer"
           target="_blank"
           class="inline-flex items-center justify-center px-4 py-2 rounded border border-gray-300 text-sm font-medium min-w-[8rem] hover:bg-gray-100 transition-colors">
          Deezer
        </a>

        <a v-if="platforms.youtube"
           :href="platforms.youtube"
           target="_blank"
           class="inline-flex items-center justify-center px-4 py-2 rounded border border-gray-300 text-sm font-medium min-w-[8rem] hover:bg-gray-100 transition-colors">
          YouTube
        </a>

        <a v-if="platforms.amazonMusic"
           :href="platforms.amazonMusic"
           target="_blank"
           class="inline-flex items-center justify-center px-4 py-2 rounded border border-gray-300 text-sm font-medium min-w-[8rem] hover:bg-gray-100 transition-colors">
          Amazon Music
        </a>

        <a v-if="platforms.itunes"
           :href="platforms.itunes"
           target="_blank"
           class="inline-flex items-center justify-center px-4 py-2 rounded border border-gray-300 text-sm font-medium min-w-[8rem] hover:bg-gray-100 transition-colors">
          iTunes
        </a>

        <a v-if="platforms.tidal"
           :href="platforms.tidal"
           target="_blank"
           class="inline-flex items-center justify-center px-4 py-2 rounded border border-gray-300 text-sm font-medium min-w-[8rem] hover:bg-gray-100 transition-colors">
          Tidal
        </a>
      </div>

      <p class="text-sm text-gray-600 mt-4 leading-relaxed">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    image: String,
    platforms: {
      type: Object,
      default: () => ({
        spotify: '',
        youtube: '',
        deezer: '',
        appleMusic: '',
        amazonMusic: '',
        itunes: '',
        tidal: ''
      })
    }
  },
};
</script>