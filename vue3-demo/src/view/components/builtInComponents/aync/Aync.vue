<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-11 16:11:56
 * @LastEditTime: 2022-08-15 15:49:06
 * @Email: Tom
 * @FilePath: \demo\src\view\components\builtInComponents\aync\Aync.vue
 * @Environment: Win 10
 * @Description: 内置组件 -> 异步组件
-->

<template lang="">
  <div>
    <Suspense>
      <template #default>
        <HelloWorld></HelloWorld>
      </template>

      <template #fallback>
        <div>loding.....</div>
      </template>
    </Suspense>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from "vue"

// 正常组件
// import HelloWorld from "./components/HelloWorld.vue"

// 异步组件
const HelloWorld = defineAsyncComponent(() => import("@/components/HelloWorld.vue"))
</script>
