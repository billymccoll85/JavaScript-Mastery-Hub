// Correctly importing all exports from types.js into the types namespace
import * as types from '../../types';

export default {
  [types.ADD_TASK](state, task) {
    // Mutation to add a task
    state.tasks.push(task);
  },
  [types.REMOVE_TASK](state, taskId) {
    // Mutation to remove a task by ID
    const index = state.tasks.findIndex(task => task.id === taskId);
    if (index !== -1) state.tasks.splice(index, 1);
  },
  [types.TOGGLE_TASK_STATUS](state, taskId) {
    // Mutation to toggle the completion status of a task
    const task = state.tasks.find(task => task.id === taskId);
    if (task) task.completed = !task.completed;
  },
};
