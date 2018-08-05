import Vue from 'vue'
import VueMarkdown from 'vue-markdown/dist/vue-markdown'

// assets
import './styles/index.scss'
import './assets/favicon.png'
import './components'

// app
import App from './App.vue'
import makeRouter from './router'
import * as helpers from './router/helpers'
import { item, route, redirect, list, page, code } from './router/helpers'

// config
import track from './vendor/ga'

// plugins
Vue.use(VueMarkdown)
Vue.component('vue-markdown', VueMarkdown)

// export
function demo (site = {}, menu = {}, store = {}) {

  // analytics
  track(site.ga)

  // config
  Vue.use(Vue => Vue.prototype.$site = site)
  Vue.use(Vue => Vue.prototype.$menu = menu)

  // tooling
  Vue.config.devtools = true

  // app
  window.store = store
  window.app = new Vue({
    el: '#app',
    router: makeRouter(menu),
    store,
    template: '<App/>',
    components: { App }
  })

}

Object.assign(demo, helpers)
export default demo
export {
  item,
  route,
  redirect,
  list,
  page,
  code
}
