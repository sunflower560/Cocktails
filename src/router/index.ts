import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/Home.vue')
    },
    {
      name: 'cocktail',
      path: '/cocktails:id',
      component: () => import('@/pages/Cocktail.vue')
    },
    {
      name: 'cocktailRandom',
      path: '/random',
      component: () => import('@/pages/CocktailRandom.vue')
    }
  ]
})

export default router
