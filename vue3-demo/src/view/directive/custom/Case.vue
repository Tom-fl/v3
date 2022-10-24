<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-08 17:28:40
 * @LastEditTime: 2022-09-08 17:43:40
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\directive\custom\Case.vue
 * @Environment: Win 10
 * @Description:  自定义指令  案例   
              自定义拖拽的一个指令
-->
<template>
  <div v-move class="box">
    <div class="header"></div>
    <div>拖动</div>
  </div>
</template>

<script setup lang="ts">
import { ref, Directive, DirectiveBinding } from 'vue'

const vMove: Directive<any, void> = (el: HTMLElement, binding: DirectiveBinding) => {
  let moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement
  const mousedown = (e: MouseEvent) => {
    let X = e.clientX - el.offsetLeft
    let Y = e.clientY - el.offsetTop
    const move = (e: MouseEvent) => {
      console.log(e)
      el.style.left = e.clientX - X + 'px'
      el.style.top = e.clientY - Y + 'px'
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move)
    })
  }
  moveElement.addEventListener('mousedown', mousedown)

  console.log(moveElement)
}
</script>

<style scoped>
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 3px solid #000;
}
.header {
  height: 20px;
  background: #000;
  cursor: all-scroll;
}
</style>
