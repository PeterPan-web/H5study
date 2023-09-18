
import {
  url,
  doGet
  // doPost
} from '@/services/utils/util'
// 获取患者详情-用药方案
function vmPatientGetMedicationPlan (params) {
  return doGet(params, url.vm_patient_getMedicationPlan)
}

// 获取患者历史用药方案列表
function vmPatientMedicationPlanGetHistoryList (params) {
  return doGet(params, url.vm_patient_medicationPlan_getHistoryList)
}

// 获取患者历史用药方案详情
function vmPatientMedicationPlanGetHistory (params) {
  return doGet(params, url.vm_patient_medicationPlan_getHistory)
}

// 获取血糖报警任务-用药方案
function tcBloodSugarWarningGetMedicationPlan (params) {
  return doGet(params, url.tc_bloodSugarWarning_getMedicationPlan)
}

// 获取血糖报警任务-复诊方案
function tcBloodSugarWarningGetFurtherConsultation (params) {
  return doGet(params, url.tc_bloodSugarWarning_getFurtherConsultation)
}

// 获取血糖报警任务详情
function tcBloodSugarWarningDetail (params) {
  return doGet(params, url.tc_bloodSugarWarning_detail)
}

// 获取出院小结含用药
function vmPatientFollowupGetDischargeSummary (params) {
  return doGet(params, url.vm_patient_followup_getDischargeSummary)
}

export {
  vmPatientGetMedicationPlan,
  vmPatientMedicationPlanGetHistoryList,
  vmPatientMedicationPlanGetHistory,
  tcBloodSugarWarningGetMedicationPlan,
  tcBloodSugarWarningGetFurtherConsultation,
  tcBloodSugarWarningDetail,
  vmPatientFollowupGetDischargeSummary
}
