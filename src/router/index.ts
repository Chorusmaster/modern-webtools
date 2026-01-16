import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../variants/css/views/HomeView.vue'
import BasketView from '../variants/css/views/BasketView.vue'
import CodeView from '../views/CodeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/basket',
      name: 'basket',
      component: BasketView
    },
    {
      path: '/code',
      name: 'code',
      component: CodeView
    }
  ]
})

export default router
