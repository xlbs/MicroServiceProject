<template>
  <div class="vertical">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      mode="vertical"
      @open="handleSelect"
      @close="handleSelect"
      @select="handleSelect"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >

      <el-menu-item v-for="(menu) in menus" v-if="menu.children.length == 0" :index="menu.url" :key="menu.id">
        <i class="el-icon-location"></i>
        <span>{{menu.name}}</span>
      </el-menu-item>
      <el-submenu v-for="(menu) in menus" v-if="menu.children.length != 0" :index="menu.url" :key="menu.id">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>{{menu.name}}</span>
        </template>
        <el-menu-item v-for="(child) in menu.children"  :index="child.url" :key="child.id">{{child.name}}</el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
  import {CurrentSessionCache} from "@/utils/CurrentCache";

  export default {
    name: 'VerticalNav',
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
  .vertical{
    background-color: #001529;
    height: 100%;
  }
</style>
