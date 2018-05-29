import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Red from '@/components/Red';
import Pink from '@/components/Pink';

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      params:{
        id:0
      }
    },
    {
      path:'/red',
      name:'Red',
      component:Red,
      children:[
        {
          path:'pink',
          name:'Pink',
          component:Pink
        }
      ]
    }
  ]
})
