import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('../page/index.vue')
const Login = () => import('../page/Login/login.vue')
const Register = () => import('../page/Login/register.vue')
const Home = () => import('../page/Home/home.vue')
const Cart = () => import('../page/Cart/cart.vue')
const Goods = () => import('../page/Goods/goods.vue')
const goodsDetails = () => import('../page/Goods/goodsDetails.vue')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home',
      component: Index,
      children: [
        {path: 'home', component: Home},
        {path: 'goods', component: Goods},
        {path: 'goodsDetails', name: 'goodsDetails', component: goodsDetails}
      ]
    },
    {path: '/login', name: 'login', component: Login},
    {path: '/register', name: 'register', component: Register},
    {path: '/cart', name: 'cart', component: Cart}
  ]
})
