/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2021-08-30 12:18:03
 * @LastEditTime: 2022-10-17 17:54:52
 * @Email: str-liang@outlook.com
 * @FilePath: \vue3-demo\src\server\http.ts
 * @Environment: Win 10 Python 3.8
 * @Description:
 */
import server from './index'

const http = {
  get(url: any, params: any) {
    const config: any = {
      method: 'get',
      url: url,
      data: null,
    }
    if (params) {
      config.params = params
    }
    return server(config)
  },
  post(url: any, data: any) {
    const config = {
      method: 'post',
      url: url,
      data: null,
    }
    if (data) config.data = data
    return server(config)
  },
  postForm(url: any, data: any) {
    const config = {
      method: 'post',
      url: url,
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      data: null,
    }
    if (data) config.data = data
    return server(config)
  },
  put(url: any, params: any) {
    const config = {
      method: 'put',
      url: url,
      data: null,
    }
    if (params) config.data = params
    return server(config)
  },
  putSplice(url: any, params: any) {
    const config = {
      method: 'put',
      url: url,
      params: null,
    }
    if (params) {
      config.params = params
    }
    return server(config)
  },
  // 请求 拼接
  delete(url: any, params: any) {
    const config = {
      method: 'delete',
      url: url,
      params: null,
    }
    if (params) {
      config.params = params
    }
    return server(config)
  },
  // 请求 在body里
  deleteBody(url: any, data: any) {
    const config = {
      method: 'delete',
      url: url,
      data: null,
    }
    if (data) config.data = data
    return server(config)
  },
  // base64转文件 上传
  requestFile(url: any, file: any) {
    const forms = new FormData()
    forms.append('file', file)
    const config = {
      method: 'post',
      url: url,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: {},
    }
    if (file) config.data = forms
    return server(config)
  },
}

export default http
