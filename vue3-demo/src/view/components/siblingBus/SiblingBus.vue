<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-26 11:28:23
 * @LastEditTime: 2022-08-26 12:29:17
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\components\siblingBus\SiblingBus.vue
 * @Environment: Win 10
 * @Description: 通过 Bus 的方式
        在vue2的时候
          在main.js同级 新建一个bus.js
          new 出来一个vue ，通过出来的 vue
          通过$emite()去派发  通过 $on() 去监听
            原理就是利用了 js设定模式的发布订阅，然后又一个事件调度中心 去做这些事
-->
<template>
  <div>
    <Bus1></Bus1>
    <Bus2></Bus2>
  </div>
</template>

<script setup lang="ts">
import Bus1 from './child/Bus1.vue'
import Bus2 from './child/Bus2.vue'
</script>
