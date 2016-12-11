import * as types from './mutation-types'
import getDB from './db'

export const decrementMain = ({ commit }) => {
  commit(types.DECREMENT_MAIN_COUNTER)
}

export const incrementMain = ({ commit }) => {
  commit(types.INCREMENT_MAIN_COUNTER)
}

export const setGenre = ({ commit }, genre) => {
  getDB().genres.where('name').equals('Alternative').toArray().then((data) => {

  })
}

export const getGenres = ({ commit }) => {
  getDB().genres.toCollection().toArray().then((data) => {
    console.log(data)
    commit(types.SET_GENRES, data)
  })
}
