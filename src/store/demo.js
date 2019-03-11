export default {
  namespaced:true,
  state: {
    list: []
  },
  mutations: {
    add: function (state, data) {
      // setTimeout(()=>{
      state.list.push(data);
      // },1000)

    }
  },
  actions: {
    add: function (store, data) {
      store.commit('add', { value: data.target.value, checked: false })
    }
  },
  getters: {
    getList(state) {
      let arr = [].concat(state.list)
      return arr.map((item) => {
        let obj = Object.assign({}, item)
        obj.value = '$' + obj.value;
        return obj;
      })
    }
  }
}







