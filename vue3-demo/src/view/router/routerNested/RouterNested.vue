<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-13 16:21:40
 * @LastEditTime: 2022-10-17 11:00:31
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\router\routerNested\RouterNested.vue
 * @Environment: Win 10
 * @Description: 嵌套式路由
-->
<template>
  <div class="box">
    <div class="left">
      <RouterLink to="/routerNested/a" style="margin-left: 10px; border: 1px solid orangered">
        A
      </RouterLink>
      <RouterLink to="/routerNested/b" style="margin-left: 10px; border: 1px solid orangered">
        B
      </RouterLink>
      <RouterLink to="/routerNested/c" style="margin-left: 10px; border: 1px solid orangered">
        C
      </RouterLink>
    </div>
    <div class="right">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>
<style scope lang="less">
* {
  padding: 0;
  margin: 0;
}
body,
html,
#app {
  margin: 0;
  padding: 0;
  display: block;
  text-align: inherit;
  height: 100%;
  overflow: hidden;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    flex: 20%;
  }
  .right {
    border: 1px solid rgb(32, 172, 228);
    flex: 80%;
  }
}
</style>
