import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login/Login';
import Main from '@/components/main/Main';
import Home from '@/components/home/Home';
import System from '@/components/system/System';
import UserManagement from '@/components/system/content/UserManagement';
import RoleManagement from '@/components/system/content/RoleManagement';
import MenuManagement from '@/components/system/content/MenuManagement';
import NotFound from '@/components/NotFound';
import HelloWorld from '@/components/HelloWorld';
import duanzi from '@/components/duanzi';
import {CurrentSessionCache} from "@/utils/CurrentCache";

Vue.use(Router);

const router = new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/login',
      name: 'login', //这个名字不是很重要，可写可不写，主要是区分组件功能。
      component: Login,
      meta: {
        title: '欢迎使用本系统',
      }
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
          meta: {
            title: '首页',
          }
        },
        {
          path: '/system',
          name: 'system',
          component: System,
          children:[
            {
              path: '/userManagement',
              name: 'userManagement',
              component: UserManagement,
            },
            {
              path: '/roleManagement',
              name: 'roleManagement',
              component: RoleManagement,
            },
            {
              path: '/menuManagement',
              name: 'menuManagement',
              component: MenuManagement,
            },
          ]
        },
      ]

    },
    {
      path: '/error',
      name: '404',
      component: NotFound,
    }
  ]
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title == undefined?'欢迎使用本系统':to.meta.title;
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
