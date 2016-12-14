export const mainCounter = state => state.counters.main
export const genres = state => state.library.genres
export const albums = state => state.library.albums
export const artists = state => state.library.artists
export const player = state => state.player
export const currentSong = state => state.player.queue[state.player.currentSong]
export const selectedAlbumData = state => state.library.selectedAlbum
export const setLibpath = state => state.settings.libpath
export const setGenresshown = state => state.settings.genresshown
export const getCurrentAlbum = state => state.player.currentAlbum.thumbnail
export const getSearchString = state => state.library.searchString

