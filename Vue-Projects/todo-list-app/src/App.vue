<template>
  <div class="min-h-screen bg-gray-100 flex flex-row items-center justify-center pt-16">
    <div class="w-full max-w-4xl mx-auto p-5">
      <h1 class="text-xl font-bold text-center mb-6">Vue Todos</h1>
      <todo-list></todo-list>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList,
  }
};
</script>
