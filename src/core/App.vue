<template>
  <div id="demo" class="container">
    <aside>
      <div class="sidebar-container">
        <sidebar />
      </div>
    </aside>
    <main class="main">
      <router-view :key="$route.path"/>
    </main>
  </div>
</template>

<script>
import Sidebar from './components/sidebar/Sidebar'
import Home from '../app/pages/Home'

export default {

  components: {
    Home,
    Sidebar,
  },

  data () {
    return {
      msg: 'JS Demo'
    }
  }
}
</script>
