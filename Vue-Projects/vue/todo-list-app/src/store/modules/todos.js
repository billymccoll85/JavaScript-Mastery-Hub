// store/todos.js
export default {
    namespaced: true, // Enable namespaced
    state: {
      todsoList: []
    },
    mutations: {
      setInterval_TODO(state, todo) {
        state.todoList = todo
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
        }
    },
    getters: {
      todoList: state => state.todoList
    }
  };
  