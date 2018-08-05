<template>

  <div class="content home">

    <header class="banner">
      <!--
      <img src="../../core/assets/logo-image.png" width="350">

      <img src="../../core/assets/logo-text.png" width="350">
      delete the next line to remove the image -->

      <!-- uncomment this block to show the text version
      <h1>js demo</h1>
      -->
    </header>

    <h3>Introduction</h3>
    <p>This demo is intended to be used as a starting point for your own project.</p>

    <h3>Running the examples</h3>

    <p>Use the menu on the left to navigate the examples.</p>

    <p>The examples are designed to be viewed in parallel with editing the code. For each:</p>
    <ul>
      <li>there are buttons to open the associated files</li>
      <li>source code is clearly commented, with editing suggestions where appropriate</li>
      <li>additional buttons link to any related documentation</li>
    </ul>

    <h3>Folder structure</h3>

    <p>The example code (for each feature or example) can be found in the <code>src/examples/</code> folder:</p>
    <pre>
+- src
    +- examples
        +- ...
    </pre>

    <p>You can manually navigate to the folders, or as mentioned above, use the edit buttons to jump directly to the
      file.</p>

    <h3>Using Vue Devtools</h3>

    <p>You will probably want to use Vue Devtools as you run the demo to see the store update.</p>
    <p>As CodeSandbox runs in an iframe, you'll need to open the preview pane in a new window. Click the arrow-like icon
      above the preview pane to do this, then use Vue Devtools as normal.</p>
    <p>Note that you will still be able to edit the code and see the results! CodeSandbox is that cool :)</p>

    <h3>Resources</h3>
    <template v-if="$site.demo">
      <p>The site repository is here:</p>
      <ul>
        <li><a :href="$site.repo" target="_blank">{{ url($site.repo) }}</a></li>
      </ul>
    </template>

    <template v-if="$site.demo">
      <p>You can view the demo site on:</p>
      <ul>
        <li><a :href="$site.demo" target="_blank">{{ url($site.demo) }}</a></li>
      </ul>
    </template>

    <template v-if="$site.cs">
      <p>You can edit the site live on:</p>
      <ul>
        <li><a :href="$site.cs" target="_blank">{{ url($site.cs) }}</a></li>
      </ul>
    </template>

  </div>

</template>

<script>
export default {
  methods: {
    url (value) {
      return String(value).replace(/https?:\/\//, '')
    }
  }
}
</script>
