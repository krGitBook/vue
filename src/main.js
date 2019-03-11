// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'common/js/gt.js';
import store from './store';
import "babel-polyfill";
import App from './components/App.vue'
Vue.use(iView);
store.watch((state,getters)=>{
  console.log('state---',state,getters)
})
store.subscribe((mutation, state) => {
  console.log(mutation,'subscribe',state)
})
var actionListen = store.subscribeAction({
  before:(action, state)=>{
    console.log('before===')
  },
  after:(action, state)=>{
    console.log('after===',state)
  }
  
});
store.registerModule('myModule', {
  
})
// actionListen();

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})



