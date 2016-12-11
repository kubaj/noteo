var Dexie = require('dexie')
var db
var getDB = function initDb () {
  if (db) {
    return db
  }
  db = new Dexie('lib')
  db.version(1).stores({
    songs: '++id,artist,album,name,&file',
    albums: '++id,&[artist+name],year,genre',
    artists: '++id,&name,*albums',
    genres: '++id,&name'
  })
  return db
}

module.exports = getDB
