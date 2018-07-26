<template>

  <!-- duplicate and edit this page to start from scratch -->
  <div class="content">
    <h2 class="title is-2">Page {{ this.$route.path }}</h2>
    <p><img :src="'http://thecatapi.com/api/images/get?format=src&cache=' + Math.random()" alt="A random cat image"></p>
  </div>

</template>
