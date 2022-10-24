<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-26 18:02:26
 * @LastEditTime: 2022-08-26 18:51:24
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\components\siblingBus\Mitt.vue
 * @Environment: Win 10
 * @Description: 
          通过Mitt 别人写好的库 来实现 Bus


        用到的 插件
          yarn add mitt
-->

<template>
  <div>
    <m1></m1>
    <m2></m2>
  </div>
</template>

<script setup lang="ts">
import M1 from './child/M1.vue'
import M2 from './child/M2.vue'
</script>

<style></style>
