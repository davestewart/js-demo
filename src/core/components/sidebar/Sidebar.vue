<template>

  <ul class="sidebar">
    <h1><span class="logo"></span><router-link to="/">{{ $site.name }}</router-link></h1>
    <MenuGroup v-for="item in items" :item="item" :key="item.path" />
  </ul>

</template>

<script>

import Vue from 'vue'
import MenuGroup from './MenuGroup'

import items from '../../../app/config/navgation'

Vue.component('menu-group', MenuGroup)

export default {

  components: {
    MenuGroup
  },

  data () {
    return {
      items
    }
  }
}
</script>
