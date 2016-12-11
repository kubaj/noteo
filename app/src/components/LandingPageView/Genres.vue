<style scoped>
    .genresfilter {
        display: flex;
        flex-direction: row;
    }
    p {
        margin-left: 25px;
    }
</style>
<template>
    <div class="genresfilter">
        <md-list v-if="genres">
            <md-list-item v-for="genre in genres" v-on:click="selectGenre(genre)">{{ genre.name }}</md-list-item>
        </md-list>
        <md-list v-if="artists">
            <md-list-item v-for="album in artists">{{ album }}</md-list-item>
        </md-list>
        <md-list v-if="albums">
            <md-list-item v-for="album in albums">{{ album.name }}</md-list-item>
        </md-list>
    </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      selectGenre: function (genreName) {
        this.$store.dispatch('setGenre', {genre: genreName.name})
      }
    },
    computed: {
      genres () {
        return this.$store.getters.genres
      },
      artists () {
        return this.$store.getters.artists
      },
      albums () {
        return this.$store.getters.albums
      }
    }
  }
</script>
