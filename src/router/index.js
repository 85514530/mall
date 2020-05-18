import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    meta: { title: '首页' },
    component: Home
  },
  {
    path: '/category',
    meta: { title: '分类' },
    component: Category
  },
  {
    path: '/cart',
    meta: { title: '购物车' },
    component: Cart
  },
  {
    path: '/profile',
    meta: { title: '个人中心' },
    component: Profile
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]
const router = new Router({
  routes,
  mode:'history'
})
export default router

router.beforeEach((to, from, next) => {
  NProgress.start()
  document.title = to.matched[0].meta.title
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})