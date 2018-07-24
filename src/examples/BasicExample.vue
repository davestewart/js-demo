<template>

  <article>

    <div class="content">
      <h2 class="title is-2">API: Store accessors</h2>
      <blockquote>
        <p>Store accessors provide global read / write access to the store</p>
        <edit-code src="examples/api/Accessors.vue"/>
        <edit-code src="examples/api/vuex/module.js"/>
        <view-docs src="api/accessors"/>
      </blockquote>
    </div>

    <div class="content">
      <p>This is the example module store:</p>
      <pre>{{ $data }}</pre>

      <p>You can call store accessors from anywhere, and they will update the view. In the console, try:</p>
      <pre>store.get('module')
store.set('module/object', {x: {y: {z: 100}}})
store.copy('module/object@x.y.z')
</pre>
    </div>

  </article>
</template>

<script>
  export default {
    data () {
      return {
        value: '...',
        copy: '...',
      }
    },

  }
</script>
