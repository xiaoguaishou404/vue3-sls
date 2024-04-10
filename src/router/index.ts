import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

let addRoutestatus = false
router.beforeEach((to, from, next) => {
  if (addRoutestatus) {
    next()
  }
  else {
    router.addRoute({
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      children: [
        {
          path: 'aboutChildren',
          name: 'aboutChildren',
          component: () => import('@/components/icons/IconCommunity.vue'),
        },
      ],
    })
    router.addRoute({
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/components/icons/IconCommunity.vue'),
    })
    addRoutestatus = true
    // next( to);
    next(to.path)
  }
  console.log(router.getRoutes())
})

export default router
