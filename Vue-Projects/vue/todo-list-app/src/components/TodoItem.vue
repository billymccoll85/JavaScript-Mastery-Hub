<template>
    <li>
      <input type="checkbox" :checked="todo.completed" @change="toggleCompletion" />
      {{ todo.title }}
      <button @click="deleteTodo">Delete</button>
    </li>
  </template>
  
  <script>
  export default {
    props: ['todo'],
    methods: {
      toggleCompletion() {
        const updatedTodo = { ...this.todo, completed: !this.todo.completed };
        this.$store.dispatch('todos/updateTodo', updatedTodo);
      },
      deleteTodo() {
        this.$store.dispatch('todos/deleteTodo', this.todo.id);
      }
    }
  };
  </script>
  