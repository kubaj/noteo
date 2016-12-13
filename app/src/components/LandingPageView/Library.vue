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
  .queue-sidebar {
    width: 240px;
    flex: 0 0 auto;
  }
</style>

<template>
  <div class="library-main-view">
    <div class="library-sidebar">
      <sidebar></sidebar>
    </div>

    <div class="library-main-content-container">
      <router-view></router-view>
    </div>

    <div class="queue-sidebar">
      <queue></queue>
    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar.vue'
  import AlbumList from './AlbumList.vue'
  import Queue from './Queue.vue'

  export default {
    components: {
      Sidebar,
      AlbumList,
      Queue
    },
    methods: {
    },
    created: function () {
      this.$store.dispatch('getAllArtists')
      this.$store.dispatch('getAllAlbums')
      this.$store.dispatch('getAllSettings')
    },
    data () {
      return {}
    }
  }
</script>
