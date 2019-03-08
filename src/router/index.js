import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Login from '@/pages/login'
import other from '@/pages/other'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/app/',
  fallback:false, //当浏览器不支持 history.pushState 控制路由是否应该回退到 hash 模式
  // linkActiveClass:'class-active',
  // linkExactActiveClass:'class-active',
  scrollBehavior(to, from, savedPostion){
    console.log("-------",savedPostion)
    if (savedPostion) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }

  },
  // parseQuery(query){
  //   console.log("111111",query)
  //   return event+1;
  // },
  // stringifyQuery:()=>{
  //   console.log("6666666")
  // },
  routes: [{
    path: '/home',
    component: Home,
    beforeEnter: (to, from, next) => {
      console.log('路由配置中的 beforeEnter')
      next();
    }
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
