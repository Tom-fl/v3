<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-26 11:29:00
 * @LastEditTime: 2022-08-26 12:23:39
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\components\siblingBus\child\Bus2.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div class="box">
    B组件
    {{ data }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Bus from '@/Bus'
let data = ref(false)

Bus.on('childEmit', (flag: boolean) => {
  data.value = flag
})
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
}
</style>
