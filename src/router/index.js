// routes
import { route } from './helpers'
import { afterRoute, makeMenu, makeRoutes } from './services'

// build
export default function (nav, Router) {
  const menu = makeMenu(nav)
  const routes = makeRoutes(menu)

  // router
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
