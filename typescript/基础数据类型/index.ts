/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-26 12:39:50
 * @LastEditTime: 2022-10-27 10:31:46
 * @Email: Tom
 * @FilePath: \typescript\基础数据类型\index.ts
 * @Environment: Win 10
 * @Description:
 */

// 字符串类型
// let str: string = '123'

// 数字类型
// let num: number = 123

// 空值类型
// let a: void = null
// let b: void = undefined

// 使用了  void  是不能有返回值的
// function fn(): void {
//   return 'xxx'
// }

// void 可以声明 null 和 undefined
// null 类型 和 undefined 类型 可以穿插使用
// 一般不会这么用

// let a: null = undefined
// let b: undefined = null

// void 是不能赋值给被人  undefined 可以
// let v: void = undefined
// let u: undefined = undefined
// let str = '123'
// str = v // 是不可以的
// str = u //是可以的

// any类型  可以赋值任何类型
// let a: any = '嘻嘻嘻嘻'
// a = 1
// a = '1'
// a = true
// a = {}
// a = []
// a = Symbol(123)

// unknown 类型  也是赋值任何类型
// let b: unknown = '嘻嘻嘻嘻'
// b = 1
// b = '1'
// b = true
// b = {}
// b = []
// b = Symbol(123)

// 两个的区别
// unknown 类型 比 any 类型 更安全
// unknown 是不能使用任何属性和方法的

// let u: unknown = { name: '盲仔' }
// u.a

// let u: unknown = { a: (): string => 'xxx' }
// u.a()

// any 类型是可以使用属性和方法的

// unkown 只能当作父类型 不能当作子类型
// 赋值 只支持 any  和 unknown
// let u: unknown = '亚索'
// let u1: unknown = '盲仔'
// let u2: any = '妖姬'
// u = u1
// u = u2

// console.log(u)

//
// let list: number[] = [1, 2, 3, 4]

// 元组类型
// let list: [string, number, boolean]

// list = ['盲仔', 12, true]

// 对象 接口

// 在js里  定义对象
// let obj = {
//   name: '亚索',
//   age: 8,
// }

// 在ts里
// interface Obj {
//   name: string
//   age: number
// }
// // 有相同名称的接口 会合并
// interface Obj {
//   height?: number
// }
// interface Obj {
//   readonly sex: string
//   height?: number
//   [propName: string]: any
//   fn(): number
// }

// let obj1: Obj = {
//   name: '亚索',
//   age: 12,
//   sex: '男',
//   hobby: '女',
//   address: '艾欧尼亚',
//   fn: () => {
//     return 123
//   },
// }

// obj1.age = 11
// // obj1.sex = '女' // error
// obj1.fn()
// console.log(obj1)

// 继承接口

// interface Obj1 {
//   name: string
// }
// interface Obj2 {
//   age: number
// }

// interface Obj3 extends Obj1, Obj2 {
//   address: string
// }

// let res: Obj3 = {
//   name: '艾克',
//   address: '祖安',
//   age: 15,
// }

// let arr: number[][][] = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
// ]

// let arr1: Array<Array<Array<number | boolean>>> = [
//   [
//     [1, 2, true],
//     [3, 4, false],
//   ],
// ]

// arguments类数组

// function fn(...args: number[]): void {
//   // let arr: number[] = arguments  // error
//   let arr: IArguments = arguments // ok

//   console.log(arr)

//   // IArguments是什么呢？  IArguments 是ts定义好了的类型 内置的

//   // interface IArguments {
//   //   [index: number]: any
//   //   length: number
//   //   callee: Function
//   // }
// }

// fn(1, 2, 3)
