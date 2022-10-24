<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-26 11:00:20
 * @LastEditTime: 2022-08-26 11:13:14
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\components\siblingBus\child\B.vue
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
type Props = {
  data: boolean
}

defineProps<Props>()
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
}
</style>
