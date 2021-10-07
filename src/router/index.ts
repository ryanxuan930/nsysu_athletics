import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/main/Home.vue'
import Main from '../views/Main.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.../views/main/About.vue
        component: () => import(/* webpackChunkName: "about" */ '../views/main/About.vue')
    },
    {
        path: '/nfac',
        name: 'NFAC',
        component: () => import('../views/nfac/NFAC.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
  routes
})

export default router
