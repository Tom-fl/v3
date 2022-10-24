<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-15 10:52:22
 * @LastEditTime: 2022-08-15 15:28:54
 * @Email: Tom
 * @FilePath: \demo\src\view\components\builtInComponents\keepAlive\KeepAlive.vue
 * @Environment: Win 10
 * @Description: 内置组件 -> keep-alive
-->
<template>
  <div>
    <el-button @click="handleClickCut">切换</el-button>
    <!-- 通过 keep-alive 是会缓存数据的 -->
    <keep-alive :include="['Login']">
      <login v-if="cut" />
      <Register v-else />
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Login from "./Login.vue"
import Register from "./Register.vue"

const cut = ref(false)

const handleClickCut = () => {
  cut.value = !cut.value
}
</script>
