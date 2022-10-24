<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-19 11:21:17
 * @LastEditTime: 2022-08-19 11:53:16
 * @Email: Tom
 * @FilePath: \demo\src\view\components\builtInComponents\transition\child\tExample.vue
 * @Environment: Win 10
 * @Description: 九宫格小例子
-->
<template>
  <div>
    <el-button @click="handleClickRandom">点击random</el-button>
    <transition-group tag="div" class="wraps" move-class="move">
      <div class="items" v-for="item in list" :key="item.id">
        {{ item.number }}
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import _ from 'lodash'

let list = ref(
  // 通过  new Array(81)  只会生成一个长度 81 的数组
  // Array.apply(null, { length: 81 } as number[])   这样会生成长度 81 的数组 并且值都是为 undefined  会进行占位
  Array.apply(null, { length: 81 } as number[]).map((_, index) => {
    return {
      id: index,
      number: (index % 9) + 1,
    }
  })
)

console.log(list.value)

// 进行重新排列
const handleClickRandom = () => {
  list.value = _.shuffle(list.value)
}
</script>

<style>
.wraps {
  display: flex;
  flex-wrap: wrap;
  width: calc(25px * 10 + 9px);
}
.items {
  width: 25px;
  height: 25px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.move {
  transition: all 1s;
}
</style>
