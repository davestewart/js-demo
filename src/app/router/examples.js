import { route } from './index'

import Basic from '../../examples/BasicExample'
import Component from '../../examples/ComponentExample'
import Fieldset from '../../examples/FieldsetExample'

export default [
  route('/basic', Basic),
  route('/component', Component),
  route('/fieldset', Fieldset),
]
