<template>
    <div>
      <add-todo></add-todo>
      <div v-for="todo in allTodos" :key="todo.id" class="flex-row mb-4 mx-4 items-center">
        <todo-item :todo="todo"></todo-item>
      </div>
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
    created() {
      this.$store.dispatch('todos/fetchTodos');
    }
  };
  </script>
  