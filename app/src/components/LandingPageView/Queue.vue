<style scoped>
  .queue {
    position: relative;
    float: right;
  }
</style>

<template>
  <div class="queue">
  {{current}}
    <md-list>
      <md-list-item v-for="(song, index) in player.queue" v-on:click="playSong(index)">
        <md-icon><span v-if="index === player.currentSong">play_arrow</span></md-icon>
        <span>{{song.name}}</span>
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
      playSong: function (index) {
        this.$store.commit('SET_CURRENT_INDEX', index)
      }
    },
    computed: {
      player () {
        return this.$store.getters.player
      },
      currentSong () {
        return this.$store.getters.currentSong
      }
    }
  }
</script>
