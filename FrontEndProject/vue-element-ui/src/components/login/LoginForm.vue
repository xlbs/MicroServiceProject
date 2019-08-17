<template>
  <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-form">
    <p class="error-msg">{{errorMsg}}</p>
    <el-form-item class="el-form-item_usernmae" prop="username">
      <label class="label">用户名</label>
      <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <label class="label">密码</label>
      <el-input v-model="loginForm.password" placeholder="请输入密码" type="password" show-password></el-input>
    </el-form-item>
    <div style="height: 35px">
      <el-checkbox v-model="loginForm.remember" class="login-form-remember">记住密码</el-checkbox>
      <p class="login-form-forget" @click="forgetPassword()">忘记密码</p>
    </div>
    <el-button style="width: 100%" type="primary" @click="submitForm('loginForm')">登入</el-button>
  </el-form>
</template>

<script>
  import {Ajax,AjaxPromise} from "@/utils/Ajax";
  import {CurrentSessionCache} from "@/utils/CurrentCache";

  const BASE_URL = $requestContext.path;
  const API_SERVICE = BASE_URL + "/api_service";

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
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 6, message: '密码为6位', trigger: 'change' }
          ],
        },
        errorMsg:"",
      }
    },
    //mounted函数指的页面一渲染首先执行的函数。
    mounted: function () {
      CurrentSessionCache.set("LOGIN_STATUS",false)
    },
    created: function(){

    },
    methods: {
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          debugger;
          if(valid){
            let url = BASE_URL+ "/loginB";
            const config = {};
            config.method = "POST";
            config.data = this.loginForm;
            AjaxPromise(url,config).then(res => {
              if(res.state){
                CurrentSessionCache.set("USER",res.data);
                if(res.data.userId || res.data.userId===0){
                  url = API_SERVICE + "/menu/"+res.data.userId;
                  AjaxPromise(url).then(res =>{
                    if(res.data){
                      CurrentSessionCache.set("MENU",res.data);
                      let path;
                      if(res.data[0].children.length===0){
                        path = res.data[0].url;
                      }else{
                        path = res.data[0].url+res.data[0].children[0].url;
                      }
                      CurrentSessionCache.set("LOGIN_STATUS",true);//已登入
                      this.$router.push(path);
                    }
                  });
                }
              }else{
                this.errorMsg = res.msg;
              }
            })
          }else{
            this.errorMsg = "请输入用户名或密码";
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
    font-size: 18px;
    color: #00b2f9;
    position: absolute;
    top: -15px;
    left: 15px;
    background: #fff;
    line-height: normal;
    z-index: 1;
  }
  .error-msg {
    margin: 5px 0px 15px 0px;
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
  .el-form-item_usernmae{
    margin-bottom: 35px;
  }
</style>
