<template>
  <div id="demo">
    <sidebar/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Sidebar from '../app/Sidebar'
import Home from '../app/pages/Home'

export default {

  components: {
    Home,
    Sidebar,
  },

  data () {
    return {
      msg: 'Welcome to Vue'
    }
  }
}
</script>
