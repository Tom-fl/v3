/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-29 17:36:20
 * @LastEditTime: 2022-10-20 14:38:35
 * @Email: Tom
 * @FilePath: \vue3-demo\src\store\visualExample.ts
 * @Environment: Win 10
 * @Description:
 */
import { defineStore } from 'pinia'
import { getApiList } from '@/server/visualExample'
import type {
  RootObject,
  Children,
  ChinaTotal,
  ChinaAdd,
  StatisGradeCityDetail,
} from '@/types/type'

export const visualExampleStore = defineStore({
  id: 'visualExample',
  state: () => ({
    list: <RootObject>{},
    item: <Children[]>[],
    chinaAdd: <ChinaAdd>{},
    chinaTotal: <ChinaTotal>{},
    cityDetail: <StatisGradeCityDetail[]>[],
  }),
  actions: {
    async getList() {
      const { data } = await getApiList()
      this.list = data
      this.chinaAdd = this.list.diseaseh5Shelf.chinaAdd
      this.chinaTotal = this.list.diseaseh5Shelf.chinaTotal
      this.cityDetail = this.list.statisGradeCityDetail.slice(0, 10)
    },
  },
})
