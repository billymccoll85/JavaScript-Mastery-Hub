import { createStore } from 'vuex';
import todos from './todos';

const store = createStore({
  modules: {
    todos
  }
});

export default store;
