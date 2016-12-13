<style scoped>
    .md-card .md-title {
        font-size: 18px;
        margin-top: 0;
    }
    .md-card .md-card-header {
        padding: 8px;
    }
    .album-card:hover .album-fade {
        /*opacity: 1;*/
    }
    .album-fade {
        /*opacity: 0;
        transition: opacity 0.2s ease;
        will-change: transition;*/
    }
    .album-fade .md-title {
        font-size: 16px;
    }
    .album-fade .md-subhead {
        font-size: 12px;
    }
</style>
<template>
    <div>
        <router-link :to="{name: 'album', params: { id: album.id }}">
        <md-card class="album-card">
            <md-ink-ripple></md-ink-ripple>
            <md-card-media-cover md-solid>
                <md-card-media md-ratio="1:1">
                    <img v-if="album.thumbnail !== null" :src="'thumb://' + album.thumbnail" alt="Skyscraper">
                    <img v-if="album.thumbnail === null" src="./assets/noart.png" alt="Skyscraper">
                </md-card-media>

                <md-card-area class="album-fade">
                    <md-card-header>
                        <div class="md-title">{{album.name}}</div>
                        <div class="md-subhead">{{album.artist}}</div>
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
      'album'
    ],
    methods: {
    },
    computed: {
    }
  }
</script>
