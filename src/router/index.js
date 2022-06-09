import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home'
import product from '../views/product'
import contact from '../views/contact'

const routes = [
    {
      path: '/',
      name: 'home',
      component: home ,
    },
    {
      path: '/product',
      name: 'product',
      component: product ,
    },
    {
      path: '/contact' ,
      name: 'contact',
      component: contact ,
    },
 ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
