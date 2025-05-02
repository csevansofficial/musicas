<template>
  <div class="container">
    <MusicDetailCard
      title="Sentença de Amor"
      image="/imagens/sentenca-de-amor.jpg"
      spotifyUrl="#"
      deezerUrl="#"
      appleMusicUrl="#"
      amazonMusicUrl="#"
      youtubeMusicUrl="#"
      tidalUrl="#"
      youtubeUrl="#"
    >
      <template #description>
        <p>Uma música que fala ao coração sobre o amor incondicional de Deus. Com letras que expressam a profundidade do amor divino, esta canção nos convida a refletir sobre a graça e misericórdia que nos são oferecidas todos os dias.</p>
      </template>
    </MusicDetailCard>

    <LyricsBox>
      <LyricsContent :sections="sections" />
    </LyricsBox>
  </div>
</template>

<script>
import MusicDetailCard from '@/components/MusicDetailCard.vue'
import LyricsBox from '@/components/LyricsBox.vue'
import LyricsContent from '@/components/LyricsContent.vue'

export default {
  name: 'SentencaDeAmor',
  components: {
    MusicDetailCard,
    LyricsBox,
    LyricsContent
  },
  data() {
    return {
      sections: [
        {
          type: 'verse',
          lines: [
            'Quando o mundo me condenou',
            'E a culpa me perseguiu',
            'Foi Teu amor que me alcançou',
            'E a graça me resgatou'
          ]
        },
        {
          type: 'chorus',
          lines: [
            'É sentença de amor',
            'É sentença de amor',
            'É sentença de amor',
            'Que me livrou'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Quando a dor me consumiu',
            'E a tristeza me venceu',
            'Foi Teu amor que me curou',
            'E a paz me envolveu'
          ]
        },
        {
          type: 'chorus',
          lines: [
            'É sentença de amor',
            'É sentença de amor',
            'É sentença de amor',
            'Que me livrou'
          ]
        },
        {
          type: 'outro',
          lines: [
            'É sentença de amor',
            'É sentença de amor',
            'É sentença de amor',
            'Que me livrou'
          ]
        }
      ]
    }
  },
  metaInfo: {
    title: 'Sentença de Amor - C. S. Evans',
    meta: [
      { name: 'description', content: 'Sentença de Amor - Uma música que fala ao coração. Música de C. S. Evans.' },
      { property: 'og:type', content: 'music.song' },
      { property: 'og:title', content: 'Sentença de Amor - C. S. Evans' },
      { property: 'og:description', content: 'Sentença de Amor - Uma música que fala ao coração. Música de C. S. Evans.' },
      { property: 'og:image', content: 'https://csevans.com/imagens/sentenca-de-amor.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Sentença de Amor - Capa do single' },
      { property: 'og:url', content: 'https://csevans.com/sentenca-de-amor' },
      { property: 'og:site_name', content: 'C. S. Evans' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Sentença de Amor - C. S. Evans' },
      { property: 'twitter:description', content: 'Sentença de Amor - Uma música que fala ao coração. Música de C. S. Evans.' },
      { property: 'twitter:image', content: 'https://csevans.com/imagens/sentenca-de-amor.jpg' }
    ]
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 1rem;
}

.music-card-container {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}
</style> 