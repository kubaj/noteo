import * as types from './mutation-types'
import getDB from './db'
let ls = require('local-storage')

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

export const getAllArtists = ({ commit }) => {
  getDB().artists.orderBy('name').toArray().then((data) => {
    commit(types.SET_ARTISTS, data)
  })
}

export const getAllAlbums = ({ commit }) => {
  getDB().albums.orderBy('[artist+name]').toArray().then((data) => {
    commit(types.SET_ALBUMS, data)
  })
}

export const getSelectedAlbumData = ({ commit }, payload) => {
  getDB().albums.get(payload.id).then((albumData) => {
    getDB().songs.where('album').equals(albumData.name).sortBy('track').then((songs) => {
      commit(types.SET_ALBUM_DATA, {albumData, songs})
      payload.callback()
    })
  })
}

export const getAlbumArt = ({ commit }, payload) => {
  getDB().albums.where('[artist+name]').equals([payload.artist, payload.album]).first().then((album) => {
    commit(types.SET_CURRENT_IMAGE, album)
  })
}

export const setLibPath = ({ commit }, payload) => {
  ls('libpath', payload.libpath)
  commit(types.SET_LIB_PATH, payload.libpath)
}

export const setGenresShown = ({ commit }, payload) => {
  ls('genresshown', payload.genresshown)
  commit(types.SHOW_GENRES, payload.genresshown)
}

export const getAllSettings = ({ commit }) => {
  let libpath = ls('libpath')
  let genresshown = ls('genresshown')

  if (libpath === null) {
    ls('libpath', '')
    commit(types.SET_LIB_PATH, '')
  } else {
    commit(types.SET_LIB_PATH, libpath)
  }

  if (genresshown === null) {
    ls('genresshown', false)
    commit(types.SHOW_GENRES, false)
  } else {
    commit(types.SHOW_GENRES, genresshown)
  }
}

export const setSearchString = ({ commit }, payload) => {
  commit(types.SET_SEARCH_STRING, payload.string)
}
