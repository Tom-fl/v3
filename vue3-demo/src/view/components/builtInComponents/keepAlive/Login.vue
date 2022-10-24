<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-15 10:57:37
 * @LastEditTime: 2022-08-15 15:27:59
 * @Email: Tom
 * @FilePath: \demo\src\view\components\builtInComponents\keepAlive\Login.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div>
    <table>
      <tr>
        <td>账号</td>
        <td><el-input type="text" v-model="form.login"></el-input></td>
      </tr>
      <tr>
        <td>密码</td>
        <td><el-input type="password" v-model="form.psd"></el-input></td>
      </tr>
    </table>
    <el-button @click="handleClickLogin">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted, onActivated, onDeactivated } from "vue"

const form = reactive({
  login: "",
  psd: "",
})

const handleClickLogin = () => {
  console.log(form)
}

onActivated(() => {
  console.log("login---onActivated")
})

onDeactivated(() => {
  console.log("login---onDeactivated")
})

onMounted(() => {
  console.log("login---onMounted")
})

// 使用了 keep-alive 这个组件不会生效
onUnmounted(() => {
  console.log("login---onUnmounted")
})
</script>

<script lang="ts">
export default {
  name: "Login",
}
</script>
