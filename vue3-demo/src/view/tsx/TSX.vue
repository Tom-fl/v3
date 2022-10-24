<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-26 19:04:17
 * @LastEditTime: 2022-08-26 19:04:31
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\tsx\Tsx.vue
 * @Environment: Win 10
 * @Description: 
          
        我们目前只能写 template 模板语法。我们还可以扩展另外一种风格 TSX 风格
          有点像 react  js代码和html代码混着写

        vue2的时候就已经支持jsx写法，只不过不是很友好。随着vue3对ts的支持度，tsx写法越来越被接受

        用到的插件
          yarn add @vitejs/plugin-vue-jsx -D
-->
<template>
  <render-dom></render-dom>
</template>

<script setup lang="ts">
import renderDom from './TSX'
</script>

<style></style>
