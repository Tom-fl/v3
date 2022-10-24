<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-26 18:02:43
 * @LastEditTime: 2022-08-26 18:25:49
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\components\siblingBus\child\M1.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div class="box">
    m1
    <el-button @click="handleClickEmit">点击派发事件</el-button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance()

const handleClickEmit = () => {
  instance?.proxy?.$Bus.emit('on-emit1', '亚索')
  instance?.proxy?.$Bus.emit('on-emit2', '盲僧')
}
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
}
</style>
