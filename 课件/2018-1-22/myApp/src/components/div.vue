<template>
  <div class="box">
    <router-link to="/" tag="button">返回首页</router-link>
    <router-link to="/box/blue" tag="button">点击蓝色</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'box',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  width:200px;
  height: 200px;
  background: red
}
</style>
