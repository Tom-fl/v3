<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-22 12:33:03
 * @LastEditTime: 2022-08-26 10:56:11
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\components\provideInject\child\B.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div class="wrap_b">
    <p>B组件</p>
    <p>根组件传过来的值 -- {{ data }}</p>
    <p>根组件传过来的值 -- {{ name }}</p>
    <el-button @click="handleClickChange">点击改变值</el-button>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
let data = inject('flag')
let name = inject('name', ref('xx'))
console.log(data)

const handleClickChange = () => {
  // 这里为什么 会报错呢?
  name.value = '改变'
}
</script>

<style scoped>
.wrap_b {
  width: 500px;
  height: 500px;
  border: 1px solid blue;
}
</style>
