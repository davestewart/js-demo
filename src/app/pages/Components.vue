<template>

  <div class="content">

    <h1>Components</h1>

    <p>The demo ships with some basic components.</p>

    <h4>Forms</h4>

    <p>There are some basic form controls:</p>

    <div class="controls field is-horizontal">

      <ui-input
        label="Text"
        type="text"
        v-model="text"
      />

      <ui-input
        label="Numbers"
        type="number"
        v-model="number"
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

    <markdown>
      #### Markdown

      Aside from importing markdown files in `navigation.js`, you can also use markdown in Vue components via the `&lt;markdown&gt;` component:

      ```html
      &lt;markdown&gt;
      Write your content here...
      &lt;/markdown&gt;
      ```

      You can use any formatting **except** HTML tags, for example **bold**, *italic*, lists:

      - foo
      - bar
      - baz
    </markdown>

  </div>

</template>

<script>
export default {
  data () {
    return {
      text: 'Hello World',
      number: 100,
      option: 'two'
    }
  }
}
</script>

<style lang="scss" scoped>
  /deep/ .field {
    // width: 100px;
  }
</style>