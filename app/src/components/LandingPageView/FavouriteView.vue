<style scoped>
  .album-view {
    max-width: 800px;
    margin: 15px auto;
    padding: 0 15px;
  }
  .album-head {
    display: flex;
    flex-flow: row;
    margin: 10px 0 30px;
  }
  .album-thumb {
    width: 30%;
    flex: 1 1 auto;
  }
  .album-texts {
    width: 70%;
    flex: 1 1 auto;
    padding: 5px 20px 0;
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
  .album-texts-top,
  .defcur {
    cursor: default;
  }
  .album-texts-actions {
    margin: -6px -8px;
  }
  .close-btn {
    position: absolute;
    top: 0;
    right: 0
  }
</style>

<template>
  <div class="album-view">
    <md-table-card>
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>Name</md-table-head>
            <md-table-head>Album</md-table-head>
            <md-table-head>Artist</md-table-head>
            <md-table-head md-numeric><md-icon>access_time</md-icon></md-table-head>
            <md-table-head width="50px"></md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-on:dblclick.native="playSong(song)" v-for="song in songs">
            <md-table-cell class="defcur">{{song.name}}</md-table-cell>
            <md-table-cell class="defcur">{{song.album}}</md-table-cell>
            <md-table-cell class="defcur">{{song.artist}}</md-table-cell>
            <md-table-cell class="defcur" md-numeric>{{song.duration | time}}</md-table-cell>
            <md-table-cell>
              <md-button class="md-icon-button" v-on:click="addSong(song)">
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
      playSong: function (song) {
        this.$store.commit('PLAY_SONG', song)
      },
      addSong: function (song) {
        this.$store.commit('ADD_SONG', song)
      },
      playAlbum: function (songs) {
        this.$store.commit('PLAY_ALBUM', songs)
      },
      queueAlbum: function (songs) {
        this.$store.commit('ADD_ALBUM', songs)
      },
      goBack: function () {
        history.go(-1)
      }
    },
    data () {
      return {
        post: null,
        error: null
      }
    },
    computed: {
      songs () {
        return this.$store.getters.getFavouriteSongs
      }
    },
    beforeRouteEnter (to, from, next) {
      store.dispatch('getFavouriteSongs', {callback: next})
    }
  }
</script>
