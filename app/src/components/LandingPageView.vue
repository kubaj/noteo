<style scoped>
  .main-view {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-flow: column;
  }

  .lib-container {
    flex-grow: 1;
    overflow-y: scroll;
  }

  .settings-dialog {
      width: 500px;
  }
</style>

<template>
    <div>
        <div class="main-view">
          <md-toolbar class="md-medium main-toolbar">
            <div class="md-toolbar-container">

                <md-button class="md-icon-button">
                    <md-icon>picture_in_picture</md-icon>
                </md-button>

                <md-button class="md-icon-button" v-on:click="fastRewind">
                    <md-icon>fast_rewind</md-icon>
                </md-button>

                <md-button class="md-icon-button" v-on:click="play">
                    <md-icon>
                      {{(playerState.isPlaying ? 'pause_circle_outline' : 'play_circle_outline')}}
                    </md-icon>
                </md-button>

                <md-button class="md-icon-button" v-on:click="fastForward">
                    <md-icon>fast_forward</md-icon>
                </md-button>

                <md-button class="md-icon-button" v-on:click="like">
                    <md-icon>favorite_border</md-icon>
                </md-button>

                <h2 class="md-title" style="flex: 1;"><span v-if="currentSong">{{currentSong.name}} <small>{{currentSong.artist}} - {{playerState.currentTime}}</small></span></h2>

                <md-button class="md-icon-button" v-on:click="search">
                    <md-icon>search</md-icon>
                </md-button>

                <md-button class="md-icon-button" v-on:click="settings('dialog1')">
                    <md-icon>settings</md-icon>
                </md-button>
            </div>
          </md-toolbar>
          <div class="lib-container">
            <library></library>
          </div>
        </div>

        <md-dialog md-open-from="custom" md-close-to="#custom" ref="dialog1">
            <md-dialog-title>Settings</md-dialog-title>
            <md-dialog-content>
                <div class="settings-dialog">
                    <p>Path to music library: <br>
                        <span v-if="settingzlibpath">{{ settingzlibpath }}</span>
                        <span v-if="!settingzlibpath">You didn't set path to your library yet!</span>
                    </p>
                    <md-button class="md-primary md-raised" v-on:click="setLib()">Set path</md-button>
                    <md-button class="md-primary md-raised" v-on:click="scanLib()">Scan library</md-button>

                    <!--<md-input-container>-->
                        <!--<label for="movie">Theme</label>-->
                        <!--<md-select name="movie" id="movie" v-model="movie">-->
                            <!--<md-option value="fight_club">Fight Club</md-option>-->
                            <!--<md-option value="godfather">Godfather</md-option>-->
                            <!--<md-option value="godfather_ii">Godfather II</md-option>-->
                        <!--</md-select>-->
                    <!--</md-input-container>-->

                    <div>
                        <md-switch v-model="settingzgenre" class="md-primary">
                            Show genres in library view</md-switch>
                        <p>{{ settingzgenre }}</p>
                    </div>
                </div>
            </md-dialog-content>

            <md-dialog-actions>
                <md-button class="md-primary" @click="closeDialog('dialog1')">Ok</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>

<script>
  import Library from './LandingPageView/Library'
  import scanDir from './scanner'
  const dialog = require('electron').remote.dialog

  export default {
    components: {
      Library
    },
    methods: {

      play: function (event) {
        this.$store.commit('PLAYER_TOGGLE')
      },
      fastRewind: function (event) {
        this.$store.commit('PLAYER_PREVIOUS')
      },
      fastForward: function (event) {
        this.$store.commit('PLAYER_NEXT')
      },
      search: function (event) {
        alert('search clicked')
      },
      like: function (event) {
        alert('like clicked')
      },
      settings: function (event) {
        this.$refs[event].open()
      },
      closeDialog: function (ref) {
        this.$refs[ref].close()
      },
      setLibPath: function (files) {
        if (files) {
          this.scanLib(files[0])
          this.$store.dispatch('setLibPath', { libpath: files[0] })
        }
      },
      onScanFinished: function () {
        // TODO dat sem seksi css loader, resp tuto uz ho len vypnut
        this.$store.dispatch('getGenres')
        this.$store.dispatch('getAllAlbums')
      },
      setLib: function () {
        dialog.showOpenDialog({
          properties: ['openDirectory']
        }, this.setLibPath)
        this.scanLib()
      },
      scanLib: function () {
        scanDir(this.settingzlibpath, this.onScanFinished)
      }
    },
    computed: {
      albums () {
        return this.$store.getters.albums
      },
      playerState () {
        return this.$store.getters.player
      },
      currentSong () {
        return this.$store.getters.currentSong
      },
      settingzlibpath () {
        return this.$store.getters.setLibpath
      },
      setttingzgenre: {
        get () { return this.$store.getters.setGenresshown },
        set (val) { this.$store.dispatch('setGenresShown', { genresshown: val }) }
      }
    },
    created: function () {
    },
    name: 'landing-page'
  }
</script>
