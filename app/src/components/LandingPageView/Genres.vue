<style scoped>
    .genresfilter {
        display: flex;
        flex-direction: row;
    }
</style>
<template>
    <div class="genresfilter">
        <md-list class="genres" v-if="genres">
            <md-list-item v-for="genre in genres" v-on:click="selectGenre(genre)">{{ genre.name }}</md-list-item>
        </md-list>
        <md-list v-if="artists">
            <md-list-item v-for="artist in artists" v-on:click="selectArtist(artist)">{{ artist }}</md-list-item>
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
