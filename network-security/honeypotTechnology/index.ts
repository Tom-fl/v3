/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-24 16:11:13
 * @LastEditTime: 2022-10-25 16:26:56
 * @Email: Tom
 * @FilePath: \network-security\honeypotTechnology\index.ts
 * @Environment: Win 10
 * @Description:
 */
import fs from 'fs'

// 获取微信id
const getWxid = <T>(path: T) => {
  // 我的微信是安装到 D 盘的
  const data = fs
    .readFileSync('D:/weixin/WeChat Files/All Users/config/config.data')
    .toString('utf8')
  // 存储微信的地方不同  正则也需要稍微改改
  const reg = /\\WeChat Files\\([^\\]*)/gi
  reg.test(data)
  return RegExp.$1
}
// 获取微信用户信息
const getInfo = <T>(path: T, wxId: T) => {
  const data = fs.readFileSync(`D:/weixin/WeChat Files/${wxId}/config/AccInfo.dat`).toString('utf8')
  console.log(data)
}

fs.readFile('C:/Windows/PFRO.log', (err, data) => {
  const reg = /Users\\([^\\]*)/gi
  reg.test(data.toString('utf16le'))

  // 电脑用户名称
  const userName = RegExp.$1
  // 微信id
  const wxid = getWxid(RegExp.$1)
  getInfo(userName, wxid)
})
