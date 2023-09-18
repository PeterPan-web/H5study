import {
  url,
  doGet2 as doGet
  // doPost2 as doPost
} from '@/services/utils/util2.0'

// 获取查房列表
function tcRoundsTaskPatientList (params) {
  return doGet(params, url.tc_roundsTask_patient_list)
}
// 获取查房详情
function vmRoundsGet (params) {
  return doGet(params, url.vm_rounds_get)
}
// 获取患者上一次查房至今的TIR数据统计
function bsCgmGetTirData (params) {
  return doGet(params, url.bs_cgm_getTirData)
}
// 获取护士查房列表
function tcNurseRoundsTaskList (params) {
  return doGet(params, url.tc_nurse_roundsTask_list)
}
// 获取患者续费时间
function patientInfo (params) {
  return doGet(params, url.patient_info)
}

// 获取护士查房详情
function tcNurseRoundsTaskGet (params) {
  return doGet(params, url.tc_nurse_roundsTask_get)
}
// 获取患者指定日期用药情况
function vmPatientDrugUsageBookGetList (params) {
  return doGet(params, url.vm_patient_drugUsageBook_getList)
}

export {
  tcRoundsTaskPatientList,
  vmRoundsGet,
  bsCgmGetTirData,
  patientInfo,
  tcNurseRoundsTaskList,
  tcNurseRoundsTaskGet,
  vmPatientDrugUsageBookGetList
}
