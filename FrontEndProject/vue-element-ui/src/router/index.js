import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import NotFound from '@/components/NotFound';
import HelloWorld from '@/components/HelloWorld';
import duanzi from '@/components/duanzi';
import {CurrentSessionCache} from "@/utils/CurrentCache";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      name: '登入页面', //这个名字不是很重要，可写可不写，主要是区分组件功能。
      component: Login
    },
    {
      path: '/',
      name: '首页',
      component: HelloWorld
    },
    {
      path: '/duanzi',
      name: 'duanziff',
      component: duanzi
    },
    {
      path: '/error',
      name: '404页面',
      component: NotFound,
    }
  ]
})

router.beforeEach((to, from, next) => {
  const LOGIN_STATUS = CurrentSessionCache.get("LOGIN_STATUS");
  if(to.path != "/login"){
    if(LOGIN_STATUS){
      if(to.matched.length === 0){//匹配前往的路由不存在
        next('/error');
      }else{
        next(); //跳转到目标路由
      }
    }else{
      next('/login');
    }
  }else{
    next(); //跳转到目标路由
  }
});

export default router
