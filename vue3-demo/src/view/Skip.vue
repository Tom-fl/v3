<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-11 16:29:14
 * @LastEditTime: 2022-10-17 11:05:57
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\Skip.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div class="wrap">
    <el-button
      v-for="item in list"
      :key="item.name"
      :type="item.color || 'primary'"
      @click="handleClickRoute(item.path)"
    >
      {{ item.meta.title }}
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const list = JSON.parse(JSON.stringify(useRouter().options.routes))

function handleClickRoute(path: Object) {
  router.push(path)
}
</script>

<style scoped>
.wrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.wrap .el-button {
  margin-top: 10px;
}
</style>
