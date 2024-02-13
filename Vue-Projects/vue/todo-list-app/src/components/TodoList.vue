<template>
    <div>
      <TaskInputForm />
      <ul>
        <TodoItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @remove="removeTask"
          @toggle="toggleTaskStatus"
        />
      </ul>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  import TodoItem from './TodoItem.vue';
  import TaskInputForm from './TaskInputForm.vue';
  
  export default {
    components: {
      TodoItem,
      TaskInputForm
    },
    computed: {
      ...mapGetters('todoList', ['getAllTasks'])
    },
    methods: {
        ...mapActions('todoList', {
            removeTask: 'ACTION_REMOVE_TASK',
            toggleTaskStatus: 'ACTION_TOGGLE_TASK_STATUS'
        }),
        remove(taskId) {
            this.removeTask(taskId);
        },
        toggleStatus(taskId) {
            this.toggleTaskStatus(taskId);
        }
    }
  };
  </script>
  