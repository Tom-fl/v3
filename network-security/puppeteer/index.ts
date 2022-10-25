/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-25 10:09:59
 * @LastEditTime: 2022-10-25 16:32:07
 * @Email: Tom
 * @FilePath: \network-security\puppeteer\index.ts
 * @Environment: Win 10
 * @Description:
 */
import pupprteer from 'puppeteer'

const sleep = (time: number) => {
  return new Promise((reslove, reject) => {
    setTimeout(reslove, time)
  })
}

;(async () => {
  const bowser = await pupprteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized'],
  })
  const page = await bowser.newPage()
  await page.goto('https://jd.com')
  await page.focus('#key')
  await page.keyboard.sendCharacter('黑丝')
  await page.click('.button')
  await page.waitForSelector('.gl-item')
  let isScroll = true
  let steep = 1000
  while (isScroll) {
    isScroll = await page.evaluate(steep => {
      let scrollTop = document.scrollingElement?.scrollTop ?? 0
      document.scrollingElement!.scrollTop = scrollTop + steep
      return document.body.clientHeight > scrollTop + 1080 ? true : false
    }, steep)
    await sleep(1000)
  }
  await page.screenshot({ path: 'hs.png', fullPage: true })
})()
