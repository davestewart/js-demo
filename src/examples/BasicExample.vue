<template>

  <article>

    <div class="content">
      <h1>Basic example</h1>
      <blockquote>
        <p>This is a basic example</p>
        <edit-code src="examples/api/Accessors.vue"/>
        <edit-code src="examples/api/vuex/module.js"/>
        <view-docs src="features"/>
      </blockquote>
    </div>

    <div class="content">
      <p>This is some random data:</p>
      <pre>{{ $data }}</pre>

      <p>This is some random code:</p>
      <pre>
store.get('module')
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
