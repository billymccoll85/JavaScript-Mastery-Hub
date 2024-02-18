<template>
  <div
    @click="toggleCompletion"
    :class="{'bg-green-800': todo.completed, 'bg-gray-100': !todo.completed}"
    class="flex items-center justify-between p-4 rounded shadow mb-2 cursor-pointer hover:bg-green-600"
  >
    <span :class="{'line-through': todo.completed, 'text-white': todo.completed}" class="flex-1">
      {{ todo.title }}
    </span>
    <button @click.stop="deleteTodo" class="text-white hover:text-red-500">
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
    toggleCompletion() {
      this.$store.dispatch('todos/updateTodo', { ...this.todo, completed: !this.todo.completed });
    },
    deleteTodo() {
      this.$store.dispatch('todos/deleteTodo', this.todo.id);
    },
  },
};
</script>
