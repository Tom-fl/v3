<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-16 12:53:01
 * @LastEditTime: 2022-08-19 12:38:58
 * @Email: Tom
 * @FilePath: \demo\src\view\components\builtInComponents\transition\TransitionGroup.vue
 * @Environment: Win 10
 * @Description: 渲染列表
-->
<template>
  <div>
    <el-button @click="flag = !flag">点击渲染列表--transition-group</el-button>
    <transition-group
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__rubberBand"
    >
      <div v-show="flag" v-for="item in list" :key="item">{{ item }}</div>
    </transition-group>

    <!-- 小例子 -->
    <random-example />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import 'animate.css'

import RandomExample from './child/RandomExample.vue'

const flag = ref<boolean>(false)
const list = reactive<number[]>([1, 2, 3, 4, 5, 6])
</script>
