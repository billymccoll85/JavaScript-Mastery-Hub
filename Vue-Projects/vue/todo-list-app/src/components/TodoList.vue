<template>
    <div>
      <add-todo></add-todo>
      <ul>
        <todo-item v-for="todo in allTodos" :key="todo.id" :todo="todo"></todo-item>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  import AddTodo from './AddTodo.vue';
  import TodoItem from './TodoItem.vue';
  
  export default {
    components: {
      AddTodo,
      TodoItem
    },
    computed: {
      ...mapGetters({
        allTodos: 'todos/allTodos'
      })
    },
    mounted() {
      this.$store.dispatch('todos/fetchTodos');
    }
  };
  </script>
  