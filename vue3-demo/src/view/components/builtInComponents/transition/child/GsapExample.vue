<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-16 12:26:21
 * @LastEditTime: 2022-08-19 12:43:47
 * @Email: Tom
 * @FilePath: \demo\src\view\components\builtInComponents\transition\child\GsapExample.vue
 * @Environment: Win 10
 * @Description: 小例子
-->
<template>
  <div>
    <el-button @click="flag = !flag">小例子--gsap</el-button>
    <transition
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__rubberBand"
      @before-enter="enterFrom"
      @enter="enterActive"
      @leave="leave"
      @after-leave="leaveTo"
      @leave-cancelled="leaveCancelled"
    >
      <div class="box" v-show="flag"></div>
    </transition>

    <el-input v-model="num.current" type="number" step="20"></el-input>
    <div>{{ num.tweenedNumber.toFixed(0) }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import gsap from 'gsap'

const flag = ref<boolean>(false)

const enterFrom = (e: Element) => {
  gsap.set(e, {
    width: 0,
    height: 0,
  })
}

const enterActive = (e: Element, done: gsap.Callback) => {
  gsap.to(e, {
    width: 200,
    height: 200,
    onComplete: done,
  })
}

const leave = (e: Element, done: gsap.Callback) => {
  gsap.to(e, {
    width: 0,
    height: 0,
    onComplete: done,
  })
}

const leaveTo = () => {
  console.log('离开完成')
}

const leaveCancelled = () => {
  console.log('离开过渡曲线')
}

const num = reactive({
  current: 0,
  tweenedNumber: 0,
})
watch(
  () => num.current,
  (n, o) => {
    gsap.to(num, {
      direction: 1,
      tweenedNumber: n,
    })
  }
)
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
