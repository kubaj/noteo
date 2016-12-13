import * as types from '../mutation-types'

const state = {
  genres: [],
  albums: [],
  artists: [],
  selectedAlbum: {
    albumData: {},
    songs: []
  }
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
  [types.SET_ALBUM_DATA] (state, data) {
    state.selectedAlbum = data
  }
}

export default {
  state,
  mutations
}
