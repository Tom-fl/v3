<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-16 12:40:46
 * @LastEditTime: 2022-09-19 10:19:37
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\hooks\Hooks.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div>
    <A a="123" title="嘻嘻嘻"></A>

    <img src="../../assets/Tom.jpg" id="img" alt="" width="200" height="200" />
    <br />
    <h3>通过base64转译后的</h3>
    <img :src="base64Src" alt="" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import A from './child/A.vue'
import useBase64 from '@/hooks/index'
const base64Src = ref('')
useBase64({
  el: '#img',
}).then(res => {
  console.log(res.baseUrl)
  base64Src.value = res.baseUrl
})
</script>

<style></style>
