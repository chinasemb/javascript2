<template>
    <div class="pink" @click="goHome">
    </div>
</template>

<script>
export default {
  name: 'Pink',
  methods:{
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pink{
  width:100px;
  height: 100px;
  background: pink;
}
</style>
