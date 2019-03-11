// import Vue from 'vue'
// import Vuex from 'vuex'
// import { mutations, STORAGE_KEY } from './mutations'
// import actions from './actions'
// import todoItem from './todoItem';

// Vue.use(Vuex)

// export default new Vuex.Store({
//   strict:true, //严格模式只能 mutations 里修改数据
//   state: {
//     todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
//   },
//   actions,
//   mutations
// })

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
