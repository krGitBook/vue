// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'common/js/gt.js';
import store from './store';
import "babel-polyfill";
// import App from './components/App.vue'
Vue.use(iView);

// Vue.use(Components);
Vue.config.productionTip = false;

// 全局前置守卫
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }
  // console.log("-beforeEach",to,from,next)
  console.log("全局 beforeEach")
  next()
})
router.beforeResolve((to, from, next)=>{
  console.log("全局 beforeResolve")
  next();
})
// 全局后置钩子
router.afterEach((to, from) => {
  console.log('全局 afterEach')
  // ...
})
router.onReady((val)=>{
  console.log('onReady',val)
})
console.log("getMatchedComponents",router.getMatchedComponents('/'))
console.log("resolve",router.resolve('/'))

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})



