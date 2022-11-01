/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-27 15:51:25
 * @LastEditTime: 2022-10-27 16:17:36
 * @Email: Tom
 * @FilePath: \typescript\内置对象\index.ts
 * @Environment: Win 10
 * @Description:
 */
// 正则
const reg: RegExp = /\12\d/

// 日期
const date: Date = new Date()

// 错误信息
const error: Error = new Error('error')

// Bom  Dom 内置对象
// Dom
// body
// const body: HTMLElement = document.body

// list
// let el = `<ul>
//             <li></li>
//             <li></li>
//             <li></li>
//           </ul>`
// const list: NodeList = document.querySelectorAll('ul li')
// const div: HTMLDivElement = document.querySelector('div')

// Bom
// document.addEventListener('click', (e: MouseEvent) => {
//   console.log(e)
// })
// promise
function promise(): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    resolve(1)
  })
}

promise().then(res => {
  console.log(res) // 1
})
