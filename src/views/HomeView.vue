<template>
  <div id="app">
    <header title="Cnode客户端" color="red" />
    <Search />
    <Panel />
  </div>
</template>

<script setup lang="ts">
//webpack.base.conf.js中设置了js,vue,json三个后缀是可以深省略的，优先级为 js>vue>json
import Header from '../components/Header.vue';
import Search from "../components/Search.vue";
import Panel from "../components/Panel.vue";
</script>
