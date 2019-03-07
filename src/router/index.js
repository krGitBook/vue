import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Login from '@/pages/login'
import other from '@/pages/other'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/app/',
  routes: [{
    path: '/home',
    component: Home,
  },{
    path: '/login',
    name:'login',
    component: Login,
  },{
    path: '/login',
    name:'login',
    component: Login,
  },{
    path: '/login/:type',
    name:'login',
    component: Login,
  },{
    path: '/',
    name:'otehr',
    component: other,
  }]
})
