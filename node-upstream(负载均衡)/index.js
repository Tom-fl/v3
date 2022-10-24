/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-20 18:43:21
 * @LastEditTime: 2022-10-20 18:49:41
 * @Email: Tom
 * @FilePath: \nginx-1.23.2c:\Users\Tom\Desktop\node\index.js
 * @Environment: Win 10
 * @Description:
 */
const express = require('express')
const app = express()
var num = 1

app.get('/list', (req, res) => {
  res.json({
    code: 200,
    msg: '盲仔',
  })
  console.log('负载均衡 3003', num)
  num++
})

app.listen(3003, () => {
  console.log('success server http://localhost:3003')
})
