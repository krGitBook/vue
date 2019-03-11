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
import actions from './actions'
import todoItem from './todoItem';

Vue.use(Vuex)

export default ()=>{
  let store = new Vuex.Store({
    strict:true, //严格模式只能 mutations 里修改数据
    ...todoItem
  })
  if(module.hot){
    module.hot.accept([
      './todoItem',
    ], () => {
      let todoItem = require('./todoItem').default
      store.hotUpdate({
        ...todoItem
      })
    })
  }
  store.watch((state)=>{
    console.log(state,"kkkkk")
  })
  return store;
} 
