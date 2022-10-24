<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-30 12:11:09
 * @LastEditTime: 2022-09-08 16:40:51
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\v-model\child\ChildDialog.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div class="wrap" v-if="modelValue">
    <div>{{ title }}</div>
    <div>{{ msg }}</div>

    <el-button type="danger" @click="handleClickClose">点击关闭</el-button>
  </div>
</template>

<script setup lang="ts">
type Props = {
  modelValue: boolean
  title: string
  msg: string
  // 自定义修饰符
  modelModifiers?: {
    Tom: boolean
  }
  // 自定义修饰符
  titleModifiers?: {
    title: string
  }
}

const PropsDate = defineProps<Props>()

const emit = defineEmits(['update:modelValue', 'update:title'])

const handleClickClose = () => {
  console.log(PropsDate.modelModifiers)
  console.log(PropsDate.titleModifiers)

  if (PropsDate.modelModifiers?.Tom) {
    emit('update:title', '妖姬')
  } else {
    emit('update:title', '盲仔')
  }
  emit('update:modelValue', false)
}
</script>

<style scoped>
.wrap {
  width: 200px;
  height: 200px;
  margin-top: 50px;
  border: 1px solid #000;
}
</style>
