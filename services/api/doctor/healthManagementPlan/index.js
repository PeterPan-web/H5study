
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 获取自定义监测项
function vmMonitorGetCustomMonitor (params) {
  return doGet(params, url.vm_monitor_getCustomMonitor)
}
// 获取目标设定列表
function vmMonitorGetTargetList (params) {
  return doGet(params, url.vm_monitor_getTargetList)
}
// 获取频次类型列表
function vmMonitorGetFrequencyTypeList (params) {
  return doGet(params, url.vm_monitor_getFrequencyTypeList)
}

// 检查项列表
function vmFurtherConsultationCheckupList (params) {
  return doGet(params, url.vm_furtherConsultation_checkup_list)
}
// 保存复诊方案内容
function vmFurtherConsultationSchemeSave (params) {
  return doPost(params, url.vm_furtherConsultation_scheme_save)
}
// 获取复诊方案详情
function vmFurtherConsultationSchemeFetByPatient (params) {
  return doGet(params, url.vm_furtherConsultation_scheme_getByPatient)
}

// 获取当前留言建议
function vmChronicDiseaseSuggestGetCurrent (params) {
  return doGet(params, url.vm_chronic_disease_suggest_getCurrent)
}
// 保存留言
function vmChronicDiseaseSuggestSave (params) {
  return doPost(params, url.vm_chronic_disease_suggest_save)
}

// 获取所有监测方案
function vmMonitorGetAll (params) {
  return doGet(params, url.vm_monitor_getAll)
}
//  提交所有监测方案
function vmMonitorSubmit (params) {
  return doPost(params, url.vm_monitor_submit)
}

export {
  vmMonitorGetCustomMonitor,
  vmMonitorGetTargetList,
  vmMonitorGetFrequencyTypeList,
  vmFurtherConsultationCheckupList,
  vmFurtherConsultationSchemeSave,
  vmFurtherConsultationSchemeFetByPatient,
  vmChronicDiseaseSuggestGetCurrent,
  vmChronicDiseaseSuggestSave,
  vmMonitorGetAll,
  vmMonitorSubmit
}
