/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-11-02 16:37:44
 * @LastEditTime: 2022-11-02 17:46:51
 * @Email: Tom
 * @FilePath: \typescript\装饰器Decorator\index.ts
 * @Environment: Win 10
 * @Description:
 */

// --------------------------------------装饰器------------------------------------

// 定义修饰器的类函数
// const watcher: ClassDecorator = (target: Function) => {
//   // console.log(target) // [Function: Names]
//   target.prototype.getName = <T>(name: T): T => {
//     return name
//   }
// }

// @watcher
// class Names {}

// @watcher
// class Ages {}

// let name1 = new Names()
// let age1 = new Ages()

// // 指定一下类型 断言的方式也可以
// // (name1 as any).getName();
// console.log((<any>name1).getName('瑞雯'))
// console.log((<any>age1).getName('亚索'))

// --------------------------------------装饰器工厂 高阶函数的方式------------------------------------

// const watcher = (name: string): ClassDecorator => {
//   return (target: Function) => {
//     target.prototype.getName = () => {
//       return name
//     }
//   }
// }

// @watcher('亚索')
// class Names {}

// let name1 = new Names()

// console.log((<any>name1).getName())

// --------------------------------------装饰器组合------------------------------------
// const watcher = (name: string): ClassDecorator => {
//   return (target: Function) => {
//     target.prototype.getName = () => {
//       return name
//     }
//   }
// }

// const watcherAge: ClassDecorator = (target: Function) => {
//   target.prototype.age = 12
// }

// @watcherAge
// @watcher('亚索')
// class Names {}

// let name1 = new Names()
// let res = `姓名:${(<any>name1).getName()}-- 年龄${(<any>name1).age}`
// console.log(res) // 姓名:亚索--- 年龄12

// --------------------------------------属性装饰器------------------------------------
// const watcher: PropertyDecorator = (...args) => {
//   console.log(args) // [ {}, 'name', undefined ]
// }

// class Names {
//   @watcher
//   name: string
// }

// let nam1 = new Names()

// --------------------------------------方法装饰器------------------------------------

// const watcher: MethodDecorator | any = (...args: any[]) => {
//   console.log(args)
//   // [
//   //   { getName: [Function (anonymous)] },
//   //   'getName',
//   //   {
//   //     value: [Function (anonymous)],
//   //     writable: true,
//   //     enumerable: true,
//   //     configurable: true
//   //   }
//   // ]
// }

// class Names {
//   name: string

//   @watcher
//   getName() {}
// }

// let nam1 = new Names()

// --------------------------------------参数装饰器------------------------------------
const watcher: ParameterDecorator = (...args) => {
  console.log(args)
  // [ { getName: [Function (anonymous)] }, 'getName', 0 ]
  //     方法                                 方法名  位置
}

class Names {
  name: string

  getName(name: string, @watcher age: number) {}
}

let nam1 = new Names()
