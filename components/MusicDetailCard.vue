<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
    <div class="flex flex-col md:flex-row">
      <!-- Imagem à esquerda -->
      <div class="md:w-1/3">
        <div class="aspect-square">
          <img :src="image" :alt="title" class="w-full h-full object-cover">
        </div>
      </div>
      
      <!-- Conteúdo à direita -->
      <div class="md:w-2/3 p-6">
        <h1 class="text-2xl font-bold mb-4 text-gray-800">{{ title }}</h1>
        <p class="text-base text-gray-600 mb-6">{{ description }}</p>
        
        <!-- Botões de streaming -->
        <div class="space-y-2 max-w-[240px]">
          <!-- Spotify -->
          <a
            :href="spotifyUrl"
            target="_blank"
            class="flex items-center w-full px-4 py-1.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#1DB954] hover:bg-[#1ed760] transition-colors duration-200"
          >
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm0 3.6c4.68 0 8.4 3.72 8.4 8.4 0 4.68-3.72 8.4-8.4 8.4-4.68 0-8.4-3.72-8.4-8.4 0-4.68 3.72-8.4 8.4-8.4zm0 1.2c-3.96 0-7.2 3.24-7.2 7.2 0 3.96 3.24 7.2 7.2 7.2 3.96 0 7.2-3.24 7.2-7.2 0-3.96-3.24-7.2-7.2-7.2zm0 1.2c3.3 0 6 2.7 6 6 0 3.3-2.7 6-6 6-3.3 0-6-2.7-6-6 0-3.3 2.7-6 6-6z"/>
            </svg>
            Ouvir no Spotify
          </a>
          
          <!-- YouTube -->
          <a
            :href="youtubeUrl"
            target="_blank"
            class="flex items-center w-full px-4 py-1.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#FF0000] hover:bg-[#cc0000] transition-colors duration-200"
          >
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Ouvir no YouTube
          </a>
          
          <!-- YouTube Music -->
          <a
            :href="youtubeMusicUrl"
            target="_blank"
            class="flex items-center w-full px-4 py-1.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#FF0000] hover:bg-[#cc0000] transition-colors duration-200"
          >
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Ouvir no YouTube Music
          </a>
          
          <!-- Deezer -->
          <a
            :href="deezerUrl"
            target="_blank"
            class="flex items-center w-full px-4 py-1.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#00C7F2] hover:bg-[#00b2d9] transition-colors duration-200"
          >
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm0 3.6c4.68 0 8.4 3.72 8.4 8.4 0 4.68-3.72 8.4-8.4 8.4-4.68 0-8.4-3.72-8.4-8.4 0-4.68 3.72-8.4 8.4-8.4zm0 1.2c-3.96 0-7.2 3.24-7.2 7.2 0 3.96 3.24 7.2 7.2 7.2 3.96 0 7.2-3.24 7.2-7.2 0-3.96-3.24-7.2-7.2-7.2zm0 1.2c3.3 0 6 2.7 6 6 0 3.3-2.7 6-6 6-3.3 0-6-2.7-6-6 0-3.3 2.7-6 6-6z"/>
            </svg>
            Ouvir no Deezer
          </a>
          
          <!-- Apple Music -->
          <a
            :href="appleMusicUrl"
            target="_blank"
            class="flex items-center w-full px-4 py-1.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#FA243C] hover:bg-[#e62036] transition-colors duration-200"
          >
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm0 3.6c4.68 0 8.4 3.72 8.4 8.4 0 4.68-3.72 8.4-8.4 8.4-4.68 0-8.4-3.72-8.4-8.4 0-4.68 3.72-8.4 8.4-8.4zm0 1.2c-3.96 0-7.2 3.24-7.2 7.2 0 3.96 3.24 7.2 7.2 7.2 3.96 0 7.2-3.24 7.2-7.2 0-3.96-3.24-7.2-7.2-7.2zm0 1.2c3.3 0 6 2.7 6 6 0 3.3-2.7 6-6 6-3.3 0-6-2.7-6-6 0-3.3 2.7-6 6-6z"/>
            </svg>
            Ouvir no Apple Music
          </a>
          
          <!-- iTunes -->
          <a
            :href="itunesUrl"
            target="_blank"
            class="flex items-center w-full px-4 py-1.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#FA243C] hover:bg-[#e62036] transition-colors duration-200"
          >
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm0 3.6c4.68 0 8.4 3.72 8.4 8.4 0 4.68-3.72 8.4-8.4 8.4-4.68 0-8.4-3.72-8.4-8.4 0-4.68 3.72-8.4 8.4-8.4zm0 1.2c-3.96 0-7.2 3.24-7.2 7.2 0 3.96 3.24 7.2 7.2 7.2 3.96 0 7.2-3.24 7.2-7.2 0-3.96-3.24-7.2-7.2-7.2zm0 1.2c3.3 0 6 2.7 6 6 0 3.3-2.7 6-6 6-3.3 0-6-2.7-6-6 0-3.3 2.7-6 6-6z"/>
            </svg>
            Ouvir no iTunes
          </a>
          
          <!-- Amazon Music -->
          <a
            :href="amazonMusicUrl"
            target="_blank"
            class="flex items-center w-full px-4 py-1.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#00A8E1] hover:bg-[#0097c8] transition-colors duration-200"
          >
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm0 3.6c4.68 0 8.4 3.72 8.4 8.4 0 4.68-3.72 8.4-8.4 8.4-4.68 0-8.4-3.72-8.4-8.4 0-4.68 3.72-8.4 8.4-8.4zm0 1.2c-3.96 0-7.2 3.24-7.2 7.2 0 3.96 3.24 7.2 7.2 7.2 3.96 0 7.2-3.24 7.2-7.2 0-3.96-3.24-7.2-7.2-7.2zm0 1.2c3.3 0 6 2.7 6 6 0 3.3-2.7 6-6 6-3.3 0-6-2.7-6-6 0-3.3 2.7-6 6-6z"/>
            </svg>
            Ouvir na Amazon Music
          </a>
          
          <!-- Tidal -->
          <a
            :href="tidalUrl"
            target="_blank"
            class="flex items-center w-full px-4 py-1.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#000000] hover:bg-gray-800 transition-colors duration-200"
          >
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm0 3.6c4.68 0 8.4 3.72 8.4 8.4 0 4.68-3.72 8.4-8.4 8.4-4.68 0-8.4-3.72-8.4-8.4 0-4.68 3.72-8.4 8.4-8.4zm0 1.2c-3.96 0-7.2 3.24-7.2 7.2 0 3.96 3.24 7.2 7.2 7.2 3.96 0 7.2-3.24 7.2-7.2 0-3.96-3.24-7.2-7.2-7.2zm0 1.2c3.3 0 6 2.7 6 6 0 3.3-2.7 6-6 6-3.3 0-6-2.7-6-6 0-3.3 2.7-6 6-6z"/>
            </svg>
            Ouvir no Tidal
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  spotifyUrl: {
    type: String,
    required: true
  },
  youtubeUrl: {
    type: String,
    required: true
  },
  youtubeMusicUrl: {
    type: String,
    required: true
  },
  deezerUrl: {
    type: String,
    required: true
  },
  appleMusicUrl: {
    type: String,
    required: true
  },
  itunesUrl: {
    type: String,
    required: true
  },
  amazonMusicUrl: {
    type: String,
    required: true
  },
  tidalUrl: {
    type: String,
    required: true
  }
})
</script> 