// import
import plugin, { demo, route, redirect, list, page, code } from 'js-demo/dist'

// assets
import 'js-demo/dist/styles.css'

// assets
import './assets/styles.scss'
import './assets/logo.svg'

// pages
import Home from './pages/Home'
import Components from './pages/Components'
import Markdown from './pages/Markdown.md'
import Page from './pages/Page'

// examples
import Basic from './examples/BasicExample'
import Component from './examples/ComponentExample'
import Fieldset from './examples/FieldsetExample'

// site
const site = {
  name: 'js demo',
  demo: 'https://js-demo.netlify.com',
  docs: 'https://github.com/davestewart/js-demo',
  repo: 'https://github.com/davestewart/js-demo',
  cs:   'https://codesandbox.io/s/github/davestewart/js-demo',
  // ga:   'UA-603607-XX',
}

// navigation
const nav = [
  // route creates a route without creating a menu item
  route('/', Home),

  // list creates a list
  list('', 'Features', [
    // use page() to create items with no icon
    page('markdown', 'Markdown', Markdown),
    page('components', 'Components', Components),
  ]),

  list('examples', 'Examples', [
    // use code() to create items with an icon
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

// store
import store from './store'

// start demo!
const options = {site, nav, store}
demo(options)

// import Vue from 'vue'
// Vue.use(plugin, options)
// new Vue(options.vueOptions)
