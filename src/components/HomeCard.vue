<template>
  <div class="home-card" role="article">
    <div class="home-card-content">
      <div class="home-card-image">
        <img :src="image" 
             :alt="'Capa do single ' + title"
             width="400"
             height="400"
             loading="lazy">
      </div>
      <div class="home-card-info">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <router-link :to="link" class="home-card-button">
          Ver mais
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCard',
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
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.home-card {
  background: var(--color-white);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.home-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.home-card-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding: var(--space-6);
  box-sizing: border-box;
  width: 100%;
}

.home-card-image {
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  width: 100%;
  aspect-ratio: 1;
}

.home-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.home-card-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.home-card h2 {
  margin: 0;
  font-size: var(--font-size-2xl);
  color: var(--color-gray-800);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
}

.home-card p {
  margin: 0;
  color: var(--color-gray-600);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
}

.home-card-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3) var(--space-6);
  background: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--border-radius-lg);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: background-color var(--transition-normal);
  margin-top: var(--space-4);
  width: fit-content;
}

.home-card-button:hover {
  background: var(--color-primary-dark);
}

@media (min-width: 768px) {
  .home-card-content {
    flex-direction: row;
    align-items: center;
  }

  .home-card-image {
    flex: 0 0 300px;
    width: 300px;
  }

  .home-card-info {
    flex: 1;
  }
}
</style> 