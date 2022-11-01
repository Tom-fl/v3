/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-27 12:09:24
 * @LastEditTime: 2022-10-27 16:10:58
 * @Email: Tom
 * @FilePath: \typescript\类型断言\index.ts
 * @Environment: Win 10
 * @Description:
 */
// ------------联合类型--------------
// 可以定义多种类型
// 使用场景 比如手机号 和座机
// 变量
// let num: number = 12312312
// let num2: number | string = '010-111322'

//函数
//  使用场景 比如后台返回的是 0 1 或 true false
// let fn = function (t: number | boolean): boolean {
//   return !!t
// }
// let res1 = fn(0) // false
// let res2 = fn(1) // true
// let res3 = fn(true) // true
// let res4 = fn(false) // false

// ------------交叉类型--------------

// interface Person {
//   name: string
//   age: number
// }
// interface Hobby {
//   like: string
// }

// // 类似 extends 把两个接口合并了
// const res = (from: Person & Hobby) => {
//   return from
// }
// let r1 = res({
//   name: '亚索',
//   age: 12,
//   like: '黑丝',
// }) // { name: '亚索', age: 12, like: '黑丝' }
// console.log(r1)

// ------------类型断言--------------

// 语法：值 as 类型&<类型>
// const fn = function (num: number | string): void {
//   console.log((num as string).length)
// }
// fn('123') // 3
// fn(123) // undefined  数字么有length

// 例子
// interface P1 {
//   name: string
// }
// interface P2 {
//   like: string
// }
// const fn = (params: P1 | P2): void => {
//   console.log((params as P1).name)
// }
// fn({
//   name: '亚索',
// }) // 亚索

// fn({
//   like: '黑丝',
// }) // undefined  因为打印的是P1.name

// 例子 使用 any临时断言
// ;(window as any).name = '艾克'
