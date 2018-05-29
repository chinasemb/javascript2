<template>
    <div>
      <router-link to="/red/pink" tag="button">粉红</router-link>
      <div 
        class="red"
        @click="fn"
      ></div>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Red',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    fn(){
      alert(1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red{
  width:100px;
  height: 100px;
  background: red;
}
</style>
