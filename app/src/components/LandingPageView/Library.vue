<style scoped>
    .genresSection {
        width: auto;
    }
    .album-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .album-placeholder {
        width: 250px;
        margin: 5px;
    }
</style>
<template>
    <div>
        <div class="genresSection">
            <genres></genres>
        </div>
        <div class="album-container">
            <div class="album-placeholder" v-for="album in albums">
                <album :albumName="album.name" :artistName="album.artist" :albumPicture="'thumb://' + album.thumbnail"></album>
            </div>
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
