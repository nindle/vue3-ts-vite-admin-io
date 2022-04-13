import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'
import store from '../store/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../Layout/index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/about/index.vue')
      },
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory("/"),
  routes,
})
router.beforeEach((to, from, next) => {
  console.log(store.state.token);
  if (to.path === '/login') {
    if (store.state.token || window.localStorage.getItem('token')) {
      next({ path: '/' });
    } else {
      next();
    }
    next()
  } else {
    if (store.state.token || window.localStorage.getItem('token')) {
      next()
    } else {
      next({ path: '/login' });
    }
  }

})

export default router
