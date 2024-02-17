import axios from 'axios';

export default {
  namespaced: true,
  state: {
    todoList: []
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todoList = todos;
    },
    ADD_TODO(state, todo) {
      state.todoList.unshift(todo);
    },
    UPDATE_TODO(state, updatedTodo) {
      const index = state.todoList.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.todoList.splice(index, 1, updatedTodo);
      }
    },
    REMOVE_TODO(state, id) {
      state.todoList = state.todoList.filter(todo => todo.id !== id);
    }
  },
  actions: {
    async fetchTodos({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('SET_TODOS', response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    },
    async addTodo({ commit }, title) {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
        commit('ADD_TODO', response.data);
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    },
    async updateTodo({ commit }, todo) {
      try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
        commit('UPDATE_TODO', response.data);
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    },
    async deleteTodo({ commit }, id) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('REMOVE_TODO', id);
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    }
  },
  getters: {
    allTodos: state => state.todoList
  }
};
