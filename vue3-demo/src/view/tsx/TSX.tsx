/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-26 18:28:12
 * @LastEditTime: 2022-08-30 12:20:31
 * @Email: Tom
 * @FilePath: \vue3-demo\src\view\tsx\TSX.tsx
 * @Environment: Win 10
 * @Description:
 */

import { ref } from 'vue'

let v = ref<string>('')

const renderDom = () => {
  return (
    <div>
      <el-input v-model={v.value}></el-input>
      <div>{v.value}</div>
    </div>
  )
}

export default renderDom
