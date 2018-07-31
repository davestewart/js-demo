// helpers; list, page, code
import { route, redirect, list, page, code } from '../../core/router/helpers'

// pages
import Home from '../pages/Home'
import Components from '../pages/Components'
import Markdown from '../pages/Markdown.md'
import Page from '../pages/Page'

// examples
import Basic from '../../examples/BasicExample'
import Component from '../../examples/ComponentExample'
import Fieldset from '../../examples/FieldsetExample'

// this section builds sidebar and routes
export default [
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
