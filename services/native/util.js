/* eslint-disable */
import util from '@/utils/util'

function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge)
  } else if (util.isAndroid()) {
    document.addEventListener(
      'WebViewJavascriptBridgeReady',
      function () {
        //do your work here
        return callback(WebViewJavascriptBridge)
        // callback(WebViewJavascriptBridge)
      },
      false
    );
  } else { // ios
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    var WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(function () {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
  }

}
/**
 * 调用客户端 接口方法
 * @param  {string} active 接口名
 * @param  {} params 接口需要的参数
 */
function invoke(active, params) {
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler(active, params, function responseCallback(responseData) {
        if (typeof responseData === 'string') {
          resolve(JSON.parse(responseData))
        } else {
          reject(new Error('返回值类型错误'))
        }
      })
    })
  })
}
/**
 * js注册的方法 提供给客户端调用
 * @description 如果要给客户端传值 ， 一定要实现 responseCallback
 * @param  {string} active 前端注册的事件名称
 * @param  {} frontCallBack
 * @example
 *
 * function registerAlert (frontCallBack) { // 注册方法
 *   return register('alert', frontCallBack)
 * }
 *
 * created () {
 *   registerAlert(this.ownerAlert) // 调用
 * },
 * methods: {
 *   ownerAlert (data, responseCallback) { // 客户端调用 前端注册的方法时 执行的 操作
 *     console.log('test')
 *     let params = {
 *       active: 'test_register',
 *       message: 'succeed'
 *     }
 *     responseCallback(params) // 返回给客户端的 数据
 *   }
 * }
 */
function register(active, frontCallBack) {
  setupWebViewJavascriptBridge(function (bridge) {
    bridge.registerHandler(active, function (data, responseCallback) {
      try {
        frontCallBack(data, responseCallback)
      } catch (error) {
        // alert(error)
      }

    })
  })
}




export {
  invoke,
  register
}
