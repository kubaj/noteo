var Dexie = require('dexie')
var db
var getDB = function initDb () {
  if (db) {
    return db
  }
  db = new Dexie('lib')
  db.version(1).stores({
    songs: '++id,artist,album,name,&file,favourite',
    albums: '++id,&[artist+name],artist,year,genre',
    artists: '++id,&name,*albums',
    genres: '++id,&name',
    settings: '++id,&name'
  })
  return db
}

module.exports = getDB
