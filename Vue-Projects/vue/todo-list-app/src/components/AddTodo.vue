<template>
    <form @submit.prevent="addTodo" class="flex justify-center my-12">
      <input type="text" v-model="title" placeholder="Add a new todo..."
             class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-96" />
      <button type="submit"
              class="px-8 rounded-r-lg bg-green-500 text-gray-800 font-bold p-4 uppercase border-green-500 border-t border-b border-r">Add</button>
    </form>
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
          this.$store.dispatch('todos/addTodo', this.title.trim());
          this.title = '';
        }
      }
    }
  };
  </script>
  