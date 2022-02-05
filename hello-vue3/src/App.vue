<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="你好，世界" /> -->
  <div>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link> |
    <router-link to="/test">测试</router-link>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 300px;
}
</style>
