<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-08 16:52:24
 * @LastEditTime: 2022-09-08 17:45:48
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\directive\custom\custom.vue
 * @Environment: Win 10
 * @Description: 自定义指令
-->
<template>
  <div>
    <div class="a">
      <el-button @click="flag = !flag">切换</el-button>
      <el-input v-model="value" placeholder="输入颜色"></el-input>
      <A v-move:params.tom="{ background: value, flag: flag }"></A>
    </div>
    <case></case>
  </div>
</template>

<script setup lang="ts">
import { ref, Directive, DirectiveBinding } from 'vue'

import A from './child/A.vue'
import Case from './Case.vue'

let flag = ref<boolean>(true)
let value = ref<string>('')
type Dir = {
  background: string
}

const vMove: Directive = (el, binding: DirectiveBinding<Dir>) => {
  el.style.background = binding.value.background
}

// const vMove: Directive = {
//   created() {
//     console.log('------created')
//   },
//   beforeMount() {
//     console.log('----------beforeMount')
//   },
//   mounted(el: HTMLElement, dir: DirectiveBinding<Dir>) {
//     console.log('----------mounted')
//     el.style.background = dir.value.background
//   },
//   beforeUpdate() {
//     console.log('----------beforeUpdate')
//   },
//   updated() {
//     console.log('----------updated')
//   },
//   beforeUnmount() {
//     console.log('----------beforeUnmount')
//   },
//   unmounted() {
//     console.log('----------unmounted')
//   },
// }
</script>

<style scoped>
.a {
  width: 1000px;
  height: 500px;
}
</style>
