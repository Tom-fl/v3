/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-08-26 11:54:34
 * @LastEditTime: 2022-08-26 18:17:19
 * @Email: Tom
 * @FilePath: \vue3-demo\src\Bus.ts
 * @Environment: Win 10
 * @Description:
 */

type BusClass = {
  emit: (name: string) => void
  on: (name: string, callback: Function) => void
}
type ParamsKey = string | number | symbol
type List = {
  [key: ParamsKey]: Array<Function>
}

class Bus implements BusClass {
  list: List
  constructor() {
    this.list = {}
  }

  emit(name: string, ...args: Array<any>) {
    let eventName: Array<Function> = this.list[name]
    eventName.forEach(fn => {
      fn.apply(this, args)
    })
  }
  on(name: string, callback: Function) {
    let fn: Array<Function> = this.list[name] || []
    fn.push(callback)
    this.list[name] = fn
  }

  // 取消事件
  // off() {}
}

export default new Bus()
