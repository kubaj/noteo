import * as types from '../mutation-types'

const state = {
  genresshown: {},
  libpath: {}
}

const mutations = {
  [types.SHOW_GENRES] (state, genresShown) {
    state.genresShown = genresShown
  },
  [types.SET_LIB_PATH] (state, libPath) {
    state.libpath = libPath
  }
}

export default {
  state,
  mutations
}
