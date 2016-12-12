import ImageProcessor from './imgprocessor'

const walk = require('walk')
const fs = require('fs')
const mm = require('musicmetadata')
const mime = require('mime')
const path = require('path')
const getDB = require('../vuex/db')

let db = {}
let proc

class Song {
  constructor (artist, album, name, track, disc, file, duration, playcount) {
    this.artist = artist
    this.album = album
    this.name = name
    this.track = track
    this.disc = disc
    this.file = file
    this.duration = duration
    this.playcount = playcount
  }
}

class Album {
  constructor (artist, name, year, genre, thumbnail) {
    this.artist = artist
    this.name = name
    this.year = year
    this.genre = genre
    this.thumbnail = thumbnail
  }
}

class Artist {
  constructor (name, thumbnail) {
    this.name = name
    this.thumbnail = thumbnail
  }
}

class Genre {
  constructor (name) {
    this.name = name
  }
}

let audio = new Audio()

function scanDir (dir, callback) {
  db = getDB()
  proc = new ImageProcessor()

  db.songs.mapToClass(Song)
  db.albums.mapToClass(Album)
  db.artists.mapToClass(Artist)
  db.genres.mapToClass(Genre)

  let walker = walk.walk(dir)

  walker.on('file', function (root, fileStats, next) {
    let scannedFile = {}
    scannedFile.fstats = fileStats
    scannedFile.fullPath = path.join(root, fileStats.name)
    db.songs.where('file').equals(scannedFile.fullPath).count().then(function (val) {
      if (val === 0) {
        scanTags(scannedFile, next)
      } else {
        next()
      }
    })
  })
}

function scanTags (scannedFile, next) {
  scannedFile.mime = mime.lookup(scannedFile.fullPath)
  scannedFile.canplay = audio.canPlayType(scannedFile.mime)

  mm(fs.createReadStream(scannedFile.fullPath), { duration: true }, function (err, metadata) {
    if (err) next()
    scannedFile.metadata = metadata

    insertArtist(scannedFile)
    insertAlbum(scannedFile)
    insertSong(scannedFile)

    next()
  })
}

function insertArtist (scannedFile) {
  db.artists.where('name').equals(scannedFile.metadata.artist[0]).count()
    .then(function (val) {
      if (val === 0) {
        let artist = new Artist(scannedFile.metadata.artist[0], null)
        db.artists.put(artist)
      }
    })
}

function insertAlbum (scannedFile) {
  db.albums.where('[artist+name]').equals([scannedFile.metadata.artist[0], scannedFile.metadata.album])
    .count().then(function (val) {
      if (val === 0) {
        let thumbnailPath = proc.saveImage(scannedFile.metadata.picture)

        let newAlbum = new Album(scannedFile.metadata.artist[0],
          scannedFile.metadata.album,
          scannedFile.metadata.year,
          scannedFile.metadata.genre[0],
          thumbnailPath)

        insertGenre(scannedFile)

        db.albums.put(newAlbum)
      }
    })
}

function insertSong (scannedFile) {
  let newSong = new Song(scannedFile.metadata.artist[0],
    scannedFile.metadata.album,
    scannedFile.metadata.title,
    scannedFile.metadata.track.no,
    -1,
    scannedFile.fullPath,
    scannedFile.metadata.duration, 0)

  db.songs.put(newSong)
}

function insertGenre (scannedFile) {
  db.artists.where('name').equals(scannedFile.metadata.genre[0]).count()
    .then(function (val) {
      if (val === 0) {
        let genre = new Genre(scannedFile.metadata.genre[0])
        db.genres.put(genre)
      }
    })
}

module.exports = scanDir
