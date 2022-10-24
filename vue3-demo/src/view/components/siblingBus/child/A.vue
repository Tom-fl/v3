<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-26 11:00:16
 * @LastEditTime: 2022-08-26 11:13:32
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\components\siblingBus\child\A.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div class="box">
    A组件
    <el-button @click="handleClickEmit">点击派发事件</el-button>
  </div>
</template>

<script setup lang="ts">
const data = defineEmits(['childEmit'])
let flag = false

const handleClickEmit = () => {
  flag = !flag
  data('childEmit', flag)
}
</script>

<style scoped>
.box {
  width: 200px;
  height: 100px;
  border: 1px solid red;
}
</style>
