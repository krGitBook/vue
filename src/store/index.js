import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, STORAGE_KEY } from './mutations'
import actions from './actions';
import demo from './demo';


Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
     a:demo
  }
})
