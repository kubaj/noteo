<style scoped>
  .album-container {
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
  <div class="album-container">
      <div class="album-placeholder" v-for="album in albums">
          <album :album="album"></album>
      </div>
      <div class="album-placeholder"></div>
      <div class="album-placeholder"></div>
      <div class="album-placeholder"></div>
      <div class="album-placeholder"></div>
      <div class="album-placeholder"></div>
  </div>
</template>

<script>
  import Album from './Album.vue'

  export default {
    components: {
      Album
    },
    methods: {
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
