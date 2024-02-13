import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './state';

const state = () => {
    return {
        tasks: []
    }
}


export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
