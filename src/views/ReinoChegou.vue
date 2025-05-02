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
            'O dia desperta sem medo ou pressa',
            'Os passos seguem sem hesitar',
            'O vento sopra sem segredos',
            'E a paz respira em cada olhar'
          ]
        },
        {
          type: 'verse',
          lines: [
            'O ontem foi como poeira',
            'Se ergueu girou e partiu',
            'Hoje a terra é chão seguro',
            'Pois seguimos Seu caminho e luz'
          ]
        },
        {
          type: 'chorus',
          lines: [
            'O Reino chegou',
            'Porque ouvimos porque seguimos',
            'Como rio que encontra o mar',
            'Como céu que beija a terra'
          ]
        },
        {
          type: 'verse',
          lines: [
            'As portas dormem sem cadeados',
            'As ruas cantam sem temor',
            'As mães não choram filhos ausentes',
            'E os filhos correm sem dor'
          ]
        },
        {
          type: 'verse',
          lines: [
            'As mãos já não se erguem em golpe',
            'Os lares são âncoras de paz',
            'O tempo passa sem tormentos',
            'Pois nos rendemos ao Senhor'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Houve um tempo de pranto e açoites',
            'De medo trancado em um lar',
            'De gritos na noite vazia',
            'De passos que não iam voltar'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Mas a guerra perdeu sua voz',
            'E a sede encontrou seu fim',
            'Porque obedecemos à Tua Justiça',
            'E o Amor fez morada em mim'
          ]
        },
        {
          type: 'chorus',
          lines: [
            'O Reino chegou',
            'Porque ouvimos porque seguimos',
            'Como rio que encontra o mar',
            'Como céu que beija a terra'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Além do véu o sol ainda brilha',
            'O tempo nos chama a estrada é viva',
            'Nos braços do vento reencontro a luz',
            'E sigo a canção que me conduz'
          ]
        },
        {
          type: 'verse',
          lines: [
            'A noite vem como um abraço',
            'E a terra adormece em paz',
            'Os pais descansam sem medo',
            'Os filhos já sonham com mais'
          ]
        },
        {
          type: 'verse',
          lines: [
            'As grades viraram memórias tão velhas',
            'Os muros são só ruínas do que passou',
            'Pois vivemos segundo Tua Lei',
            'E o Amor sustenta a todos nós'
          ]
        },
        {
          type: 'verse',
          lines: [
            'O dia se fecha sem sombras',
            'Pois tudo é pleno em luz',
            'A vida repousa serena',
            'Pois amanhã',
            'Ela volta a dançar'
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