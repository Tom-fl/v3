<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-22 18:04:55
 * @LastEditTime: 2022-10-17 11:19:44
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\reactiveSyntactic\ReactiveSyntactic.vue
 * @Environment: Win 10
 * @Description: 
                响应式语法糖
-->
<template>
  <div>
    <el-button @click="handleClick">点击修改</el-button>
    <div>{{ msg }}</div>
    <div>{{ val }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, toRefs } from 'vue'
import { $ref, $$, $, $computed, $shallowRef } from 'vue/macros'

const msg = ref(0)
let val = $ref(0)
let obj = reactive({
  name: 'Tom',
  age: 12,
})
let { name, age } = $(obj)
age = 22
console.log(name, age)

watch($$(val), v => {
  console.log(v)
})

const handleClick = () => {
  val++
  msg.value++
}
</script>

<style></style>
