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
            'Quem no início me desprezou',
            'Não sabe que me fez mais forte',
            'Mas se soubesse disso antes',
            'Teria me dado outro trato',
            'Pra que eu tivesse outra sorte'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Quem me olhou de canto',
            'Hoje me vê de pé',
            'Pensou que eu ia tombar',
            'Mas eu fui firme na fé'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Desprezo virou tijolo',
            'Na parede da minha história',
            'E cada lágrima que eu chorei',
            'Hoje é parte da minha glória'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Quem me feriu com palavra',
            'Me ensinou a resistir',
            'Quem tentou apagar meu nome',
            'Fez meu nome ressurgir'
          ]
        },
        {
          type: 'chorus',
          lines: [
            'Se achavam que eu caía',
            'Não sabiam do meu Norte',
            'Me jogaram no deserto',
            'E lá Deus me fez um forte'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Se tivessem me elogiado',
            'Talvez eu fosse um outro alguém',
            'Mas na escola da rejeição',
            'Aprendi o valor de um amém'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Não precisei de aplauso',
            'Pra saber do meu valor',
            'Pois o barro rejeitado',
            'Pra Deus tem grande valor'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Cada não que eu recebi',
            'Foi empurrão pra eu subir',
            'Cada dor virou degrau',
            'Na escada do porvir'
          ]
        },
        {
          type: 'verse',
          lines: [
            'E quem zombou do meu começo',
            'Hoje até me faz sorrir',
            'Porque a força que me move',
            'Vem do Alto e me faz subir'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Quem me feriu com palavra',
            'Me ensinou a resistir',
            'Quem tentou apagar meu nome',
            'Fez meu nome ressurgir'
          ]
        },
        {
          type: 'chorus',
          lines: [
            'Se achavam que eu caía',
            'Não sabiam do meu Norte',
            'Me jogaram no deserto',
            'E lá Deus me fez um forte'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Quem no início me desprezou',
            'Não sabe que me fez mais forte',
            'Mas se soubesse disso antes',
            'Teria me dado outro trato',
            'Pra que eu tivesse outra sorte'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Hoje ando com passo firme',
            'No terreno da esperança',
            'O desprezo foi adubo',
            'Pra essa fé que nunca cansa'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Quem tentou me ver caído',
            'Agora me vê de pé',
            'Sou herança do impossível',
            'Estou aqui é para cantar'
          ]
        },
        {
          type: 'outro',
          lines: [
            'Sou herança do impossível',
            'Estou aqui é para cantar'
          ]
        }
      ]
    }
  },
  head: {
    title: 'Me Fez Um Forte - C. S. Evans',
    meta: [
      { name: 'description', content: 'Me Fez Um Forte - Uma música que celebra a força que vem de Deus. Música de C. S. Evans.' },
      { property: 'og:type', content: 'music.song' },
      { property: 'og:title', content: 'Me Fez Um Forte - C. S. Evans' },
      { property: 'og:description', content: 'Me Fez Um Forte - Uma música que celebra a força que vem de Deus. Música de C. S. Evans.' },
      { property: 'og:image', content: 'https://csevans.netlify.app/imagens/me-fez-um-forte.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Me Fez Um Forte - Capa do single' },
      { property: 'og:url', content: 'https://csevans.netlify.app/me-fez-um-forte' },
      { property: 'og:site_name', content: 'C. S. Evans' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Me Fez Um Forte - C. S. Evans' },
      { property: 'twitter:description', content: 'Me Fez Um Forte - Uma música que celebra a força que vem de Deus. Música de C. S. Evans.' },
      { property: 'twitter:image', content: 'https://csevans.netlify.app/imagens/me-fez-um-forte.jpg' }
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