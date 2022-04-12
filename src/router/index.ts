import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory("/"),
  routes,
})

export default router
