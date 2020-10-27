<template>
  <div id="app">
    <keep-alive :include="cachedViews" :exclude="normalViews">
      <router-view title='$route.meta.title' />
   </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      cachedViews: [],
      normalViews:[]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
