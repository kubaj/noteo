import * as types from '../mutation-types'

const state = {
  genres: [],
  albums: [],
  artists: [],
  songs: []
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
  },
  [types.SET_SONGS] (state, songs) {
    state.songs = songs
  }
}

export default {
  state,
  mutations
}
