/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-17 16:50:43
 * @LastEditTime: 2022-10-20 14:37:45
 * @Email: Tom
 * @FilePath: \vue3-demo\src\server\visualExample.ts
 * @Environment: Win 10
 * @Description:
 */

import http from './http'

const getApiList = (params: any = '') => http.get('/api/list', params)

export { getApiList }
