<template>
  <div class="card" role="article">
    <div class="card-content">
      <div class="card-header">
        <div class="card-image">
          <img :src="image" 
               :alt="'Capa do single ' + title"
               width="400"
               height="400"
               loading="lazy">
        </div>
        <div class="card-info">
          <h2>{{ title }}</h2>
          <div class="streaming-buttons">
            <a :href="spotifyUrl" 
               class="streaming-button spotify" 
               :class="{ 'disabled': spotifyUrl === '#' }"
               :title="spotifyUrl === '#' ? 'Indisponível no Spotify' : 'Ouvir no Spotify'"
               :aria-disabled="spotifyUrl === '#'">
              <img src="/icons/spotify.svg" alt="Spotify" width="24" height="24">
              <span>Ouvir no Spotify</span>
            </a>
            <a :href="deezerUrl" 
               class="streaming-button deezer" 
               :class="{ 'disabled': deezerUrl === '#' }"
               :title="deezerUrl === '#' ? 'Indisponível no Deezer' : 'Ouvir no Deezer'"
               :aria-disabled="deezerUrl === '#'">
              <img src="/icons/deezer.svg" alt="Deezer" width="24" height="24">
              <span>Ouvir no Deezer</span>
            </a>
            <a :href="appleMusicUrl" 
               class="streaming-button apple-music" 
               :class="{ 'disabled': appleMusicUrl === '#' }"
               :title="appleMusicUrl === '#' ? 'Indisponível no Apple Music' : 'Ouvir no Apple Music'"
               :aria-disabled="appleMusicUrl === '#'">
              <img src="/icons/apple-music.svg" alt="Apple Music" width="24" height="24">
              <span>Ouvir no Apple Music</span>
            </a>
            <a :href="amazonMusicUrl" 
               class="streaming-button amazon-music" 
               :class="{ 'disabled': amazonMusicUrl === '#' }"
               :title="amazonMusicUrl === '#' ? 'Indisponível no Amazon Music' : 'Ouvir no Amazon Music'"
               :aria-disabled="amazonMusicUrl === '#'">
              <img src="/icons/amazon-music.svg" alt="Amazon Music" width="24" height="24">
              <span>Ouvir no Amazon Music</span>
            </a>
            <a :href="youtubeMusicUrl" 
               class="streaming-button youtube-music" 
               :class="{ 'disabled': youtubeMusicUrl === '#' }"
               :title="youtubeMusicUrl === '#' ? 'Indisponível no YouTube Music' : 'Ouvir no YouTube Music'"
               :aria-disabled="youtubeMusicUrl === '#'">
              <img src="/icons/youtube-music.svg" alt="YouTube Music" width="24" height="24">
              <span>Ouvir no YouTube Music</span>
            </a>
            <a :href="tidalUrl" 
               class="streaming-button tidal" 
               :class="{ 'disabled': tidalUrl === '#' }"
               :title="tidalUrl === '#' ? 'Indisponível no Tidal' : 'Ouvir no Tidal'"
               :aria-disabled="tidalUrl === '#'">
              <img src="/icons/tidal.svg" alt="Tidal" width="24" height="24">
              <span>Ouvir no Tidal</span>
            </a>
            <a :href="youtubeUrl" 
               class="streaming-button youtube" 
               :class="{ 'disabled': youtubeUrl === '#' }"
               :title="youtubeUrl === '#' ? 'Indisponível no YouTube' : 'Ouvir no YouTube'"
               :aria-disabled="youtubeUrl === '#'">
              <img src="/icons/youtube.svg" alt="YouTube" width="24" height="24">
              <span>Ouvir no YouTube</span>
            </a>
          </div>
        </div>
      </div>
      <div class="card-description">
        <slot name="description">
          <p>{{ description }}</p>
        </slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicDetailCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      required: true
    },
    spotifyUrl: {
      type: String,
      default: '#'
    },
    deezerUrl: {
      type: String,
      default: '#'
    },
    appleMusicUrl: {
      type: String,
      default: '#'
    },
    amazonMusicUrl: {
      type: String,
      default: '#'
    },
    youtubeMusicUrl: {
      type: String,
      default: '#'
    },
    tidalUrl: {
      type: String,
      default: '#'
    },
    youtubeUrl: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style scoped>
.card {
  background: var(--color-white);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.card-content {
  padding: var(--space-6);
  box-sizing: border-box;
  width: 100%;
}

.card-header {
  display: flex;
  gap: var(--space-8);
  margin-bottom: var(--space-6);
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
}

.card-image {
  flex: 0 0 200px;
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  max-width: 200px;
  width: 200px;
  height: 200px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
}

.card h2 {
  margin: 0 0 var(--space-4) 0;
  font-size: var(--font-size-2xl);
  color: var(--color-gray-800);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
}

.streaming-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  box-sizing: border-box;
}

.streaming-button {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--border-radius-lg);
  background: var(--color-gray-100);
  transition: transform var(--transition-normal), 
              background-color var(--transition-normal), 
              opacity var(--transition-normal);
  text-decoration: none;
  color: var(--color-gray-800);
  font-weight: var(--font-weight-medium);
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
}

.streaming-button:hover:not(.disabled) {
  transform: translateX(4px);
  background-color: var(--color-gray-200);
}

.streaming-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.streaming-button img {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.streaming-button span {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
}

.card-description {
  margin-top: var(--space-6);
}

.card p {
  margin: 0;
  color: var(--color-gray-600);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
}

@media (max-width: 768px) {
  .card-header {
    flex-direction: column;
    gap: var(--space-4);
    padding: 0;
  }

  .card-image {
    flex: 0 0 auto;
    width: 200px;
    height: 200px;
    max-width: 200px;
    margin: 0 auto;
  }

  .streaming-buttons {
    width: 100%;
    padding: 0;
  }
}
</style> 