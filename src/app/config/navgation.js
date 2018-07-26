// helpers; list, page, code
import { list, page, code } from '../../core/router/helpers'

// pages
import Home from '../pages/Home'
import Formatting from '../pages/Formatting'
import Components from '../pages/Components'
import Page from '../pages/Page'

// examples
import Basic from '../../examples/BasicExample'
import Component from '../../examples/ComponentExample'
import Fieldset from '../../examples/FieldsetExample'

// this section builds sidebar and routes
export default [
  list('', 'Intro', [
    page('home', 'Home', Home),
    page('formatting', 'Formatting', Formatting),
    page('components', 'Components', Components),
  ]),
  list('api', 'Api', [
    code('basic', 'Basic', Basic),
    code('component', 'Component', Component),
    code('fieldset', 'Fieldset', Fieldset),
  ]),
  list('code', 'Code', [
    page('overview', 'Overview', Page),
    page('foo', 'Foo Features', Page),
    list('foo', [
      code('feature-1', 'Feature 1', Page),
      code('feature-2', 'Feature 2', Page),
      code('feature-3', 'Feature 3', Page),
    ])
  ]),
  // uncomment below to see how the navigation builder works...
  /*
  list('test', 'Test', [
    page('home', 'Home', Page),
    list('foo', [ // this list has no label, but it does supply a path
      code('basic', 'Basic', Page),
      code('component', 'Component', Page),
      code('fieldset', 'Fieldset', Page),
      page('this is a page', 'Some Page', Page),
      list('test', 'Test', [
        code('basic', 'Basic', Page),
        code('component', 'Component', Page),
        code('fieldset', 'Fieldset', Page),
      ]),
    ]),
  ]),
  */
]
