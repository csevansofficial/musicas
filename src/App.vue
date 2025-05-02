<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue'

export default {
  name: 'App',
  components: {
    DefaultLayout
  }
}
</script>

<style>
@import './assets/styles/variables.css';
@import './assets/styles/utilities.css';

#app {
  font-family: var(--font-family-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-gray-800);
  background: var(--color-gray-50);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-6);
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .container {
    padding: var(--space-4);
  }
}
</style> 