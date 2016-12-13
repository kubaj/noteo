import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './App'
import routes from './routes'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)
Vue.use(VueMaterial)
Vue.config.debug = true

Vue.material.theme.register('default', {
  primary: 'indigo',
  accent: 'pink'
})

Vue.filter('time', function (value) {
  let minutes = Math.floor(value / 60)
  let seconds = Math.floor(value - minutes * 60)
  let secondsPadded = (seconds < 10) ? '0' + seconds : seconds
  return minutes + ':' + secondsPadded
})

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
