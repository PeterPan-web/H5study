import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)

// 错误提示框
export function toastFail (msg) {
  return Toast.fail(msg)
}

// 成功提示框
export function toastSucceed (msg) {
  return Toast.success(msg)
}

// let loading = {}
// loading start
export function loadingStart (msg = '', {
  forbidClick = true,
  loadingType = 'spinner',
  mask = true
} = {}) {
  Toast.loading({
    duration: 0, // 持续展示 toast
    mask,
    forbidClick: forbidClick, // 禁用背景点击
    loadingType: loadingType,
    message: msg
  })
}

// loading close
export function loadingClose () {
  return Toast.clear()
}

export function loading () {
  let toast = ''
  return {
    start: (msg = '', {
      forbidClick = true,
      loadingType = 'spinner',
      mask = true
    } = {}) => {
      toast = Toast.loading({
        duration: 0, // 持续展示 toast
        mask,
        forbidClick: forbidClick, // 禁用背景点击
        loadingType: loadingType,
        message: msg
      })

      // setTimeout(() => {
      //   // 设置超时自动关闭loading框
      //   if (toast) {
      //     toast.clear()
      //     throw new Error('长时间未关闭loading框, loading自动关闭')
      //   }
      // }, 20000)
    },
    close: () => {
      // console.log('toast', toast)
      if (toast) {
        return toast.clear()
      }
    }
  }
}
