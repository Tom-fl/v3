/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-27 16:21:15
 * @LastEditTime: 2022-10-28 14:52:22
 * @Email: Tom
 * @FilePath: \typescript\Class\index.ts
 * @Environment: Win 10
 * @Description:
 */
// ---------------------------------修饰符----------------------------------------
// public - 公共的
//        默认值   写不写内外部都可以访问
// private - 私有的
//        只能内部访问 外部无法访问
// protected - 私有的
//        也是外部访问不到
//        区别 是 protected 内部和子类中访问

// class Person {
//   name: string
//   age: number
//   public address: string
//   private sex: string
//   protected height: number

//   constructor(name: string, age: number, address: string, sex: string, height: number) {
//     this.name = name
//     this.age = age
//     this.address = address
//     this.sex = sex
//     this.height = height
//     console.log(sex)
//     console.log(height)
//   }
// }

// class Weight extends Person {
//   constructor() {
//     super('瑞雯', 12, '诺克萨斯', '女', 150)
//     console.log(this.height) // 150
//   }
// }

// let p = new Person('瑞雯', 12, '诺克萨斯', '女', 150)
// let w = new Weight()
// console.log(p.address)
// // console.log(p.sex) // error

// ---------------------------------static 静态属性 和 静态方法----------------------------------------
//  静态属性 和 方法 在内部是无法访问的
//  只能通过class名来访问
// class Person {
//   name: string
//   age: number
//   static address: string = '艾欧尼亚'

//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }

//   static like() {
//     // console.log(this.age) // error
//     console.log(this.address) // 是可以访问的
//     return 'like-hs'
//   }
// }

// let p = new Person('亚索', 12)
// console.log(Person.address)
// console.log(Person.like())

// ---------------------------------通过 interface 来约束 Class----------------------------------------

// interface A {
//   age(type: number): number
// }
// interface N {
//   name(type: string): void
// }

// class Add {
//   address: string

//   constructor(address: string) {
//     this.address = address
//   }
// }

// class Person extends Add implements A, N {
//   age(type: number): number {
//     return type
//   }
//   name() {}
// }

// let p1 = new Person('祖安')
// console.log(p1)

// ---------------------------------抽象类----------------------------------------
abstract class A {
  name: string
  constructor(name: string) {
    this.name = name
  }
  setName(name: string) {
    this.name = name
  }
  // 定义了抽象类函数  必须在派生类去实现的
  abstract getName(): string
}

class B extends A {
  constructor() {
    super('亚索')
  }
  getName(): string {
    return this.name
  }
}

// 抽象类是不能被实例化的
// let a1=new A() // error
let b1 = new B()
console.log(b1.getName()) // 亚索
b1.setName('盲仔')
console.log(b1.getName()) // 盲仔
