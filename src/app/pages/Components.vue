<template>

  <div class="content">
    <h2 class="title is-2">Components</h2>

    <p>This page demonstrates some of the components:</p>

    <div class="controls field is-horizontal">

      <ui-input
        label="Hello"
        v-model="text"
        type="text"
      />

      <ui-select label="Options"
                 prompt="Select..."
                 options="one two three"
                 v-model="option"
      />

      <ui-button @click="$refs.modal.open()">Show modal</ui-button>

      <ui-modal ref="modal">
        <h3>This is a modal</h3>
        <p>This is some modal content</p>
        <p>It probably needs some additional props to size it properly!</p>
      </ui-modal>
    </div>

    <pre>{{ $data }}</pre>
  </div>

</template>

<script>
export default {
  data () {
    return {
      text: 'Hello World',
      option: 'two'
    }
  },
  methods: {}
}
</script>
