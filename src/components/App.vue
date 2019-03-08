
<template>
  <section class="todoapp">
    <!-- header -->
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs ?"
        @keyup.enter="addTodo"
      >
    </header>

    <!-- main section -->
    <section class="main" v-show="todos.length">
      <input
        class="toggle-all"
        id="toggle-all"
        type="checkbox"
        :checked="allChecked"
        @change="toggleAll(!allChecked)"
      >
      <label for="toggle-all"></label>
      <ul class="todo-list">
        <TodoItem v-for="(todo, index) in filteredTodos" :key="index" :todo="todo"/>
      </ul>
    </section>
    <!-- footer -->
    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize('item') }} left
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters" :key="key" class="btn">
          <a
            :href="'#/' + key"
            :class="{ selected: visibility === key }"
            @click="visibility = key"
          >{{ key | capitalize }}</a>
        </li>
      </ul>
      <button
        class="clear-completed"
        v-show="todos.length > remaining"
        @click="clearCompleted"
      >Clear completed</button>
    </footer>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import TodoItem from "./TodoItem.vue";

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
};

export default {
  components: { TodoItem },
  data() {
    return {
      visibility: "all",
      filters: filters
    };
  },
  computed: {
    todos() {
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
  },
  filters: {
    pluralize: (n, w) => (n === 1 ? w : w + "s"),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

input {
  outline: none;
}

ul,
li,
ol {
  list-style: none;
}

.todoapp {
  width: 800px;
  height: 900px;
  margin: 0 auto;
  text-align: center;
  background-color: rgb(245, 245, 245);
  padding: 24px 0;
}

.todoapp .header {
  font-size: 48px;
}

.content {
  width: 72%;
  margin: 0 auto;
  box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.25);
  position: relative;
}

.icon-down {
  position: absolute;
  font-size: 24px;
  top: 16px;
  left: 16px;
  cursor: pointer;
}

.todoapp .content .todos_add {
  width: 100%;
  height: 56px;
  padding: 16px 56px;
  font-size: 24px;
  border: 1px solid transparent;
}

.content_todoLists {
  position: relative;
  z-index: 3;
}

.content_todoList {
  display: flex;
  flex-direction: row;
  border-top: 1px solid #ccc;
  font-size: 24px;
  padding: 8px;
  background-color: white;
  align-items: center;
}

.checkBox {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}

.content_todoList_main {
  flex: 1;
  text-align: left;
  margin-left: 16px;
  font-size: 20px;
  padding: 6px 0;
}

.main_input {
  position: relative;
  z-index: 1;
}

.content_todoList_delete {
  position: absolute;
  right: 16px;
  color: rgb(252, 55, 55);
  font-weight: 500;
  display: none;
  cursor: pointer;
}

.show {
  display: block;
}

.deleted {
  text-decoration-line: line-through;
  color: #bbb;
}

.show:hover {
  color: rgb(255, 0, 0);
  font-weight: 700;
}

::-moz-placeholder {
  color: rgb(221, 218, 218);
}

::-webkit-input-placeholder {
  color: rgb(221, 218, 218);
}

:-ms-input-placeholder {
  color: rgb(221, 218, 218);
}

.data {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  font-size: 14px;
  font-weight: 300;
  color: rgb(145, 145, 145);
}

a {
  text-decoration: none;
  color: rgb(145, 145, 145);
}

.data_times {
  width: 73px;
}

.data_clearTodos {
  width: 142px;
}

.data_status a {
  display: inline-block;
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 1px 4px;
  margin: 0 2px;
}

.data_status a:hover {
  border-color: #bbb;
}

.data_clearTodos a:hover {
  text-decoration-line: underline;
}

.active {
  box-shadow: 0 0 1px black;
}
</style>





