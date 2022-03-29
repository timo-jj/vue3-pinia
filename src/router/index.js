import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Todos',
    component: () => import('../views/Todos.vue'),
  },
  {
    path: '/todos2',
    name: 'Todos2',
    component: () => import('../views/Todos2.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
