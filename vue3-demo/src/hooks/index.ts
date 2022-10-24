/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-16 13:11:13
 * @LastEditTime: 2022-09-16 17:29:47
 * @Email: Tom
 * @FilePath: \vue3-demo\src\hooks\index.ts
 * @Environment: Win 10
 * @Description: 自定义 hooks
 */

import { onMounted } from 'vue'

type Options = { el: string }

export default function (options: Options): Promise<{ baseUrl: string }> {
  return new Promise(resolve => {
    onMounted(() => {
      let img = document.querySelector(options.el) as HTMLImageElement
      img.onload = () => {
        resolve({
          baseUrl: base64(img),
        })
      }
    })

    const base64 = (el: HTMLImageElement) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = el.width
      canvas.height = el.height
      ctx?.drawImage(el, 0, 0, canvas.width, canvas.height)
      return canvas.toDataURL('image/ipg')
    }
  })
}
