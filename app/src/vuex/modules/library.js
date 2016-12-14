import * as types from '../mutation-types'

const state = {
  genres: [],
  albums: [],
  artists: [],
  selectedAlbum: {
    albumData: {},
    songs: []
  },
  searchString: '',
  favouriteSongs: []
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
  },
  [types.SET_FAVOURITE_SONGS] (state, data) {
    state.favouriteSongs = data
  },
  [types.SET_SEARCH_STRING] (state, string) {
    state.searchString = string
  }
}

export default {
  state,
  mutations
}
