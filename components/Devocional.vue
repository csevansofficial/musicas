// filepath: i:\github\musicas\components\Devotional.vue
<template>
  <div class="devotional">
    <h2 class="devotional-title">{{ title }}</h2>
    <div class="devotional-content">
      <div v-if="youtubeId" class="youtube-video">
        <iframe
          width="560"
          height="315"
          :src="'https://www.youtube.com/embed/' + youtubeId"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <img v-if="image" :src="image" :alt="title" class="devotional-image" />
      <div class="devotional-article" v-html="article"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    youtubeId: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    article: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.devotional {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.devotional-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.devotional-content {
  display: flex;
  flex-direction: column;
}

.youtube-video {
  margin-bottom: 10px;
}

.devotional-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.devotional-article {
  font-size: 16px;
  line-height: 1.6;
}
</style>