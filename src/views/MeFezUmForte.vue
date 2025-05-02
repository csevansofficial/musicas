<template>
  <div class="container">
    <MusicDetailCard
      title="Me Fez Um Forte"
      image="/imagens/me-fez-um-forte.jpg"
      spotifyUrl="#"
      deezerUrl="#"
      appleMusicUrl="#"
      amazonMusicUrl="#"
      youtubeMusicUrl="#"
      tidalUrl="#"
      youtubeUrl="#"
    >
      <template #description>
        <p>Uma música que celebra a força que vem de Deus. Com letras que expressam a superação e a fé, esta canção nos convida a confiar no poder divino que nos fortifica nos momentos mais difíceis.</p>
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
  name: 'MeFezUmForte',
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
            'Quando a força me faltou',
            'E o cansaço me venceu',
            'Foi Teu poder que me ergueu',
            'E a fé me sustentou'
          ]
        },
        {
          type: 'chorus',
          lines: [
            'Me fez um forte',
            'Me fez um forte',
            'Me fez um forte',
            'Em Ti eu sou'
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
            'Me fez um forte',
            'Me fez um forte',
            'Me fez um forte',
            'Em Ti eu sou'
          ]
        },
        {
          type: 'outro',
          lines: [
            'Me fez um forte',
            'Me fez um forte',
            'Me fez um forte',
            'Em Ti eu sou'
          ]
        }
      ]
    }
  },
  metaInfo: {
    title: 'Me Fez Um Forte - C. S. Evans',
    meta: [
      { name: 'description', content: 'Me Fez Um Forte - Uma música que celebra a força que vem de Deus. Música de C. S. Evans.' },
      { property: 'og:type', content: 'music.song' },
      { property: 'og:title', content: 'Me Fez Um Forte - C. S. Evans' },
      { property: 'og:description', content: 'Me Fez Um Forte - Uma música que celebra a força que vem de Deus. Música de C. S. Evans.' },
      { property: 'og:image', content: 'https://csevans.com/imagens/me-fez-um-forte.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Me Fez Um Forte - Capa do single' },
      { property: 'og:url', content: 'https://csevans.com/me-fez-um-forte' },
      { property: 'og:site_name', content: 'C. S. Evans' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Me Fez Um Forte - C. S. Evans' },
      { property: 'twitter:description', content: 'Me Fez Um Forte - Uma música que celebra a força que vem de Deus. Música de C. S. Evans.' },
      { property: 'twitter:image', content: 'https://csevans.com/imagens/me-fez-um-forte.jpg' }
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
</style> 