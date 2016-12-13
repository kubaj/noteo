<style scoped>
    .md-card .md-title {
        font-size: 18px;
        margin-top: 0;
    }
    .md-card .md-card-header {
        padding: 8px;
    }
</style>
<template>
    <div>
        <router-link to="album">
        <md-card>
            <md-ink-ripple></md-ink-ripple>
            <md-card-media-cover md-solid>
                <md-card-media md-ratio="1:1">
                    <img v-if="albumPicture !== null" :src="'thumb://' + albumPicture" alt="Skyscraper">
                    <img v-if="albumPicture === null" src="./assets/noart.png" alt="Skyscraper">
                </md-card-media>

                <md-card-area>
                    <md-card-header>
                        <div class="md-title">{{albumName}}</div>
                        <div class="md-subhead">{{artistName}}</div>
                    </md-card-header>
                </md-card-area>
            </md-card-media-cover>
        </md-card>
        </router-link>
    </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: [
      'albumName',
      'artistName',
      'albumPicture'
    ],
    methods: {
    },
    computed: {
    }
  }
</script>
