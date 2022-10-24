<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-17 16:44:24
 * @LastEditTime: 2022-10-18 16:15:36
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\router\routerAdd\RouterAdd.vue
 * @Environment: Win 10
 * @Description: 
          -------------动态路由------------
-->

<template>
  <div>
    <el-input v-model="formInit.user" placeholder="admin   admin2"></el-input>
    <el-input v-model="formInit.password" placeholder="12345"></el-input>
    <el-button @click="handleClick" type="primary">登录获取路由</el-button>
    <div v-for="item in store.routeList.route">
      <router-link :to="item.path">点击{{ item.name }}跳转</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { routerStore } from '@/store/router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const store = routerStore()
const list = ref<any>([])

const formInit = reactive({
  user: '',
  password: '12345',
})

const handleClick = () => {
  store.actGetList(formInit).then(res => {
    list.value = res.route
    ElMessage.success('请求成功')
    res.route.map((i: any) => {
      router.addRoute({
        path: i.path,
        name: i.name,
        component: () => import(`./child/${i.component}.vue`),
      })
    })
    router.getRoutes()
  })
}
</script>
<style scope></style>
