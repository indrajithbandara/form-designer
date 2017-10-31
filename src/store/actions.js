import * as types from './mutation-types';

export default {
  addCountAll({ commit }) {
    commit(types.ADD_COUNT_ALL, {
      data: 'test data',
    });
  },
};
