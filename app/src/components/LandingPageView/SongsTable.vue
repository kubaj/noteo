<style scoped>
  .songstable {
    position: relative;
    float: left;
  }
</style>

<template>
  <div class="songstable">
    <md-list>
      <md-list-item v-for="song in songs" >
        <span v-on:click="playSong(song)">{{song.name}}</span>
        <md-button v-on:click="addSong(song)" class="md-icon-button md-list-action">
          <md-icon class="md-primary">add</md-icon>
        </md-button>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      playSong: function (song) {
        this.$store.commit('PLAY_SONG', song)
      },
      addSong: function (song) {
        this.$store.commit('ADD_SONG', song)
      }
    },
    computed: {
      songs () {
        return this.$store.getters.songs
      }
    },
    created: function () {
      this.$store.dispatch('getSongs')
    }
  }
</script>
