import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('../page/index.vue')
const Login = () => import('../page/Login/login.vue')
const Register = () => import('../page/Login/register.vue')
const Home = () => import('../page/Home/home.vue')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home',
      component: Index,
      children: [
        {path: 'home', component: Home}
      ]
    },
    {path: '/login', name: 'login', component: Login},
    {path: '/register', name: 'register', component: Register}
  ]
})
