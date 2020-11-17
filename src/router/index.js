import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/cmsLogin')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/cmsHome')
  }
]

const router = new VueRouter({
  routes
})

export default router
