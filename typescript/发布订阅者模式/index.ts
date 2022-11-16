/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-11-15 11:25:58
 * @LastEditTime: 2022-11-16 16:17:49
 * @Email: Tom
 * @FilePath: \typescript\发布订阅者模式\index.ts
 * @Environment: Win 10
 * @Description:
 */

interface Face {
  on: (name: string, fn: Function) => void
  emit: (name: string, ...args: Array<any>) => void
  off: (name: string, fn: Function) => void
  once: (name: string, fn: Function) => void
}

interface Arr {
  [key: string]: Array<Function>
}

class Dispath implements Face {
  arr: Arr
  constructor() {
    this.arr = {}
  }

  on(name: string, fn: Function) {
    const callback = this.arr[name] || []
    callback.push(fn)
    this.arr[name] = callback
    // console.log(this.arr) // { post: [ [Function (anonymous)] ] }
  }

  emit(name: string, ...args: Array<any>) {
    let eventName = this.arr[name]
    if (eventName) {
      eventName.forEach(fn => {
        fn.apply(this, args)
      })
    } else {
      console.error(`名字错了${name}`)
    }
  }

  off(name: string, fn: Function) {
    let eventName = this.arr[name]
    if (eventName && fn) {
      let index = eventName.findIndex(i => i === fn)
      eventName.splice(index)
    } else {
      console.error(`名字错了${name}`)
    }
  }

  once(name: string, fn: Function) {
    let fake = (...args: Array<any>) => {
      fn.apply(this, args)
      this.off(name, fake)
    }
    this.on(name, fake)
  }
}

const d = new Dispath()

d.on('ys', (...args: Array<any>) => {
  console.log('on', args)
})

// d.once('ys', (...args: Array<any>) => {
//   console.log('once', args)
// })

const fn4 = (...args: Array<any>) => {
  console.log('ys', args)
}

// d.off('ys', fn4)

// d.on('ys', fn4)

d.emit('ys', '亚索', { name: '亚索', age: 12 })

// d.emit('ys', '瑞雯', { name: '瑞雯', age: 20 })
