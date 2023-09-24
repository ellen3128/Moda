import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage'
import ProductDetailPage from '../views/ProductDetailPage'
import ProductsPage from '../views/ProductsPage'
import HomePage from '../views/HomePage'

Vue.use(VueRouter)

const routes = [
{
  path: '/products',
  name: 'Products',
  component: ProductsPage,
}, {
  path: '/products/:id',
  name: 'ProductDetail',
  component: ProductDetailPage,
}, {
  path: '/cart',
  name: 'Cart',
  component: CartPage,
}, {
  path: '/',
  name: 'Home',
  component: HomePage,
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router