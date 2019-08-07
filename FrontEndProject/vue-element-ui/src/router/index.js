import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'
import HelloWorld from '@/components/HelloWorld'
import duanzi from '@/components/duanzi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登入页面',
      component: Login
    },
    {
      path: '/',
      // redirect: (2==1)?'/duanzi':"/",
      name: '首页',
      component: HelloWorld
    },
    {
      path: '/duanzi',
      name: 'duanziff', //这个名字不是很重要，可写可不写，主要是区分组件功能。
      component: duanzi
    },
    {
      path: '*',
      name: '404页面',
      component: NotFound,
    }
  ]
})
