/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-11 16:15:02
 * @LastEditTime: 2022-10-21 11:37:27
 * @Email: Tom
 * @FilePath: \vue3-demo\src\route\index.ts
 * @Environment: Win 10
 * @Description:
 */

import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Skip',
    meta: {
      title: '首页',
      transition: 'animate__pulse',
    },
    component: () => import('../view/Skip.vue'),
  },
  {
    path: '/ayncComponents',
    name: 'AyncComponents',
    meta: {
      title: '异步组件',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/components/builtInComponents/aync/Aync.vue'),
  },
  {
    path: '/teleport',
    name: 'Teleport',
    meta: {
      title: 'Teleport--传送组件',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/components/builtInComponents/teleport/Teleport.vue'),
  },
  {
    path: '/keepAlive',
    name: 'KeepAlive',
    meta: {
      title: 'keepAlive--缓存组件',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/components/builtInComponents/keepAlive/KeepAlive.vue'),
  },
  {
    path: '/transition',
    name: 'transition',
    meta: {
      title: 'transition--动画组件',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/components/builtInComponents/transition/Transition.vue'),
  },
  {
    path: '/provide',
    name: 'Provide',
    meta: {
      title: 'Provide--注入组件',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/components/provideInject/ProvideInject.vue'),
  },
  {
    path: '/siblingEmit',
    name: 'SiblingEmit',
    meta: {
      title: 'siblingEmit--兄弟组件传值(普通方法)',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/components/siblingBus/SiblingEmit.vue'),
  },
  {
    path: '/bus',
    name: 'Bus',
    meta: {
      title: 'siblingBus--兄弟组件传值(使用bus方法)',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/components/siblingBus/SiblingBus.vue'),
  },
  {
    path: '/mitt',
    name: 'Mitt',
    meta: {
      title: 'mitt--兄弟组件传值(使用mitt别人写好的库)',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/components/siblingBus/Mitt.vue'),
  },
  {
    path: '/tsx',
    name: 'TSX',
    meta: {
      title: 'TSX(类似react)',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/tsx/TSX.vue'),
  },
  {
    path: '/autoImport',
    name: 'AutoImport',
    meta: {
      title: 'AutoImport(自动引入ref...)',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/autoImport/AutoImport.vue'),
  },
  {
    path: '/v-model',
    name: 'V-model',
    meta: {
      title: '深入v-model',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/directive/v-model/V-model.vue'),
  },
  {
    path: '/custom',
    name: 'Custom',
    meta: {
      title: '自定义指令',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/directive/custom/Custom.vue'),
  },
  {
    path: '/hooks',
    name: 'Hooks',
    meta: {
      title: '自定义hooks',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/hooks/Hooks.vue'),
  },
  {
    path: '/globalProperties',
    name: 'globalProperties',
    meta: {
      title: '定义全局函数和变量',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/globalProperties/GlobalProperties.vue'),
  },
  {
    path: '/customPlugin',
    name: 'customPlugin',
    meta: {
      title: '自定义插件',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/customPlugin/CustomPlugin.vue'),
  },
  {
    path: '/eventLoop',
    name: 'eventLoop',
    meta: {
      title: '事件循环机制(同/异任务-宏微任务)',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/eventLoop/EventLoop.vue'),
  },
  {
    path: '/nextTick',
    name: 'nextTick',
    meta: {
      title: 'nextTick',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/nextTick/NextTick.vue'),
  },
  {
    path: '/postcssPxToViewport',
    name: 'postcssPxToViewport',
    meta: {
      title: 'vue开发移动端',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/postcssPxToViewport/PostcssPxToViewport.vue'),
  },
  {
    path: '/unocss',
    name: 'unocss',
    meta: {
      title: 'unocss原子化',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/unocss/Unocss.vue'),
  },
  {
    path: '/reactiveSyntactic',
    name: 'reactiveSyntactic',
    meta: {
      title: '响应式语法糖',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/reactiveSyntactic/ReactiveSyntactic.vue'),
  },
  {
    path: '/helloWord',
    name: 'helloWord',
    meta: {
      title: 'pinia-helloWord',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/pinia/HelloWord.vue'),
  },
  {
    path: '/visualExample',
    name: 'visualExample',
    meta: {
      title: '可视化小例子',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/visualExample/VisualExample.vue'),
  },
  {
    path: '/routerNested',
    name: 'routerNested',
    meta: {
      title: '嵌套式路由',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/router/routerNested/RouterNested.vue'),
    children: [
      {
        path: 'a',
        name: 'A',
        component: () => import('@/view/router/routerNested/a.vue'),
      },
      {
        path: 'b',
        name: 'B',
        component: () => import('@/view/router/routerNested/b.vue'),
      },
      {
        path: 'c',
        name: 'C',
        component: () => import('@/view/router/routerNested/c.vue'),
      },
    ],
  },
  {
    path: '/navGuard',
    name: 'navGuard',
    meta: {
      title: '导航守卫--退出登录',
      transition: 'animate__pulse',
    },
    color: 'danger',
    component: () => import('@/view/router/navGuard/NavGuard.vue'),
    children: [
      {
        path: '',
        name: 'navGuard',
        component: () => import('@/view/router/navGuard/NavGuardIndex.vue'),
      },
      {
        path: 'navGuardIndex',
        name: 'navGuardIndex',
        component: () => import('@/view/router/navGuard/NavGuardIndex.vue'),
      },
      {
        path: 'navGuardLogin',
        name: 'navGuardLogin',
        component: () => import('@/view/router/navGuard/NavGuardLogin.vue'),
      },
    ],
  },
  {
    path: '/routerAdd',
    name: 'routerAdd',
    meta: {
      title: '动态路由',
      transition: 'animate__pulse',
    },
    component: () => import('@/view/router/routerAdd/RouterAdd.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
