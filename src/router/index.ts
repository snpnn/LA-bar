import MainPage from '@/copmonents/MainPage.vue'
import MenuPage from '@/copmonents/MenuPage.vue'
import BarMenuPage from '@/copmonents/BarMenuPage.vue'
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
  },
  {
    name:'BarMenuPage',
    path:'/barmenu',
    component: BarMenuPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
