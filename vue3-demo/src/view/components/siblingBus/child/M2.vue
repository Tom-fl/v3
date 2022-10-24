<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-26 18:02:48
 * @LastEditTime: 2022-08-26 18:24:58
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\components\siblingBus\child\M2.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div class="box">
    <p>m2</p>
    <p>{{ msg }}</p>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue'

const instance = getCurrentInstance()
const msg = ref('')

// 方法一  接收单个
// instance?.proxy?.$Bus.on('on-emit1', val => {
//   console.log(val)
// })

// 方法二 * 可以接受多个  type 是你自定义的方法名
// instance?.proxy?.$Bus.on('*', (type, val) => {
//   console.log(type, val)
// })

// 方法三 使用方法
const Bus = (str: any) => {
  msg.value = str
  console.log(str)
}
instance?.proxy?.$Bus.on('on-emit1', Bus)
// 取消mitt事件  单个
// instance?.proxy?.$Bus.off('on-emit1', Bus)

// 取消mitt事件  全部
// instance?.proxy?.$Bus.all.clear
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
</style>
