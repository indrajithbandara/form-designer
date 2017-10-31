import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import circuit from './modules/circuit';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    circuit,
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
});
