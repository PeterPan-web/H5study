
import {
  url,
  doGet
  // doPost
} from '@/services/utils/util'

// 获取血压列表
function vmPatientBloodPressureList (params) {
  return doGet(params, url.vm_patient_bloodPressure_list)
}
// 获取血压折线图数据
function vmPatientBloodPressureStatistic (params) {
  return doGet(params, url.vm_patient_bloodPressure_statistic)
}
function vmPatientBloodPressureSetOthers (params) {
  return doGet(params, url.vm_patient_bloodPressure_setOthers)
}

export {
  vmPatientBloodPressureList,
  vmPatientBloodPressureStatistic,
  vmPatientBloodPressureSetOthers
}
