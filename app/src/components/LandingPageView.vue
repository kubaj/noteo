<style scoped>
    .md-tabs .md-tab {
        padding: 0px;
    }

    .album-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .album-placeholder {
        width: 250px;
        margin: 5px;
    }

</style>

<template>
    <div>
        <md-toolbar class="md-medium">
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

                <md-button class="md-icon-button" v-on:click="settings">
                    <md-icon>settings</md-icon>
                </md-button>
            </div>
        </md-toolbar>

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

        <md-tabs class="md-transparent">
            <md-tab id="library" md-label="Library">
                <library></library>
            </md-tab>

            <md-tab id="artists" md-label="Artists">

                <div class="album-container">
                    <div class="album-placeholder" v-for="album in albums">
                        <album :albumName="album.name" :artistName="album.artist" albumPicture="file:///home/jakub/Downloads/card-sky.jpg"></album>
                    </div>
                </div>


                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae,
                    omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis
                    nihil.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae,
                    omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis
                    nihil.</p>
            </md-tab>

            <md-tab id="now-playing" md-label="Now playing">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
            </md-tab>

            <md-tab id="settings" md-label="Settings">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
            </md-tab>
        </md-tabs>

    </div>
</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage'
  import Links from './LandingPageView/Links'
  import Versions from './LandingPageView/Versions'
  import Library from './LandingPageView/Library'
  import Album from './LandingPageView/Album'
  import scanDir from './scanner'
  const dialog = require('electron').remote.dialog

  export default {
    components: {
      Library,
      CurrentPage,
      Links,
      Versions,
      Album
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
        alert('settings clicked')
      },
      toggleLeftSidenav: function (event) {
        this.$refs.leftSidenav.toggle()
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
      albums () {
        return this.$store.getters.albums
      }
    },
    name: 'landing-page'
  }
</script>
