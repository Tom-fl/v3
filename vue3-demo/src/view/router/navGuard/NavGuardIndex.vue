<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-13 17:54:14
 * @LastEditTime: 2022-10-13 18:31:39
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\router\navGuard\NavGuardIndex.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div><el-button @click="handleClikOut" type="primary">退出登录</el-button></div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleClikOut = () => {
  localStorage.removeItem('token')
  router.push('/')
}
</script>
<style scope></style>
