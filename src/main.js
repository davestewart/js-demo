import Vue from 'vue'
import Router from 'vue-router'

// plugins
import VueMarkdown from 'vue-markdown/dist/vue-markdown'

// assets
import './styles/index.scss'

// components
import App from './App.vue'
import components from './components'
import MenuGroup from './components/sidebar/MenuGroup'

// services
import track from './vendor/ga'
import makeRouter from './router'

// helpers
import { code, item, list, page, redirect, route } from './router/helpers'

// install
function install (Vue, options, demo = false) {
  // params
  const { site, nav, store, router } = options

  // devtools
  Vue.config.devtools = true

  // plugins
  Vue.use(vue => vue.prototype.$site = site)
  Vue.use(vue => vue.prototype.$nav = nav)
  Vue.use(VueMarkdown)
  Vue.use(router || Router)

  // analytics
  track(site.ga)

  // components
  Vue.component('menu-group', MenuGroup)
  Vue.component('vue-markdown', VueMarkdown)
  Object
    .keys(components)
    .forEach(key => Vue.component(key, components[key]))

  // final config
  const vueOptions = {
    el: '#app',
    router: makeRouter(nav, Router),
    store,
    template: '<App/>',
    components: { App }
  }

  // setup
  if (!demo) {
    console.log('returning vueOptions')
    options.vueOptions = vueOptions
    return vueOptions
  }

  // app
  window.store = store
  window.app = new Vue(vueOptions)
}

// export
function demo (options) {
  return install(Vue, options, true)
}

export default { name: 'demo', install }
export {
  demo,
  item,
  route,
  redirect,
  list,
  page,
  code
}
