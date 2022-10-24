<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-30 11:24:14
 * @LastEditTime: 2022-08-30 11:39:49
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\autoImport\AutoImport.vue
 * @Environment: Win 10
 * @Description: 
                一个别人写好了的插件 
                    自动引入vue所有的方法
-->

<template>
  <div>
    <el-button @click="handleClick">点击</el-button>
    <div>{{ flag }}</div>
  </div>
</template>

<script setup lang="ts">
const flag = ref<boolean>(false)

const handleClick = () => {
  flag.value = !flag.value
}
</script>
