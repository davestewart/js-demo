<template>

  <aside class="sidebar">

    <h1>{{ name }}</h1>

    <p class="menu-label">Intro</p>
    <ul class="menu-list">
      <li><router-link to="/home">Home</router-link></li>
    </ul>

    <p class="menu-label">Examples</p>
    <ul class="menu-list">
      <li><router-link class="code" to="/basic">Basic</router-link></li>
      <li><router-link class="code" to="/component">Component</router-link></li>
      <li><router-link class="code" to="/fieldset">Fieldset</router-link></li>
    </ul>

    <!--
    <p class="menu-label">Code</p>
    <ul class="menu-list">
      <li><router-link to="/code">Overview</router-link></li>

      <li>
        <router-link to="/code/foo" class="is-parent">Foo Features</router-link>
        <ul class="menu-list">
          <li><router-link class="code" to="/code/foo/feature-1">Feature 1</router-link></li>
          <li><router-link class="code" to="/code/foo/feature-2">Feature 2</router-link></li>
          <li><router-link class="code" to="/code/foo/feature-3">Feature 3</router-link></li>
        </ul>
      </li>

      <li>
        <router-link to="/code/bar" class="is-parent">Bar Features</router-link>
        <ul class="menu-list">
          <li><router-link class="code" to="/code/bar/feature-1">Feature 1</router-link></li>
          <li><router-link class="code" to="/code/bar/feature-2">Feature 2</router-link></li>
          <li><router-link class="code" to="/code/bar/feature-3">Feature 3</router-link></li>
        </ul>
      </li>
    </ul>
    -->

  </aside>

</template>
