/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-28 11:25:00
 * @LastEditTime: 2022-10-28 18:16:49
 * @Email: Tom
 * @FilePath: \typescript\symbol\index.ts
 * @Environment: Win 10
 * @Description:
 */
// 只能传 string  number
// 传别的是会 toString
let s: symbol = Symbol('亚索')
let s1: symbol = Symbol('亚索')

console.log(s) // Symbol(亚索)
console.log(s1) // Symbol(亚索)
console.log(s == s1) // false

// 为什么说 symbol 是唯一值 ？
// s 和 s1 是不互相等于的  存储的内存地址不同

// 使用场景
// 一般对象的key使用的比较多
let obj = {
  [s]: 'val', // symbol
  [s1]: 'msg', // symbol
  age: 12,
  sex: 'man',
}

console.log(obj) // { age: 12, sex: 'man', [Symbol(亚索)]: 'val', [Symbol(亚索)]: 'msg' }
// symbol 和普通的 key  什么区别呢
// 比如循环的时候
for (let key in obj) {
  console.log(key) // age sex
}
// 这几种方式 都不会打印出 symbol
// Object.keys(obj) // ['age','sex']
// Object.getOwnPropertyNames(obj) // ['age','sex']
// JSON.stringify(obj) //{"age":12,"sex":"man"}

// 怎么对 symbol 取值
Object.getOwnPropertySymbols(obj) // [ Symbol(亚索), Symbol(亚索) ]
// Reflect.ownKeys 方法会把所有的key都给打印出来
Reflect.ownKeys(obj) // [ 'age', 'sex', Symbol(亚索), Symbol(亚索) ]
