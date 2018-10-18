import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('../page/index.vue')
const Login = () => import('../page/Login/login.vue')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {path: '/login', name: 'login', component: Login}
  ]
})
