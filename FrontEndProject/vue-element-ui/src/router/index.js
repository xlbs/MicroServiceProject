import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import duanzi from '@/components/duanzi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/duanzi',
      name: 'duanziff', //这个名字不是很重要，可写可不写，主要是区分组件功能。
      component: duanzi
    }
  ]
})
