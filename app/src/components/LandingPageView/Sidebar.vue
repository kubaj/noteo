<style scoped>
  .sidebar-container {
    position: fixed;
    top: 64px;
    bottom: 0;
    width: inherit;
  }
  .sidebar {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  .sidebar-item span {
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>

<template>
  <md-whiteframe class="sidebar-container">
    <md-list class="sidebar" v-if="artists">
      <md-list-item class="sidebar-item" v-on:click="showAllAlbums()">
        <md-icon>album</md-icon>
        <span>All albums</span>
      </md-list-item>
      <md-list-item class="sidebar-item">
        <md-icon>favorite</md-icon>
        <span>Favorites</span>
        <md-divider class="md-inset"></md-divider>
      </md-list-item>

      <md-subheader>Artists</md-subheader>

      <md-list-item class="sidebar-item" v-for="artist in artists" v-on:click="selectArtist(artist.name)">
        <span>{{ artist.name }}</span>
      </md-list-item>
    </md-list>
  </md-whiteframe>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      showAllAlbums: function () {
        this.$store.dispatch('getAllAlbums')
      },
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
