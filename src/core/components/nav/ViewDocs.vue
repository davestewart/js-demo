<template>
  <button class="button is-small is-primary" @click="open" title="View docs" :title="url">
    <i class="fa fa-file-text-o"></i> View docs
  </button>
</template>

<script>
 import config from '../../../app/state/config'
  export default {
    props: {
      src: String,
    },

    computed: {
      url () {
        return `${config.docs}/#/${this.src}`
      }
    },

    methods: {
      open () {
        window.open(this.url, 'docs');
      }
    }
  }
</script>
