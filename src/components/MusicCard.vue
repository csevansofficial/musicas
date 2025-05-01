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
      <p>{{ description }}</p>
      <slot></slot>
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
      required: true
    },
    image: {
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
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.card-image {
  position: relative;
  padding-top: 100%; /* Mantém proporção 1:1 */
  background: #f5f5f5;
}

.card-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
  text-align: center;
}

.card h2 {
  margin: 0 0 0.75rem 0;
  font-size: 1.25rem;
  color: #333;
  font-weight: 600;
}

.card p {
  margin: 0;
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style> 