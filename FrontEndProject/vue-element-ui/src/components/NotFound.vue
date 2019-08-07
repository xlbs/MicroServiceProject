<!--import img from '../../statics/images/404.png';-->

<template>
  <div class="div-404">
    <div>
      <div class="div-img">
        <img :src="imgUrl" alt="404"/>
      </div>
      <div class="div-text">
        <h1>程序员正在策马奔腾开发，请您耐心等待一段时间！</h1>
      </div>
    </div>
  </div>
</template>

<script>
  // require imgUrl from "../assets/404.png";
  export default {
    name: "404页面",
    data() {
      return {
        imgUrl: require("../assets/404.png")
      }
    },
  }
</script>

<style scoped>
  .div-404{
    background: #ececec;
    height: 100%;
    display: flex;           /*设置为flex布局*/
    justify-content: center; /*水平居中*/
    align-items: center;     /*垂直居中*/
  }
  .div-img{
    display: flex;           /*设置为flex布局*/
    justify-content: center; /*水平居中*/
    align-items: center;     /*垂直居中*/
  }
  .div-text{
    display: flex;           /*设置为flex布局*/
    justify-content: center; /*水平居中*/
    align-items: center;     /*垂直居中*/
  }
</style>
