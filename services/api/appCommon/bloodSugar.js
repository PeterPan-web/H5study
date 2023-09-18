
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 未发现作用的查询要设置的控糖目标
function bsControlTargetGetCurrentForEdit (param) {
  return doGet(param, url.bs_controlTarget_getCurrentForEdit, {loading: false})
}

// 查询患者当前的控糖目标
function bsControlTargetGetCurrent (param) {
  return doGet(param, url.bs_controlTarget_getCurrent, {loading: false})
}
// 设置控糖目标
function bsControlTargetSave (param) {
  return doPost(param, url.bs_controlTarget_save)
}

// 查询某个患者最新的测量建议方案
function bsSchemaGetLatest (param) {
  return doGet(param, url.bs_schema_getLatest)
}
// 查询测量建议方案模板列表
function bsSchemaTemplateList (param) {
  return doGet(param, url.bs_schema_template_list)
}
// 新查询测量建议方案模板列表
function vmPatientTemplateList (param) {
  return doGet(param, url.vm_patient_template_list)
}
// 根据测量方案模板获取详情
function bsSchemaTemplateGet (param) {
  return doGet(param, url.bs_schema_template_get)
}
// 新根据测量方案模板获取详情
function vmPatientTemplateGet (param) {
  return doGet(param, url.vm_patient_template_get)
}
// 设置测量建议方案
function bsSchemaSave (param) {
  return doPost(param, url.bs_schema_save)
}
// 删除测量方案和控糖目标
function bsSchemaDeleteAndTarget (param) {
  return doPost(param, url.bs_schema_deleteAndTarget)
}

export {
  bsControlTargetGetCurrentForEdit,
  bsControlTargetGetCurrent,
  bsControlTargetSave,
  bsSchemaGetLatest,
  bsSchemaTemplateList,
  vmPatientTemplateList,
  vmPatientTemplateGet,
  bsSchemaTemplateGet,
  bsSchemaSave,
  bsSchemaDeleteAndTarget
}
