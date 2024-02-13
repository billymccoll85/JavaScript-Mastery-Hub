<template>
    <form @submit.prevent="onSubmit">
      <input v-model="newTaskText" placeholder="Add a new task" />
      <button type="submit">Add Task</button>
    </form>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        newTaskText: ''
      };
    },
    methods: {
        ...mapActions('todoList', {
            addTaskAction: 'ACTION_ADD_TASK'
        }),
        onSubmit() {
            if (this.newTaskText.trim()) {
                this.addTask({
                id: Date.now(), // Assuming you're using timestamp as a simple ID
                text: this.newTaskText,
                completed: false
                });
                this.newTaskText = '';
            }
        }
    }
};
</script>
  