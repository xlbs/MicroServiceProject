<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >

      <el-menu-item v-for="(menu) in menus" v-if="menu.children.length == 0" :index="menu.url" :key="menu.id">{{menu.name}}</el-menu-item>
      <el-submenu v-for="(menu) in menus" v-if="menu.children.length != 0" :index="menu.url" :key="menu.id">
        <template slot="title">{{menu.name}}</template>
        <el-menu-item v-for="(child) in menu.children"  :index="child.url" :key="child.id">{{child.name}}</el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
  import {CurrentSessionCache} from "@/utils/CurrentCache";

  export default {
    name: 'HorizontalNav',
    data () {
      return {
        menus: CurrentSessionCache.get("MENU"),
        activeIndex: CurrentSessionCache.get("MENU")[0].url,
      }
    },
    mounted: function () {

    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .header{
    float: right;
  }
</style>
