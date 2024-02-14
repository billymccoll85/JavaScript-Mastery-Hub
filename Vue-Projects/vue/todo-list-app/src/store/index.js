import Vue from 'vue';
import Vuex from 'vuex';
import todoList from './modules/todoList'; // Adjust the path accordingly

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todoList
  }
});
