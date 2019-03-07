import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Login from '@/pages/login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/app/',
  routes: [{
    path: '',
    component: Home,
  },{
    path: '/login',
    name:'login',
    component: Login,
  },{
    path: '/login',
    name:'login',
    component: Login,
  }]
})
