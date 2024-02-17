// store/todos.js
export default {
    namespaced: true, // Enable namespaced
    state: {
      todsoList: []
    },
    mutations: {
      SET_TODOS (state, todo) {
        state.todoList = todo
      },
      UPDATE_TODO(state, updateTodo) {
        const index = state.todoList.findIndex(todo => todo.id === updateTodo.id)
        if (index !== -1) state.todoList.splice(index, 1, updateTodo)
      },
      REMOVE_TODO(state, id) {
        state.todoList = state.todoList.filter(todo => todo.id !== id)
      }
    },
    actions: {
        async fetchTodos({ commit }) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
                commit('SET_TODOS', response.data)
            } catch (error) {
                console.error('Error fetching todos:', error)
            }
        },
        async updateTodo({ commit }, updateTodo) {
          try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo)
            commit('UPDATE_TODO', response.data)
          } catch (error) {
            console.error('Error updating todo:', error)
          }
        },
        async deleteTodo({ commit }, id) {
          try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            commit('REMOVE_TODO', id)
          } catch (error) {
            console.error('Error deleing todo:', error)
          }
        }
    },
    getters: {
      allTodos: state => state.todoList
    }
  };
  