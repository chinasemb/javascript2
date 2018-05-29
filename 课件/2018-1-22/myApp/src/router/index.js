import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import Box from '@/components/div';
import Yellow from '@/components/div2';
import Blue from '@/components/blue';
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/box',
      name:'box',
      component:Box,
      children:[
        {
          path:'blue',
          name:'blue',
          component:Blue,
        }
      ]
    },
    {
      path:'/yellow',
      name:'yellow',
      component:Yellow
    }
  ]
})
