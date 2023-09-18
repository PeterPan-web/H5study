
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 获取数字化管理方案生效前后数据
function vmPatientFollowupGetCompare (params) {
  return doGet(params, url.vm_patient_followup_getCompare)
}

// 根据id获取数字化管理方案数据
function vmPatientFollowupGetById (params) {
  return doGet(params, url.vm_patient_followup_getById)
}

// 根据历史id查询控糖目标
function bsControlTargetGetByHisIdAndPatientId (params) {
  return doGet(params, url.bs_controlTarget_getByHisIdAndPatientId)
}

// 根据id查询测量建议方案
function bsSchemaGetById (params) {
  return doGet(params, url.bs_schema_getById)
}

// 获取复诊方案详情
function tcFurtherConsultationGetDetail (params) {
  return doGet(params, url.tc_furtherConsultation_getDetail)
}

// 标记复诊患者
function tcFurtherConsultationRemark (params) {
  return doPost(params, url.tc_furtherConsultation_remark)
}

export {
  vmPatientFollowupGetCompare,
  vmPatientFollowupGetById,
  bsControlTargetGetByHisIdAndPatientId,
  bsSchemaGetById,
  tcFurtherConsultationGetDetail,
  tcFurtherConsultationRemark
}
