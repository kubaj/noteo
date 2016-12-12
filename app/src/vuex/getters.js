export const mainCounter = state => state.counters.main
export const genres = state => state.library.genres
export const albums = state => state.library.albums
export const artists = state => state.library.artists
export const songs = state => state.library.songs
export const player = state => state.player
export const currentSong = state => state.player.queue[state.player.currentSong]
