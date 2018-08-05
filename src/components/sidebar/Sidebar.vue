<template>

  <ul class="sidebar">
    <h1><span class="logo"></span><router-link to="/">{{ $site.name }}</router-link></h1>
    <MenuGroup v-for="item in $menu" :item="item" :key="item.path" />
  </ul>

</template>

<script>

import Vue from 'vue'
import MenuList from './MenuList.vue'
import MenuGroup from './MenuGroup'

Vue.component('menu-group', MenuGroup)

export default {

  components: {
    MenuList,
    MenuGroup,
  }

}
</script>
