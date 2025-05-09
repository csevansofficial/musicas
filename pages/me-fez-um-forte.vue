<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col lg:flex-row lg:space-x-8">
      <!-- Card principal -->
      <div class="flex-grow">
        <MusicDetailCard
          :title="title"
          :description="description"
          :image="imagem"
          :spotifyPlayer="platforms.spotifyPlayer"
          :platforms="platforms"
        />
      </div>

      <!-- Painel de Ficha Técnica -->
      <MusicPanel
        class="mt-8 lg:mt-0 lg:w-2/3"
        :ficha="fichaTecnica"
        :letra="letra"
      />
    </div>
  </div>
</template>

<script setup>
import MusicPanel from "@/components/MusicPanel.vue";

const platforms = {
  spotifyPlayer: 'https://open.spotify.com/embed/track/3TrhijH0n2Rd69IQ9rkCSG?utm_source=generator',
  spotify: 'https://open.spotify.com/intl-pt/track/3TrhijH0n2Rd69IQ9rkCSG?si=11994e1eee434990',
  deezer: 'https://dzr.page.link/Xn1Bc6tonvXwG74X8',
  youtube: 'https://youtu.be/SRAN5uDGZWE?si=13WGUPZjY1BbPzHe',
  youtubeMusic: 'https://music.youtube.com/watch?v=SRAN5uDGZWE&si=9nL9maKKvyw5BifO',
  appleMusic: 'https://music.apple.com/us/song/me-fez-um-forte/1806039277',
  amazonMusic: 'https://music.amazon.com.br/tracks/B0F3C9J2LP?marketplaceId=A2Q3Y263D00KWC&musicTerritory=BR&ref=dm_sh_uHk5EGLm2Zc20CvL3eXb0rbAc',
};

const title = 'Me Fez Um Forte';
const description = 'Uma música que celebra a força que vem de Deus. Uma canção que fala sobre a transformação que acontece quando entregamos nossa vida ao Senhor.';
const imagem = '/imagens/me-fez-um-forte.jpg';

const fichaTecnica = {
  composicao: 'C. S. Evans',
  producao: 'C. S. Evans',
  gravacao: 'ECS Music',
  lancamento: '2025',
};

const letra = `
Quem no início me desprezou
Não sabe que me fez mais forte
Mas se soubesse disso antes
Teria me dado outro trato
Pra que eu tivesse outra sorte

Quem me olhou de canto
Hoje me vê de pé
Pensou que eu ia tombar
Mas eu fui firme na fé

Desprezo virou tijolo
Na parede da minha história
E cada lágrima que eu chorei
Hoje é parte da minha glória

Quem me feriu com palavra
Me ensinou a resistir
Quem tentou apagar meu nome
Fez meu nome ressurgir

Se achavam que eu caía
Não sabiam do meu Norte
Me jogaram no deserto
E lá Deus me fez um forte

Se tivessem me elogiado
Talvez eu fosse um outro alguém
Mas na escola da rejeição
Aprendi o valor de um amém

Não precisei de aplauso
Pra saber do meu valor
Pois o barro rejeitado
Pra Deus tem grande valor

Cada não que eu recebi
Foi empurrão pra eu subir
Cada dor virou degrau
Na escada do porvir

E quem zombou do meu começo
Hoje até me faz sorrir
Porque a força que me move
Vem do Alto e me faz subir

Quem me feriu com palavra
Me ensinou a resistir
Quem tentou apagar meu nome
Fez meu nome ressurgir

Se achavam que eu caía
Não sabiam do meu Norte
Me jogaram no deserto
E lá Deus me fez um forte

Quem no início me desprezou
Não sabe que me fez mais forte
Mas se soubesse disso antes
Teria me dado outro trato
Pra que eu tivesse outra sorte

Hoje ando com passo firme
No terreno da esperança
O desprezo foi adubo
Pra essa fé que nunca cansa

Quem tentou me ver caído
Agora me vê de pé
Sou herança do impossível
Estou aqui é para cantar
Sou herança do impossível
Estou aqui é para cantar
`;

useHead({
  title: `${title} - C. S. Evans`,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: `${title} - C. S. Evans` },
    { property: 'og:description', content: description },
    { property: 'og:image', content: imagem },
    { property: 'og:type', content: 'music.song' },
  ],
});
</script>