<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-19 10:34:36
 * @LastEditTime: 2022-10-17 11:21:01
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\globalProperties\GlobalProperties.vue
 * @Environment: Win 10
 * @Description: 定义全局函数和变量
-->
<template>
  <div>
    <div>{{ $filters.format('嘻嘻嘻') }}</div>
    <div>{{ $env }}</div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
