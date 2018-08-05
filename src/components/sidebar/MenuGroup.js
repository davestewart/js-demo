import MenuLabel from './MenuLabel.vue'
import MenuList from './MenuList.vue'

export default {
  functional: true,

  name: 'menu-group',

  render (h, context) {
    const item = context.props.item
    const label = h(MenuLabel, { props: { text: item.text } })
    const list = h(MenuList, { props: { items: item.items } })
    return [label, list]
  }
}
