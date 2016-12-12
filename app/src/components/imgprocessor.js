const app = require('electron').remote.app
const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const uuidV4 = require('uuid/v4')

const imgCacheDir = path.join(app.getPath('userData'), 'ThumbnailCache')

export default class ImageProcessor {
  constructor () {
    mkdirp.sync(imgCacheDir)
    console.log('Thumbail cache in', imgCacheDir)
  }

  saveImage (images) {
    if (images.length <= 0) {
      return null
    }

    // Save first image
    let image = images[0]
    let imgName = uuidV4() + '.' + image.format
    fs.writeFile(path.join(imgCacheDir, imgName), image.data)

    return imgName
  }
}
