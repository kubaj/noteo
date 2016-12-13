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
                    <md-icon>play_circle_outline</md-icon>
                </md-button>

                <md-button class="md-icon-button" v-on:click="fastForward">
                    <md-icon>fast_forward</md-icon>
                </md-button>

                <md-button class="md-icon-button" v-on:click="like">
                    <md-icon>favorite_border</md-icon>
                </md-button>

                <md-button class="md-icon-button" @click="toggleLeftSidenav">
                    <md-icon>menu</md-icon>
                </md-button>

                <h2 class="md-title" style="flex: 1;">Noteo</h2>

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

        <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
            <md-toolbar class="md-large">
                <div class="md-toolbar-container">
                    <h3 class="md-title">Noteo menu</h3>
                </div>
            </md-toolbar>

            <md-list>
                <md-list-item @click="scanLib">
                    <md-icon>search</md-icon>
                    <span>Scan library</span>
                </md-list-item>
            </md-list>

        </md-sidenav>

        <md-dialog md-open-from="custom" md-close-to="#custom" ref="dialog1">
            <md-dialog-title>Settings</md-dialog-title>
            <md-dialog-content>
                <md-input-container>
                    <label for="movie">Theme</label>
                    <md-select name="movie" id="movie" v-model="movie">
                        <md-option value="fight_club">Fight Club</md-option>
                        <md-option value="godfather">Godfather</md-option>
                        <md-option value="godfather_ii">Godfather II</md-option>
                    </md-select>
                </md-input-container>

                <div>
                    <md-switch v-model="checked1" id="my-test1"  name="my-test1" class="md-primary">Show genre</md-switch>
                </div>
            </md-dialog-content>

            <md-dialog-actions>
                <md-button class="md-primary" @click="closeDialog('dialog1')">Cancel</md-button>
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
        alert('play clicked')
      },
      fastRewind: function (event) {
        alert('fast_rewind clicked')
      },
      fastForward: function (event) {
        alert('fast_forward clicked')
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
      toggleLeftSidenav: function (event) {
        this.$refs.leftSidenav.toggle()
      },
      closeDialog: function (ref) {
        this.$refs[ref].close()
      },
      scanLib: function (event) {
        this.toggleLeftSidenav()
        dialog.showOpenDialog({
          properties: ['openDirectory']
        }, function (files) {
          if (files) {
            scanDir(files[0])
          }
        })
      },
      open: function (event) {

      },
      close: function (event) {

      }
    },
    computed: {
    },
    name: 'landing-page'
  }
</script>
