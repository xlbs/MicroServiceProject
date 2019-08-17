<template>
  <el-container class="root">
    <el-header>
      <keep-alive>
        <HeaderNav></HeaderNav>
      </keep-alive>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <keep-alive>
        <FooterNav></FooterNav>
      </keep-alive>
    </el-footer>
  </el-container>
</template>

<script>
  import HeaderNav from './HeaderNav';
  import FooterNav from './FooterNav';

  export default {
    name: "main",
    components:{
      HeaderNav,
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
  }
  .el-header{
    padding: 0px;
    background-color: rgb(84, 92, 100);
  }


</style>
