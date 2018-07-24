import { group, route } from '../../core/router'

// pages
import Home from '../pages/Home'
import Formatting from '../pages/Formatting'
import Components from '../pages/Components'

// examples
import Basic from '../../examples/BasicExample'
import Component from '../../examples/ComponentExample'
import Fieldset from '../../examples/FieldsetExample'

// routes
export default [
  // pages
  route('/home', Home),
  route('/formatting', Formatting),
  route('/components', Components),

  // basics
  ...group ('/api', [
    route('basic', Basic),
    route('component', Component),
    route('fieldset', Fieldset),
  ])
]
