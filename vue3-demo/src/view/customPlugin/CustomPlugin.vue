<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-19 11:14:13
 * @LastEditTime: 2022-09-19 12:37:36
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\customPlugin\CustomPlugin.vue
 * @Environment: Win 10
 * @Description: 使用自定义组件
-->
<template>
  <div>
    <el-button @click="handleClickShowLoading">点点点</el-button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, ComponentInternalInstance } from 'vue'

const { appContext } = getCurrentInstance() as ComponentInternalInstance

const handleClickShowLoading = () => {
  console.log(appContext)
  appContext.config.globalProperties.$loading.show()
  setTimeout(() => {
    appContext.config.globalProperties.$loading.hide()
  }, 1000)
}
</script>

<style></style>
