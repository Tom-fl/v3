<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-07-27 19:05:08
 * @LastEditTime: 2022-10-17 11:15:33
 * @Email: Tom
 * @FilePath: \vue3-demo\src\App.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <router-view #default="{ route, Component }">
    <transition :enter-active-class="`animate__animated  ${route.meta.transition}`">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import 'animate.css'
</script>
