import Vue from 'vue'
import VueMarkdown from 'vue-markdown'

import App from './core/App'
import store from './app/state/store'
import router from './core/router/index'

// ui
import './core/components'

// styles
import 'bulma/css/bulma.css'
import './core/styles/index.scss'

// google analytics
import config from './app/state/config'
import track from './core/vendor/ga'
if (config.ga) {
  track(config.ga)
}

Vue.config.productionTip = false

Vue.use(VueMarkdown);
Vue.component('vue-markdown', VueMarkdown)

Vue.use(Vue => Vue.prototype.$config = config)

window.app = new Vue({
  el: '#demo',
  router,
  store,
  template: '<App/>',
  components: { App }
})
