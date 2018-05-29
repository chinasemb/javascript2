<template>
  <div id="app">
    <!-- {{$route}} -->
    {{lookR}}
    <ul>
      <li v-for="(val,key) in data1">{{val}}</li>
    </ul>
    <!-- <img src="./assets/logo.png"> -->
    <router-link :to="{name:'HelloWorld',params:{id:0}}">首页</router-link>
    <router-link :to="{name:'Red',params:{id:1}}">red页</router-link>
    
    <!-- <router-link to="/red">red页</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      data1:[1,2,3,4]
    }
  },
  computed:{
    lookR(){
      let d = this.$route.params.id;
      switch(d){
        case 0:
          this.data1 = [1,2,3,4]
        break;
        case 1:
          this.data1 = [5,6,7,8,9]
        break;
      }
    }
  }
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
