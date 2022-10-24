/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-29 17:39:54
 * @LastEditTime: 2022-09-29 17:40:14
 * @Email: Tom
 * @FilePath: \vue3-demo\src\store\helloWord.ts
 * @Environment: Win 10
 * @Description:
 */
import { defineStore } from 'pinia'
import { Names } from './storeName'

type User = {
  name: string
  age: number
}
let result: User = {
  name: '你好',
  age: 199,
}

const Login = (): Promise<User> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: '啦啦啦',
        age: 11111,
      })
    }, 1000)
  })
}

export const useTestStore = defineStore(Names.TEST, {
  state: () => {
    return {
      current: 12,
      name: 'tom',
      user: <User>{},
    }
  },
  getters: {
    newName(): string {
      return `${this.name}---${this.getAge}`
    },
    getAge(): number {
      return this.user.age
    },
  },
  actions: {
    setCurrent(val: number) {
      this.current = val
    },
    setUser() {
      this.user = result
    },
    async setUserAsync() {
      const res = await Login()
      console.log(res)
      this.user = res
      // 可以调用别的方法
      this.setName('jerry')
      return res
    },
    setName(name: string) {
      this.name = name
    },
  },
})
