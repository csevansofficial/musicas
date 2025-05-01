<template>
  <div id="app">
    <header role="banner" class="full-width">
      <div class="header-content">
        <h1>C. S. Evans</h1>
        <p>Música, Teologia e poesia que caminham com a missão do Divino Mestre.</p>
        <p>Canções que cantam, contam e encantam.</p>
        <p>A arte é o meio; o proposito, eterno.</p>
      </div>
    </header>

    <main id="main-content" role="main">
      <router-view></router-view>
    </main>

    <footer role="contentinfo" class="full-width">
      <div class="footer-content">
        <p>&copy; 2025 E. C. S. Music – Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.full-width {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background-color: #f8f9fa;
  padding: 2rem 0;
}

.header-content, .footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

header h1 {
  margin: 0 0 1rem 0;
  color: #333;
  font-size: 2rem;
}

header p {
  margin: 0.5rem 0;
  color: #666;
  font-size: 1.1rem;
}

footer p {
  margin: 0;
  color: #666;
}

#main-content {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style> 