/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-29 16:37:53
 * @LastEditTime: 2022-10-17 20:50:06
 * @Email: Tom
 * @FilePath: \vue3-democ:\Users\Tom\Desktop\vue\node-server\index.ts
 * @Environment: Win 10
 * @Description:
 */
import express, { Express, Router, Request, Response } from 'express'
import axios from 'axios'

const app: Express = express()
const router: Router = express.Router()

app.use('*', (req: Request, res: Response, next) => {
  // 允许任何请求
  res.header('Access-Control-Allow-Origin', '*')
  next()
})
app.use('/api', router)

router.get('/list', async (req: Request, res: Response) => {
  const result = await axios.post(
    'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf'
  )
  res.json({
    ...result.data.data,
  })
})

app.get('/login', (req: Request, res: Response) => {
  res.header('Access-Control-Allow-Origin', '*')
  if (req.query.user == 'admin' && req.query.password == '12345') {
    res.json({
      route: [
        { path: '/demo1', name: 'Demo1', component: 'demo1' },
        { path: '/demo2', name: 'Demo2', component: 'demo2' },
        { path: '/demo3', name: 'Demo3', component: 'demo3' },
      ],
    })
  } else if (req.query.user == 'admin2' && req.query.password == '12345') {
    res.json({
      route: [
        { path: '/demo1', name: 'Demo1', component: 'demo1' },
        { path: '/demo2', name: 'Demo2', component: 'demo2' },
      ],
    })
  } else {
    res.json({
      code: 400,
      message: '账号密码错误',
    })
  }
})

app.listen(3333, () => {
  console.log('success server http://localhost:3333')
})
