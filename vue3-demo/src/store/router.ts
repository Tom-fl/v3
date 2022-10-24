/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-17 16:48:15
 * @LastEditTime: 2022-10-20 14:38:28
 * @Email: Tom
 * @FilePath: \vue3-demo\src\store\router.ts
 * @Environment: Win 10
 * @Description:
 */
import { defineStore } from 'pinia'
import { apiGetRouteList } from '@/server/router'

export const routerStore = defineStore({
  id: 'router',
  state: () => ({
    routeList: <any>[],
  }),
  getters: {
    getList(): [] {
      return this.routeList
    },
  },
  actions: {
    async actGetList(params: any) {
      const data = await apiGetRouteList(params)
      if (data.data) {
        this.routeList = data.data
        return data.data
      }
    },
  },
})
