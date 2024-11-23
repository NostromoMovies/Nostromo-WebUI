// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import MovieGrid from './components/MovieGrid.vue'

const routes = [
  {
    path: '/collection',
    name: 'Collection',
    component: MovieGrid
  },
  // You can add other routes here later
  {
    path: '/',
    name: 'Home',
    component: () => import('./components/BoxSection.vue')  // Or whatever component you want for home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router