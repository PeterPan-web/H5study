
import {
  url,
  doGet
  // doPost
} from '@/services/utils/util'

// 获取体重列表
function vmPatientWeightList (params) {
  return doGet(params, url.vm_patient_weight_list)
}

// 获取体重折线图数据
function vmPatientWeightStatistic (params) {
  return doGet(params, url.vm_patient_weight_statistic)
}

// 获取体重折线图数据（按月份）
function vmPatientWeightStatisticByMonth (params) {
  return doGet(params, url.vm_patient_weight_statisticByMonth)
}
export {
  vmPatientWeightList,
  vmPatientWeightStatistic,
  vmPatientWeightStatisticByMonth
}
