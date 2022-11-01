/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-27 10:30:22
 * @LastEditTime: 2022-10-27 12:17:57
 * @Email: Tom
 * @FilePath: \typescript\函数类型\index.ts
 * @Environment: Win 10
 * @Description:
 */

// 默认值
// const fn = function (name: string, age: number = 80): string {
//   return name + age
// }
// // 可选值
// const fn1 = function (name: string, age?: number): string {
//   return name + age
// }

// let f1 = fn('亚索', 30)
// let f2 = fn('妖姬')
// console.log(f1)
// console.log(f2)

// let f3 = fn1('盲仔')
// console.log(f3) // age 不传是undefined

// ------------------------也可以使用 interface 来约束------------------------
// interface Person {
//   name: string
//   age: number
// }

// const fn = function (p: Person): Person {
//   return p
// }

// let p1 = fn({
//   name: '瑞雯',
//   age: 20,
// })

// console.log(p1) // { name: '瑞雯', age: 20 }

// ------------------------函数重载------------------------
// 方法名相同 参数不同  返回类型也可以不相同
// function fn(p: number): void // 第一套规则
// function fn(p: string, p2: boolean): void // 第二套规则
// function fn(p: any, p2?: any): any {
//   console.log(p, p2)
// }

// fn(2) // 2 undefined
// fn('瑞雯', true) // 瑞雯 true
