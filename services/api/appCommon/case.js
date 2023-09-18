
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 获取病历卡详情
function getMedicalCard (params) {
  return doGet(params, url.medicalCard_get)
}

// 获取病历详情
function getMedicalRecord (params) {
  return doGet(params, url.medicalRecord_get)
}

// 糖尿病类型
function vmMedicalCardAllDiabetesType () {
  return doGet({}, url.vm_medicalCard_allDiabetesType)
}

// 所有已有并发症接口
function vmComplicationExistAll () {
  return doGet({}, url.vm_complication_existAll)
}

// 获取药品列表
function dataDrugList (params) {
  return doGet(params, url.data_drug_list)
}

// 保存药品
function dataDrugSave (params) {
  return doPost(params, url.data_drug_save)
}

// 患者是否已经有测评
function vmEvaluationIsPatientFilled (params) {
  return doGet(params, url.vm_evaluation_isPatientFilled)
}

// 测评问卷列表
function vmEvaluationQuestionList (params) {
  return doGet(params, url.vm_evaluation_questionList)
}

// 患者测评得分
function vmEvaluationPatientScore (params) {
  return doGet(params, url.vm_evaluation_patientScore)
}

// 获取患者的答卷列表
function vmEvaluationPatientAnswerList (params) {
  return doGet(params, url.vm_evaluation_patientAnswerList)
}

// 患者的答卷提醒按钮
function vmEvaluationPatientAnswerRemind (params) {
  return doGet(params, url.vm_evaluation_patientAnswerRemind)
}

// 提醒患者购买院外
function vmEvaluationRemindPatient (params) {
  return doGet(params, url.vm_evaluation_remindPatient)
}

export {
  getMedicalCard,
  getMedicalRecord,
  vmMedicalCardAllDiabetesType,
  vmComplicationExistAll,
  dataDrugList,
  dataDrugSave,
  vmEvaluationIsPatientFilled,
  vmEvaluationQuestionList,
  vmEvaluationPatientScore,
  vmEvaluationPatientAnswerList,
  vmEvaluationPatientAnswerRemind,
  vmEvaluationRemindPatient
}
