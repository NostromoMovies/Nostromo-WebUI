// src/router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MovieGrid from './components/MovieGrid.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/collection',
    name: 'Collection',
    component: MovieGrid
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('./components/BoxSection.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router