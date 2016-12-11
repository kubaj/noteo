<style scoped>
    .genresSection {
        height: 100%;
        width: auto;
    }
</style>
<template>
    <div>
        <div class="genresSection">
            <genres></genres>
        </div>
        <button v-on:click="counterInc">asdf</button>
    </div>
</template>

<script>
  import ArtistPreview from './ArtistPreview.vue'
  import Genres from './Genres.vue'
  export default {
    components: {
      Genres,
      ArtistPreview
    },
    methods: {
      counterInc: function () {
        this.$store.dispatch('getGenres')
      }
    },
    data () {
      return {}
    }
  }
</script>
