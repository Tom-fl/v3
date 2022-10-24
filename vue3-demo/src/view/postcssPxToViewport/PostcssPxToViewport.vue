<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-21 12:36:44
 * @LastEditTime: 2022-09-21 18:02:34
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\postcssPxToViewport\PostcssPxToViewport.vue
 * @Environment: Win 10
 * @Description: 
                 开发移动端 用到的插件  用来根据 px 转成 vw 和vh
-->
<template>
  <div class="wraps">
    <header class="header">
      <div>left</div>
      <div>center</div>
      <div>right</div>
    </header>
    <main class="main">
      <div v-for="item in 100" class="main_item">
        <div class="main_port"></div>
        <div class="main_desc">
          <div>嘻嘻嘻{{ item }}</div>
          <div>啦啦啦啦啦啦啦啦啦</div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div v-for="item in footer" class="footer_item">
        <div>{{ item.icon }}</div>
        <div>{{ item.text }}</div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

type Footer<T> = {
  icon: T
  text: T
}
const footer = reactive<Footer<string>[]>([
  { icon: '1', text: '首页' },
  { icon: '2', text: '商品' },
  { icon: '3', text: '信息' },
  { icon: '4', text: '我的' },
])
</script>

<style lang="less">
#app {
  padding: 0;
  margin: 0;
}
body,
html,
#app {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.wraps {
  height: inherit;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    background: pink;
    justify-content: space-around;
    padding: 5px;
  }
  .main {
    flex: 1;
    overflow: auto;
    &_item {
      border-bottom: 1px solid #ccc;
      padding: 5px;
      display: flex;
    }
    &_port {
      width: 30px;
      height: 30px;
      background: #000;
      border-radius: 200px;
    }
    &_desc {
      margin-left: 10px;
      div:last-child {
        font-size: 10px;
        margin-top: 10px;
      }
    }
  }

  .footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border: 1px solid #ccc;
    &_item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 5px;
      div:last-child {
        margin-top: 5px;
      }
    }
  }
}
</style>
