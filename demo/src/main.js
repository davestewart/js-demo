import demo, { route, redirect, list, page, code } from 'js-demo/dist'

// pages
// examples
import Vue from 'vue'

// helpers
console.log({route, redirect, list, page, code})

// console.log(demo.helpers, route)


// const { route, redirect, list, page, code } = demo.helpers
// pages
import Home from './pages/Home'
import Components from './pages/Components'
import Markdown from './pages/Markdown.md'
import Page from './pages/Page'

// examples
import Basic from './examples/BasicExample'
import Component from './examples/ComponentExample'
import Fieldset from './examples/FieldsetExample'

import store from './store'

// site
const site = {
  name: 'js demo',
  demo: 'https://js-demo.netlify.com',
  docs: 'https://github.com/davestewart/js-demo',
  repo: 'https://github.com/davestewart/js-demo',
  cs:   'https://codesandbox.io/s/github/davestewart/js-demo',
  // ga:   'UA-603607-XX',
}

const navigation = [
  // route creates a route without creating a menu item
  route('/', Home),

  // list creates a list
  list('', 'Features', [
    // you can use page() to create items with no icon
    page('markdown', 'Markdown', Markdown),
    page('components', 'Components', Components),
  ]),

  list('examples', 'Examples', [
    // you can use code() to create items with an icon
    code('basic', 'Basic', Basic),
    code('component', 'Component', Component),
    code('fieldset', 'Fieldset', Fieldset),
  ]),

  // below is an example of nested routes
  list('features', 'features', [
    page('overview', 'Overview', Page),
    page('foo', 'Foo Features', Page),
    list('foo', [
      code('feature-1', 'Feature 1', Page),
      code('feature-2', 'Feature 2', Page),
      code('feature-3', 'Feature 3', Page),
    ])
  ]),
]

demo(site, navigation, store)

/*
const App = { render (h) { return h('div', 'hello!') } }

window.app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
*/