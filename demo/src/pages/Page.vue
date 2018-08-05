<template>

  <div class="content">
    <h1>Page {{ this.$route.path }}</h1>
    <p><img :src="'http://thecatapi.com/api/images/get?format=src&cache=' + Math.random()" alt="A random cat image"></p>
  </div>

</template>
