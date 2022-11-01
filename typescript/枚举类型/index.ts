/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-27 17:10:52
 * @LastEditTime: 2022-10-28 00:10:18
 * @Email: Tom
 * @FilePath: \typescript\枚举类型\index.ts
 * @Environment: Win 10
 * @Description:
 */
// 以前的方式
// const names = {
//   0: '亚索',
//   1: '瑞雯',
//   2: '妖姬',
// }

// enum Names {
//   ys,
//   rw,
//   yj,
// }

// console.log(Names.yj) // 会输出索引  2

// 增长枚举
// enum Names {
//   ys = 1,
//   rw,
//   yj,
// }

// console.log(Names.yj) // 3

// 字符串枚举
// enum Names {
//   ys = '亚索',
//   rw = '瑞雯',
//   yj = '妖姬',
// }
// console.log(Names.rw)

// 异构枚举
// enum Names {
//   ys = '亚索',
//   rw = 3,
// }
// console.log(Names.rw)

// 接口枚举
// enum Obj {
//   a,
//   b,
// }

// interface Person {
//   name: Obj.b
// }

// let p1: Person = {
//   name: Obj.b,
// }
// console.log(p1)

// const枚举
// 只能用const去声明

// 使用 const 的枚举编译后是常量
// 普通声明 编译完成后 是对象

enum Msg {
  a,
  b,
}

let num: number = 0

if (num === Msg.a) {
}

// 反向映射
// enum Msg {
//   a,
//   b = '字符串', // 字符串是不支持反向映射的
// }
// let a: number = Msg.a
// let key = Msg[a]
// console.log(a, key)
