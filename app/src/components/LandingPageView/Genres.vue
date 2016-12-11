<style scoped>
    p {
        margin-left: 25px;
    }
</style>
<template>
    <div>
        <md-list v-if="genres">
            <md-list-item v-for="genre in genres">{{ genre.name }}</md-list-item>
        </md-list>
    </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    computed: {
      genres () {
        return this.$store.getters.genres
      }
    }
  }
</script>
