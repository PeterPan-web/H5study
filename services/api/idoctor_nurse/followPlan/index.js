
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 获取患者随访数字化管理方案
function vmFollowupPlanGet (params) {
  return doGet(params, url.vm_followupPlan_get)
}

// 获取患者生效的随访数字化管理方案
function vmPatientFollowupGetEffective (params) {
  return doGet(params, url.vm_patient_followup_getEffective)
}

// 获取患者生效的随访数字化管理方案
function vmPatientFollowuGet (params) {
  return doGet(params, url.vm_patient_followu_get)
}

// 提交数字化管理方案
function vmPatientFollowupSubmit (params) {
  return doGet(params, url.vm_patient_followup_submit)
}
// 提交护士方案
function vmPatientFollowupSubmitWithData (params) {
  return doPost(params, url.vm_patient_followup_submitWithData)
}
// 获取护士随访方案
function vmPatientFollowupGetNursePlan (params) {
  return doGet(params, url.vm_patient_followup_getNursePlan)
}
// // 根据code取得数据字典项
// function dataDictListByCode (params) {
//   return doGet(params, url.data_dict_listByCode)
// }

// 查询患者最新的一条血糖记录
function bsGetLatest (params) {
  return doGet(params, url.bs_getLatest)
}

// 查询患者生效的数字化管理方案列表
function vmPatientFollowupListCurrent (params) {
  return doGet(params, url.vm_patient_followup_listCurrent)
}

export {
  vmPatientFollowupGetEffective,
  vmPatientFollowuGet,
  vmPatientFollowupSubmit,
  vmPatientFollowupSubmitWithData,
  vmPatientFollowupGetNursePlan,
  // dataDictListByCode,
  bsGetLatest,
  vmPatientFollowupListCurrent,
  vmFollowupPlanGet
}
