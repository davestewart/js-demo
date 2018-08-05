import Vue from 'vue'
import Router from 'vue-router'

// routes
import { route } from './helpers'
import { afterRoute, makeMenu, makeRoutes } from './services'

// build
export default function (navigation) {
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
      ...routes,
      route('*', { template: '<div>Route not found</div>' }),
    ]
  })

  router.afterEach(afterRoute)
  setTimeout(afterRoute)

  return router
}
