/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-29 17:44:30
 * @LastEditTime: 2022-10-17 17:53:48
 * @Email: Tom
 * @FilePath: \vue3-demo\src\server\index.ts
 * @Environment: Win 10
 * @Description:
 */

import axios from 'axios'

const server = axios.create({
  baseURL: import.meta.env.VITE_HTTP,
})

export default server
