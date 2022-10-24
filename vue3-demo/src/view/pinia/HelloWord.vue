<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-28 17:39:04
 * @LastEditTime: 2022-09-29 17:41:19
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\pinia\helloWord.vue
 * @Environment: Win 10
 * @Description: pinia
-->
<template>
  <div>
    <el-button @click="handleClickUpt">点击修改</el-button>
    <p>{{ test.current }}</p>
    <p>{{ test.name }}</p>

    <p>解构store的值{{ current }}</p>

    <p>{{ user }}</p>

    <p>{{ test.newName }}</p>

    <el-button @click="handleClickReset">重置</el-button>
  </div>
</template>

<script setup lang="ts">
import { useTestStore } from '@/store/helloWord'
import { storeToRefs } from 'pinia'
const test = useTestStore()

// pinia 解构出的值 是不具有响应式的
const { current, name, user } = storeToRefs(test)

const handleClickUpt = () => {
  // -----------------------------修改 state 的值-----------------------------
  // 第一种
  // test.current++

  // 第二种
  // test.$patch({
  //   current: 123,
  //   name: 'jerry',
  // })

  // 第三种  $patch 函数的形式
  // test.$patch(state => {
  //   state.current = 456
  //   state.name = '盲仔'
  // })

  // 第四种  必须把所有的值都得传
  // test.$state = {
  //   current: 789,
  //   name: '妖姬',
  // }

  // 第五种  actions
  // test.setCurrent(666)

  // -----------------------------解构store-----------------------------

  // test.current++
  // console.log(current.value)

  // actions
  //    同步写法
  test.setUser()
  //    异步写法
  // test.setUserAsync() 直接调用也行
  // 在store return 出来 在vue 拿值也行
  test.setUserAsync().then(res => {
    console.log(res)
  })
}

const handleClickReset = () => {
  test.$reset()
}

// 第二个参数 设置为true 被销毁也是会 监听
test.$subscribe(
  (args, state) => {
    console.log(args, state)
  },
  { detached: true, deep: true, flush: 'post' }
)

// 第二个参数 设置为true  即使被销毁 也会进行监听
test.$onAction(args => {
  args.after(() => {
    console.log('xx')
  })
  console.log(args)
}, true)
</script>

<style></style>
