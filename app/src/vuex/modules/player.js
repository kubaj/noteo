import * as types from '../mutation-types'
import store from '../store'
(store)

const audioBackend = new Audio()

function fetchSong () {
  let currentSong = state.queue[state.currentSong]
  audioBackend.src = 'audio://' + currentSong.file
  audioBackend.play()

  let notify = new Notification(currentSong.name, {
    body: currentSong.artist,
    silent: true
  })
  notify // shutup eslint
}

audioBackend.ontimeupdate = () => {
  store.commit('_REFRESH_TIME')
}

audioBackend.onended = () => {
  store.commit('PLAYER_NEXT')
}

const state = {
  isPlaying: false,
  currentTime: 0,
  currentSong: -1,
  queue: []
}

const mutations = {
  [types.PLAY] (state) {
    if (state.currentSong === -1) {
      store.commit('PLAYER_NEXT')
    } else {
      state.isPlaying = true
      audioBackend.play()
    }
  },
  [types.PAUSE] (state) {
    state.isPlaying = false
    audioBackend.pause()
  },
  [types.PLAYER_TOGGLE] (state) {
    state.isPlaying = !state.isPlaying
    if (state.isPlaying) {
      store.commit('PLAY')
    } else {
      store.commit('PAUSE')
    }
  },
  [types.PLAYER_NEXT] (state) {
    if (state.currentSong < state.queue.length - 1) {
      state.isPlaying = true
      state.currentSong++
      fetchSong()
    } else {
      state.isPlaying = false
      state.currentSong = -1
      audioBackend.pause()
      audioBackend.currentTime = 0
    }
  },
  [types.PLAYER_PREVIOUS] (state) {
    if (state.currentSong > 0) {
      state.currentSong--
      fetchSong()
    } else {
      audioBackend.currentTime = 0
    }
  },
  [types.PLAY_SONG] (state, song) {
    if (state.isPlaying) {
      state.queue.splice(++state.currentSong, 0, song)
    } else {
      state.currentSong = state.queue.push(song) - 1
    }
    fetchSong()
    store.commit('PLAY')
  },
  [types.ADD_SONG] (state, song) {
    state.queue.push(song)
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentSong = index
    fetchSong()
    store.commit('PLAY')
  },
  [types._REFRESH_TIME] (state) {
    state.currentTime = audioBackend.currentTime
  }
}

export default {
  state,
  mutations
}
