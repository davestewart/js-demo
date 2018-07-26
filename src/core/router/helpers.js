export function list (path, text, items = []) {
  if (Array.isArray(text)) {
    items = text
    text = null
  }
  if (items && !Array.isArray(items)) {
    items = [items]
  }
  return { type: 'menu-list', text, path, items }
}

export function item (type, path, text, component) {
  return { type, path, text, component }
}

export function page (path, text, component) {
  return item('page', path, text, component)
}

export function code (path, text, component) {
  return item('code', path, text, component)
}

export function route (path, component) {
  return { path, component }
}

export function makeMenu (items, prefix = '/') {
  return items.map(item => {
    item.path = prefix.replace(/^\/+/, '/') + item.path
    if (item.items) {
      item.items = makeMenu(item.items, item.path + '/')
    }
    return item
  })
}

export function makeRoutes (items) {
  function process (items) {
    items.forEach(item => {
      routes.push(route(item.path, item.component))
      if (item.items) {
        process(item.items)
      }
    })
  }

  const routes = []
  process(items)
  return routes;
}
