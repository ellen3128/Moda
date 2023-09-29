import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage'
import ProductDetailPage from '../views/ProductDetailPage'
import ProductsPage from '../views/ProductsPage'
import HomePage from '../views/HomePage'
import NotFoundPage from '../views/NotFoundPage'
import SuccessPage from '../views/SuccessPage'
import ErrorPage from '../views/ErrorPage'
import NewsletterSignup from '../views/NewsletterSignup'
import TermsConditions from '../views/TermsConditions'

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
}, {
  path: '/home',
  name: 'Home',
  component: HomePage,
}, {
  path: '*',
  name: '404 Page',
  component: NotFoundPage,
}, {
  path: '/success',
  name: 'Success',
  component: SuccessPage,
}, {
  path: '/error',
  name: 'Error',
  component: ErrorPage,
}, {
  path: '/subscribe',
  name: 'Subscribe',
  component: NewsletterSignup,
}, {
  path: '/terms',
  name: 'Terms',
  component: TermsConditions,
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
