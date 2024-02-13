
import * as types from '../../types';

export default {
  [types.ACTION_ADD_TASK]({ commit }, task) {
    commit(types.ADD_TASK, task);
  },
  [types.ACTION_REMOVE_TASK]({ commit }, taskId) {
    commit(types.REMOVE_TASK, taskId);
  },
  [types.ACTION_TOGGLE_TASK_STATUS]({ commit }, taskId) {
    commit(types.TOGGLE_TASK_STATUS, taskId);
  },
};
