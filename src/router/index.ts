import MainPage from '@/copmonents/MainPage.vue'
import MenuPage from '@/copmonents/MenuPage.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw>=[
  {
    name:'MainPage',
    path:'/',
    component: MainPage
  },
  {
    name:'MenuPage',
    path:'/menu',
    component: MenuPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
