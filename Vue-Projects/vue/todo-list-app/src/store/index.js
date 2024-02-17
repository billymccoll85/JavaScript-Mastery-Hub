import { createStore } from 'vuex';
import todos from './todos'; // Import the todos module

const store = createStore({
  modules: {
    todos // Include the todos module in your store
  }
});

export default store;
