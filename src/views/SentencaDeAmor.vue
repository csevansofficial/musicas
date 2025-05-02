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
import { ref } from 'vue'
import MusicDetailCard from '../components/MusicDetailCard.vue'
import LyricsBox from '../components/LyricsBox.vue'
import LyricsContent from '@/components/LyricsContent.vue'

export default {
  name: 'SentencaDeAmor',
  components: {
    MusicDetailCard,
    LyricsBox,
    LyricsContent
  },
  setup() {
    const lyrics = ref([
      {
        id: 1,
        text: 'Sentença de amor, sentença de amor',
        translation: 'Sentence of love, sentence of love'
      },
      {
        id: 2,
        text: 'Sentença de amor, sentença de amor',
        translation: 'Sentence of love, sentence of love'
      },
      {
        id: 3,
        text: 'Sentença de amor, sentença de amor',
        translation: 'Sentence of love, sentence of love'
      }
    ])

    return {
      lyrics
    }
  },
  data() {
    return {
      sections: [
        {
          type: 'verse',
          lines: [
            'Fui alvo da mão dos homens',
            'Fui pó lançado ao chão',
            'Senti a dor do desprezo',
            'Rotulado sem compaixão'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Por olhos, em si mesmos',
            'Cheios de razão',
            'O silêncio era lâmina',
            'As vozes, navalha',
            'Que ferem o coração'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Mas o silêncio do Justo',
            'Me envolveu com Sua verdade'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Disseram que eu não era digno',
            'Que meu nome era ferida',
            'Pisaram em minha história',
            'Como quem apaga a vida'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Mas o Cristo me olhou sem pedra',
            'Sem desprezo ou condenação',
            'E Seu olhar foi a ponte',
            'Do abismo à redenção'
          ]
        },
        {
          type: 'chorus',
          lines: [
            'Quem me julga é Deus',
            'Não os olhos da multidão',
            'Sou barro nas mãos do Oleiro',
            'Já não me molda o desprezo',
            'Nem me prende o que ficou pra trás',
            'Pois em Cristo fui formado',
            'E Ele me chama de filho',
            'Filho da Sua paz'
          ]
        },
        {
          type: 'verse',
          lines: [
            'As vozes ainda ecoam',
            'Mas agora sei quem sou',
            'Sou a mulher perdoada',
            'Sou o homem que Ele tocou'
          ]
        },
        {
          type: 'verse',
          lines: [
            'O vazio perdeu força',
            'Na luz da Sua compaixão',
            'Que liberta e dá perdão'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Não sou o erro que cometi',
            'Nem a acusação que escutei',
            'Sou imagem restaurada',
            'Pelo Amor que me perdoou'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Os dedos ainda apontam',
            'Mas meu espírito já não cai',
            'Pois o Mestre me ergueu',
            'E Seu poder me satisfaz'
          ]
        },
        {
          type: 'chorus',
          lines: [
            'Quem me julga é Deus',
            'E Sua sentença é amor',
            'Ele escreve no chão da alma',
            'Palavras que apagam a dor'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Fui ferido, mas sou cura',
            'Fui perdido, mas encontrei',
            'A liberdade em Jesus Cristo',
            'Agora sei que vivo para um Rei'
          ]
        },
        {
          type: 'chorus',
          lines: [
            'Quem me julga é Deus',
            'E Sua sentença é amor',
            'Ele escreve no chão da alma',
            'Palavras que apagam a dor'
          ]
        },
        {
          type: 'verse',
          lines: [
            'Fui ferido, mas sou cura',
            'Fui perdido, mas encontrei',
            'A liberdade em Jesus Cristo',
            'Agora sei que vivo para um Rei'
          ]
        },
        {
          type: 'outro',
          lines: [
            'Ao fim de tudo',
            'Oro que também quem me feriu',
            'Se liberte da sua própria dor',
            'Pois só quem foi perdoado',
            'Sabe o peso dessa dor',
            'E conhece o poder do Seu Amor'
          ]
        }
      ]
    }
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