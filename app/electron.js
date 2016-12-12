'use strict'

const electron = require('electron')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow
let config = {}

if (process.env.NODE_ENV === 'development') {
  config = require('../config')
  config.url = `http://localhost:${config.port}`
} else {
  config.devtron = false
  config.url = `file://${__dirname}/dist/index.html`
}

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    'web-preferences': {
      'web-security': false
    }
  })

  mainWindow.loadURL(config.url)

  if (process.env.NODE_ENV === 'development') {
    BrowserWindow.addDevToolsExtension(path.join(__dirname, '../node_modules/devtron'))

    let installExtension = require('electron-devtools-installer')

    installExtension.default(installExtension.VUEJS_DEVTOOLS)
      .then((name) => mainWindow.webContents.openDevTools())
      .catch((err) => console.log('An error occurred: ', err))
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  console.log('mainWindow opened')
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('ready', () => {
  electron.protocol.registerFileProtocol('thumb', (request, callback) => {
    const url = request.url.substr(8)
    callback({path: path.join(app.getPath('userData'), 'ThumbnailCache', url)})
  }, (error) => {
    if (error) console.error('Failed to register protocol')
  })
})

app.on('ready', () => {
  electron.protocol.registerFileProtocol('audio', (request, callback) => {
    const url = request.url.substr(8)
    callback({path: path.normalize(url)})
  }, (error) => {
    if (error) console.error('Failed to register protocol')
  })
})
