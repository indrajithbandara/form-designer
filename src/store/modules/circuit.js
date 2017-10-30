import * as types from '../mutation-types'

const state = {
  data: 'circuit data222',
  count: 0
}

const getters = {
  count: state => state.count
}

const actions = {
  addCount ({ commit, state }, num) {
    commit(types.ADD_COUNT, { message: '同步action', num })
    setTimeout(() => {
      commit(types.ADD_COUNT, { message: '异步action', num })
    }, 1000)
  }
}

const mutations = {
  [types.ADD_COUNT] (state, { message, num }) {
    state.count = state.count + num
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
