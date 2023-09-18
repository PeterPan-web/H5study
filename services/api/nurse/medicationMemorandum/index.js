
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
// 获取出院小结含用药
function vmFollowupPlanGetDischargeSummary (params) {
  return doGet(params, url.vm_followupPlan_getDischargeSummary)
}
export {
  vmPatientGetMedicationPlan,
  vmPatientMedicationPlanGetHistoryList,
  vmPatientMedicationPlanGetHistory,
  vmFollowupPlanGetDischargeSummary
}
