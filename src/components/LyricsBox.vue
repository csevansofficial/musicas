<template>
  <section class="lyrics-section" aria-labelledby="lyrics-title">
    <div class="lyrics-container">
      <h2 id="lyrics-title" class="section-title">Letra</h2>
      <div class="lyrics">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LyricsBox'
}
</script>

<style scoped>
.lyrics-box {
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

.lyrics-box:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.lyrics-header {
  padding: var(--space-6);
  border-bottom: var(--border-width) solid var(--color-gray-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.lyrics-header h3 {
  margin: 0;
  font-size: var(--font-size-xl);
  color: var(--color-gray-800);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
}

.lyrics-content {
  padding: var(--space-6);
  box-sizing: border-box;
  width: 100%;
}

.lyrics-section {
  width: 100%;
  background-color: #f8f9fa;
  padding: 3rem 0;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
  margin-top: 2rem;
}

.lyrics-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
}

.section-title {
  text-align: center;
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.lyrics {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .lyrics-section {
    padding: 4rem 0;
  }

  .lyrics-container {
    padding: 0 3rem;
  }
}

@media (min-width: 1024px) {
  .lyrics-section {
    padding: 5rem 0;
  }
}

@media (max-width: 768px) {
  .lyrics-header {
    padding: var(--space-4);
  }

  .lyrics-content {
    padding: var(--space-4);
  }
}
</style> 