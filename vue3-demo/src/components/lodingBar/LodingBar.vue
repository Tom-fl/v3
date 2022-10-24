<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-14 12:46:19
 * @LastEditTime: 2022-10-14 16:31:01
 * @Email: Tom
 * @FilePath: \vue3-demo\src\components\lodingBar\LodingBar.vue
 * @Environment: Win 10
 * @Description: 每次点击切换路由的滚动条
-->
<template>
  <div class="loding_bar_wraps">
    <div ref="bar" class="bar"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let speed = ref<number>(1)
let bar = ref<HTMLElement>()
let timer = ref<number>(0)

const startLoading = () => {
  let dom = bar.value as HTMLElement
  speed.value = 1

  timer.value = window.requestAnimationFrame(function fn() {
    if (speed.value < 90) {
      speed.value += 1
      dom.style.width = speed.value + '%'
      timer.value = window.requestAnimationFrame(fn)
    } else {
      speed.value = 1
      window.cancelAnimationFrame(timer.value)
    }
  })
}

const endLoading = () => {
  let dom = bar.value as HTMLElement

  setTimeout(() => {
    window.requestAnimationFrame(() => {
      speed.value = 100
      dom.style.width = speed.value + '%'
    })
  }, 500)
}

defineExpose({ startLoading, endLoading })
</script>
<style scope lang="less">
.loding_bar_wraps {
  position: fixed;
  top: 0;
  width: 100%;
  height: 2px;
  z-index: 9;
  .bar {
    height: inherit;
    width: 0;
    background: rgb(79, 181, 240);
  }
}
</style>
