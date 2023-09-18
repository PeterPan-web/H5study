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

export {
  tcRoundsTaskPatientList,
  vmRoundsGet
}
