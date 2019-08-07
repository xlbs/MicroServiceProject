<template>

  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--这里的router-link 就是将组件渲染到这里，实际是一个a标签，to写的是path路径，和index.js中是一致的。-->
    <!--<router-link to="/duanzi">duanzi页面</router-link>-->
    <!--<router-link to="/duanzi">duanzi页面</router-link>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html{
    height: 100%;
  }
  body{
    height: 100%;
    margin: 0px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    /*margin-top: 60px;*/
  }

</style>
