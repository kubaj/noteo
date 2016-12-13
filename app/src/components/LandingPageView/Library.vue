<style scoped>
  .library-main-view {
    display: flex;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .library-sidebar {
    width: 240px;
    flex: 0 0 auto;
  }
  .album-container {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 10px 15px;
  }
  .album-placeholder {
    flex: 1 1 230px;
    margin: 10px;
  }
</style>

<template>
    <div class="library-main-view">
        <div class="library-sidebar">
            <genres></genres>
        </div>
        <div class="album-container">
            <div class="album-placeholder" v-for="album in albums">
                <album :albumName="album.name" :artistName="album.artist" :albumPicture="'thumb://' + album.thumbnail"></album>
            </div>
            <div class="album-placeholder"></div>
            <div class="album-placeholder"></div>
            <div class="album-placeholder"></div>
            <div class="album-placeholder"></div>
            <div class="album-placeholder"></div>
        </div>
    </div>
</template>

<script>
  import Genres from './Genres.vue'
  import Album from './Album.vue'

  export default {
    components: {
      Genres,
      Album
    },
    methods: {
    },
    created: function () {
      this.$store.dispatch('getGenres')
      this.$store.dispatch('getAllAlbums')
    },
    computed: {
      albums () {
        return this.$store.getters.albums
      }
    },
    data () {
      return {}
    }
  }
</script>
