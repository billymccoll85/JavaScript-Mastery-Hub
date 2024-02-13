<template>
    <form @submit.prevent="onSubmit">
      <input v-model="newTask" placeholder="Add a new task" />
      <button type="submit">Add Task</button>
    </form>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        newTask: ''
      };
    },
    methods: {
      ...mapActions('todoList', ['addTask']),
      onSubmit() {
        if (this.newTask.trim()) {
          this.addTask({ text: this.newTask, completed: false });
          this.newTask = '';
        }
      }
    }
  };
  </script>
  