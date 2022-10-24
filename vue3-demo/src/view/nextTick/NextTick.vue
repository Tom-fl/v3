<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-21 11:48:21
 * @LastEditTime: 2022-09-21 12:14:09
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\nextTick\nextTick.vue
 * @Environment: Win 10
 * @Description: nextTick
-->
<template>
  <div>
    <el-input v-model="message"></el-input>
    <div ref="div">{{ message }}</div>
    <el-button @click="handleClickChange">改变</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
const message = ref<string>('嘻嘻嘻')
const div = ref<HTMLElement>()
const current = ref<number>(0)

const handleClickChange = async () => {
  message.value = '哈哈哈哈'

  // 不使用 nextTick 打印的是上一次的值
  await nextTick()
  console.log(div.value?.innerText)

  // 这个问题是怎么导致的呢
  //  主要是 message.value  也就是 nextTick 的源码
  //        里面 主要是 flushJobs 这个函数
  // 在修改值的时候 是维护了三个队列
  //        第一个队列是 watch 队列
  //               watch(message,()=>{},{flush:'pre'})
  //        第二个队列是  queue 队列
  //               进行了一个排序
  //        第三个队列是 flushPostFlushCbs()
  //               watch(message,()=>{},{flush:'post'})
  //                            flush:'post  是 dom 更新完成之后
  // 永远是优先走 这三个队列  这个三个队列更新完成之后 在去走 nextTick

  // 在看一个小例子
  for (let i = 0; i < 100; i++) {
    current.value = i
    console.log(current.value)

    // 问 current 的值是多少  循环了多少次
    //  0- 99
  }

  // 经典的面试题
  // for (var i = 0; i < 5; i++) {
  //   setTimeout(() => {
  //     console.log(i)
  //     // i 每次都是5
  //     // 因为 for 循环这层代码是 同步任务 里面的 setTimeout 是宏任务
  //     // 所有 先走完同步任务  在去执行 宏任务  同步任务执行完后 i 是 5  所以setTimeout里的i 每次都是5
  //   })
  // }
}
</script>

<style></style>
