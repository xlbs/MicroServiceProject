
<template>
  <div id="login" class="login-background">
    <div class="login-frame">
      <LoginForm></LoginForm>
    </div>
    <div class="login-footer">
      <p> 版权所有：谢李宝生 &nbsp;京ICP备18720968930 &nbsp;微信公众号: xlbs10086 &nbsp;</p>
    </div>
  </div>
</template>

<script>
  import LoginForm from "./LoginForm";

  export default {
    name: "login",
    components: {
      LoginForm
    },
    data() {
      return {

      }
    },
    //mounted函数指的页面一渲染首先执行的函数
    mounted: function () {

    },
    created: function(){

    },
    methods: {

    }
  }
</script>

<style scoped>
  .login-background{
    width: 100%;
    height: 100%;
    /*background-size: cover;*/
    /*background-repeat: no-repeat;*/
    background-image: url("../../assets/background.jpg");
  }
  .login-frame{
    width: 400px;
    height: 350px;
    margin: auto;
    border: 1px solid #ccc;
    background: white;
    position: absolute;
    top: -50px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-Index:0;
  }
  .login-footer {
    display: flex;
    justify-content: center;
    height: 50px;
    background-color: #525252;
    /*line-height: 50px;*/
    color: #e2e2e2;
    font-size: 16px;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
  }
</style>
