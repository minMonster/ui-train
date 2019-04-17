<template>
  <div id="app">
    <router-nav></router-nav>
    <router-view/>
  </div>
</template>

<script>
import RouterNav from './components/route-nav/index.vue'
export default {
  name: 'app',
  components: {
    RouterNav
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
