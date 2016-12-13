<style scoped>
  .queue-frame {
    position: fixed;
    top: 88px;
    bottom: 0;
    width: inherit;
  }
  .queue {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  .queue-item span {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .queue-title {
    flex: 1 1 auto;
  }
</style>

<template>
  <md-whiteframe class="queue-frame">
    <md-list class="queue">
      <md-subheader >
        <span class="queue-title">Queue</span>
        <md-button class="md-icon-button clear-queue">
          <md-icon>clear_all</md-icon>
        </md-button>
      </md-subheader>
      <md-list-item class="queue-item" v-for="(song, index) in player.queue" v-on:click="playSong(index)">
        <md-icon><span v-if="index === player.currentSong">play_arrow</span></md-icon>
        <span>{{song.name}}</span>
      </md-list-item>
    </md-list>
  </md-whiteframe>
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
