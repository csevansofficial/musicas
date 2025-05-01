<template>
  <div class="music-page">
    <div class="music-card-container">
      <MusicCard
        title="Sentença de Amor"
        description="Uma música que fala ao coração."
        image="/imagens/sentenca-de-amor.jpg"
      />
    </div>

    <LyricsBox>
      <LyricsContent :sections="lyricsSections" />
    </LyricsBox>
  </div>
</template>

<script>
import MusicCard from '../components/MusicCard.vue'
import LyricsBox from '../components/LyricsBox.vue'
import LyricsContent from '../components/LyricsContent.vue'

export default {
  name: 'SentencaDeAmor',
  components: {
    MusicCard,
    LyricsBox,
    LyricsContent
  },
  data() {
    return {
      lyricsSections: [
        {
          type: 'verse',
          lines: [
            'Fui alvo da mão dos homens',
            'Fui pó lançado ao chão',
            'Senti a dor do desprezo',
            'Rotulado sem compaixão',
            'Por olhos, em si mesmos',
            'Cheios de razão',
            'O silêncio era lâmina',
            'As vozes, navalha',
            'Que ferem o coração'
          ]
        },
        {
          type: 'chorus',
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
  },
  metaInfo: {
    title: 'Sentença de Amor - C. S. Evans',
    meta: [
      { name: 'description', content: 'Sentença de Amor - Uma música que fala ao coração. Música de C. S. Evans.' }
    ]
  }
}
</script>

<style scoped>
.music-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.music-card-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style> 