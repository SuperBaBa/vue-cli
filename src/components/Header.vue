<template>
  <header :style="{
    backgroundColor: color ? color : defaultSetting.defaultColor
  }">{{ title }}</header>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
// 父组件传递进来更改该头部组件的属性值
interface CutomProps {
  name: string;
  age: number;
  // 标题
  title: string;
  // 颜色
  color: string
}
const props = defineProps<CutomProps>()

const defaultSetting = reactive({
  defaultColor: 'red'
})
</script>

<style scoped>
header {
  height: 50px;
  width: 100%;
  line-height: 50px;
  text-align: center;
  color: white;
}
</style>