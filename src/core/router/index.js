import Vue from 'vue'
import Router from 'vue-router'
import { makeMenu, makeRoutes, route } from './helpers'

// app config
import config from '../../app/config/site'
import navigation from '../../app/config/navgation'

// build
const menu = makeMenu(navigation)
const routes = makeRoutes(menu)

// router
Vue.use(Router)
const router = new Router({
  mode: window.location.href.includes('codesandbox')
    ? 'history'
    : 'hash',
  linkActiveClass: 'is-link-active',
  linkExactActiveClass: 'is-link-exact',
  routes: [
    { path: '/', redirect:'/home' },
    ...routes,
    route('*', {template: '<div>Route not found</div>'}),
  ]
})

// title
function updateTitle () {
  const route = location.hash
  const link = document.querySelector(`a[href="${route}"]`)
  if (link) {
    document.title = `${config.name} / ${link.innerText}`
  }
}

router.afterEach(updateTitle)
setTimeout(updateTitle)

export default router

