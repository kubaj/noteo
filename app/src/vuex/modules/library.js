import * as types from '../mutation-types'

const state = {
  genres: [],
  albums: [],
  artists: []
}

const mutations = {
  [types.SET_GENRES] (state, genres) {
    state.genres = genres
  },
  [types.SET_ALBUMS] (state, albums) {
    state.albums = albums
  },
  [types.SET_ARTISTS] (state, artists) {
    state.artists = artists
  }
}

export default {
  state,
  mutations
}
