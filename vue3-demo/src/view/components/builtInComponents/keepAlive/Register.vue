<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-15 11:24:49
 * @LastEditTime: 2022-08-15 11:51:49
 * @Email: Tom
 * @FilePath: \demo\src\view\components\builtInComponents\keepAlive\Register.vue
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
      <tr>
        <td>验证码</td>
        <td><el-input type="password" v-model="form.code"></el-input></td>
      </tr>
    </table>
    <el-button @click="handleClickRegister">注册</el-button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"

const form = reactive({
  login: "",
  psd: "",
  code: "",
})

const handleClickRegister = () => {
  console.log(form)
}
</script>
