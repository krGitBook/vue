
<template>
  <section class="todoapp" style="padding:30px;">
    <!-- header -->
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs ?"
        @keyup.enter="$store.dispatch('add',$event)"
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
import { mapActions,mapState,mapGetters } from "vuex";

export default {
  data() {
    return {
<<<<<<< HEAD
      visibility: "all",
      filters: filters,
    };
  },
  computed: {
    todos() {
      console.log("------",this.$store.state)
      return this.$store.state.todos;
    },
    allChecked() {
      return this.todos.every(todo => todo.done);
    },
    filteredTodos() {
      return filters[this.visibility](this.todos);
    },
    remaining() {
      return this.todos.filter(todo => !todo.done).length;
    }
  },
  methods: {
    ...mapActions(["toggleAll", "clearCompleted"]),
    addTodo(e) {
      const text = e.target.value;
      if (text.trim()) {
        this.$store.dispatch("addTodo", text);
      }
      e.target.value = "";
    }
=======

    };
  },
  computed:{
    ...mapGetters([
       'getList'
    ]),
    ...mapState({
      list: state => state.a.list,
    })
>>>>>>> b0d37c0c964411ce455577ab9eed7ae5d484842b
  },
  methods:{
    ...mapActions([
       'add'
    ])
  }
};
</script>



