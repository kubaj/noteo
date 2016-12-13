<style scoped>
  .album-view {
    max-width: 800px;
    margin: 15px auto;
  }
</style>

<template>
  <div class="album-view">
    <h1>Album View {{$route.params.id}}</h1>
    <router-link to="/">Back</router-link>

    <md-table-card>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head md-numeric></md-table-head>
            <md-table-head>Name</md-table-head>
            <md-table-head md-numeric><md-icon>access_time</md-icon></md-table-head>
            <md-table-head width="50px"></md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-on:dblclick.native="test()" v-for="song in songs">
            <md-table-cell>{{song.track}}</md-table-cell>
            <md-table-cell>{{song.name}}</md-table-cell>
            <md-table-cell md-numeric>{{song.duration}}</md-table-cell>
            <md-table-cell>
              <md-button class="md-icon-button">
                <md-icon>add</md-icon>
              </md-button>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-table-card>
  </div>
</template>

<script>
  import store from '../../vuex/store'

  export default {
    components: {
    },
    methods: {
      test () {
        console.log(1)
      }
    },
    data () {
      return {
        post: null,
        error: null
      }
    },
    computed: {
      albumData () {
        return this.$store.getters.selectedAlbumData.albumData
      },
      songs () {
        return this.$store.getters.selectedAlbumData.songs
      }
    },
    beforeRouteEnter (to, from, next) {
      store.dispatch('getSelectedAlbumData', {id: to.params.id, callback: next})
    }
  }
</script>
