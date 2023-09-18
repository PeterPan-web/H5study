
import {
  url,
  doGet
  // doPost
} from '@/services/utils/util'

// 奖学金续费订单详情
function saleBonusOrderDetail (params) {
  return doGet(params, url.sale_bonusOrder_detail)
}

// 患者奖励金进度
function vmPatientBonusProgress (params) {
  return doGet(params, url.vm_patient_bonus_progress)
}

// 患者奖励金的变更列表
function vmPatientBonusLogList (params) {
  return doGet(params, url.vm_patient_bonus_log_list)
}

// 订单详情
function saleMallOrderDetail (params) {
  return doGet(params, url.sale_mallOrder_detail)
}

export {
  saleBonusOrderDetail,
  vmPatientBonusProgress,
  vmPatientBonusLogList,
  saleMallOrderDetail
}
