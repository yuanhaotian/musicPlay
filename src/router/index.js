import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main' //首页
import SingerMsg from '@/components/SingerMsg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path:'/SingerMsg',
      name:'SingerMsg',
      component:SingerMsg
    }
  ]
})
