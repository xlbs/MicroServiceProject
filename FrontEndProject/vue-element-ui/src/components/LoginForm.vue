<template>
  <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-form">
    <p class="error-msg">{{errorMsg}}</p>
    <el-form-item prop="username">
      <label class="label">用户名</label>
      <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <label class="label">密  码</label>
      <el-input v-model="loginForm.password" placeholder="请输入密码" type="password" show-password></el-input>
    </el-form-item>
    <div style="height: 35px">
      <el-checkbox v-model="loginForm.remember" class="login-form-remember">记住密码</el-checkbox>
      <p class="login-form-forget" @click="forgetPassword()">忘记密码</p>
    </div>
    <el-button style="width: 100%" type="primary" @click="submitForm('loginForm')">登入</el-button>
    <!--<el-form-item>-->

    <!--</el-form-item>-->
    <!--<el-form-item>-->

    <!--</el-form-item>-->
  </el-form>
</template>

<script>
  export default {
    name: "loginForm",
    data() {
      return {
        loginForm: {
          username:"",
          password:"",
          remember: false,
        },
        rules:{
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
        },
        errorMsg:"",
      }
    },
    //mounted函数指的页面一渲染首先执行的函数。 这里首先执行showlist函数
    mounted: function () {

    },
    created: function(){

    },
    methods: {
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if(valid){
            console.log(this.loginForm.remember);
            console.log(this.loginForm.password);
            console.log(this.loginForm.username);
          }else{
            return false;
          }
        });
      },
      forgetPassword(){
        alert("忘记密码")
      }
    }
  }
</script>

<style scoped>
  .login-form {
    max-width: 300px;
    max-height: 270px;
    margin: auto !important;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
  .label {
    height: 30px;
    font-size: 18px;
    color: #00b2f9;
    position: absolute;
    top: -20px;
    left: 20px;
    background: #fff;
    z-index: 1;
  }
  .error-msg {
    margin: 10px 0px;
    height: 20px;
    font-size: 16px;
    font-weight: 600;
    color: #f00;
    text-align: center;
  }
  .login-form-remember {
    float: left;
  }
  .login-form-forget {
    margin: 0px;
    float: right;
    font-weight: 500;
    font-size: 14px;
    color: #00b2f9;;
  }
</style>
