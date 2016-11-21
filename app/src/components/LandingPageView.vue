<style scoped>
  img {
    margin-top: 25px;
  }
</style>

<template>
  <div>
    <md-toolbar class="md-dense">
      <div class="md-toolbar-container">
        <md-button class="md-icon-button" @click="toggleLeftSidenav">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title" style="flex: 1;">Noteo</h2>

        <md-button class="md-icon-button" v-on:click="search">
          <md-icon>search</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>filter_list</md-icon>
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
          <md-icon>search</md-icon> <span>Scan library</span>
        </md-list-item>
      </md-list>

    </md-sidenav>

  </div>
</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage'
  import Links from './LandingPageView/Links'
  import Versions from './LandingPageView/Versions'
  import scanDir from './scanner'
  const dialog = require('electron').remote.dialog

  export default {
    components: {
      CurrentPage,
      Links,
      Versions
    },
    methods: {
      search: function (event) {
        alert('search clicked')
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
    name: 'landing-page'
  }
</script>
