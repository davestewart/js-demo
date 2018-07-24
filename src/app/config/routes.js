import { group, route } from '../../core/router'

// pages
import Home from '../pages/Home'
import Components from '../pages/Components'
import Page from '../pages/Page'

// examples
import Basic from '../../examples/BasicExample'
import Component from '../../examples/ComponentExample'
import Fieldset from '../../examples/FieldsetExample'

// routes
export default [
  // pages
  route('/home', Home),
  route('/page', Page),
  route('/components', Components),

  // basics
  ...group ('/api', [
    route('basic', Basic),
    route('component', Component),
    route('fieldset', Fieldset),
  ])
]
