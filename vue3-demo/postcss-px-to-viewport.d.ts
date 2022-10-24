/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-21 12:40:59
 * @LastEditTime: 2022-09-21 17:35:09
 * @Email: Tom
 * @FilePath: \vue3-demo\postcss-px-to-viewport.d.ts
 * @Environment: Win 10
 * @Description:
 */
declare module 'postcss-px-to-viewport' {
  type Options = {
    unitToConvert: 'px' | 'rem' | 'cm' | 'em'
    viewportWidth: number
    viewportHeight: number // not now used; TODO: need for different units and math for different properties
    unitPrecision: number
    viewportUnit: string
    fontViewportUnit: string // vmin is more suitable.
    selectorBlackList: string[]
    propList: string[]
    minPixelValue: number
    mediaQuery: boolean
    replace: boolean
    landscape: boolean
    landscapeUnit: string
    landscapeWidth: number
  }

  export default function (options: Partial<Options>): any
}
