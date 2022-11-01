/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-28 11:38:56
 * @LastEditTime: 2022-10-28 18:23:02
 * @Email: Tom
 * @FilePath: \typescript\symbol\index2.ts
 * @Environment: Win 10
 * @Description:
 */
// symbol 迭代器和 生成器
let arr: Array<number> = [1, 2, 3]
let item: Iterator<number> = arr[Symbol.iterator]()

// 可以调用3次,可以通过 done 来区分是否循环完毕
// console.log(item.next()) // { value: 1, done: false }
// console.log(item.next()) // { value: 2, done: false }
// console.log(item.next()) // { value: 3, done: false }
// console.log(item.next()) // { value: undefined, done: true }

type mapKey = string | number
let set: Set<number> = new Set([1, 2, 3])
let map: Map<mapKey, mapKey> = new Map()

map.set('0', '瑞雯')
map.set('1', '艾克')

// 迭代器小例子
// 对象是不支持的
function fn(e: any) {
  let item: Iterator<any> = e[Symbol.iterator]()
  let next: any = { done: false }
  while (!next.done) {
    next = item.next()
    if (!next.done) {
      console.log(next)
    }
  }
}
fn(map)

// 生成器
// 同样对象也是不支持的
for (let item of arr) {
  console.log(item) // 1 2 3
}

// for of 和 for in 区别
// of 是直接把数组的值给打印出来
// in 是打印的索引
for (let item in arr) {
  console.log(item) // 0 1 2
}
