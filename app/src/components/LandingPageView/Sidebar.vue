<style scoped>
  .sidebar-container {
    position: fixed;
    top: 88px;
    bottom: 0;
    width: inherit;
  }
  .sidebar {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
</style>

<template>
  <md-whiteframe class="sidebar-container">
    <md-list class="sidebar" v-if="genres">
      <md-list-item v-for="genre in genres" v-on:click="selectGenre(genre)">{{ genre.name }}</md-list-item>
    </md-list>
    <!--<md-list v-if="artists">
      <md-list-item v-for="artist in artists" v-on:click="selectArtist(artist)">{{ artist }}</md-list-item>
    </md-list>-->
  </md-whiteframe>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      selectGenre: function (genreName) {
        this.$store.dispatch('setGenre', {genre: genreName.name})
      },
      selectArtist: function (artistName) {
        this.$store.dispatch('setArtist', {artist: artistName})
      }
    },
    computed: {
      genres () {
        return this.$store.getters.genres
      },
      artists () {
        return this.$store.getters.artists
      }
    }
  }
</script>
