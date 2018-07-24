import Vue from 'vue'
import Router from 'vue-router'

import config from '../../app/state/config'
import routes from '../../app/router'
import { route } from '../../app/router'


Vue.use(Router)

function updateTitle () {
  const route = location.hash
  const link = document.querySelector(`a[href="${route}"]`)
  if (link) {
    document.title = `${config.name} / ${link.innerText}`
  }
}

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

router.afterEach(updateTitle)
setTimeout(updateTitle)

export default router

