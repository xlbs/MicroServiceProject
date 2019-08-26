<template>
  <el-container class="root">
    <el-header>
      <keep-alive>
        <HeaderNav></HeaderNav>
      </keep-alive>
    </el-header>
    <el-container class="container">
      <el-aside class="aside">
        <VerticalNav></VerticalNav>
      </el-aside>
      <el-container class="container">
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <keep-alive>
            <FooterNav></FooterNav>
          </keep-alive>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import HeaderNav from './HeaderNav';
  import VerticalNav from './VerticalNav';
  import FooterNav from './FooterNav';

  export default {
    name: "main",
    components:{
      HeaderNav,
      VerticalNav,
      FooterNav
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
  .root{
    height: 100%;
    width: 100%;
  }
  .aside{
    width: 200px!important;
    height: 100%;
  }
  .container{
    height: 100%;
    width: 100%;
  }
  .el-header{
    padding: 0px;
    height: 100px!important;
    background-color: #E0EEEE;
  }
  .el-footer{
    padding: 0px;
    background-color: #e2e2e2;
  }


</style>
