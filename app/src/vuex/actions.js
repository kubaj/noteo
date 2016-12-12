import * as types from './mutation-types'
import getDB from './db'

export const decrementMain = ({ commit }) => {
  commit(types.DECREMENT_MAIN_COUNTER)
}

export const incrementMain = ({ commit }) => {
  commit(types.INCREMENT_MAIN_COUNTER)
}

export const setGenre = ({ commit }, payload) => {
  getDB().albums.where('genre').equals(payload.genre).toArray().then((data) => {
    let unique = {}
    let artists = []
    for (let i in data) {
      if (typeof (unique[data[i].artist]) === 'undefined') {
        artists.push(data[i].artist)
      }
      unique[data[i].artist] = 0
    }
    commit(types.SET_ARTISTS, artists)
    commit(types.SET_ALBUMS, data)
  })
}

export const setArtist = ({ commit }, payload) => {
  getDB().albums.where('artist').equals(payload.artist).toArray().then((data) => {
    commit(types.SET_ALBUMS, data)
  })
}

export const getGenres = ({ commit }) => {
  getDB().genres.toCollection().toArray().then((data) => {
    commit(types.SET_GENRES, data)
  })
}

export const getAllAlbums = ({ commit }) => {
  getDB().albums.toCollection().toArray().then((data) => {
    commit(types.SET_ALBUMS, data)
  })
}
