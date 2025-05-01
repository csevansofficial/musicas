import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MeFezUmForte from '../views/MeFezUmForte.vue'
import SentencaDeAmor from '../views/SentencaDeAmor.vue'
import ReinoChegou from '../views/ReinoChegou.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/me-fez-um-forte',
    name: 'MeFezUmForte',
    component: MeFezUmForte
  },
  {
    path: '/sentenca-de-amor',
    name: 'SentencaDeAmor',
    component: SentencaDeAmor
  },
  {
    path: '/o-dia-em-que-o-reino-chegou',
    name: 'ReinoChegou',
    component: ReinoChegou
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 