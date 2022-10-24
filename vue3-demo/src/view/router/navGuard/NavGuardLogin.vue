<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-13 17:53:36
 * @LastEditTime: 2022-10-14 12:59:42
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\router\navGuard\NavGuardLogin.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div>
    <el-form ref="form" class="form" :rules="rules" :model="formInit" label-width="200px">
      <el-form-item label="账号" prop="name">
        <el-input v-model="formInit.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formInit.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import type { FormItemRule, FormInstance } from 'element-plus'

const router = useRouter()

type From = {
  name: string
  password: string
}
type Rules = {
  [K in keyof From]?: Array<FormItemRule>
}

const formInit = reactive<From>({
  name: '',
  password: '',
})
const rules = reactive<Rules>({
  name: [{ required: true, message: '账号错误', type: 'string' }],
  password: [{ required: true, message: '密码错误', type: 'string' }],
})
const form = ref<FormInstance>()

const handleSubmit = () => {
  form.value?.validate(v => {
    if (v) {
      localStorage.setItem('token', '123')
      router.push('/')
      ElMessage.success('登录成功')
    } else {
      ElMessage.error('请输入正确')
    }
  })
  return
}
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
.form {
  padding-top: 20px;
}
</style>
