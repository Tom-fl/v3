/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-11-02 14:49:40
 * @LastEditTime: 2022-11-02 15:42:02
 * @Email: Tom
 * @FilePath: \typescript\Mixins混入\index.ts
 * @Environment: Win 10
 * @Description:  Mixins混入
 */

// 对象的混入
// interface Name {
//   name: string
// }
// interface Age {
//   age: number
// }
// interface Sex {
//   sex: string
// }

// let obj1: Name = { name: '瑞雯' }
// let obj2: Age = { age: 12 }
// let obj3: Sex = { sex: '女' }

// let newObj = Object.assign(obj1, obj2, obj3)
// console.log(newObj) // { name: '瑞雯', age: 12, sex: '女' }

// class类的混入
class Name {
  name: string
  getName(): string {
    return this.name
  }
}
class Age {
  age: number
}

class IsMan {
  IsMan: boolean
  changeIsMan() {
    this.IsMan = !this.IsMan
  }
}

class Persons implements Name, Age, IsMan {
  name: string = '瑞雯'
  age: number = 12
  IsMan: boolean = false
  getName: () => string
  changeIsMan: () => string
}

mixins(Persons, [Name, Age, IsMan])

// cur 目标对象
// item 混入对象 []
function mixins(cur: any, item: any[]) {
  item.forEach(i => {
    // console.log(i) // [Function: Name] [Function: Age] [Function: IsMan]

    // 使用 Object.getOwnPropertyNames 去获取 i 上的prototype
    Object.getOwnPropertyNames(i.prototype).forEach(name => {
      // console.log(name) // 打印出 constructor 和  定义的方法
      cur.prototype[name] = i.prototype[name]
    })
  })
}

let p = new Persons()
console.log(p.IsMan) // false
p.changeIsMan()
console.log(p.IsMan) // true
