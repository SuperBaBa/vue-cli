<template>
  <div id="app">
    <HomeView />
  </div>
</template>

<script setup lang="ts">
//webpack.base.conf.js中设置了js,vue,json三个后缀是可以深省略的，优先级为 js>vue>json
import HomeView from './views/HomeView.vue';
</script>
