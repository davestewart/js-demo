// routes
import pages from './pages'
import examples from './examples'

// helper
export function route (path, component) {
  return { path, component }
}

// export
export default [
  ...pages,
  ...examples,
]
