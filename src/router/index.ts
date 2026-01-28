import MainPage from '@/copmonents/pages/MainPage.vue'
import MenuPage from '@/copmonents/pages/MenuPage.vue'
import BarMenuPage from '@/copmonents/pages/BarMenuPage.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import TestComponent from '@/copmonents/pages/TestComponent.vue'

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
  },
  {
    name:'Test',
    path:'/test',
    component: TestComponent
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
