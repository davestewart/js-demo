import Vue from 'vue'

import UiModal from './ui/UiModal.vue'
import UiInput from './ui/UiInput.vue'
import UiButton from './ui/UiButton.vue'
import UiSelect from './ui/UiSelect.vue'
import UiIcon from './ui/UiIcon.vue'

import ViewCode from './nav/EditCode.vue'
import ViewDocs from './nav/ViewDocs.vue'

import Markdown from './content/Markdown'
import MarkdownPage from './content/MarkdownPage'

const components = {
  // ui
  'ui-modal': UiModal,
  'ui-input': UiInput,
  'ui-button': UiButton,
  'ui-select': UiSelect,
  'ui-icon': UiIcon,

  // other
  'edit-code': ViewCode,
  'view-docs': ViewDocs,

  // content
  'markdown': Markdown,
  'markdown-page': MarkdownPage,
}

Object
  .keys(components)
  .forEach(key => Vue.component(key, components[key]))
