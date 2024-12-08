// src/router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import BoxSection from './components/BoxSection.vue'
import HomeGridSection from './components/HomeGridSection.vue'
import SignupPop from './components/SignupPop.vue'
import LoginButton from './components/HomeVue/LoginButton.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/collection',
    name: 'Collection',
    component: BoxSection
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: HomeGridSection
  },
  {
    path: '/register',
    name: 'register',
    component: SignupPop
  },
]

const router = createRouter({
  history: createWebHistory('/webui'),
  routes
})

export default router