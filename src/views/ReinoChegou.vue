<template>
  <div class="container">
    <MusicDetailCard
      title="O Dia em que o Reino Chegou"
      image="/imagens/reino-chegou.jpg"
      spotifyUrl="#"
      deezerUrl="#"
      appleMusicUrl="#"
      amazonMusicUrl="#"
      youtubeMusicUrl="#"
      tidalUrl="#"
      youtubeUrl="#"
    >
      <template #description>
        <p>Uma música profética que celebra a chegada do Reino de Deus. Com letras que expressam a esperança e a alegria da presença divina, esta canção nos convida a viver a realidade do Reino aqui e agora.</p>
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
  name: 'ReinoChegou',
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
            'O dia em que o Reino chegou',
            'A terra se alegrou',
            'O céu se abriu',
            'E a glória desceu'
          ]
        },
        {
          type: 'chorus',
          lines: [
            'Aleluia, aleluia',
            'O Reino chegou',
            'Aleluia, aleluia',
            'O Reino está aqui'
          ]
        },
        {
          type: 'verse',
          lines: [
            'O dia em que o Reino chegou',
            'A morte se rendeu',
            'A vida venceu',
            'E a luz brilhou'
          ]
        },
        {
          type: 'chorus',
          lines: [
            'Aleluia, aleluia',
            'O Reino chegou',
            'Aleluia, aleluia',
            'O Reino está aqui'
          ]
        },
        {
          type: 'outro',
          lines: [
            'O Reino está aqui',
            'O Reino está aqui',
            'O Reino está aqui',
            'O Reino está aqui'
          ]
        }
      ]
    }
  },
  metaInfo: {
    title: 'O Dia em que o Reino Chegou - C. S. Evans',
    meta: [
      { name: 'description', content: 'O Dia em que o Reino Chegou - Uma celebração do Reino de Deus. Música de C. S. Evans.' },
      { property: 'og:type', content: 'music.song' },
      { property: 'og:title', content: 'O Dia em que o Reino Chegou - C. S. Evans' },
      { property: 'og:description', content: 'O Dia em que o Reino Chegou - Uma celebração do Reino de Deus. Música de C. S. Evans.' },
      { property: 'og:image', content: 'https://csevans.com/imagens/o-dia-em-que-o-reino-chegou.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'O Dia em que o Reino Chegou - Capa do single' },
      { property: 'og:url', content: 'https://csevans.com/o-dia-em-que-o-reino-chegou' },
      { property: 'og:site_name', content: 'C. S. Evans' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'O Dia em que o Reino Chegou - C. S. Evans' },
      { property: 'twitter:description', content: 'O Dia em que o Reino Chegou - Uma celebração do Reino de Deus. Música de C. S. Evans.' },
      { property: 'twitter:image', content: 'https://csevans.com/imagens/o-dia-em-que-o-reino-chegou.jpg' }
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