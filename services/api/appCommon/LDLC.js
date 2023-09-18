
import {
  url,
  doGet
  // doPost
} from '@/services/utils/util'

// 获取ldl-c列表
function vmPatientLdlCList (params) {
  return doGet(params, url.vm_patient_ldlC_list)
}

// 获取ldl-c折线图数据
function vmPatientLdlCStatistic (params) {
  return doGet(params, url.vm_patient_ldlC_statistic)
}

export {
  vmPatientLdlCList,
  vmPatientLdlCStatistic
}
