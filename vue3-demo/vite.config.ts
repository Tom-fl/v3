/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-07-27 19:05:08
 * @LastEditTime: 2022-10-20 15:02:46
 * @Email: Tom
 * @FilePath: \vue3-demo\vite.config.ts
 * @Environment: Win 10
 * @Description:
 */
import { fileURLToPath, URL } from 'url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import vueJsx from '@vitejs/plugin-vue-jsx'
import autoImport from 'unplugin-auto-import/vite'
import postcsspxtoviewport from 'postcss-px-to-viewport'
import unoCss from 'unocss/vite'
// unocss 预设
import { presetIcons, presetAttributify, presetUno } from 'unocss'
import { visualizer } from 'rollup-plugin-visualizer' // 打包体积分析视图
import { VitePWA } from 'vite-plugin-pwa' // 打包时会报错 待解决

// 这个是通过 node 的包  获取你本机 所有的环境变量
// console.log(process.env)

// 我们需要使用 这种方式 把里面的对象给 return 出去
// export default ({ mode }: any) => {
//   console.log(mode)
//   // process.cwd()  可以获取vue 的根目录
//   console.log(loadEnv(mode, process.cwd()))
//   return defineConfig({
//     plugins: [vue()],
//   })
// }

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    // vueJsx(),
    autoImport({
      imports: ['vue'], // 会把所有相关vue的方法 都会被引入进去
      dts: 'src/auto-import.d.ts', // 帮我们生成声明文件，你直接使用的话是找不到的
    }),
    unoCss({
      // 预设
      // 这个一块去看下 xmind
      presets: [presetIcons(), presetAttributify(), presetUno()],
      // 配置匹配
      rules: [
        // 写css   flex 相当于  display:flex
        //  而且还是全局的在哪都能用
        ['flex', { display: 'flex' }],
        ['red', { color: 'red' }],
        ['bd', { border: '1px solid #000' }],
        // 比如 class名是m-1 就是 margin:10px
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) * 10}px` })],
      ],
      // 组合的类名
      shortcuts: {
        tom: ['flex', 'red'],
      },
    }),
    visualizer({ open: true }),
    VitePWA({}),
  ],
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 750, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          landscape: false, // 是否处理横屏情况
        }),
      ],
    },
  },
  resolve: {
    alias: {
      // 两种方式使用 @ 代替 src
      // '@': path.resolve('./src'),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // 体积超过2000的时候 打包时 在给提示
    chunkSizeWarningLimit: 2000,
    // 是否对css 进行拆分
    cssCodeSplit: true,
    // sourcemap 体积非常大的 生产环境就不需要这个东西了 设置成false 就行
    sourcemap: false,
    // 有两个参数 esbuild 和 terser
    //    esbuild 打包速度很快   terser是打包体积小
    minify: 'terser',
    // 小于4000 的体积 会被编译成 base64
    assetsInlineLimit: 4000,
  },
})
