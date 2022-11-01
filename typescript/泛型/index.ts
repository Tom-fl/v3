/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-28 12:03:04
 * @LastEditTime: 2022-10-28 16:00:05
 * @Email: Tom
 * @FilePath: \typescript\泛型\index.ts
 * @Environment: Win 10
 * @Description:
 */

// 要求可以字符串和数字
//     不会泛型之前 我们可能会写两个函数
//

// -------------------------------鸡肋写法-----------------------------
// function fnNum(a: number, b: number): Array<number> {
//   return [a, b]
// }
// fnNum(1, 2)

// function funStr(a: string, b: string): Array<string> {
//   return [a, b]
// }
// funStr('亚索', '瑞雯')

// -------------------------------泛型的写法-----------------------------
// 语法  函数名<T>(参数名:T)  例如: function fn<T>(p1:T,p2:T)
// function fn<T>(a: T, b: T): Array<T> {
//   return [a, b]
// }
// // 调用方法的时候 类型必须明确
// fn<number>(1, 2)
// fn('1', '2')

// -------------------------泛型联合类型-----------------------
// function fn<T, U>(p1: T, p2: U): Array<T | U> {
//   return [p1, p2]
// }

// fn<string, number>('亚索', 21)
// fn('亚索', 21) // 可以简写

// ------------------------定义泛型接口-----------------------
// interface Form<T> {
//   (name: T): T
//   (age: T): T
// }
// function fn<T>(p1: T, p2: T): Array<T> {
//   return [p1, p2]
// }

// console.log(fn<string | number>('亚索', 12))

// ------------------------使用keyof来对泛型约束-----------------------
// function fn<T>(obj: T, key) {
//   return obj[key]
// }
// let obj1 = { a: 1, b: 2 }
// fn(obj1, 'a') // 1
// fn(obj1, 'x') // undefined

// 传一个不存在的  ts 也是没有给提示  我们可以进行泛型约束
// 1.使用 keyof 来分割这个 T，T 就是定义的obj2 = { a: 1, b: 2 }  割完之后就成了联合类型 a | b
// 2.使用 K 去继承 联合类型
// 3.所以传不存在的key就会报错
function fn2<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
let obj2 = { a: 1, b: 2 }
fn2(obj2, 'a') // 1
// fn2(obj1, 'x') // error

// ------------------------泛型类-----------------------

class Person<T> {
  names: T[] = []
  getNames(p: T): T[] {
    return [p]
  }
}
let p1 = new Person<string>()
p1.names = ['亚索', '瑞雯']
// p1.names = [1, 2, 3] // error
