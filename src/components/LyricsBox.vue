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
.lyrics-section {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background-color: #f8f9fa;
  padding: 2rem 0;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
}

.lyrics-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  text-align: center;
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.lyrics {
  text-align: center;
}

@media (min-width: 768px) {
  .lyrics-container {
    padding: 0 2rem;
  }
}
</style> 