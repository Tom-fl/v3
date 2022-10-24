<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-16 13:05:29
 * @LastEditTime: 2022-09-16 13:09:43
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\hooks\child\A.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div>asd</div>
</template>

<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
let attr = useAttrs()
console.log(attr)
</script>

<style></style>
