import { createRouter, createWebHistory } from 'vue-router';
const variants = ['html', 'css', 'js', 'ts', 'tailwind', 'vue', 'vuetify', 'pinia', 'axios'];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/html',
    },
    ...variants.map(variant => ({
    path: `/${variant}`,
    meta: { variant },
    redirect: `/${variant}/code`,
    children: [
      { path: 'code', component: () => import(`@/variants/${variant}/views/CodeView.vue`) },
      { path: 'home', component: () => import(`@/variants/${variant}/views/HomeView.vue`) },
      { path: 'basket', component: () => import(`@/variants/${variant}/views/BasketView.vue`) },
    ]
    })),
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import(`@/components/NotFoundPage.vue`)
    }
  ]
})

export default router