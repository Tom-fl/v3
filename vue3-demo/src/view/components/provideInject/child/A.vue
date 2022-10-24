<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-22 12:32:56
 * @LastEditTime: 2022-08-22 13:02:01
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\components\provide\child\A.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div class="wrap_a">
    <p>A组件</p>
    <p>根组件传过来的值 -- {{ data }}</p>
    <p>根组件传过来的值 -- {{ name }}</p>
    <B />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

import B from './B.vue'

let data = inject('flag')
let name = inject('name')
</script>

<style scoped>
.wrap_a {
  width: 700px;
  height: 700px;
  border: 1px solid red;
}
</style>
