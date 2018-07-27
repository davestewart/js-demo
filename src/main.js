import Vue from 'vue'
import VueMarkdown from 'vue-markdown'

import App from './core/App'
import store from './app/data/store'
import router from './core/router/index'

// ui
import './core/components'

// assets
import './core/styles/index.scss'
require('./core/assets/favicon.png')

// config
import './app/config'

// google analytics
import config from './app/config/site'
import track from './core/vendor/ga'
if (config.ga) {
  track(config.ga)
}

// plugins
Vue.use(VueMarkdown);
Vue.component('vue-markdown', VueMarkdown)

// config
Vue.use(Vue => Vue.prototype.$site = config)

// app
window.store = store
window.app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
