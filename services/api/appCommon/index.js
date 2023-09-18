
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 根据code取得数据字典项
function dataDictListByCode (params) {
  return doGet(params, url.data_dict_listByCode)
}
// 异常血糖新增标签
function bsMeasurementAbnormalReasonAdd (params) {
  return doPost(params, url.bsMeasurementAbnormalReasonAdd)
}

export {
  dataDictListByCode,
  bsMeasurementAbnormalReasonAdd
}
