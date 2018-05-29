<template>
  <div id="app">
    <router-link to="/" tag="button">首页</router-link>
    <router-link to="/box" tag="button">到box</router-link>
    <router-link to="/yellow" tag="button">到黄色方块</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
