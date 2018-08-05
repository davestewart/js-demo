<template>

  <ul class="sidebar">
    <h1><span class="logo"></span><router-link to="/">{{ $site.name }}</router-link></h1>
    <MenuGroup v-for="item in $nav" :item="item" :key="item.path" />
  </ul>

</template>

<script>
import MenuList from './MenuList.vue'
import MenuGroup from './MenuGroup'

export default {

  components: {
    MenuList,
    MenuGroup,
  }

}
</script>
