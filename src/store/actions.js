import * as types from './mutation-types'

export const addCountAll = ({ commit }) => {
  commit(types.ADD_COUNT_ALL, {
    data: 'test data'
  })
}
