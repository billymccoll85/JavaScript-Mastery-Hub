<template>
    <div>
      <input type="text" v-model="title" @keyup.enter="addTodo" placeholder="Add a todo..." />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: ''
      };
    },
    methods: {
      addTodo() {
        if (this.title.trim()) {
          this.$store.dispatch('todos/addTodo', this.title);
          this.title = ''; // Clear the input field after submission
        }
      }
    }
  };
  </script>
  