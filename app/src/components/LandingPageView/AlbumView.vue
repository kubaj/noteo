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
    <div class="album-head">
      <md-card class="album-thumb">
        <md-card-media-cover md-solid>
          <md-card-media md-ratio="1:1">
            <img v-if="albumData.thumbnail !== null" :src="'thumb://' + albumData.thumbnail" alt="Skyscraper">
            <img v-if="albumData.thumbnail === null" src="./assets/noart.png" alt="Skyscraper">
          </md-card-media>
        </md-card-media-cover>
      </md-card>
      <div class="album-texts">
        <div class="album-texts-top">
          <md-button class="md-icon-button close-btn" v-on:click="goBack()">
            <md-icon>close</md-icon>
          </md-button>
          <span class="md-display-1">{{albumData.name}}</span>
          <h2>{{albumData.artist}}</h2>
        </div>
        <div class="album-texts-actions">
          <md-button class="md-raised md-accent" v-on:click="playAlbum(songs)">
            <md-icon>play_arrow</md-icon>
            <span>Play album</span>
          </md-button>
          <md-button class="md-raised" v-on:click="queueAlbum(songs)">
            <md-icon>add</md-icon>
            <span>Add to queue</span>
          </md-button>
        </div>
      </div>
    </div>

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
          <md-table-row v-on:dblclick.native="playSong(song)" v-for="song in songs">
            <md-table-cell class="defcur">{{song.track}}</md-table-cell>
            <md-table-cell class="defcur">{{song.name}}</md-table-cell>
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
