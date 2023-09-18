
import {
  url,
  doGet
  // doPost
} from '@/services/utils/util'
import Cookies from 'js-cookie'
import {
  toastFail,
  loadingStart,
  loadingClose
} from '@/utils/js-vue.js'
// 上传
function doUpload (file) {
  loadingStart('上传中...')
  let FileController = url.webapiBase + url.sys_file_upload
  let xhr = new XMLHttpRequest()
  return new Promise((resolve, reject) => {
    xhr.open('post', FileController, true)
    xhr.setRequestHeader(
      'token',
      Cookies.get('token') ? Cookies.get('token') : ''
    )
    xhr.onload = res => {
      loadingClose()
      let response = res.target.response
      response = JSON.parse(response)
      if (response.code === 0) {
        resolve(response)
      } else {
        toastFail(response.message)
        reject(response)
      }
    }
    xhr.onerror = (err) => {
      loadingClose()
      toastFail(err)
      reject(err)
    }
    xhr.send(file)
  })
}

// 测试token是否存在
function getEcho () {
  return doGet({}, url.echo)
}

// 获取协议
function getProtocol (code) {
  console.log('url.openapi_document_getByCode', url.openapi_document_getByCode)
  return doGet({code}, url.openapi_document_getByCode, {
    customApiBase: url.protocolBase
  })
}

// 获取web端的ststoken
function getStsToken () {
  return doGet({}, url.sys_file_web_stsToken)
}

// 获取血糖测量结果建议模板列表
function bsListAdviceTemplate () {
  return doGet({}, url.bs_listAdviceTemplate)
}

// 获取用药模块用法用药时间
function vmPatientMedicationPlanGetBaseDictData (param) {
  return doGet(param, url.vm_patient_medicationPlan_getBaseDictData, {loading: false})
}

export {
  getStsToken,
  getProtocol,
  doUpload,
  getEcho,
  bsListAdviceTemplate,
  vmPatientMedicationPlanGetBaseDictData
}
