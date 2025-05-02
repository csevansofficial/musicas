<template>
  <div class="card" role="article">
    <div class="card-image">
      <img :src="image" 
           :alt="'Capa do single ' + title"
           width="400"
           height="400"
           loading="lazy">
    </div>
    <div class="card-content">
      <h2>{{ title }}</h2>
      <slot name="description">
        <p>{{ description }}</p>
      </slot>
      <router-link :to="link" class="card-link">
        Ver mais
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicCard',
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
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  box-sizing: border-box;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  max-width: 250px;
  margin: 1rem auto;
  padding: 1rem;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 1.5rem;
  box-sizing: border-box;
}

.card h2 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  color: #333;
  font-weight: 600;
  word-wrap: break-word;
}

.card p {
  margin: 0;
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  word-wrap: break-word;
}

.card-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #4a90e2;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background-color 0.2s ease;
  margin-top: 1rem;
}

.card-link:hover {
  background: #357abd;
}

@media (max-width: 640px) {
  .card-content {
    padding: 1rem;
  }
}
</style> 