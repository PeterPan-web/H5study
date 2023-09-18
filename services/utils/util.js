/**
 * @file 服务层调用接口方法封装
 * @access public
 * @author 燕鹏
*/

import httpServer from './http.js'
import url from '@/services/url'

import {
  // toastFail,
  toastSucceed
  // loadingStart,
  // loadingClose
} from '@/utils/js-vue.js'
import {
  MOCK_URL
} from '@/config/index'
export {url}
/**
 * @param  {Object} params 请求参数
 * @param  {String} path 请求路径
 * @param  {string} customApiBase 自定义 接口调用 url 域名
 * @param  {} {mock=false 是否开启mock服务
 * @param  {} mockPath='' mock服务路径
 * }={}
 */
export function doGet (params, path, {
  customApiBase = '',
  mock = false,
  mockPath = ''
} = {}) {
  // let urlBase = getUrl()
  const option = {
    method: 'get',
    path: customApiBase ? customApiBase + path : url.webapiBase + path,
    timeout: '',
    mock: mock,
    mockPath: MOCK_URL + mockPath
  }
  const data = params
  return new Promise((resolve, reject) => {
    httpServer(option, data)
      .then(res => {
        if (res.data.code === 0) {}
        resolve(res)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}
/**
 * @param  {Object} params 请求参数
 * @param  {String} path 请求路径
 * @param  {String} successMessage 成功msg
 * @param  {string} customApiBase 自定义 接口调用 url 域名
 * @param  {} {loading=true 是否需要loading框
 * @param  {} mock=false 是否开启mock 服务
 * @param  {} mockPath=''}={} mock服务路径
 */
export function doPost (params, path, successMessage, {
  customApiBase = '',
  loading = true,
  mock = false,
  mockPath = ''
} = {}) {
  // let urlBase = getUrl()
  const option = {
    method: 'post',
    loading: loading,
    path: customApiBase ? customApiBase + path : url.webapiBase + path,
    timeout: '',
    mock: mock,
    mockPath: MOCK_URL + mockPath
  }
  return new Promise((resolve, reject) => {
    httpServer(option, params)
      .then(res => {
        if (res.data.code === 0 && successMessage) {
          toastSucceed(successMessage)
        }
        resolve(res)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}
