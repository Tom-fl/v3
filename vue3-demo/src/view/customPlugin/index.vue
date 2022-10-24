<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-19 11:14:13
 * @LastEditTime: 2022-09-19 12:22:46
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\customPlugin\index.vue
 * @Environment: Win 10
 * @Description: 自定义插件
-->
<template>
  <div v-if="isShow" class="loading">
    <div class="loading_content">loading....</div>
  </div>
</template>

<script setup lang="ts">
let isShow = ref<boolean>(false)

const show = () => {
  isShow.value = true
}

const hide = () => {
  isShow.value = false
}

// 把所有定义的变量和函数 都抛出去
defineExpose({
  isShow,
  show,
  hide,
})
</script>

<style scoped>
.loading {
  position: fixed;
  inset: 0;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading_content {
  font-size: 30px;
  color: #fff;
}
</style>
