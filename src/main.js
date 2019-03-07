// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import http from 'common/js/http';
import 'common/js/gt.js';
// import Components from './components.js';

import "babel-polyfill";


Vue.directive('click-outside', {
  priority: 700,
  bind (el, binding, vnode) {
    el.event = function (event) {
      vnode.context[binding.expression](event)
    };
    el.stopProp = function(event) {
      event.stopPropagation()
    }
    el.addEventListener('click', el.stopProp)
    document.body.addEventListener('click',el.event)
  },

  unbind(el) {
    el.removeEventListener('click', el.stopProp)
    document.body.removeEventListener('click',el.event)
  }
})

Vue.prototype.$http = http;
Vue.use(iView);
// Vue.use(Components);
Vue.config.productionTip = false;
// Vue.config.debug = true;

/* eslint-disable no-new */


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})



