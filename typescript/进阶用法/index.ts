/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-11-16 16:30:27
 * @LastEditTime: 2022-11-18 11:43:08
 * @Email: Tom
 * @FilePath: \typescript\进阶用法\index.ts
 * @Environment: Win 10
 * @Description:
 */

/**
 * @description: Proxy  & Reflect
 * @return {*}
 */

// type Person1 = {
//   name: string
//   age: number
//   sex: string
// }
// const proxy = (obj: any, key: any) => {
//   return new Proxy(obj, {
//     get(target, prop, receiver) {
//       console.log('get', prop)
//       return Reflect.get(target, prop, receiver)
//     },
//     set(target, prop, value, receiver) {
//       console.log('set', prop)
//       return Reflect.set(target, prop, value, receiver)
//     },
//   })
// }

// // 固定的太死了
// const log1 = (obj: Person1, key: 'name' | 'age' | 'sex') => {
//   return proxy(obj, key)
// }

// let ps1: Person1 = log1(
//   {
//     name: '亚索',
//     age: 18,
//     sex: '男',
//   },
//   'name'
// )

// ps1.name = '瑞雯'
// ps1.sex
// console.log(ps1)

// // 优化后
// const log2 = <T>(obj: T, key: keyof T): T => {
//   return proxy(obj, key)
// }

// let ps2 = log2(
//   {
//     name: '盲僧',
//     age: 20,
//     sex: '男',
//     like: 'hs',
//   },
//   'like'
// )

// ps2.like

/**
 * @description: Partial & Pick
 * @return {*}
 */

// Partial

// type Person1 = {
//   name: string;
//   age: number;
//   msg: string;
// };

// type Partial<T> = {
//   [P in keyof T]?: T[P]
// }

// // keyof 之后所有的key 都会变成这样  类似 for in
// type key = 'name' | 'age' | 'msg';

// type p = Partial<Person1>;

// Pick

// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P]
// }
// K extends keyof T 什么意思呢
// K 我们这传了个联合类型   通过 extends约束了下 你只能传你的约束的那些值   type key = 'name' | 'age' | 'msg'

// type p = Pick<Person, 'name'>
// type p = Pick<Person, 'xxxx'> // error

/**
 * @description: Record & Readonly
 * @return {*}
 */
// Readonly

// type Person1 = {
//   name: string
//   age: number
//   msg: string
// }

// type Readonly<T> = {
//   readonly [P in keyof T]: T[P]
// }

// keyof
// type key = 'name' | 'age' | 'msg';
// 通过in 遍历

// type p1 = Readonly<Person1>
// type p1 = {
//     readonly name: string;
//     readonly age: number;
//     readonly msg: string;
// }

//  Record、

// 源码
// type Record<K extends keyof any, T> = {
//   [P in K]: T
// }

// keyof any 会返回
// type key = string | number | symbol

// type K = 'A' | 'B' | 'C'

// type p1 = Record<K, Person1>
// type p1 = {
//   A: Person1
//   B: Person1
//   C: Person1
// }

// 使用
// let obj3: p1 = {
//   A: { name: '亚索', age: 18, msg: '嘻嘻' },
//   B: { name: '亚索', age: 18, msg: '嘻嘻' },
//   C: { name: '亚索', age: 18, msg: '嘻嘻' },
// }

/**
 * @description: infer
 * @return {*}
 */

// 以前的写法
// type Type<T> = T extends Array<any> ? T[number] : T

// type T1 = Type<(number | string)[]>

// type T2 = Type<boolean>

// 使用 infer
// type Type<T> = T extends Array<infer U> ? U : T

// type T1 = Type<(number | string)[]>

// type T2 = Type<boolean>

//  也可以约束成 never  只能传联合类型 不满足 就返回 never
// type Type<T> = T extends Array<infer U> ? U : never

// type T1 = [string, number] // [string, number]

// type T2 = Type<boolean> // never

// 类型提取

// type Arrs = ['a', 'b', 'c']

// // 提取头部元素

// type First<T extends any[]> = T extends [infer one, ...any[]] ? one : []

// type T1 = First<Arrs> // type a = "a"

// // 提取尾部元素
// type Last<T extends any[]> = T extends [...any[], infer Last] ? Last : []

// type T2 = Last<Arrs> // type b = "c"

// // 删除头部元素
// type Shift<T extends any[]> = T extends [unknown, ...infer Rest] ? Rest : []

// type T3 = Shift<Arrs> // type T3 = type T3 = ["b", "c"]

// // 删除尾部元素
// type Pop<T extends any[]> = T extends [...infer Rest, unknown] ? Rest : []

// type T4 = Pop<Arrs> // type T4 = ["a", "b"]

// 递归

// 需求 Arr1 正常排序 变成 Arr2 那样
type Arr1 = [6, 5, 4, 3, 2, 1]
type Arr2 = [1, 2, 3, 4, 5, 6]
// 思路
// 使用泛型约束 只能传数组类型
// 然后提取第一个放入末尾, 循环操作 形成递归 满足条件 返回

type ReveArr<T extends any[]> = T extends [infer First, ...infer rest]
  ? [...ReveArr<rest>, First]
  : T

type Result = ReveArr<Arr1> // type Result = [1, 2, 3, 4, 5, 6]
