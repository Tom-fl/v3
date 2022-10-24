<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-26 11:00:09
 * @LastEditTime: 2022-08-26 11:35:00
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\components\siblingBus\SiblingEmit.vue
 * @Environment: Win 10
 * @Description: 

            这种方式是通过 
                子组件1 -> 派发事件给父组件  -> 父组件把值在传给 子组件2
            缺点: 太繁琐 太麻烦了
-->
<template>
  <div>
    <A @childEmit="parentEmit"></A>
    <B :data="data"></B>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import A from './child/A.vue'
import B from './child/B.vue'

let data = ref(false)

const parentEmit = (val: boolean) => {
  data.value = val
  console.log(val)
}
</script>
