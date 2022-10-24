<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-20 12:18:16
 * @LastEditTime: 2022-09-20 12:30:44
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\eventLoop\EventLoop.vue
 * @Environment: Win 10
 * @Description: 
            事件循环机制
                  1.同步任务
                  2.异步任务
                      2.1宏任务
                      2.2微任务
-->
<template>
  <div>
    <h2>事件循环机制</h2>
    <div>1.同步任务</div>
    <div>2.异步任务</div>
    <div>2.1宏任务</div>
    <div>2.2微任务</div>
  </div>
</template>

<script setup lang="ts">
// 微任务
async function Prom() {
  console.log('Y')
  await Promise.resolve()
  console.log('X')
}

// 宏任务
setTimeout(() => {
  console.log(1)
  Promise.resolve().then(() => {
    console.log(2)
  })
}, 0)

// 宏任务
setTimeout(() => {
  console.log(3)
  Promise.resolve().then(() => {
    console.log(4)
  })
}, 0)

// 微任务
Promise.resolve().then(() => {
  console.log(5)
})
// 微任务
Promise.resolve().then(() => {
  console.log(6)
})
// 微任务
Promise.resolve().then(() => {
  console.log(7)
})
// 微任务
Promise.resolve().then(() => {
  console.log(8)
})
Prom()
console.log(0)
// Y
// 0
// 5 6 7 8
// X
// 1 2
// 3 4
</script>

<style></style>
