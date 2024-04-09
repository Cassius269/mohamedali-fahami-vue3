import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/monsters',
      name: 'list-monsters',
      component: () => import('../views/MonstersView.vue')
    },
    {
    path:"/monster-detail/:id",
    name:'monster-detail',
    component: () => import('../views/MonsterDetailVue.vue')
  }
  ]
})

export default router
