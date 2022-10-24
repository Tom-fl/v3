/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-07-27 19:05:08
 * @LastEditTime: 2022-10-17 11:11:31
 * @Email: Tom
 * @FilePath: \vue3-demo\src\main.ts
 * @Environment: Win 10
 * @Description:
 */
import { createApp, toRaw, createVNode, render } from 'vue'
import router from './route'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import mitt from 'mitt'
import 'uno.css'
// 因为自定义插件
import Loading from './view/customPlugin'
import { createPinia, PiniaPluginContext } from 'pinia'
import loadingBar from '@/components/lodingBar/LodingBar.vue'

// 声明 全局变量和函数
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $filters: Filter
    $env: string
    $loading: {
      show: () => void
      hide: () => void
    }
  }
}

// ts 注册
// 由于必须要扩展 ComponentCustomProperties 类型才能获得类型提示
declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof mit
  }
}

// 路由的title赋值问题   document.title
declare module 'vue-router' {
  export interface RouteMeta {
    title: string
    transition: string
  }
}

type Filter = {
  format: <T>(str: T) => string
}
type Options = {
  key?: string
}

const app = createApp(App)
const mit = mitt()
const store = createPinia()
const __piiaKey__: string = 'Tom'
const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}
const getStorage = (key: string) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}

// pinia 状态持久化插件
const piniaPlugin = (options: Options) => {
  return (context: PiniaPluginContext) => {
    const { store } = context
    const data = getStorage(`${options?.key ?? __piiaKey__}-${store.$id}`)
    // 通过 $subscribe  因为每次修改 都会进入这个 api
    store.$subscribe(() => {
      setStorage(`${options?.key ?? __piiaKey__}-${store.$id}`, toRaw(store.$state))
    })
    return {
      ...data,
    }
  }
}

// 全局变量和函数
app.config.globalProperties.$Bus = mit
app.config.globalProperties.$env = 'dev'
app.config.globalProperties.$filters = {
  format<T>(str: T): string {
    return `Tom.${str}`
  },
}

store.use(
  piniaPlugin({
    key: 'pinia',
  })
)

app
  .use(router)
  .use(ElementPlus)
  // 使用自定义插件
  .use(Loading)
  .use(store)
  .mount('#app')

// 路由导航守卫
const Vnode = createVNode(loadingBar)
// document.getElementById('#app')
render(Vnode, document.body)
// 允许可以跳转到 路径   白名单
const whileList = ['/', '/navGuard/navGuardLogin']

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  Vnode.component?.exposed?.startLoading()
  if (whileList.includes(to.path) || localStorage.getItem('token')) {
    next()
  } else {
    next('/navGuard/navGuardLogin')
  }
})

router.afterEach((to, from) => {
  Vnode.component?.exposed?.endLoading()
})
