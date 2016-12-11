import * as types from '../mutation-types'

const state = {
  genres: []
}

const mutations = {
  [types.SET_GENRES] (state, genres) {
    state.genres = genres
  }
}

export default {
  state,
  mutations
}
