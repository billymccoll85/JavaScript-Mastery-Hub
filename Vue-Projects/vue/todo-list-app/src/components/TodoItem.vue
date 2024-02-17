<template>
        <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
        <span :class="{ 'line-through': todo.completed }" class="flex-1">
            {{ todo.title }}
        </span>
        <button @click="deleteTodo" class="text-red-500 hover:text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        </div>
  </template>
  
  <script>
  export default {
    props: ['todo'],
    methods: {
      deleteTodo() {
        this.$store.dispatch('todos/deleteTodo', this.todo.id);
      },
    },
  };
  </script>
  