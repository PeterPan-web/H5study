
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

// 更新病历卡(参数和返回值跟微信端一致)
function updateMedicalCard (params) {
  return doPost(params, url.vm_medicalCard_saveOrUpdate, '保存成功')
}
// 更新病历卡(参数和返回值跟微信端一致)
function updateMedicalRecord (params) {
  return doPost(params, url.vm_medicalRecord_saveOrUpdate, '保存成功')
}

// 新建拍照病例
function savePhotoRecords (params) {
  return doPost(params, url.photoRecord_save, '添加成功')
}

// 删除拍照病历
function deletePhotoRecord (photoRecordId) {
  return doPost({photoRecordId}, url.photoRecord_delete, '删除成功')
}

// 糖尿病类型
function getAllDiabetesType () {
  return doGet({}, url.vm_allDiabetesType)
}

// 获取测评信息（新）
function vmEvaluationGetEvaluationData (params) {
  return doGet(params, url.vm_evaluation_getEvaluationData)
}

export {
  updateMedicalRecord,
  updateMedicalCard,
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
  savePhotoRecords,
  deletePhotoRecord,
  getAllDiabetesType,
  vmEvaluationGetEvaluationData
}
