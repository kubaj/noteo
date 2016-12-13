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
  .library-main-content-container {
    flex: 1 1 auto;
  }
</style>

<template>
  <div class="library-main-view">
    <div class="library-sidebar">
      <genres></genres>
    </div>

    <div class="library-main-content-container">
      <!-- will be replaced by router-view -->
      <album-list></album-list>
    </div>
  </div>
</template>

<script>
  import Genres from './Genres.vue'
  import AlbumList from './AlbumList.vue'

  export default {
    components: {
      Genres,
      AlbumList
    },
    methods: {
    },
    created: function () {
      this.$store.dispatch('getGenres')
      this.$store.dispatch('getAllAlbums')
      this.$store.dispatch('getAllSettings')
    },
    data () {
      return {}
    }
  }
</script>
