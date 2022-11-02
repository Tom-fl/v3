/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-11-01 18:13:14
 * @LastEditTime: 2022-11-01 18:29:07
 * @Email: Tom
 * @FilePath: \typescript\声明文件\index.ts
 * @Environment: Win 10
 * @Description:
 */
// 为了测试 安装了 express  和 axios

import axios from 'axios'
// axios.get() // 使用方法 属性 是没问题的

import express from 'express'
// 鼠标放上去显示  无法找到模块“express”的声明文件。也提示我们了 两种解决方式
//   方法一 : npm i --save-dev @types/express
//   方法二 :  declare module 'express'

// 为什么 axios 可以使用方法呢？
//      我们可以查看 node_modules -> axios -> package.json
//             package.json 里指定了声明文件      "types": "index.d.ts",

// 而express里的 package.json 是没有指定声明文件的，所以我们需要手动声明一下 也就是使用方法二
//     创建一个 express.d.ts
//        鼠标放上去 发现没有警告提示了

// 方法一
//     安装  npm i --save-dev @types/express
//   tsconfig.json  打开这个配置
//       "allowSyntheticDefaultImports": true //默认导出
//  然后发现也是没问题的
