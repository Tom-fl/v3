<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-22 12:26:45
 * @LastEditTime: 2022-08-24 17:57:07
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\components\provide\Provide.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div class="wrap">
    <p>根组件</p>
    <A />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, getCurrentInstance } from 'vue'

import A from './child/A.vue'
let xxx = getCurrentInstance()
console.log(xxx)

provide('flag', false)
provide('name', ref('响应式的值'))
</script>

<style scoped>
.wrap {
  width: 900px;
  height: 900px;
  border: 1px solid #000;
}
</style>
