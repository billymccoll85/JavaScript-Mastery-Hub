// store/todos.js
export default {
    namespaced: true, // Enable namespaced
    state: {
      todsoList: []
    },
    mutations: {
      ADD_TODO(state, todo) {
        state.todoList.push(todo)
      }
    },
    actions: {
      addTodo({ commit }, todo) {
        commit('ADD_TODO', todo)
      }
    },
    getters: {
      todoList: state => state.todoList
    }
  };
  