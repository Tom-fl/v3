/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-27 18:06:51
 * @LastEditTime: 2022-10-27 23:58:33
 * @Email: Tom
 * @FilePath: \typescript\never类型\index.ts
 * @Environment: Win 10
 * @Description:
 */
// never类型 表示一个状态不存在

// 因为这个函数 没有返回值，一进这个函数就会抛出异常 所以定义成 never类型
function fn(p: string): never {
  throw new Error(p)
}

// 因为死循环，所以 fn1 将不会有返回值
function fn1(): never {
  while (true) {}
}
