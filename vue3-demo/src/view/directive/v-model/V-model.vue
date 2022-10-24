<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-30 12:09:45
 * @LastEditTime: 2022-09-08 16:37:30
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\v-model\V-model.vue
 * @Environment: Win 10
 * @Description: 深入  v-model 组件
-->
<template>
  <div>
    <el-button @click="handleClick">点击切换</el-button>
    <div>{{ flag }}</div>
    <div>标题:{{ title }}</div>
    <!--          自定义修饰符                                 自定义修饰符             -->
    <child-dialog v-model:title.xxx="title" v-model:msg="msg" v-model.Tom="flag"></child-dialog>
  </div>
</template>

<script setup lang="ts">
import ChildDialog from './child/ChildDialog.vue'

const flag = ref<boolean>(true)
const title = ref<string>('亚索')
const msg = ref<string>('帅哥')

const handleClick = () => {
  flag.value = !flag.value
}
</script>
