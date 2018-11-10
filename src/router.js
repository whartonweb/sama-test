import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Contact from './views/Contact'
import ProductDetails from './views/ProductDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product/:ItemID',
      name: 'product',
      component: ProductDetails
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
