/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-17 16:49:29
 * @LastEditTime: 2022-10-20 14:37:32
 * @Email: Tom
 * @FilePath: \vue3-demo\src\server\router.ts
 * @Environment: Win 10
 * @Description:
 */
import http from './http'

const apiGetRouteList = (params: any = '') => http.get('/login', params)
export { apiGetRouteList }
