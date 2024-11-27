// src/router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import BoxSection from './components/BoxSection.vue'
import HomeGridSection from './components/HomeGridSection.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/collection',
    name: 'Collection',
    component: BoxSection
  },
  {
    path: '/',
    name: 'Home',
    component: HomeGridSection
  }
  
]

const router = createRouter({
  history: createWebHistory('/webui'),
  routes
})

export default router