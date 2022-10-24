/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-19 11:17:51
 * @LastEditTime: 2022-09-19 12:22:34
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\customPlugin\index.ts
 * @Environment: Win 10
 * @Description:
 */
import { App, createVNode, VNode, render } from 'vue'

import Loading from './index.vue'

export default {
  install(app: App) {
    // 把组件转换成 虚拟dom
    const vnode: VNode = createVNode(Loading)
    // 虚拟dom  打印时 component  是null

    // 把虚拟dom转换成 真实dom
    render(vnode, document.body)
    // 转换成真实dom  component  和 el  是有值的
    console.log(vnode)

    app.config.globalProperties.$loading = {
      show: vnode.component?.exposed?.show,
      hide: vnode.component?.exposed?.hide,
    }
    console.log(vnode.component?.exposed)
    // app.config.globalProperties.$loading.show()
  },
}
