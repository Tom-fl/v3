<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-15 16:31:17
 * @LastEditTime: 2022-08-19 11:20:09
 * @Email: Tom
 * @FilePath: \demo\src\view\components\builtInComponents\transition\Transition.vue
 * @Environment: Win 10
 * @Description: 内置组件 -> 动画组件
-->
<template>
  <div class="wrap">
    <el-button @click="flag = !flag">transition动画</el-button>
    <!-- <transition name="trs">
      <div class="box" v-show="flag"></div>
    </transition> -->

    <!-- 也可以自定义类名 -->
    <!-- <transition :duration="500" enter-active-class="animate__animated animate__bounce" leave-active-class="animate__animated animate__rubberBand">
      <div class="box" v-show="flag"></div>
    </transition> -->

    <!-- 生命周期 -->
    <transition
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__rubberBand"
      @before-enter="enterFrom"
      @enter="enterActive"
      @after-enter="enterTo"
      @enter-cancelled="enterCancelled"
      @before-leave="leaveFrom"
      @leave="leave"
      @after-leave="leaveTo"
      @leave-cancelled="leaveCancelled"
    >
      <div class="box" v-show="flag"></div>
    </transition>

    <!-- 通过gsap动画小例子 -->
    <gsap-example />

    <!-- transitionGroup  渲染列表-->
    <group />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import 'animate.css'

import GsapExample from './child/GsapExample.vue'
import Group from './TransitionGroup.vue'

const flag = ref<boolean>(false)

const enterFrom = (e: Element) => {
  console.log(e)
  console.log('过渡之前')
}

const enterActive = (e: Element, done: Function) => {
  console.log(e)
  console.log('过渡曲线')
  setTimeout(() => {
    done()
  }, 2000)
}

const enterTo = (e: Element) => {
  console.log(e)
  console.log('过渡完成')
}
const enterCancelled = (e: Element) => {
  console.log(e)
  console.log('过渡效果被打断')
}

const leaveFrom = (e: Element) => {
  console.log(e)
  console.log('过渡效果被打断')
}
const leave = () => {
  console.log('离开过渡曲线')
}

const leaveTo = () => {
  console.log('离开完成')
}

const leaveCancelled = () => {
  console.log('离开过渡曲线')
}
</script>

<style scoped>
.wrap {
  width: 1000px;
  height: 100px;
}
.box {
  width: 200px;
  height: 200px;
  background: greenyellow;
}

.trs-enter-from {
  width: 0;
  height: 0;
  transform: rotate(360deg);
}
.trs-enter-active {
  transition: all 2s;
  background: greenyellow;
}
.trs-enter-to {
  width: 200px;
  height: 200px;
}

.trs-leave-from {
  width: 200px;
  height: 200px;
  transform: rotate(360deg);
}
.trs-leave-active {
  transition: all 2s;
  background: greenyellow;
}
.trs-leave-to {
  width: 0;
  height: 0;
}

/* 自定义class */
</style>
