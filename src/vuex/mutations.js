import * as types from './mutation-types'

const mutations = {
  [types.SET_USER] (state, singer) {
    state.singer.name = singer
  }
}

export default mutations
