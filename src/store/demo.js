export default{
  state:{
    list:[]
  },
  mutations:{
     add:function(state,data){
      console.log('state--------90==',state);
         state.list.push(data);
     }
  },
  actions:{
    add:function(store,data){
        console.log('date--------90',data);
        store.commit('add',{value:data.target.value,checked:false})
    }
  },
  getters:{
    getList:function(state,getters){
      return state.list.map((item)=>{
          item.value='$'+item.value;
          return item
      })
    }
  }
}







