
<template>
  <section class="todoapp" style="padding:30px;">
    <!-- header -->
    {{hh}}
    <LabelInput v-model="hh" label="姓名 " name="kkkkk" @mousemove="mousemove"/>
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs ?"
        @keyup.enter="add"
      >
    </header>

    <div
     v-for="(item,index) in getList"
     :key="index"
    >
       {{item.value}}
    </div>

  </section>
</template>

<script>
import LabelInput from './LabelInput'
import { mapActions,mapState,mapGetters } from "vuex";
// const { mapActions,mapState,mapGetters } = createNamespacedHelpers('a')

export default {
  components:{
    LabelInput
  },
  data() {
    return {
      hh:""
    };
  },
  computed:{
    ...mapGetters('a',[
       'getList'
    ]),
    ...mapState('a',{
      list: state => {

        return state.list
      },
    })
  },

  methods:{
    ...mapActions('a',[
       'add'
    ]),
    mousemove(){
      console.log("-----")
    }
  },
  mounted(){

  },
};
</script>



