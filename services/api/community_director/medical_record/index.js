
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'
// 获取病历卡详情
function getMedicalCard (patientId) {
  return doGet({patientId}, url.medicalCard_get)
}

// 获取病历详情
function getMedicalRecord (patientId) {
  return doGet({patientId}, url.medicalRecord_get)
}

// 保存或修改病历详情
function saveMedicalRecord (params) {
  return doPost(params, url.medicalRecord_save, '保存成功')
}

// 所有慢性并发症
function getComplication () {
  return doGet({}, url.vm_complication_all)
}

// 历史记录列表
function getMedicalRecordHistory () {
  return doGet({}, url.medicalRecordHistory_get)
}

// 获取医院科室
function getDepartmentAll () {
  return doGet({}, url.data_department_all)
}

// 拍照病历列表
function getPhotoRecordList (patientId) {
  return doGet({patientId}, url.photoRecord_list)
}

// 获取病历详情历史记录（结果参数与获取病历详情保持一致）
function getMedicalRecordHistoryInfo (historyId) {
  return doGet({historyId}, url.medicalRecordHistory_info)
}

// 登录患者的信息
function getPatientLoginInfo (patientId) {
  return doGet({patientId}, url.patient_info)
}

// 完善病历卡和病历详情（完善资料任务）
function saveMedicalData (params) {
  return doPost(params, url.vm_patient_saveMedicalData, '保存成功')
}

// 获取测评信息（新）
function vmEvaluationGetEvaluationData (params) {
  return doGet(params, url.vm_evaluation_getEvaluationData)
}

export {
  saveMedicalData,
  getMedicalCard,
  getMedicalRecord,
  saveMedicalRecord,
  getComplication,
  getMedicalRecordHistory,
  getDepartmentAll,
  getPhotoRecordList,
  getMedicalRecordHistoryInfo,
  getPatientLoginInfo,
  vmEvaluationGetEvaluationData
}
