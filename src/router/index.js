// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    component: () => import('@/layouts/default/Default.vue'),
    meta : {
      title : 'Pagina Inicial - AnimesOn'
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path:'/login',
    component: () => import('@/layouts/default/Login.vue'),
    meta: {
      title:'AnimesOn - Inicio'
    },
    children : [
      {
        path: '/',
        name: 'Login',
        component: () => import('@/views/Login.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'Default Title'
})

export default router
