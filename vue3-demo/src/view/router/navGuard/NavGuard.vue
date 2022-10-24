<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-13 18:03:56
 * @LastEditTime: 2022-10-13 18:05:49
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\router\navGuard\NavGuard.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>
<style scope>
* {
  padding: 0;
  margin: 0;
}
body,
html,
#app {
  margin: 0;
  padding: 0;
  display: block;
  text-align: inherit;
  height: 100%;
  overflow: hidden;
}
</style>
