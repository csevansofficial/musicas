import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Adiciona meta tags estáticas do router
router.beforeEach((to, from, next) => {
  if (to.meta.metaTags) {
    to.meta.metaTags.forEach(tag => {
      const meta = document.createElement('meta')
      if (tag.name) {
        meta.setAttribute('name', tag.name)
      }
      if (tag.property) {
        meta.setAttribute('property', tag.property)
      }
      meta.setAttribute('content', tag.content)
      document.head.appendChild(meta)
    })
  }
  next()
})

app.use(router)
app.mount('#app') 